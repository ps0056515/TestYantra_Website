import fs from "node:fs";
import path from "node:path";

/**
 * Tiny SQLite store for enquiries and first-party visit analytics.
 * Uses Node's built-in `node:sqlite` (Node 22.5+), so there is no native dependency to compile.
 * Data lives in DATA_DIR (default ./data) — keep that folder on a persistent disk and back it up.
 */

type Row = Record<string, string | number | null>;

export interface Db {
  exec(sql: string): void;
  all(sql: string, ...params: (string | number | null)[]): Row[];
  get(sql: string, ...params: (string | number | null)[]): Row | undefined;
  run(sql: string, ...params: (string | number | null)[]): { lastInsertRowid: number | bigint; changes: number | bigint };
}

const SCHEMA = `
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
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
);
CREATE INDEX IF NOT EXISTS leads_created ON leads(created_at);

CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
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
);
CREATE INDEX IF NOT EXISTS visits_created ON visits(created_at);
CREATE INDEX IF NOT EXISTS visits_session ON visits(session_id);

CREATE TABLE IF NOT EXISTS ip_companies (
  ip_hash TEXT PRIMARY KEY,
  name TEXT,
  domain TEXT,
  type TEXT,
  checked_at TEXT NOT NULL
);
`;

let instance: Db | null = null;

export function getDb(): Db {
  if (instance) return instance;

  const getBuiltin = (process as unknown as { getBuiltinModule?: (id: string) => unknown }).getBuiltinModule;
  const sqlite = getBuiltin?.("node:sqlite") as
    | { DatabaseSync: new (file: string) => {
        exec(sql: string): void;
        prepare(sql: string): {
          all(...p: unknown[]): Row[];
          get(...p: unknown[]): Row | undefined;
          run(...p: unknown[]): { lastInsertRowid: number | bigint; changes: number | bigint };
        };
      } }
    | undefined;
  if (!sqlite) {
    throw new Error("node:sqlite is not available — run the site on Node.js 22.5 or newer.");
  }

  const dir = path.resolve(process.env.DATA_DIR ?? "./data");
  fs.mkdirSync(dir, { recursive: true });
  const raw = new sqlite.DatabaseSync(path.join(dir, "testyantra.db"));
  raw.exec("PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;");
  raw.exec(SCHEMA);

  instance = {
    exec: (sql) => raw.exec(sql),
    all: (sql, ...p) => raw.prepare(sql).all(...p),
    get: (sql, ...p) => raw.prepare(sql).get(...p),
    run: (sql, ...p) => raw.prepare(sql).run(...p),
  };
  return instance;
}
