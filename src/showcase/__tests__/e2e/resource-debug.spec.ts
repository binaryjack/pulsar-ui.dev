import { test } from '@playwright/test';

test('Debug Resources Page', async ({ page }) => {
  page.on('console', (msg) => {
    console.log(`[BROWSER ${msg.type()}]:`, msg.text());
  });

  await page.goto('http://localhost:3004/resources');
  await page.waitForTimeout(2000);

  // Click Load Gallery
  const loadButton = page.getByText('Load Gallery');
  if (await loadButton.isVisible()) {
    console.log('[TEST] Clicking Load Gallery button');
    await loadButton.click();
    await page.waitForTimeout(3000);
  } else {
    console.log('[TEST] Load Gallery button not found');
  }

  // Check for images
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map((img) => ({
      src: img.src,
      width: img.width,
      height: img.height,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
    }));
  });
  console.log('[IMAGES]:', images);

  // Check resource state if possible (look for loading indicators or error messages)
  const content = await page.content();
  if (content.includes('Loading...')) console.log('[STATE] Loading indicator found');
  if (content.includes('Error')) console.log('[STATE] Error message found');
});
