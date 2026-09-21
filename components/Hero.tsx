import { Counter } from "@/components/Counter";
import { ExternalLink } from "@/components/ExternalLink";
import type { Offer } from "@/data/offer";

type HeroProps = {
  hero: Offer["hero"];
};

export function Hero({ hero }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-saar-border bg-saar-panel p-6 shadow-saar-card md:p-10">
      <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full bg-saar-lime/20 blur-[110px]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em]">
          <span className="font-display text-saar-lime">{hero.eyebrow}</span>
          <span className="font-display text-saar-muted">
            {hero.ibcWordmark} • {hero.saarWordmark}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-saar-text md:text-6xl">{hero.title}</h1>
        <p className="mt-4 max-w-3xl text-sm text-saar-muted md:text-lg">{hero.subtitle}</p>

        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {hero.stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-saar-border bg-saar-surface p-4">
              <p className="font-display text-3xl text-saar-lime md:text-4xl">
                <Counter value={stat.countTo} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-saar-muted">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#package"
            className="rounded-full bg-saar-lime px-5 py-2.5 text-sm font-semibold text-saar-base transition hover:brightness-105"
          >
            {hero.packageButtonLabel}
          </a>
          <ExternalLink
            href={hero.bookCallUrl}
            className="rounded-full border border-saar-border px-5 py-2.5 text-sm font-semibold text-saar-text transition hover:border-saar-lime hover:text-saar-lime"
          >
            {hero.bookCallButtonLabel}
          </ExternalLink>
        </div>

        <p className="mt-6 text-xs text-saar-muted">{hero.footerLine}</p>
      </div>
    </section>
  );
}
