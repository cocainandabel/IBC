"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/Counter";
import { ExternalLink } from "@/components/ExternalLink";
import type { StrategyLocaleData } from "@/data/strategy.types";

type HeroSectionProps = {
  hero: StrategyLocaleData["hero"];
  onSeePlan: () => void;
};

export function HeroSection({ hero, onSeePlan }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-fortress-border bg-fortress-panel/90 p-6 shadow-fortress-card md:p-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 18% 18%, rgba(212,166,74,0.33), transparent 45%)" }}
      />
      <div className="relative z-10">
        <motion.p
          className="font-display text-xs uppercase tracking-[0.28em] text-fortress-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {hero.eyebrow}
        </motion.p>
        <motion.h1
          className="mt-3 max-w-4xl font-display text-3xl font-bold leading-tight text-fortress-text md:text-6xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.04 }}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl text-base text-fortress-muted md:text-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          {hero.subtitle}
        </motion.p>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {hero.stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-fortress-border bg-fortress-surface p-4">
              <p className="font-display text-3xl text-fortress-gold md:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-fortress-muted">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onSeePlan}
            className="rounded-full bg-fortress-gold px-6 py-3 text-sm font-semibold text-fortress-base transition hover:brightness-105"
          >
            {hero.seePlanCta}
          </button>
          <ExternalLink
            href={hero.downloadHref}
            className="rounded-full border border-fortress-border px-6 py-3 text-sm font-semibold text-fortress-text transition hover:bg-fortress-surface"
          >
            {hero.downloadCta}
          </ExternalLink>
        </div>

        <p className="mt-8 text-xs text-fortress-muted">{hero.footer}</p>
      </div>
    </section>
  );
}
