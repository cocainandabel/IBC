const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const apiRouter = require("./routes");

const app = express();
const port = Number(process.env.PORT || 8080);

app.use(express.json());

app.use("/api", apiRouter);
app.use(express.static(path.join(process.cwd())));

app.get("/api", (_req, res) => {
  res.json({
    service: "web3-twitter-intelligence-api",
    endpoints: [
      "GET /api/health",
      "GET /api/projects",
      "GET /api/projects/:projectId/campaigns",
      "GET /api/projects/:projectId/campaigns/:campaignId/analytics",
      "GET /api/campaigns/:campaignId/analytics (deprecated)"
    ]
  });
});

app.use((err, _req, res, _next) => {
  const message = err?.message || "Internal server error";
  const statusCode =
    message.includes("DATABASE_URL") || message.includes("connect")
      ? 503
      : 500;

  res.status(statusCode).json({
    error: message
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Web3 Twitter Intelligence listening on ${port}`);
  });
}

module.exports = app;
