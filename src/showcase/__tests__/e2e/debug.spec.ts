import { expect, test } from '@playwright/test';

test('Debug - Check page state', async ({ page }) => {
  await page.goto('http://localhost:3004/reactivity');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000); // Wait for debug div

  // Take screenshot
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
  console.log('Screenshot saved to: debug-screenshot.png');

  // Get visible text
  const bodyText = await page.textContent('body');
  console.log('Body text length:', bodyText?.length);
  console.log('Body contains "ROUTER DEBUG":', bodyText?.includes('ROUTER DEBUG'));
  console.log('Body contains "Core Reactivity":', bodyText?.includes('Core Reactivity'));
  console.log('Body contains "Pulsar Framework":', bodyText?.includes('Pulsar Framework'));

  expect(true).toBe(true);
});
