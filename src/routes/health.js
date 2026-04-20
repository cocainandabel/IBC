const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "web3-twitter-intelligence-api",
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
