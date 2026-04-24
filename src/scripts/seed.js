require("dotenv").config();
const fs = require("node:fs/promises");
const path = require("node:path");
const { withTransaction, closePool } = require("../lib/db");

async function run() {
  const seedPath = path.join(__dirname, "../../db/seeds/001_seed.sql");
  const sql = await fs.readFile(seedPath, "utf8");

  await withTransaction(async (client) => {
    await client.query(sql);
  });

  console.log("Seed completed.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
}).finally(async () => {
  await closePool();
});
