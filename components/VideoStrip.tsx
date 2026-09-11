import { ExternalLink } from "@/components/ExternalLink";

export type VideoThumb = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type VideoStripProps = {
  videos: VideoThumb[];
};

export function VideoStrip({ videos }: VideoStripProps) {
  if (videos.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-binance-border bg-binance-panel p-4 text-sm text-binance-muted">
        Latest content placeholder, add video IDs in data/scenarios.ts or run the partner fetch
        script with a YouTube API key.
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {videos.map((video) => (
        <ExternalLink
          key={video.id}
          href={video.url}
          className="group overflow-hidden rounded-xl border border-binance-border bg-binance-panel"
        >
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <p className="line-clamp-2 p-2 text-xs text-binance-muted">{video.title}</p>
        </ExternalLink>
      ))}
    </div>
  );
}
