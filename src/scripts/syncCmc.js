require("dotenv").config();
const { closePool } = require("../lib/db");
const { syncCoinMarketCapSnapshots } = require("../services/priceSync");

async function run() {
  const updates = await syncCoinMarketCapSnapshots();
  console.log(`Synced ${updates.length} project price snapshots from CoinMarketCap.`);
}

run()
  .catch((error) => {
    console.error("CoinMarketCap sync failed.", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await closePool();
  });
