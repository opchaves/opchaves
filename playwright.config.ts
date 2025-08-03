import { defineConfig, devices } from "@playwright/test";
import { fileURLToPath } from "url";
import path from "path";
import { env } from "./lib/env";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: "./tests",
  webServer: {
    command: "npm run db:migrate && npm run dev",
    url: env.CLIENT_ORIGIN,
    reuseExistingServer: !env.CI,
    env: {},
  },
  globalSetup: path.resolve(__dirname, "./tests/global-setup.ts"),
  globalTeardown: path.resolve(__dirname, "./tests/global-teardown.ts"),
  use: {
    baseURL: env.CLIENT_ORIGIN,
    ...devices["Desktop Chrome"],
    headless: env.TEST_HEADLESS,
  },
});
