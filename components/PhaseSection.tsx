import type { PhaseData } from "@/data/strategy.types";

type PhaseSectionProps = {
  phase: PhaseData;
};

export function PhaseSection({ phase }: PhaseSectionProps) {
  return (
    <article id={phase.id} className="rounded-2xl border border-fortress-border bg-fortress-panel p-6">
      <div className="flex flex-wrap items-center gap-3">
        <p className="rounded-full bg-fortress-gold/20 px-3 py-1 text-xs font-semibold text-fortress-gold">
          {phase.weekRange}
        </p>
        <h3 className="font-display text-xl text-fortress-text md:text-2xl">{phase.title}</h3>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <section>
          <h4 className="font-semibold text-fortress-text">{phase.whatHappensTitle}</h4>
          <ul className="mt-3 space-y-2 text-sm text-fortress-muted">
            {phase.whatHappens.map((item) => (
              <li key={item} className="rounded-xl border border-fortress-border bg-fortress-surface p-3">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-fortress-text">{phase.deliverablesTitle}</h4>
          <ul className="mt-3 space-y-2 text-sm text-fortress-muted">
            {phase.deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-fortress-border bg-fortress-surface p-3"
              >
                <span className="mt-0.5 text-fortress-gold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {phase.contentMix && phase.contentMix.length > 0 ? (
        <section className="mt-5 rounded-xl border border-fortress-border bg-fortress-surface p-4">
          <div className="flex flex-wrap gap-2">
            {phase.contentMix.map((item) => (
              <span
                key={`${phase.id}-${item.label}`}
                className="inline-flex items-center gap-2 rounded-full border border-fortress-border px-3 py-1 text-xs text-fortress-muted"
              >
                <strong className="text-fortress-gold">{item.count}</strong>
                {item.label}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      <p className="mt-5 rounded-xl border border-fortress-border bg-fortress-surface p-3 text-sm text-fortress-muted">
        <span className="font-semibold text-fortress-text">{phase.doneWhenLabel}: </span>
        {phase.doneWhen}
      </p>
    </article>
  );
}
