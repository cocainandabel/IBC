import { ClosingBand } from "@/components/ClosingBand";
import { CompareCards } from "@/components/CompareCards";
import { Hero } from "@/components/Hero";
import { KolTabs } from "@/components/KolTabs";
import { KpiCards } from "@/components/KpiCards";
import { PackageGrid } from "@/components/PackageGrid";
import { PasscodeGate } from "@/components/PasscodeGate";
import { RevealObserver } from "@/components/RevealObserver";
import { Terms } from "@/components/Terms";
import { Timeline } from "@/components/Timeline";
import { WhyIbc } from "@/components/WhyIbc";
import type { Kol, Wallet } from "@/data/kols";
import type { Offer } from "@/data/offer";

type SaarProposalPageProps = {
  offer: Offer;
  kols: Kol[];
  wallets: Wallet[];
};

export function SaarProposalPage({ offer, kols, wallets }: SaarProposalPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-saar-base text-saar-text">
      <RevealObserver />
      <div className="pointer-events-none absolute inset-0 bg-saar-noise opacity-25" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-saar-lime/20 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-7 md:px-8">
        <PasscodeGate copy={offer.passcodeGate}>
          <div className="space-y-12">
            <Hero hero={offer.hero} />
            <CompareCards compare={offer.compare} />
            <PackageGrid packageSection={offer.packageSection} />
            <Timeline timeline={offer.timeline} />
            <KpiCards kpis={offer.kpis} />
            <KolTabs config={offer.kolTabs} kols={kols} wallets={wallets} />
            <WhyIbc whyIbc={offer.whyIbc} />
            <Terms terms={offer.terms} />
          </div>
          <ClosingBand closing={offer.closing} />
        </PasscodeGate>
      </div>
    </main>
  );
}
