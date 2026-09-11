import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { scenarios } from "../data/scenarios";

type GeneratedVideo = {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type GeneratedPartner = {
  avatarUrl: string;
  sourceAvatarUrl?: string;
  featuredVideoId?: string;
  recentVideoIds: string[];
  recentVideos: GeneratedVideo[];
};

type ChannelResponse = {
  items?: Array<{
    id: string;
    snippet?: {
      thumbnails?: { high?: { url?: string }; default?: { url?: string } };
    };
    contentDetails?: {
      relatedPlaylists?: { uploads?: string };
    };
  }>;
};

type PlaylistItemsResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      resourceId?: { videoId?: string };
      thumbnails?: { high?: { url?: string }; medium?: { url?: string } };
    };
  }>;
};

const API_KEY = process.env.YOUTUBE_API_KEY ?? "";
const ROOT = process.cwd();

if (API_KEY.length === 0) {
  console.error("Missing YOUTUBE_API_KEY. Set it in .env.local before running fetch:partners.");
  process.exit(1);
}

const youtubePartners = Array.from(
  new Map(
    scenarios
      .flatMap((scenario) => scenario.partners)
      .filter((partner) => partner.youtube)
      .map((partner) => [partner.slug, partner]),
  ).values(),
);

async function fetchJson<T>(url: string): Promise<T | null> {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`YouTube API request failed: ${res.status} ${res.statusText}`);
    return null;
  }
  return (await res.json()) as T;
}

async function resolveChannel(partner: (typeof youtubePartners)[number]) {
  if (!partner.youtube) return null;

  const handle = partner.youtube.handle?.replace(/^@/, "");
  const channelIdMatch = partner.youtube.channelUrl.match(/\/channel\/([^/?]+)/);
  const channelId = partner.youtube.channelId ?? channelIdMatch?.[1];

  const byIdUrl = channelId
    ? `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=${encodeURIComponent(
        channelId,
      )}&key=${encodeURIComponent(API_KEY)}`
    : null;
  const byHandleUrl = handle
    ? `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&forHandle=${encodeURIComponent(
        handle,
      )}&key=${encodeURIComponent(API_KEY)}`
    : null;

  const data = await fetchJson<ChannelResponse>(byIdUrl ?? byHandleUrl ?? "");
  return data?.items?.[0] ?? null;
}

async function fetchLatestVideos(uploadsPlaylistId: string): Promise<GeneratedVideo[]> {
  const url =
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3" +
    `&playlistId=${encodeURIComponent(uploadsPlaylistId)}&key=${encodeURIComponent(API_KEY)}`;
  const data = await fetchJson<PlaylistItemsResponse>(url);

  return (data?.items ?? [])
    .map((item, index) => {
      const videoId = item.snippet?.resourceId?.videoId;
      if (!videoId) return null;
      return {
        id: videoId,
        title: item.snippet?.title ?? `Video ${index + 1}`,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnailUrl:
          item.snippet?.thumbnails?.high?.url ??
          item.snippet?.thumbnails?.medium?.url ??
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      };
    })
    .filter((video): video is GeneratedVideo => Boolean(video));
}

async function writeAvatar(slug: string, avatarUrl?: string) {
  const publicDir = path.join(ROOT, "public", "partners");
  await mkdir(publicDir, { recursive: true });
  const destination = path.join(publicDir, `${slug}.jpg`);

  if (!avatarUrl) return `/partners/${slug}.jpg`;

  try {
    const res = await fetch(avatarUrl);
    if (!res.ok) {
      return `/partners/${slug}.jpg`;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(destination, buffer);
    return `/partners/${slug}.jpg`;
  } catch {
    return `/partners/${slug}.jpg`;
  }
}

async function main() {
  const output: Record<string, GeneratedPartner> = {};

  for (const partner of youtubePartners) {
    const channel = await resolveChannel(partner);
    if (!channel) {
      console.warn(`Could not resolve channel for ${partner.slug}`);
      continue;
    }

    const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;
    const videos = uploadsPlaylistId ? await fetchLatestVideos(uploadsPlaylistId) : [];
    const localAvatarPath = await writeAvatar(
      partner.slug,
      channel.snippet?.thumbnails?.high?.url ?? channel.snippet?.thumbnails?.default?.url,
    );

    output[partner.slug] = {
      avatarUrl: localAvatarPath,
      sourceAvatarUrl:
        channel.snippet?.thumbnails?.high?.url ?? channel.snippet?.thumbnails?.default?.url,
      featuredVideoId: videos[0]?.id,
      recentVideoIds: videos.map((v) => v.id).slice(0, 3),
      recentVideos: videos.slice(0, 3),
    };
    console.log(`Fetched media for ${partner.slug}`);
  }

  const outPath = path.join(ROOT, "data", "partners.generated.json");
  await writeFile(outPath, JSON.stringify(output, null, 2), "utf-8");
  console.log(`Saved generated partner media: ${outPath}`);
}

void main();
