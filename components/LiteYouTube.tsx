"use client";

import { useMemo, useState } from "react";

type LiteYouTubeProps = {
  videoId?: string;
  title: string;
};

export function LiteYouTube({ videoId, title }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumb = useMemo(
    () => (videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null),
    [videoId],
  );

  if (!videoId) {
    return (
      <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-binance-border bg-binance-panel text-sm text-binance-muted">
        Featured video placeholder, paste one video ID in data/scenarios.ts.
      </div>
    );
  }

  if (isLoaded) {
    return (
      <div className="overflow-hidden rounded-xl border border-binance-border">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play featured video for ${title}`}
      onClick={() => setIsLoaded(true)}
      className="group relative block w-full overflow-hidden rounded-xl border border-binance-border"
    >
      {thumb ? (
        <img
          src={thumb}
          alt={`${title} featured video thumbnail`}
          className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      ) : null}
      <div className="absolute inset-0 grid place-items-center bg-black/35">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-binance-yellow text-binance-charcoal">
          ▶
        </span>
      </div>
    </button>
  );
}
