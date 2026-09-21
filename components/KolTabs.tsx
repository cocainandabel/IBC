"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import type { Kol, Wallet } from "@/data/kols";
import type { Offer } from "@/data/offer";

type KolTabsProps = {
  config: Offer["kolTabs"];
  kols: Kol[];
  wallets: Wallet[];
};

function initials(name: string): string {
  return name
    .split(" ")
    .map((chunk) => chunk.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function KolCard({ kol }: { kol: Kol }) {
  if (kol.placeholder) {
    return (
      <article className="rounded-2xl border border-dashed border-saar-border bg-saar-panel p-4">
        <div className="grid h-11 w-11 place-items-center rounded-full border border-saar-border bg-saar-surface font-display text-xs text-saar-lime">
          {initials(kol.name)}
        </div>
        <p className="mt-3 font-display text-base text-saar-text">{kol.name}</p>
        <p className="mt-1 text-xs text-saar-muted">@{kol.handle}</p>
        <p className="mt-2 text-sm text-saar-muted">{kol.why}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-saar-border px-2.5 py-1 text-xs text-saar-muted">{kol.type}</span>
          <span className="rounded-full border border-saar-border px-2.5 py-1 text-xs text-saar-muted">{kol.followers}</span>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-2xl border border-saar-border bg-saar-panel p-4">
      <Image
        src={`https://unavatar.io/x/${kol.handle}`}
        alt={`${kol.name} avatar`}
        width={44}
        height={44}
        loading="lazy"
        className="h-11 w-11 rounded-full border border-saar-border bg-saar-surface object-cover"
      />
      <p className="mt-3 font-display text-base text-saar-text">{kol.name}</p>
      <ExternalLink href={kol.xUrl} className="mt-1 inline-flex text-sm text-saar-lime underline-offset-2 hover:underline">
        @{kol.handle}
      </ExternalLink>
      <p className="mt-2 text-sm text-saar-muted">{kol.why}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-saar-border px-2.5 py-1 text-xs text-saar-muted">{kol.type}</span>
        <span className="rounded-full border border-saar-border px-2.5 py-1 text-xs text-saar-muted">{kol.followers}</span>
      </div>
    </article>
  );
}

function WalletTable({
  wallets,
  headers,
  openLabel,
}: {
  wallets: Wallet[];
  headers: Offer["kolTabs"]["walletTableHeaders"];
  openLabel: string;
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-saar-border bg-saar-panel p-3">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-[0.18em] text-saar-muted">
            <th className="pb-2">{headers.wallet}</th>
            <th className="pb-2">{headers.knownFor}</th>
            <th className="pb-2">{headers.chain}</th>
            <th className="pb-2">{headers.link}</th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet) => (
            <tr key={wallet.walletOrHandle} className="border-t border-saar-border">
              <td className="py-2 text-saar-text">{wallet.walletOrHandle}</td>
              <td className="py-2 text-saar-muted">{wallet.knownFor}</td>
              <td className="py-2 text-saar-muted">{wallet.chain}</td>
              <td className="py-2 text-saar-text">
                <ExternalLink href={wallet.link} className="text-saar-lime underline-offset-2 hover:underline">
                  {openLabel}
                </ExternalLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KolTabs({ config, kols, wallets }: KolTabsProps) {
  const [activeTab, setActiveTab] = useState<"kols" | "wallets">("kols");
  const orderedKols = useMemo(() => kols, [kols]);

  return (
    <section data-reveal>
      <h2 className="font-display text-2xl text-saar-text md:text-4xl">{config.title}</h2>
      <div className="mt-4 inline-flex rounded-full border border-saar-border bg-saar-panel p-1">
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === "kols" ? "bg-saar-lime text-saar-base" : "text-saar-muted"
          }`}
          onClick={() => setActiveTab("kols")}
        >
          {config.tabs.kols}
        </button>
        <button
          type="button"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeTab === "wallets" ? "bg-saar-lime text-saar-base" : "text-saar-muted"
          }`}
          onClick={() => setActiveTab("wallets")}
        >
          {config.tabs.wallets}
        </button>
      </div>

      {activeTab === "kols" ? (
        <div className="mt-4">
          <p className="mb-3 text-sm text-saar-muted">{config.subtitle}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {orderedKols.map((kol) => (
              <KolCard key={kol.handle} kol={kol} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4">
          <WalletTable wallets={wallets} headers={config.walletTableHeaders} openLabel={config.openLabel} />
        </div>
      )}
    </section>
  );
}
