const { Router } = require("express");

const router = Router();

router.get("/:campaignId/analytics", (_req, res) => {
  res.status(410).json({
    error:
      "Deprecated endpoint. Use GET /api/projects/:projectId/campaigns/:campaignId/analytics instead."
  });
});

module.exports = router;
