import { z } from "zod";

export const envSchema = z.object({
  CLIENT_ORIGIN: z.url().default("http://localhost:5173"),
  BETTER_AUTH_URL: z.url().default("http://localhost:5173"),
  BETTER_AUTH_SECRET: z.string().default("supersecret"),
  GITHUB_CLIENT_ID: z.string().optional().default(""),
  GITHUB_CLIENT_SECRET: z.string().optional().default(""),
  LOGGER_LEVEL: z.string().default("trace"),
  CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
  CLOUDFLARE_TOKEN: z.string().optional(),
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
  ALLOWED_EMAILS: z.string().optional().default("opaulochaves@gmail.com"), // comma-separated list of emails
});

export type Env = z.infer<typeof envSchema>;

// TODO: with cloudflare type gen env already has type definitions. is this needed?
export const env = envSchema.parse(process.env);
