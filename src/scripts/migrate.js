require("dotenv").config();
const fs = require("node:fs/promises");
const path = require("node:path");
const { query, closePool } = require("../lib/db");

async function run() {
  const migrationsDir = path.join(__dirname, "../../db/migrations");
  const files = (await fs.readdir(migrationsDir))
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const sql = await fs.readFile(path.join(migrationsDir, file), "utf8");
    process.stdout.write(`Running migration: ${file}\n`);
    await query(sql);
  }

  process.stdout.write("Migrations complete.\n");
}

run().catch((error) => {
  process.stderr.write(`Migration failed: ${error.message}\n`);
  process.exit(1);
}).finally(async () => {
  await closePool();
});
