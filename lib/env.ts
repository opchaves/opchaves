import { z } from "zod";

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z
    .url()
    .default("postgresql://admin:password@localhost:5432/fast"),
  CLIENT_ORIGIN: z.url().default("http://localhost:3000"),
  BETTER_AUTH_URL: z.url().default("http://localhost:3000"),
  BETTER_AUTH_SECRET: z.string().default("supersecret"),
  GITHUB_CLIENT_ID: z.string().optional().default(""),
  GITHUB_CLIENT_SECRET: z.string().optional().default(""),
  LOGGER_LEVEL: z.string().default("trace"),
  CI: z
    .enum(["true", "false"])
    .transform((v) => v === "true")
    .default(false),
  TEST_HEADLESS: z
    .enum(["true", "false"])
    .transform((v) => v === "true")
    .default(false),
  TEST_E2E_STDOUT: z
    .enum(["pipe", "ignore"])
    .default("pipe")
    .describe(
      "Controls how Playwright test output is displayed in CI. 'pipe' captures output, 'ignore' discards it.",
    ),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
