import { test, expect } from '@playwright/test';

// Example E2E test

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/New React Router App/i);
});
