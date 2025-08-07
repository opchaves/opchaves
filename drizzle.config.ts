import type { Config } from "drizzle-kit";
import { env } from "./lib/env";

export default {
  out: "./database/migrations",
  schema: "./database/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    databaseId: "e97ed9ac-cb3f-4d4d-8f03-dd6bc4473562",
    accountId: env.CLOUDFLARE_ACCOUNT_ID!,
    token: env.CLOUDFLARE_TOKEN!,
  },
} satisfies Config;
