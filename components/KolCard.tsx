"use client";

import { useMemo, useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import type { KolCardData } from "@/data/strategy.types";

type KolCardProps = {
  kol: KolCardData;
  accent: string;
  statusLabel: string;
  openOnXLabel: string;
  emptyHandleLabel: string;
};

function handleFromUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/x\.com\/([^/?#]+)/i);
  return match?.[1] ?? null;
}

export function KolCard({ kol, accent, statusLabel, openOnXLabel, emptyHandleLabel }: KolCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const handle = useMemo(() => handleFromUrl(kol.xUrl), [kol.xUrl]);
  const avatarUrl = handle ? `https://unavatar.io/x/${handle}` : null;
  const initial = kol.name.charAt(0).toUpperCase();

  if (kol.placeholder) {
    return (
      <article className="rounded-2xl border border-dashed border-fortress-border bg-fortress-panel p-4">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-fortress-surface" style={{ color: accent }}>
          {initial}
        </div>
        <h5 className="mt-3 font-display text-base text-fortress-text">{kol.name}</h5>
        <p className="mt-2 text-sm text-fortress-muted">{kol.fit}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-full border border-fortress-border px-2.5 py-1 text-xs text-fortress-muted">
            {kol.type}
          </span>
          <span className="rounded-full border border-fortress-border px-2.5 py-1 text-xs text-fortress-muted">
            {statusLabel}: {kol.status}
          </span>
        </div>
        <p className="mt-3 text-xs text-fortress-muted">{emptyHandleLabel}</p>
      </article>
    );
  }

  return (
    <article className="rounded-2xl border border-fortress-border bg-fortress-panel p-4 transition hover:-translate-y-1 hover:shadow-fortress-hover">
      <div className="flex items-start gap-3">
        {avatarUrl && !imageFailed ? (
          <img
            src={avatarUrl}
            alt={`${kol.name} avatar`}
            className="h-11 w-11 rounded-full border border-fortress-border object-cover"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="grid h-11 w-11 place-items-center rounded-full border border-fortress-border bg-fortress-surface font-semibold"
            style={{ color: accent }}
          >
            {initial}
          </div>
        )}
        <div>
          <h5 className="font-display text-base text-fortress-text">{kol.name}</h5>
          {kol.xUrl ? (
            <ExternalLink href={kol.xUrl} className="text-sm text-fortress-gold underline-offset-2 hover:underline">
              {kol.handleLabel ?? `@${handle ?? ""}`}
            </ExternalLink>
          ) : null}
        </div>
      </div>
      <p className="mt-3 text-sm text-fortress-muted">{kol.fit}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-full border border-fortress-border px-2.5 py-1 text-xs text-fortress-muted">
          {kol.type}
        </span>
        <span className="rounded-full border border-fortress-border px-2.5 py-1 text-xs text-fortress-muted">
          {statusLabel}: {kol.status}
        </span>
      </div>
      {kol.xUrl ? (
        <ExternalLink
          href={kol.xUrl}
          className="mt-4 inline-flex rounded-full border border-fortress-border px-3 py-1 text-xs font-semibold text-fortress-text transition hover:bg-fortress-surface"
        >
          {openOnXLabel}
        </ExternalLink>
      ) : null}
    </article>
  );
}
