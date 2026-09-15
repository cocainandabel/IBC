import { micrositeData } from "@/data/scenarios";
import { ExternalLink } from "@/components/ExternalLink";

export function ClosingBand() {
  const { closing } = micrositeData;
  return (
    <section className="relative left-1/2 mt-14 w-screen -translate-x-1/2 bg-binance-yellow px-6 py-10 text-binance-charcoal md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-display text-2xl font-semibold md:text-3xl">{closing.band}</p>
        <p className="mt-4 text-sm">
          Contact: {closing.contactName} (
          <ExternalLink href={`mailto:${closing.contactEmail}`} className="underline">
            {closing.contactEmail}
          </ExternalLink>
          )
        </p>
      </div>
    </section>
  );
}
