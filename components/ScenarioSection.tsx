"use client";

import { BudgetChart } from "@/components/BudgetChart";
import { ExternalLink } from "@/components/ExternalLink";
import { PartnerCard } from "@/components/PartnerCard";
import type { Scenario } from "@/data/scenarios";
import type { ResolvedPartnerMedia } from "@/lib/partnerMedia";

type ScenarioSectionProps = {
  scenario: Scenario;
  partnerMedia: Record<string, ResolvedPartnerMedia>;
};

export function ScenarioSection({ scenario, partnerMedia }: ScenarioSectionProps) {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-binance-border bg-binance-slate p-6">
        <p className="font-display text-sm uppercase tracking-[0.25em]" style={{ color: scenario.accent }}>
          {scenario.accentLabel}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-binance-text md:text-4xl">
          {scenario.title}
        </h3>
        <p className="mt-3 max-w-4xl text-base text-binance-muted">{scenario.objective}</p>
        <div className="mt-4 rounded-xl border border-binance-border bg-binance-panel p-4">
          <p className="font-display text-base text-binance-text">{scenario.event.title}</p>
          <p className="mt-1 text-sm text-binance-muted">{scenario.event.description}</p>
          {scenario.event.links.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {scenario.event.links.map((link) => (
                <ExternalLink
                  key={link.url}
                  href={link.url}
                  className="rounded-full border border-binance-border px-3 py-1 text-xs text-binance-text hover:bg-binance-slate"
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          ) : null}
        </div>
        {scenario.startingPoint ? (
          <p className="mt-4 text-sm text-binance-muted">{scenario.startingPoint}</p>
        ) : null}
      </header>

      <section>
        <h4 className="mb-4 font-display text-lg text-binance-text">Format</h4>
        <ol className="space-y-3 border-l border-binance-border pl-4">
          {scenario.formatSteps.map((step, index) => (
            <li key={step} className="relative rounded-xl border border-binance-border bg-binance-slate p-4">
              <span
                className="absolute -left-[1.6rem] top-4 grid h-6 w-6 place-items-center rounded-full text-xs font-semibold text-binance-charcoal"
                style={{ backgroundColor: scenario.accent }}
              >
                {index + 1}
              </span>
              <p className="text-sm text-binance-text">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {scenario.timelineSteps && scenario.timelineSteps.length > 0 ? (
        <section className="rounded-2xl border border-binance-border bg-binance-slate p-5">
          <h4 className="mb-3 font-display text-lg text-binance-text">Timeline</h4>
          <ul className="space-y-2 text-sm text-binance-muted">
            {scenario.timelineSteps.map((step) => (
              <li key={step} className="rounded-lg bg-binance-panel px-3 py-2">
                {step}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <BudgetChart scenario={scenario} />

      <section>
        <h4 className="mb-4 font-display text-lg text-binance-text">Partners</h4>
        <div className="grid gap-4 xl:grid-cols-2">
          {scenario.partners.map((partner) => (
            <PartnerCard
              key={`${scenario.key}-${partner.slug}`}
              partner={partner}
              media={
                partnerMedia[partner.slug] ?? {
                  avatarUrl: `/partners/${partner.slug}.jpg`,
                  latestVideos: [],
                }
              }
            />
          ))}
        </div>
      </section>

      <p className="rounded-xl border border-binance-border bg-binance-slate p-4 text-xs text-binance-muted">
        {scenario.complianceNote}
      </p>
    </section>
  );
}
