import type { StrategyLocaleData } from "@/data/strategy.types";

type NextStepsProps = {
  nextSteps: StrategyLocaleData["nextSteps"];
};

export function NextSteps({ nextSteps }: NextStepsProps) {
  return (
    <section>
      <h2 className="font-display text-2xl text-fortress-text md:text-4xl">{nextSteps.title}</h2>
      <ol className="mt-6 space-y-3">
        {nextSteps.steps.map((step, index) => (
          <li
            key={`${step.text}-${step.week}`}
            className="rounded-2xl border border-fortress-border bg-fortress-panel p-4 transition hover:shadow-fortress-hover"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold text-fortress-text">
                {index + 1}. {step.text}
              </p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-fortress-surface px-3 py-1 text-xs text-fortress-muted">
                  {nextSteps.weekLabel}: {step.week}
                </span>
                <span className="rounded-full bg-fortress-gold/15 px-3 py-1 text-xs text-fortress-gold">
                  {nextSteps.ownerLabel}: {step.owner}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
