"use client";

import { useMemo, useState } from "react";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { ScenarioSection } from "@/components/ScenarioSection";
import { SectionMotion } from "@/components/SectionMotion";
import type { Scenario, ScenarioKey } from "@/data/scenarios";
import type { ResolvedPartnerMedia } from "@/lib/partnerMedia";

type ScenarioTabsProps = {
  scenarios: Scenario[];
  partnerMedia: Record<string, ResolvedPartnerMedia>;
};

export function ScenarioTabs({ scenarios, partnerMedia }: ScenarioTabsProps) {
  const [active, setActive] = useState<ScenarioKey>(scenarios[0]?.key ?? "gaming");

  const selectedScenario = useMemo(
    () => scenarios.find((scenario) => scenario.key === active) ?? scenarios[0],
    [active, scenarios],
  );

  return (
    <SectionMotion className="mt-14" delay={0.1}>
      <div className="sticky top-3 z-30 mb-6 rounded-2xl border border-binance-border bg-binance-charcoal/90 p-2 backdrop-blur">
        <div className="flex flex-wrap gap-2">
          {scenarios.map((scenario) => {
            const isActive = scenario.key === active;
            return (
              <button
                key={scenario.key}
                type="button"
                onClick={() => setActive(scenario.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "text-binance-charcoal"
                    : "border border-binance-border text-binance-text hover:bg-binance-panel"
                }`}
                style={{ backgroundColor: isActive ? scenario.accent : "transparent" }}
              >
                {scenario.accentLabel}
              </button>
            );
          })}
        </div>
      </div>

      {selectedScenario ? (
        selectedScenario.key === "partnerships" ? (
          <PartnershipsSection partnerMedia={partnerMedia} />
        ) : (
          <ScenarioSection scenario={selectedScenario} partnerMedia={partnerMedia} />
        )
      ) : null}
    </SectionMotion>
  );
}
