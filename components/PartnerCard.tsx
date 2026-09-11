import { ExternalLink } from "@/components/ExternalLink";
import { LiteYouTube } from "@/components/LiteYouTube";
import { VideoStrip } from "@/components/VideoStrip";
import type { Partner } from "@/data/scenarios";
import type { ResolvedPartnerMedia } from "@/lib/partnerMedia";

type PartnerCardProps = {
  partner: Partner;
  media: ResolvedPartnerMedia;
};

export function PartnerCard({ partner, media }: PartnerCardProps) {
  const hasVideoContent =
    media.latestVideos.length > 0 || Boolean(media.featuredVideoId) || Boolean(partner.youtube);

  return (
    <article className="group rounded-2xl border border-binance-border bg-binance-slate p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {partner.imageUrl ? (
        <img
          src={partner.imageUrl}
          alt={`${partner.name} visual`}
          className="mb-4 aspect-[16/9] w-full rounded-xl border border-binance-border object-cover"
          loading="lazy"
        />
      ) : null}
      <div className="flex items-start gap-3">
        {partner.imageUrl ? null : (
          <img
            src={media.avatarUrl}
            alt={`${partner.name} avatar`}
            className="h-14 w-14 rounded-full border border-binance-border object-cover"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = "/partners/placeholder.svg";
            }}
          />
        )}
        <div>
          <h5 className="font-display text-lg text-binance-text">{partner.name}</h5>
          <p className="text-sm text-binance-muted">{partner.role}</p>
          <p className="mt-1 text-xs text-binance-muted">{partner.audience}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {partner.reach.map((pill) => (
          <span
            key={`${partner.slug}-${pill.label}`}
            className="rounded-full border border-binance-border bg-binance-panel px-2.5 py-1 text-xs text-binance-text"
          >
            {pill.label}: {pill.value}
          </span>
        ))}
      </div>

      {hasVideoContent ? (
        <>
          <div className="mt-4">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-binance-muted">
              Latest content
            </p>
            <VideoStrip videos={media.latestVideos.slice(0, 3)} />
          </div>

          <div className="mt-4">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-binance-muted">
              Featured video
            </p>
            <LiteYouTube videoId={media.featuredVideoId} title={partner.name} />
          </div>
        </>
      ) : null}

      {partner.links.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {partner.links.map((link) => (
            <ExternalLink
              key={`${partner.slug}-${link.url}`}
              href={link.url}
              className="rounded-full border border-binance-border px-3 py-1 text-xs text-binance-text transition hover:bg-binance-panel"
            >
              {link.label}
            </ExternalLink>
          ))}
        </div>
      ) : null}

      <p className="mt-4 text-sm text-binance-muted">
        <span className="font-semibold text-binance-text">Why this partner: </span>
        {partner.why}
      </p>
    </article>
  );
}
