import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../lib/env";

import * as schema from "./schema";

const queryClient = postgres(env.DATABASE_URL);

export const db = drizzle({
  client: queryClient,
  schema,
  casing: "snake_case",
});

export type DB = typeof db;

export { schema };
