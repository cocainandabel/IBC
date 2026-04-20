const express = require("express");
const healthRouter = require("./health");
const projectsRouter = require("./projects");
const campaignsRouter = require("./campaigns");

const router = express.Router();

router.use("/health", healthRouter);
router.use("/campaigns", campaignsRouter);
router.use("/projects", projectsRouter);

module.exports = router;
