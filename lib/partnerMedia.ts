import generatedMediaJson from "@/data/partners.generated.json";
import { partnerVideos, thumb, type Partner } from "@/data/scenarios";

export type ResolvedVideo = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type ResolvedPartnerMedia = {
  avatarUrl: string;
  featuredVideoId?: string;
  latestVideos: ResolvedVideo[];
};

type GeneratedPartnerMedia = {
  avatarUrl?: string;
  featuredVideoId?: string;
  recentVideoIds?: string[];
  recentVideos?: ResolvedVideo[];
};

const generatedMedia = generatedMediaJson as Record<string, GeneratedPartnerMedia>;

function fallbackAvatar(slug: string) {
  // TODO: add local placeholders to /public/partners/<slug>.jpg when API key is not available.
  return `/partners/${slug}.jpg`;
}

async function buildVideosFromIds(ids: string[]): Promise<ResolvedVideo[]> {
  const videos = await Promise.all(
    ids.map(async (id, idx) => {
      const videoUrl = `https://www.youtube.com/watch?v=${id}`;
      const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}&format=json`;
      try {
        const res = await fetch(oembedUrl, { cache: "force-cache" });
        if (res.ok) {
          const payload = (await res.json()) as { title?: string };
          return {
            id,
            title: payload.title ?? `Video ${idx + 1}`,
            url: videoUrl,
            thumbnailUrl: thumb(id),
          };
        }
      } catch {
        // Ignore oEmbed failures and keep static fallback title.
      }
      return {
        id,
        title: `Video ${idx + 1}`,
        url: videoUrl,
        thumbnailUrl: thumb(id),
      };
    }),
  );

  return videos;
}

async function resolveYouTubeChannelData(
  partner: Partner,
  key: string,
): Promise<{ channelId: string; avatarUrl?: string; uploadsPlaylistId?: string } | null> {
  if (!partner.youtube) {
    return null;
  }

  const handle = partner.youtube.handle?.replace(/^@/, "");
  const directChannelIdMatch = partner.youtube.channelUrl.match(/\/channel\/([^/?]+)/);
  const channelId = partner.youtube.channelId ?? directChannelIdMatch?.[1];

  const byIdUrl = channelId
    ? `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${encodeURIComponent(
        channelId,
      )}&key=${encodeURIComponent(key)}`
    : null;

  const byHandleUrl = handle
    ? `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&forHandle=${encodeURIComponent(
        handle,
      )}&key=${encodeURIComponent(key)}`
    : null;

  const requestUrl = byIdUrl ?? byHandleUrl;
  if (!requestUrl) {
    return null;
  }

  const res = await fetch(requestUrl, { cache: "no-store" });
  if (!res.ok) {
    return null;
  }
  const data = (await res.json()) as {
    items?: Array<{
      id: string;
      snippet?: { thumbnails?: { high?: { url?: string }; default?: { url?: string } } };
      contentDetails?: { relatedPlaylists?: { uploads?: string } };
    }>;
  };
  const first = data.items?.[0];
  if (!first?.id) {
    return null;
  }

  const avatarUrl =
    first.snippet?.thumbnails?.high?.url ?? first.snippet?.thumbnails?.default?.url;
  const uploadsPlaylistId = first.contentDetails?.relatedPlaylists?.uploads;
  return { channelId: first.id, avatarUrl, uploadsPlaylistId };
}

async function resolveLatestVideos(
  uploadsPlaylistId: string,
  key: string,
): Promise<ResolvedVideo[]> {
  const url =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3" +
    `&playlistId=${encodeURIComponent(uploadsPlaylistId)}&key=${encodeURIComponent(key)}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as {
    items?: Array<{
      snippet?: {
        title?: string;
        resourceId?: { videoId?: string };
        thumbnails?: { high?: { url?: string }; medium?: { url?: string } };
      };
    }>;
  };

  return (data.items ?? [])
    .map((item) => {
      const videoId = item.snippet?.resourceId?.videoId;
      if (!videoId) {
        return null;
      }
      return {
        id: videoId,
        title: item.snippet?.title ?? "YouTube video",
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnailUrl:
          item.snippet?.thumbnails?.high?.url ??
          item.snippet?.thumbnails?.medium?.url ??
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      };
    })
    .filter((entry): entry is ResolvedVideo => Boolean(entry));
}

export async function resolvePartnerMedia(partner: Partner): Promise<ResolvedPartnerMedia> {
  const localGenerated = generatedMedia[partner.slug];
  const mappedVideos = partnerVideos[partner.slug];

  if (!partner.youtube) {
    const recentIds =
      mappedVideos?.recent.slice(0, 3) ??
      localGenerated?.recentVideoIds?.slice(0, 3) ??
      [];
    const featuredVideoId = mappedVideos?.featured ?? localGenerated?.featuredVideoId;
    return {
      avatarUrl: localGenerated?.avatarUrl ?? fallbackAvatar(partner.slug),
      featuredVideoId,
      latestVideos:
        localGenerated?.recentVideos && localGenerated.recentVideos.length > 0
          ? localGenerated.recentVideos
          : await buildVideosFromIds(recentIds),
    };
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey) {
    const channelData = await resolveYouTubeChannelData(partner, apiKey);
    if (channelData?.uploadsPlaylistId) {
      const latestVideos = await resolveLatestVideos(channelData.uploadsPlaylistId, apiKey);
      const featuredVideoId =
        latestVideos[0]?.id ??
        partner.youtube.featuredVideoIds[0] ??
        localGenerated?.featuredVideoId;

      return {
        avatarUrl: channelData.avatarUrl ?? localGenerated?.avatarUrl ?? fallbackAvatar(partner.slug),
        featuredVideoId,
        latestVideos,
      };
    }
  }

  const fallbackRecentIds =
    mappedVideos?.recent.slice(0, 3) ??
    (partner.youtube.recentVideoIds.length > 0
      ? partner.youtube.recentVideoIds.slice(0, 3)
      : localGenerated?.recentVideoIds ?? []);
  const fallbackFeatured =
    mappedVideos?.featured ??
    partner.youtube.featuredVideoIds[0] ??
    localGenerated?.featuredVideoId ??
    fallbackRecentIds[0];

  return {
    avatarUrl: localGenerated?.avatarUrl ?? fallbackAvatar(partner.slug),
    featuredVideoId: fallbackFeatured,
    latestVideos:
      localGenerated?.recentVideos && localGenerated.recentVideos.length > 0
        ? localGenerated.recentVideos
        : await buildVideosFromIds(fallbackRecentIds),
  };
}
