import { test as base } from '@playwright/test';
import { resetDb } from './reset-db';

export const test = base.extend({
  // Add fixtures if needed
});

test.beforeEach(async () => {
  await resetDb();
});
