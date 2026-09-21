"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { KolCard } from "@/components/KolCard";
import type { StrategyLocaleData } from "@/data/strategy.types";

type MarketTabsProps = {
  markets: StrategyLocaleData["markets"];
};

export function MarketTabs({ markets }: MarketTabsProps) {
  const [active, setActive] = useState(markets.tabs[0]?.key ?? "korea");
  const market = useMemo(
    () => markets.tabs.find((item) => item.key === active) ?? markets.tabs[0],
    [active, markets.tabs],
  );

  if (!market) {
    return null;
  }

  return (
    <section>
      <h2 className="font-display text-2xl text-fortress-text md:text-4xl">{markets.title}</h2>
      <div className="sticky top-3 z-30 mt-6 rounded-2xl border border-fortress-border bg-fortress-base/90 p-2 backdrop-blur">
        <div className="grid gap-2 sm:grid-cols-2">
          {markets.tabs.map((item) => {
            const isActive = item.key === active;
            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={`rounded-xl px-4 py-3 text-left transition ${
                  isActive
                    ? "text-fortress-base"
                    : "border border-fortress-border bg-fortress-panel text-fortress-muted hover:text-fortress-text"
                }`}
                style={{ backgroundColor: isActive ? item.accent : undefined }}
              >
                <p className="font-display text-base">
                  {item.flag} {item.label}
                </p>
                <p className={`mt-1 text-xs ${isActive ? "text-fortress-base/90" : ""}`}>{item.positioning}</p>
              </button>
            );
          })}
        </div>
      </div>

      <article className="mt-6 space-y-6 rounded-2xl border border-fortress-border bg-fortress-panel p-6">
        <header>
          <p className="font-display text-xl text-fortress-text">
            {market.flag} {market.label}
          </p>
          <p className="mt-2 text-sm text-fortress-muted">{market.positioning}</p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-fortress-border bg-fortress-surface p-4">
            <p className="text-sm font-semibold text-fortress-text">{markets.cards.localPainPointLabel}</p>
            <p className="mt-2 text-sm text-fortress-muted">{market.localPainPoint}</p>
          </div>
          <div className="rounded-2xl border border-fortress-border bg-fortress-surface p-4">
            <p className="text-sm font-semibold text-fortress-text">{markets.cards.leadMessageLabel}</p>
            <p className="mt-2 text-sm text-fortress-muted">{market.leadMessage}</p>
          </div>
          <div className="rounded-2xl border border-fortress-border bg-fortress-surface p-4">
            <p className="text-sm font-semibold text-fortress-text">{markets.cards.avoidLabel}</p>
            <p className="mt-2 text-sm text-fortress-muted">{market.avoidMessage}</p>
          </div>
        </div>

        <section>
          <p className="text-sm font-semibold text-fortress-text">{markets.cards.channelsLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {market.channels.map((channel) => (
              <span
                key={`${market.key}-${channel}`}
                className="rounded-full border border-fortress-border bg-fortress-surface px-3 py-1 text-xs text-fortress-muted"
              >
                {channel}
              </span>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-semibold text-fortress-text">{markets.cards.mediaPartnersLabel}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {market.mediaPartners.map((partner) => (
              <ExternalLink
                key={`${market.key}-${partner.url}`}
                href={partner.url}
                className="rounded-full border border-fortress-border bg-fortress-surface px-3 py-1 text-xs text-fortress-muted transition hover:text-fortress-text"
              >
                {partner.label}
              </ExternalLink>
            ))}
          </div>
        </section>

        <section>
          <p className="font-display text-lg text-fortress-text">{market.kolTitle}</p>
          {market.kolSubline ? <p className="mt-2 text-sm text-fortress-muted">{market.kolSubline}</p> : null}
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {market.kols.map((kol) => (
              <KolCard
                key={`${market.key}-${kol.name}-${kol.fit}`}
                kol={kol}
                accent={market.accent}
                statusLabel={markets.cards.statusLabel}
                openOnXLabel={markets.cards.openOnX}
                emptyHandleLabel={markets.cards.emptyHandle}
              />
            ))}
          </div>
        </section>
      </article>
    </section>
  );
}
