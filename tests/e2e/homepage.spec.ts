import { test, expect } from "@playwright/test";

// Example E2E test

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Paulo Chaves/i);
});
