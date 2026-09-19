import { ExternalLink } from "@/components/ExternalLink";
import type { Offer } from "@/data/offer";

type ClosingBandProps = {
  closing: Offer["closing"];
};

export function ClosingBand({ closing }: ClosingBandProps) {
  return (
    <section className="relative left-1/2 mt-14 w-screen -translate-x-1/2 bg-saar-lime px-6 py-10 text-saar-base md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <p className="font-display text-2xl font-semibold md:text-3xl">{closing.line}</p>
        <p className="mt-4 text-sm">
          {closing.nameLine} · {closing.telegramLabel}:{" "}
          <ExternalLink href={closing.telegramUrl} className="underline">
            {closing.telegramUrl}
          </ExternalLink>
          {" · "}
          {closing.emailLabel}:{" "}
          <ExternalLink href={`mailto:${closing.email}`} className="underline">
            {closing.email}
          </ExternalLink>
        </p>
        <ExternalLink
          href={closing.bookCallUrl}
          className="mt-4 inline-flex rounded-full border border-saar-base px-5 py-2 text-sm font-semibold text-saar-base transition hover:bg-saar-base hover:text-saar-lime"
        >
          {closing.bookCallButtonLabel}
        </ExternalLink>
      </div>
    </section>
  );
}
