import type { StrategyLocaleData } from "@/data/strategy.types";

type ObjectivesSectionProps = {
  objectives: StrategyLocaleData["objectives"];
};

export function ObjectivesSection({ objectives }: ObjectivesSectionProps) {
  return (
    <section id="plan-start">
      <h2 className="font-display text-2xl text-fortress-text md:text-4xl">{objectives.title}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {objectives.cards.map((card) => (
          <article
            key={card}
            className="rounded-2xl border border-fortress-border bg-fortress-panel p-5 text-fortress-muted shadow-fortress-card transition hover:-translate-y-1 hover:shadow-fortress-hover"
          >
            {card}
          </article>
        ))}
      </div>
    </section>
  );
}
