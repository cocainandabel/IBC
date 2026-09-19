import type { Offer } from "@/data/offer";

type CompareCardsProps = {
  compare: Offer["compare"];
};

function CompareCard({ title, points, accent }: { title: string; points: string[]; accent: string }) {
  return (
    <article className="rounded-2xl border border-saar-border bg-saar-panel p-5">
      <h3 className={`font-display text-lg ${accent}`}>{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-saar-muted">
        {points.map((point) => (
          <li key={point} className="rounded-xl border border-saar-border bg-saar-surface p-3">
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CompareCards({ compare }: CompareCardsProps) {
  return (
    <section data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{compare.title}</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <CompareCard title={compare.left.title} points={compare.left.points} accent="text-saar-magenta" />
        <CompareCard title={compare.right.title} points={compare.right.points} accent="text-saar-lime" />
      </div>
      <p className="mt-4 text-sm text-saar-muted">{compare.sequenceLine}</p>
    </section>
  );
}
