require("dotenv").config();
const { syncCurrentProjectPrices } = require("../services/priceSync");
const { closePool } = require("../lib/db");

const DEFAULT_INTERVAL_MINUTES = 60;

function resolveIntervalMs() {
  const raw = process.env.CMC_SYNC_INTERVAL_MINUTES;
  const parsed = Number.parseInt(raw || `${DEFAULT_INTERVAL_MINUTES}`, 10);
  const minutes = Number.isNaN(parsed) || parsed <= 0 ? DEFAULT_INTERVAL_MINUTES : parsed;
  return minutes * 60 * 1000;
}

async function runWorker() {
  const intervalMs = resolveIntervalMs();
  let isRunning = false;
  let timer = null;
  let stopping = false;

  async function executeCycle() {
    if (isRunning || stopping) {
      return;
    }

    isRunning = true;
    try {
      const updates = await syncCurrentProjectPrices();
      console.log(`[cmc-worker] Synced ${updates.length} project price snapshots.`);
    } catch (error) {
      console.error("[cmc-worker] Sync cycle failed:", error.message);
    } finally {
      isRunning = false;
    }
  }

  async function shutdown(signal) {
    if (stopping) {
      return;
    }
    stopping = true;
    console.log(`[cmc-worker] Received ${signal}. Shutting down...`);
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    await closePool();
    process.exit(0);
  }

  process.on("SIGINT", () => {
    shutdown("SIGINT").catch((error) => {
      console.error("[cmc-worker] Shutdown error:", error.message);
      process.exit(1);
    });
  });
  process.on("SIGTERM", () => {
    shutdown("SIGTERM").catch((error) => {
      console.error("[cmc-worker] Shutdown error:", error.message);
      process.exit(1);
    });
  });

  console.log(`[cmc-worker] Started. Interval: ${intervalMs / 60000} minute(s).`);
  await executeCycle();
  timer = setInterval(() => {
    executeCycle().catch((error) => {
      console.error("[cmc-worker] Unhandled cycle error:", error.message);
    });
  }, intervalMs);
}

runWorker().catch(async (error) => {
  console.error("[cmc-worker] Fatal startup error:", error.message);
  await closePool();
  process.exit(1);
});
