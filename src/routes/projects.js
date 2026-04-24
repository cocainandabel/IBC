const express = require("express");
const { query } = require("../lib/db");
const {
  projectRowsToResponse,
  campaignRowsToResponse,
  campaignDetailRowsToResponse,
  computeCampaignStats,
  topPosts
} = require("../services/analytics");

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    const result = await query(
      `
      SELECT
        p.id AS project_id,
        p.slug,
        p.name,
        p.token_symbol,
        c.id AS campaign_id,
        c.slug AS campaign_slug,
        c.kol_handle,
        c.kol_post_url,
        c.kol_post_date
      FROM projects p
      LEFT JOIN campaigns c ON c.project_id = p.id
      ORDER BY p.name ASC, c.kol_post_date DESC
      `
    );

    res.json(projectRowsToResponse(result.rows));
  } catch (error) {
    next(error);
  }
});

router.get("/:projectId/campaigns", async (req, res, next) => {
  const projectId = Number.parseInt(req.params.projectId, 10);
  if (Number.isNaN(projectId)) {
    return res.status(400).json({ error: "projectId must be an integer" });
  }

  try {
    const result = await query(
      `
      SELECT
        c.id AS campaign_id,
        c.slug AS campaign_slug,
        c.kol_handle,
        c.kol_post_url,
        c.kol_post_date,
        c.cost_usd,
        c.tokens_allocated
      FROM campaigns c
      WHERE c.project_id = $1
      ORDER BY c.kol_post_date DESC
      `,
      [projectId]
    );

    return res.json(campaignRowsToResponse(result.rows));
  } catch (error) {
    return next(error);
  }
});

router.get("/:projectId/campaigns/:campaignId/analytics", async (req, res, next) => {
  const projectId = Number.parseInt(req.params.projectId, 10);
  const campaignId = Number.parseInt(req.params.campaignId, 10);
  if (Number.isNaN(projectId) || Number.isNaN(campaignId)) {
    return res.status(400).json({ error: "projectId and campaignId must be integers" });
  }

  try {
    const timelineResult = await query(
      `
      SELECT
        c.id AS campaign_id,
        c.slug AS campaign_slug,
        c.kol_handle,
        c.kol_post_url,
        c.kol_post_date,
        c.cost_usd,
        c.tokens_allocated,
        p.id AS project_id,
        p.slug AS project_slug,
        p.name AS project_name,
        p.token_symbol,
        cs.snapshot_date,
        cs.followers_count,
        cs.token_price_usd,
        lp.latest_price_usd
      FROM campaigns c
      INNER JOIN projects p ON p.id = c.project_id
      LEFT JOIN campaign_snapshots cs ON cs.campaign_id = c.id
      LEFT JOIN LATERAL (
        SELECT ps.price_usd AS latest_price_usd
        FROM price_snapshots ps
        WHERE ps.project_id = p.id
        ORDER BY ps.snapshot_date DESC
        LIMIT 1
      ) lp ON TRUE
      WHERE c.id = $1 AND c.project_id = $2
      ORDER BY cs.snapshot_date ASC
      `,
      [campaignId, projectId]
    );

    if (timelineResult.rows.length === 0) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    const postsResult = await query(
      `
      SELECT
        cp.id,
        cp.posted_at,
        cp.text,
        cp.likes,
        cp.reposts,
        cp.replies,
        cp.impressions
      FROM campaign_posts cp
      WHERE cp.campaign_id = $1
      ORDER BY cp.posted_at ASC
      `,
      [campaignId]
    );

    const campaign = campaignDetailRowsToResponse(timelineResult.rows, postsResult.rows);
    const stats = computeCampaignStats(campaign);

    return res.json({
      campaign,
      stats,
      topPosts: {
        before: topPosts(stats.beforePosts),
        after: topPosts(stats.afterPosts)
      }
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
