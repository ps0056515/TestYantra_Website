import { Pool } from "pg";

/**
 * Postgres store (Neon) for enquiries and first-party visit analytics.
 * Works on Vercel, on your own server, and locally — set DATABASE_URL to the Neon connection string.
 * Use Neon's *pooled* connection string (host contains "-pooler") when deploying to Vercel.
 */

export type Row = Record<string, unknown>;

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS leads (
    id BIGSERIAL PRIMARY KEY,
    created_at TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    email_domain TEXT,
    interest TEXT,
    industry TEXT,
    message TEXT,
    marketing_opt_in INTEGER DEFAULT 0,
    section TEXT,
    source_path TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    session_id TEXT,
    visitor_company TEXT,
    visitor_company_domain TEXT,
    status TEXT NOT NULL DEFAULT 'new',
    email_delivered INTEGER NOT NULL DEFAULT 0,
    notes TEXT
  )`,
  `CREATE INDEX IF NOT EXISTS leads_created ON leads(created_at)`,
  `CREATE TABLE IF NOT EXISTS visits (
    id BIGSERIAL PRIMARY KEY,
    created_at TEXT NOT NULL,
    path TEXT NOT NULL,
    section TEXT NOT NULL,
    referrer_host TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    session_id TEXT,
    visitor_hash TEXT,
    country TEXT,
    company TEXT,
    company_domain TEXT
  )`,
  `CREATE INDEX IF NOT EXISTS visits_created ON visits(created_at)`,
  `CREATE INDEX IF NOT EXISTS visits_session ON visits(session_id)`,
  `CREATE TABLE IF NOT EXISTS ip_companies (
    ip_hash TEXT PRIMARY KEY,
    name TEXT,
    domain TEXT,
    type TEXT,
    checked_at TEXT NOT NULL
  )`,
];

let pool: Pool | null = null;
let ready: Promise<void> | null = null;

export function dbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: Number(process.env.DB_POOL_MAX ?? 3),
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 8_000,
    });
    pool.on("error", (err) => console.error("[db] idle client error", err.message));
  }
  return pool;
}

async function init(): Promise<void> {
  const p = getPool();
  for (const stmt of SCHEMA) await p.query(stmt);
}

/** Run a parameterised query ($1, $2, …). Creates the tables on first use. */
export async function query(text: string, params: unknown[] = []): Promise<Row[]> {
  if (!dbConfigured()) throw new Error("DATABASE_URL is not set");
  if (!ready) {
    ready = init().catch((err) => {
      ready = null; // retry on the next request
      throw err;
    });
  }
  await ready;
  const res = await getPool().query(text, params as unknown[]);
  return res.rows as Row[];
}

export async function one(text: string, params: unknown[] = []): Promise<Row | undefined> {
  return (await query(text, params))[0];
}
