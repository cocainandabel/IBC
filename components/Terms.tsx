import type { Offer } from "@/data/offer";

type TermsProps = {
  terms: Offer["terms"];
};

export function Terms({ terms }: TermsProps) {
  return (
    <section data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{terms.title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-saar-muted">
        {terms.points.map((point) => (
          <li key={point} className="rounded-xl border border-saar-border bg-saar-panel p-3">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
