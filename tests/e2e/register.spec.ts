import { test, expect } from '@playwright/test';

// E2E tests for the /auth/register page

test.describe('Register page', () => {
  test('registers a new user with email and password', async ({ page }) => {
    await page.goto('/auth/register');

    await page.fill('input[name="name"]', 'Test User');
    const email = `testuser${Date.now()}@example.com`;
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', 'testpassword');

    await Promise.all([
      page.waitForURL(/\/dashboard/),
      page.click('button[type="submit"]'),
    ]);
  });

  test('shows error for invalid email', async ({ page }) => {
    await page.goto('/auth/register');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('input[name="password"]', 'testpassword');
    await page.click('button[type="submit"]');
    await expect(page.getByText(/valid email address/i)).toBeVisible();
  });

  test('shows error for short password', async ({ page }) => {
    await page.goto('/auth/register');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', `testuser${Date.now()}@example.com`);
    await page.fill('input[name="password"]', '123');
    await page.click('button[type="submit"]');
    await expect(page.getByText(/at least 6 characters/i)).toBeVisible();
  });

  test('opens GitHub login when clicking GitHub button', async ({ page, context }) => {
    await page.goto('/auth/register');
    const [popup] = await Promise.all([
      context.waitForEvent('page'),
      page.click('button:has-text("Login with GitHub")'),
    ]);
    await popup.waitForLoadState();
    await expect(popup.url()).toMatch(/github\.com\/login/);
    await popup.close();
  });
});
