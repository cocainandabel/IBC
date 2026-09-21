"use client";

import { useMemo, useState } from "react";
import type { BriefCardData } from "@/data/strategy.types";

type BriefCardProps = {
  brief: BriefCardData;
};

export function BriefCard({ brief }: BriefCardProps) {
  const [copied, setCopied] = useState(false);

  const plainText = useMemo(() => {
    const sections = [
      `${brief.title}`,
      "",
      `${brief.whatAfIsTitle}:`,
      ...brief.whatAfIs.map((item) => `- ${item}`),
      "",
      `${brief.threeMessagesTitle}:`,
      ...brief.threeMessages.map((item) => `- ${item}`),
      "",
      `${brief.localHookTitle}:`,
      ...brief.localHook.map((item) => `- ${item}`),
      "",
      `${brief.referralLinkTitle}:`,
      brief.referralLink,
      "",
      `${brief.doNotSayTitle}:`,
      ...brief.doNotSay.map((item) => `- ${item}`),
    ];
    return sections.join("\n");
  }, [brief]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(plainText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="rounded-2xl border border-fortress-border bg-fortress-panel p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="font-display text-lg text-fortress-text">{brief.title}</h4>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-full border border-fortress-border px-4 py-2 text-xs font-semibold text-fortress-text transition hover:bg-fortress-surface"
        >
          {copied ? brief.copiedLabel : brief.copyButton}
        </button>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-fortress-border bg-fortress-surface p-4">
          <p className="font-semibold text-fortress-gold">{brief.whatAfIsTitle}</p>
          <ul className="mt-2 space-y-1 text-sm text-fortress-muted">
            {brief.whatAfIs.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-fortress-border bg-fortress-surface p-4">
          <p className="font-semibold text-fortress-gold">{brief.threeMessagesTitle}</p>
          <ul className="mt-2 space-y-1 text-sm text-fortress-muted">
            {brief.threeMessages.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-fortress-border bg-fortress-surface p-4">
          <p className="font-semibold text-fortress-gold">{brief.localHookTitle}</p>
          <ul className="mt-2 space-y-1 text-sm text-fortress-muted">
            {brief.localHook.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-fortress-border bg-fortress-surface p-4">
          <p className="font-semibold text-fortress-gold">{brief.referralLinkTitle}</p>
          <p className="mt-2 break-all text-sm text-fortress-muted">{brief.referralLink}</p>
          <p className="mt-4 font-semibold text-fortress-gold">{brief.doNotSayTitle}</p>
          <ul className="mt-2 space-y-1 text-sm text-fortress-muted">
            {brief.doNotSay.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
