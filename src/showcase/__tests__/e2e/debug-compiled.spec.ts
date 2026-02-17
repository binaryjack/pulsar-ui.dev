import { test } from '@playwright/test';

test('Debug compiled JS', async ({ page }) => {
  // Intercept the JS request for context-test
  const jsResponse = await page.waitForResponse(
    (response) => response.url().includes('context-test') && response.url().includes('.js')
  );

  const jsContent = await jsResponse.text();
  console.log('[COMPILED JS]:', jsContent.substring(0, 2000), '...');

  await page.goto('http://localhost:3004/');
});
