import { defineConfig } from "drizzle-kit";
import { env } from "./lib/env";

if (!env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

export default defineConfig({
  out: "./database/migrations",
  schema: "./database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
