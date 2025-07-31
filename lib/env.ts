import { z } from "zod";

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  DATABASE_URL: z.string().url().default("postgresql://admin:password@localhost:5432/fast"),
  CLIENT_ORIGIN: z.string().url().default("http://localhost:5173"),
  BETTER_AUTH_URL: z.string().url().default("http://localhost:3000"),
  BETTER_AUTH_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),
  LOGGER_LEVEL: z.string().default("trace"),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
