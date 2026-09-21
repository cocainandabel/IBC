import type { Offer } from "@/data/offer";

type TimelineProps = {
  timeline: Offer["timeline"];
};

export function Timeline({ timeline }: TimelineProps) {
  return (
    <section data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{timeline.title}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {timeline.phases.map((phase, index) => (
          <article key={phase.label} className="rounded-2xl border border-saar-border bg-saar-panel p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-saar-lime text-xs font-semibold text-saar-base">
                {index + 1}
              </span>
              <h3 className="font-display text-base text-saar-text">{phase.label}</h3>
            </div>
            <ul className="space-y-2 text-sm text-saar-muted">
              {phase.points.map((point) => (
                <li key={point} className="rounded-lg border border-saar-border bg-saar-surface p-2.5">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
