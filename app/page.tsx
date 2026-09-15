import { ClosingBand } from "@/components/ClosingBand";
import { Hero } from "@/components/Hero";
import { RoiStrip } from "@/components/RoiStrip";
import { ScenarioTabs } from "@/components/ScenarioTabs";
import { scenarios } from "@/data/scenarios";
import { partnershipChannelPartners, partnershipsScenario } from "@/data/partnerships";
import { resolvePartnerMedia, type ResolvedPartnerMedia } from "@/lib/partnerMedia";

export const dynamic = "force-static";

async function buildPartnerMediaMap() {
  const uniquePartners = new Map<string, (typeof scenarios)[number]["partners"][number]>();
  for (const scenario of scenarios) {
    for (const partner of scenario.partners) {
      if (!uniquePartners.has(partner.slug)) {
        uniquePartners.set(partner.slug, partner);
      }
    }
  }
  for (const partner of partnershipChannelPartners) {
    if (!uniquePartners.has(partner.slug)) {
      uniquePartners.set(partner.slug, partner);
    }
  }

  const results = await Promise.all(
    Array.from(uniquePartners.values()).map(async (partner) => ({
      slug: partner.slug,
      media: await resolvePartnerMedia(partner),
    })),
  );

  return results.reduce<Record<string, ResolvedPartnerMedia>>((acc, item) => {
    acc[item.slug] = item.media;
    return acc;
  }, {});
}

export default async function Page() {
  const allScenarios = [...scenarios, partnershipsScenario];
  const partnerMedia = await buildPartnerMediaMap();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-soft-grid bg-grid opacity-25" />
      <div className="pointer-events-none absolute -top-28 left-1/3 h-80 w-80 rounded-full bg-binance-yellow/15 blur-[110px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 md:px-8 md:py-10">
        <Hero />
        <RoiStrip />
        <section id="scenarios" className="mt-14">
          <ScenarioTabs scenarios={allScenarios} partnerMedia={partnerMedia} />
        </section>
        <ClosingBand />
      </div>
    </main>
  );
}
