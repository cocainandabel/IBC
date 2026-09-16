"use client";

import { BriefCard } from "@/components/BriefCard";
import { PhaseSection } from "@/components/PhaseSection";
import type { StrategyLocaleData } from "@/data/strategy.types";

type TimelineSectionProps = {
  timeline: StrategyLocaleData["timeline"];
};

export function TimelineSection({ timeline }: TimelineSectionProps) {
  const goToPhase = (phaseId: string) => {
    const target = document.getElementById(phaseId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section>
      <h2 className="font-display text-2xl text-fortress-text md:text-4xl">{timeline.title}</h2>
      <div className="mt-6 rounded-2xl border border-fortress-border bg-fortress-panel p-2">
        <div className="grid gap-2 md:grid-cols-3">
          {timeline.phases.map((phase) => (
            <button
              key={phase.id}
              type="button"
              onClick={() => goToPhase(phase.id)}
              className="rounded-xl border border-fortress-border bg-fortress-surface px-4 py-3 text-left text-sm text-fortress-muted transition hover:border-fortress-gold hover:text-fortress-text"
            >
              <p className="font-semibold text-fortress-text">{phase.navLabel}</p>
              <p className="mt-1 text-xs">{phase.weekRange}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {timeline.phases.map((phase, index) => (
          <div key={phase.id} className="space-y-5">
            <PhaseSection phase={phase} />
            {index === 1 ? <BriefCard brief={timeline.briefCard} /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
