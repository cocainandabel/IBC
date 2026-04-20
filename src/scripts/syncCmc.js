require("dotenv").config();
const { query, closePool } = require("../lib/db");
const { syncLatestTokenPrices } = require("../services/cmc");

async function run() {
  const projectsResult = await query("SELECT id, token_symbol FROM projects ORDER BY id ASC");
  const symbolMap = projectsResult.rows.map((project) => ({
    projectId: project.id,
    symbol: project.token_symbol
  }));

  const updates = await syncLatestTokenPrices(symbolMap);

  for (const update of updates) {
    await query(
      `
      INSERT INTO price_snapshots (project_id, snapshot_date, price_usd, source)
      VALUES ($1, CURRENT_DATE, $2, 'coinmarketcap')
      ON CONFLICT (project_id, snapshot_date)
      DO UPDATE SET price_usd = EXCLUDED.price_usd, source = EXCLUDED.source
      `,
      [update.projectId, update.price]
    );
  }

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
