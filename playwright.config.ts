import { defineConfig, devices } from "@playwright/test";
import { fileURLToPath } from "url";
import path from "path";
import { env } from "./lib/env";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "dotenv -e .env.test -- drizzle-kit migrate && npm run dev",
    url: env.CLIENT_ORIGIN,
    reuseExistingServer: !env.CI,
    stdout: env.TEST_E2E_STDOUT,
    env: {
      NODE_ENV: "test",
    },
  },
  globalSetup: path.resolve(__dirname, "./tests/global-setup.ts"),
  globalTeardown: path.resolve(__dirname, "./tests/global-teardown.ts"),
  use: {
    baseURL: env.CLIENT_ORIGIN,
    ...devices["Desktop Chrome"],
    headless: env.TEST_HEADLESS,
  },
});
