"use client";

import { useMemo } from "react";
import { BudgetOutline } from "@/components/BudgetOutline";
import { ExternalLink } from "@/components/ExternalLink";
import { FortressDivider } from "@/components/FortressDivider";
import { HeroSection } from "@/components/HeroSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { LocaleProvider, useLocale } from "@/components/LocaleProvider";
import { MarketTabs } from "@/components/MarketTabs";
import { NextSteps } from "@/components/NextSteps";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { PasscodeGate } from "@/components/PasscodeGate";
import { Reveal } from "@/components/Reveal";
import { RolesGrid } from "@/components/RolesGrid";
import { TimelineSection } from "@/components/TimelineSection";
import { getStrategy } from "@/data/strategy";

function StrategyContent() {
  const { locale, setLocale } = useLocale();
  const strategy = useMemo(() => getStrategy(locale), [locale]);

  const scrollToPlan = () => {
    const target = document.getElementById("plan-start");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-fortress-base text-fortress-text">
      <div className="pointer-events-none absolute inset-0 bg-fortress-grid bg-fortress-grid-size opacity-35" />
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-fortress-gold/20 blur-[120px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-7 md:px-8">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-fortress-border bg-fortress-panel/70 p-4">
          <p className="font-display text-lg tracking-[0.18em] text-fortress-gold">{strategy.header.wordmark}</p>
          <LanguageToggle label={strategy.header.localeLabel} locale={locale} onChange={setLocale} />
        </header>

        <PasscodeGate copy={strategy.gate}>
          <div className="mt-8 space-y-12">
            <Reveal delay={0.02}>
              <HeroSection hero={strategy.hero} onSeePlan={scrollToPlan} />
            </Reveal>

            <Reveal delay={0.04}>
              <ObjectivesSection objectives={strategy.objectives} />
            </Reveal>

            <FortressDivider />

            <Reveal delay={0.06}>
              <TimelineSection timeline={strategy.timeline} />
              <p className="mt-5 rounded-2xl border border-fortress-border bg-fortress-surface p-4 text-sm text-fortress-muted">
                {strategy.timeline.highlightBox}
              </p>
            </Reveal>

            <FortressDivider />

            <Reveal delay={0.08}>
              <MarketTabs markets={strategy.markets} />
            </Reveal>

            <Reveal delay={0.1}>
              <RolesGrid roles={strategy.roles} />
            </Reveal>

            <Reveal delay={0.12}>
              <BudgetOutline budget={strategy.budget} />
            </Reveal>

            <Reveal delay={0.14}>
              <NextSteps nextSteps={strategy.nextSteps} />
            </Reveal>
          </div>

          <section className="relative left-1/2 mt-14 w-screen -translate-x-1/2 bg-fortress-gold px-6 py-10 text-fortress-base md:px-12">
            <div className="mx-auto w-full max-w-7xl">
              <p className="font-display text-2xl font-semibold md:text-3xl">{strategy.closing.band}</p>
              <p className="mt-4 text-sm">
                {strategy.closing.contactPrefix}: {strategy.closing.preparedBy} (
                <a href={`mailto:${strategy.closing.email}`} className="underline">
                  {strategy.closing.email}
                </a>
                ) ·{" "}
                <ExternalLink href={strategy.closing.xUrl} className="underline">
                  {strategy.closing.xLabel}
                </ExternalLink>
              </p>
            </div>
          </section>
        </PasscodeGate>
      </div>
    </main>
  );
}

export function StrategyMicrosite() {
  return (
    <LocaleProvider>
      <StrategyContent />
    </LocaleProvider>
  );
}
