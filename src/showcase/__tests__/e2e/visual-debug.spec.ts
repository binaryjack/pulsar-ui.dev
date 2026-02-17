import { test } from '@playwright/test';

test.describe('Visual Debug - Check Demo Functionality', () => {
  test('Portal Demo - Modal functionality', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3004/portal');
    await page.waitForTimeout(2000);

    // Take screenshot
    await page.screenshot({ path: 'test-results/portal-initial.png', fullPage: true });

    // Look for modal buttons
    const modalButtons = await page.locator('button').all();
    console.log(`Found ${modalButtons.length} buttons on portal page`);

    // Try to find and click modal button
    const modalBtn = page.locator('button:has-text("Open Modal")');
    if ((await modalBtn.count()) > 0) {
      console.log('Found "Open Modal" button');
      await modalBtn.first().click();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'test-results/portal-after-click.png', fullPage: true });
    } else {
      console.log('No "Open Modal" button found');
      // Log all button text
      for (const btn of modalButtons) {
        const text = await btn.textContent();
        console.log(`Button: "${text}"`);
      }
    }

    // Log errors
    if (errors.length > 0) {
      console.log('Console errors:', errors);
    }

    // Get page HTML
    const html = await page.content();
    console.log('Page has portal content:', html.includes('Portal'));
  });

  test('Resource Demo - Image loading', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3004/resources');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'test-results/resources-initial.png', fullPage: true });

    // Look for image gallery buttons
    const galleryBtn = page.locator('button:has-text("Load Gallery")');
    if ((await galleryBtn.count()) > 0) {
      console.log('Found "Load Gallery" button');
      await galleryBtn.first().click();
      await page.waitForTimeout(3000);
      await page.screenshot({ path: 'test-results/resources-after-click.png', fullPage: true });

      // Check for images
      const images = await page.locator('img').all();
      console.log(`Found ${images.length} images after loading`);
    }

    if (errors.length > 0) {
      console.log('Console errors:', errors);
    }
  });

  test('Context Demo - Theme toggle', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3004/context');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'test-results/context-initial.png', fullPage: true });

    // Try to toggle theme
    const darkBtn = page.locator('button:has-text("Dark")');
    if ((await darkBtn.count()) > 0) {
      console.log('Found "Dark" button');
      const beforeClick = await page.textContent('body');
      await darkBtn.first().click();
      await page.waitForTimeout(500);
      const afterClick = await page.textContent('body');
      console.log('Theme changed:', beforeClick !== afterClick);
      await page.screenshot({
        path: 'test-results/context-after-theme-toggle.png',
        fullPage: true,
      });
    }

    // Try to login
    const loginBtn = page.locator('button').filter({ hasText: 'Login' }).first();
    if ((await loginBtn.count()) > 0) {
      console.log('Found login button');
      await loginBtn.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'test-results/context-after-login.png', fullPage: true });
    }

    if (errors.length > 0) {
      console.log('Console errors:', errors);
    }
  });

  test('Control Flow Demo - Show/Hide toggle', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:3004/control-flow');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'test-results/control-flow-initial.png', fullPage: true });

    // Look for toggle buttons
    const buttons = await page.locator('button').all();
    console.log(`Found ${buttons.length} buttons`);

    for (const btn of buttons.slice(0, 5)) {
      const text = await btn.textContent();
      console.log(`Button: "${text}"`);
    }

    if (errors.length > 0) {
      console.log('Console errors:', errors);
    }
  });
});
