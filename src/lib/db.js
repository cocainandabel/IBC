const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

let pool;

function requireDatabaseUrl() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }

  return connectionString;
}

function shouldUseSsl() {
  return process.env.PG_SSL === "true";
}

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: requireDatabaseUrl(),
      ssl: shouldUseSsl() ? { rejectUnauthorized: false } : false
    });
  }

  return pool;
}

async function query(text, params = []) {
  const activePool = getPool();
  return activePool.query(text, params);
}

async function withTransaction(handler) {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const result = await handler(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
}

async function closePool() {
  if (pool) {
    await pool.end();
    pool = undefined;
  }
}

module.exports = {
  getPool,
  query,
  withTransaction,
  closePool
};
