"use client";

import { useState } from "react";
import { BudgetTable } from "@/components/BudgetTable";
import { ExternalLink } from "@/components/ExternalLink";
import { VideoStrip } from "@/components/VideoStrip";
import { partnershipChannelPartners, partnershipsData } from "@/data/partnerships";
import type { Partner } from "@/data/scenarios";
import type { ResolvedPartnerMedia } from "@/lib/partnerMedia";

type PartnershipsSectionProps = {
  partnerMedia: Record<string, ResolvedPartnerMedia>;
};

type BrandLogoProps = {
  slug: string;
  name: string;
};

function BrandLogo({ slug, name }: BrandLogoProps) {
  const [hasError, setHasError] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  if (hasError) {
    return (
      <div className="grid h-12 w-12 place-items-center rounded-xl border border-binance-border bg-binance-panel font-display text-lg text-binance-yellow">
        {initial}
      </div>
    );
  }

  // TODO: add brand logos to /public/brands/<slug>.svg.
  return (
    <img
      src={`/brands/${slug}.svg`}
      alt={`${name} logo`}
      className="h-12 w-12 rounded-xl border border-binance-border bg-binance-panel object-contain p-2"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

function findChannelPartner(slug: string): Partner | undefined {
  return partnershipChannelPartners.find((partner) => partner.slug === slug);
}

export function PartnershipsSection({ partnerMedia }: PartnershipsSectionProps) {
  const budgetRows = partnershipsData.costTable.map((line) => ({
    label: line.line,
    amountUsd: line.amountUsd,
    note: line.note,
    total: line.total,
  }));

  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-binance-border bg-binance-slate p-6">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-[#F59E0B]">
          {partnershipsData.uiText.tabLabel}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-binance-text md:text-4xl">
          {partnershipsData.intro.title}
        </h3>
        <p className="mt-3 max-w-5xl text-base text-binance-muted">{partnershipsData.intro.lead}</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {partnershipsData.intro.principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-2xl border border-binance-border bg-binance-panel p-4"
            >
              <p className="font-display text-base text-[#F59E0B]">{principle.title}</p>
              <p className="mt-2 text-sm text-binance-muted">{principle.detail}</p>
            </article>
          ))}
        </div>
      </header>

      <section>
        <h4 className="mb-4 font-display text-lg text-binance-text">{partnershipsData.uiText.partATitle}</h4>
        <div className="grid gap-4 md:grid-cols-2">
          {partnershipsData.brandPartners.map((brand) => (
            <article
              key={brand.slug}
              className="rounded-2xl border border-binance-border bg-binance-slate p-5 transition hover:shadow-card-hover"
            >
              <div className="flex items-start gap-3">
                <BrandLogo slug={brand.slug} name={brand.name} />
                <div>
                  <h5 className="font-display text-lg text-binance-text">{brand.name}</h5>
                  <p className="mt-1 inline-flex rounded-full border border-binance-border bg-binance-panel px-2.5 py-1 text-xs text-binance-muted">
                    {brand.category}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-binance-muted">
                <span className="font-semibold text-binance-text">{partnershipsData.uiText.whyThemLabel}: </span>
                {brand.whyThem}
              </p>
              <p className="mt-3 text-sm text-binance-muted">
                <span className="font-semibold text-binance-text">{partnershipsData.uiText.binanceGetsLabel}: </span>
                {brand.binanceGets}
              </p>
              <p className="mt-3 text-sm text-binance-muted">
                <span className="font-semibold text-binance-text">{partnershipsData.uiText.partnerGetsLabel}: </span>
                {brand.partnerGets}
              </p>
              <p className="mt-3 text-sm text-binance-muted">
                <span className="font-semibold text-binance-text">
                  {partnershipsData.uiText.proposedMechanicLabel}:{" "}
                </span>
                {brand.mechanic}
              </p>
              {brand.complianceNote ? (
                <p className="mt-3 rounded-lg border border-binance-border bg-binance-panel p-3 text-xs text-binance-muted">
                  <span className="font-semibold text-binance-text">
                    {partnershipsData.uiText.complianceNoteLabel}:{" "}
                  </span>
                  {brand.complianceNote}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h4 className="mb-4 font-display text-lg text-binance-text">{partnershipsData.uiText.partBTitle}</h4>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {partnershipsData.channelActivations.map((activation) => {
            const partner = findChannelPartner(activation.partnerSlug);
            if (!partner) return null;
            const media = partnerMedia[partner.slug] ?? {
              avatarUrl: "/partners/placeholder.svg",
              latestVideos: [],
            };
            return (
              <article
                key={`${activation.partnerSlug}-${activation.pairedBrand}`}
                className="rounded-2xl border border-binance-border bg-binance-slate p-5 transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={media.avatarUrl}
                    alt={`${partner.name} avatar`}
                    className="h-12 w-12 rounded-full border border-binance-border object-cover"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src = "/partners/placeholder.svg";
                    }}
                  />
                  <div>
                    <h5 className="font-display text-base text-binance-text">{partner.name}</h5>
                    <p className="mt-1 text-xs text-[#F59E0B]">
                      {partnershipsData.uiText.pairedBrandLabel}: {activation.pairedBrand}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {partner.reach.map((pill) => (
                    <span
                      key={`${partner.slug}-${pill.label}`}
                      className="rounded-full border border-binance-border bg-binance-panel px-2.5 py-1 text-xs text-binance-text"
                    >
                      {pill.label}: {pill.value}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-binance-muted">
                  <span className="font-semibold text-binance-text">{partnershipsData.uiText.campaignLabel}: </span>
                  {activation.campaign}
                </p>
                <p className="mt-3 text-sm text-binance-muted">
                  <span className="font-semibold text-binance-text">{partnershipsData.uiText.offerLabel}: </span>
                  {activation.offer}
                </p>
                <p className="mt-3 text-sm text-binance-muted">
                  <span className="font-semibold text-binance-text">{partnershipsData.uiText.targetLabel}: </span>
                  {activation.target}
                </p>
                <div className="mt-3 rounded-xl border border-binance-border bg-binance-panel p-3">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-binance-muted">
                    {partnershipsData.uiText.campaignIdeaLabel}
                  </p>
                  <p className="mt-1 font-display text-sm text-[#F59E0B]">{activation.ideaTitle}</p>
                </div>
                {partner.links.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {partner.links.map((link) => (
                      <ExternalLink
                        key={`${activation.partnerSlug}-${link.url}`}
                        href={link.url}
                        className="rounded-full border border-binance-border px-3 py-1 text-xs text-binance-text transition hover:bg-binance-panel"
                      >
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
                <div className="mt-4">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-binance-muted">
                    {partnershipsData.uiText.latestContentLabel}
                  </p>
                  <VideoStrip videos={media.latestVideos.slice(0, 3)} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h4 className="mb-4 font-display text-lg text-binance-text">{partnershipsData.uiText.partCTitle}</h4>
        <div className="overflow-x-auto">
          <ol className="flex min-w-max gap-3 pb-2">
            {partnershipsData.buildSteps.map((step, index) => (
              <li
                key={step}
                className="relative w-[280px] rounded-xl border border-binance-border bg-binance-slate p-4"
              >
                <span className="mb-3 inline-grid h-6 w-6 place-items-center rounded-full bg-[#F59E0B] text-xs font-semibold text-binance-charcoal">
                  {index + 1}
                </span>
                <p className="text-sm text-binance-text">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-2xl border border-binance-border bg-binance-slate p-5">
        <h4 className="font-display text-lg text-binance-text">{partnershipsData.uiText.partDTitle}</h4>
        <div className="mt-4 overflow-x-auto">
          <BudgetTable rows={budgetRows} mode="note" />
        </div>
      </section>

      <p className="rounded-2xl border border-binance-border bg-binance-slate p-5 text-sm text-binance-text">
        {partnershipsData.closingLine}
      </p>

      <p className="rounded-xl border border-binance-border bg-binance-slate p-4 text-xs text-binance-muted">
        {partnershipsData.complianceNote}
      </p>
    </section>
  );
}
