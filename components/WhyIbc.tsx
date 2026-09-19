import type { Offer } from "@/data/offer";

type WhyIbcProps = {
  whyIbc: Offer["whyIbc"];
};

export function WhyIbc({ whyIbc }: WhyIbcProps) {
  return (
    <section data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{whyIbc.title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {whyIbc.cards.map((card) => (
          <article key={card.title} className="rounded-2xl border border-saar-border bg-saar-panel p-4">
            <p className="font-display text-lg text-saar-lime">{card.title}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-saar-muted">{whyIbc.footerLine}</p>
    </section>
  );
}
