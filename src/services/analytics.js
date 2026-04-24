function sum(values) {
  return values.reduce((acc, value) => acc + Number(value || 0), 0);
}

function postEngagement(post) {
  return Number(post.likes || 0) + Number(post.reposts || 0) + Number(post.replies || 0);
}

function parseDate(input) {
  return new Date(`${input}T00:00:00Z`);
}

function engagementRate(posts) {
  const totalImpressions = sum(posts.map((post) => post.impressions));
  if (!totalImpressions) {
    return 0;
  }
  const totalEngagement = sum(posts.map((post) => postEngagement(post)));
  return (totalEngagement / totalImpressions) * 100;
}

function splitBeforeAfterCampaignData(campaign) {
  const postDate = parseDate(campaign.postDate);
  const beforeTimeline = campaign.timeline.filter((item) => parseDate(item.date) < postDate);
  const afterTimeline = campaign.timeline.filter((item) => parseDate(item.date) >= postDate);
  const beforePosts = campaign.posts.filter((post) => parseDate(post.date) < postDate);
  const afterPosts = campaign.posts.filter((post) => parseDate(post.date) >= postDate);
  return { beforeTimeline, afterTimeline, beforePosts, afterPosts };
}

function topPosts(posts, limit = 3) {
  return [...posts].sort((a, b) => postEngagement(b) - postEngagement(a)).slice(0, limit);
}

function computeCampaignStats(campaign) {
  const { beforeTimeline, afterTimeline, beforePosts, afterPosts } = splitBeforeAfterCampaignData(campaign);

  const startFollowers = beforeTimeline.at(-1)?.followers ?? campaign.timeline[0]?.followers ?? 0;
  const endFollowers = afterTimeline.at(-1)?.followers ?? campaign.timeline.at(-1)?.followers ?? 0;
  const followerChange = endFollowers - startFollowers;
  const followerChangePct = startFollowers === 0 ? 0 : (followerChange / startFollowers) * 100;

  const startPrice = beforeTimeline.at(-1)?.price ?? campaign.timeline[0]?.price ?? 0;
  const endPrice = Number(campaign.livePrice ?? afterTimeline.at(-1)?.price ?? campaign.timeline.at(-1)?.price ?? 0);
  const tokenChangePct = startPrice === 0 ? 0 : ((endPrice - startPrice) / startPrice) * 100;

  const beforeEngagementRate = engagementRate(beforePosts);
  const afterEngagementRate = engagementRate(afterPosts);
  const engagementChangePct = afterEngagementRate - beforeEngagementRate;

  const avgEngagementBefore =
    beforePosts.length === 0 ? 0 : sum(beforePosts.map((post) => postEngagement(post))) / beforePosts.length;
  const avgEngagementAfter =
    afterPosts.length === 0 ? 0 : sum(afterPosts.map((post) => postEngagement(post))) / afterPosts.length;

  const tokenReturnValue = (endPrice - startPrice) * Number(campaign.tokensAllocated || 0);
  const costUsd = Number(campaign.costUsd || 0);
  const roiPct = costUsd === 0 ? 0 : ((tokenReturnValue - costUsd) / costUsd) * 100;

  const netValue = tokenReturnValue - costUsd;
  const followerAcquisitionCost = costUsd / Math.max(followerChange, 1);
  const costPerEngagement = costUsd / Math.max(sum(afterPosts.map((post) => postEngagement(post))), 1);

  return {
    beforeTimeline,
    afterTimeline,
    beforePosts,
    afterPosts,
    startFollowers,
    endFollowers,
    followerChange,
    followerChangePct,
    startPrice,
    endPrice,
    tokenChangePct,
    beforeEngagementRate,
    afterEngagementRate,
    engagementChangePct,
    avgEngagementBefore,
    avgEngagementAfter,
    tokenReturnValue,
    roiPct,
    netValue,
    followerAcquisitionCost,
    costPerEngagement
  };
}

function projectRowsToResponse(rows) {
  const projects = new Map();

  for (const row of rows) {
    if (!projects.has(row.project_id)) {
      projects.set(row.project_id, {
        id: row.project_id,
        slug: row.slug,
        name: row.name,
        tokenSymbol: row.token_symbol,
        campaigns: []
      });
    }

    if (row.campaign_id) {
      projects.get(row.project_id).campaigns.push({
        id: row.campaign_id,
        slug: row.campaign_slug,
        kolHandle: row.kol_handle,
        postUrl: row.kol_post_url,
        postDate: row.kol_post_date.toISOString().slice(0, 10)
      });
    }
  }

  return Array.from(projects.values());
}

function campaignRowsToResponse(rows) {
  return rows.map((row) => ({
    id: row.campaign_id,
    slug: row.campaign_slug,
    kolHandle: row.kol_handle,
    postUrl: row.kol_post_url,
    postDate: row.kol_post_date.toISOString().slice(0, 10),
    costUsd: Number(row.cost_usd || 0),
    tokensAllocated: Number(row.tokens_allocated || 0)
  }));
}

function campaignDetailRowsToResponse(timelineRows, postRows = []) {
  const head = timelineRows[0];
  const timeline = timelineRows
    .filter((row) => row.snapshot_date)
    .map((row) => ({
      date: row.snapshot_date.toISOString().slice(0, 10),
      followers: Number(row.followers_count || 0),
      price: Number(row.token_price_usd || 0)
    }));

  const posts = postRows.map((row) => ({
    id: row.id,
    date: row.posted_at.toISOString().slice(0, 10),
    text: row.text,
    likes: Number(row.likes || 0),
    reposts: Number(row.reposts || 0),
    replies: Number(row.replies || 0),
    impressions: Number(row.impressions || 0)
  }));

  const livePrice =
    head.latest_price_usd === null || head.latest_price_usd === undefined
      ? null
      : Number(head.latest_price_usd);

  return {
    id: head.campaign_id,
    slug: head.campaign_slug,
    kolHandle: head.kol_handle,
    postUrl: head.kol_post_url,
    postDate: head.kol_post_date.toISOString().slice(0, 10),
    costUsd: Number(head.cost_usd || 0),
    tokensAllocated: Number(head.tokens_allocated || 0),
    livePrice,
    project: {
      id: head.project_id,
      slug: head.project_slug,
      name: head.project_name,
      tokenSymbol: head.token_symbol
    },
    timeline,
    posts
  };
}

module.exports = {
  computeCampaignStats,
  topPosts,
  postEngagement,
  projectRowsToResponse,
  campaignRowsToResponse,
  campaignDetailRowsToResponse
};
