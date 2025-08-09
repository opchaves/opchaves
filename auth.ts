import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { createBetterAuth } from "./lib/auth.server";
import * as schema from "./database/schema";

// This file is *ONLY* used by the CLI!
const db = drizzle({ connection: { source: process.env.LOCAL_DB_PATH } });
const database = drizzleAdapter(db, {
  schema,
  provider: "sqlite",
  usePlural: false,
});

export const auth = createBetterAuth(database);
