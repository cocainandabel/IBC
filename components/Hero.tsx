"use client";

import { Counter } from "@/components/Counter";
import { ExternalLink } from "@/components/ExternalLink";
import { micrositeData } from "@/data/scenarios";
import { motion } from "framer-motion";

export function Hero() {
  const hero = micrositeData.hero;

  const onScrollToScenarios = () => {
    const target = document.getElementById("scenarios");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-binance-border bg-binance-slate/70 p-6 shadow-card md:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(240,185,11,0.25), transparent 45%)",
        }}
      />
      <div className="relative z-10">
        <motion.p
          className="font-display text-sm uppercase tracking-[0.2em] text-binance-yellow"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-binance-text md:text-6xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-base text-binance-muted md:text-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          {hero.subtitle}
        </motion.p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {hero.statChips.map((chip) => (
            <div
              key={chip.label}
              className="rounded-2xl border border-binance-border bg-binance-panel p-4"
            >
              <p className="font-display text-2xl font-bold text-binance-yellow md:text-3xl">
                <Counter value={chip.value} suffix={chip.suffix} />
              </p>
              <p className="mt-1 text-sm text-binance-muted">{chip.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onScrollToScenarios}
            className="rounded-full bg-binance-yellow px-6 py-3 text-sm font-semibold text-binance-charcoal transition hover:brightness-105"
          >
            {hero.primaryCta}
          </button>
          <ExternalLink
            href={hero.secondaryHref}
            className="rounded-full border border-binance-border px-6 py-3 text-sm font-semibold text-binance-text transition hover:bg-binance-panel"
          >
            {hero.secondaryCta}
          </ExternalLink>
        </div>

        <p className="mt-8 text-xs text-binance-muted">{hero.footer}</p>
      </div>
    </section>
  );
}
