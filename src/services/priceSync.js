const { query } = require("../lib/db");
const { syncLatestTokenPrices } = require("./cmc");

async function syncProjectPriceSnapshots() {
  const projectsResult = await query(
    "SELECT id, token_symbol FROM projects ORDER BY id ASC"
  );

  const projectSymbols = projectsResult.rows.map((project) => ({
    projectId: project.id,
    symbol: project.token_symbol
  }));

  if (projectSymbols.length === 0) {
    return {
      syncedCount: 0,
      updates: []
    };
  }

  const updates = await syncLatestTokenPrices(projectSymbols);

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

  return {
    syncedCount: updates.length,
    updates
  };
}

module.exports = {
  syncProjectPriceSnapshots
};
