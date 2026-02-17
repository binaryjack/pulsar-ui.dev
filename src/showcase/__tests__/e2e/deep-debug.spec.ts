import { test } from '@playwright/test';

test('Deep debug - Context theme toggle', async ({ page }) => {
  // Capture ALL console messages
  page.on('console', (msg) => {
    console.log(`[BROWSER ${msg.type()}]:`, msg.text());
  });

  // Capture page errors
  page.on('pageerror', (error) => {
    console.log('[PAGE ERROR]:', error.message);
  });

  await page.goto('http://localhost:3004/context');
  await page.waitForTimeout(2000);

  // Evaluate in browser - check context state
  const initialCheck = await page.evaluate(() => {
    return {
      bodyText: document.body.textContent?.slice(0, 500),
      hasThemeSection: document.body.textContent?.includes('Theme Mode'),
      hasDarkButton: document.body.textContent?.includes('Dark'),
    };
  });
  console.log('[INITIAL STATE]:', initialCheck);

  // Find and click dark button
  const darkBtn = page.locator('button').filter({ hasText: 'Dark' }).first();
  const exists = await darkBtn.count();
  console.log('[DARK BUTTON EXISTS]:', exists > 0);

  if (exists > 0) {
    // Check if button is actually clickable
    const isVisible = await darkBtn.isVisible();
    const isEnabled = await darkBtn.isEnabled();
    console.log('[BUTTON VISIBLE]:', isVisible);
    console.log('[BUTTON ENABLED]:', isEnabled);

    // Click it
    await darkBtn.click();
    console.log('[CLICKED DARK BUTTON]');

    // Wait a bit
    await page.waitForTimeout(1000);

    // Check state after click
    const afterClick = await page.evaluate(() => {
      return {
        bodyText: document.body.textContent?.slice(0, 500),
        themeText: document.body.innerHTML.includes('dark') ? 'has dark' : 'no dark',
      };
    });
    console.log('[AFTER CLICK]:', afterClick);

    // Try to find the themed component that should show theme value
    const themedComponent = await page.textContent('body');
    console.log(
      '[THEMED COMPONENT INCLUDES "Theme: dark"]:',
      themedComponent.includes('Theme: dark')
    );
    console.log(
      '[THEMED COMPONENT INCLUDES "Theme: light"]:',
      themedComponent.includes('Theme: light')
    );
  }
});

test('Deep debug - Image gallery', async ({ page }) => {
  page.on('console', (msg) => {
    console.log(`[BROWSER ${msg.type()}]:`, msg.text());
  });

  page.on('pageerror', (error) => {
    console.log('[PAGE ERROR]:', error.message);
  });

  await page.goto('http://localhost:3004/resources');
  await page.waitForTimeout(2000);

  console.log('[PAGE LOADED]');

  // Click load gallery button
  const galleryBtn = page
    .locator('button')
    .filter({ hasText: /Load Gallery|Run Demo/ })
    .first();
  if ((await galleryBtn.count()) > 0) {
    console.log('[FOUND GALLERY BUTTON]');
    await galleryBtn.click();
    console.log('[CLICKED GALLERY BUTTON]');

    await page.waitForTimeout(3000);

    // Check for images
    const imgCount = await page.locator('img').count();
    console.log('[IMAGE COUNT]:', imgCount);

    // Check for loading states
    const bodyText = await page.textContent('body');
    console.log('[HAS "Loading"]:', bodyText.includes('Loading'));
    console.log('[HAS "Error"]:', bodyText.includes('Error'));
    console.log('[HAS "Success"]:', bodyText.includes('Success'));

    // Check progress counter
    const progressMatch = bodyText.match(/Progress:.*?(\d+)\s*\/\s*6/);
    console.log('[PROGRESS]:', progressMatch ? progressMatch[1] : 'not found');
  }
});
