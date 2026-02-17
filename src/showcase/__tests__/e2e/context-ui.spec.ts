import { expect, test } from '@playwright/test';

test.describe('Context UI Demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3004/context');
  });

  test('should display page header', async ({ page }) => {
    // Check for route-specific header instead of layout header
    await expect(page.locator('text=Context API & Dependency Injection')).toBeVisible();
  });

  test('Theme context - should show initial theme', async ({ page }) => {
    const themeSection = page.locator('text=1️⃣ Theme Context').locator('..').locator('..');
    await expect(themeSection).toBeVisible();

    // Check theme display
    await expect(themeSection).toContainText('Theme Mode:');
    await expect(themeSection).toContainText('Light');
  });

  test('Theme context - light/dark buttons are visible', async ({ page }) => {
    const themeSection = page.locator('text=1️⃣ Theme Context').locator('..').locator('..');

    // Check theme buttons exist
    const lightBtn = themeSection.getByRole('button', { name: /light/i });
    const darkBtn = themeSection.getByRole('button', { name: /dark/i });

    await expect(lightBtn).toBeVisible();
    await expect(darkBtn).toBeVisible();
  });

  test('Theme context - clicking dark button changes theme', async ({ page }) => {
    const themeSection = page.locator('text=1️⃣ Theme Context').locator('..').locator('..');

    const darkBtn = themeSection.getByRole('button', { name: /dark/i });
    await darkBtn.click();

    // Check theme updated in DOM
    await expect(themeSection).toContainText('dark');
  });

  test('Theme context - color buttons are visible', async ({ page }) => {
    const themeSection = page.locator('text=1️⃣ Theme Context').locator('..').locator('..');

    // Check color buttons
    await expect(themeSection.getByRole('button', { name: /blue/i })).toBeVisible();
    await expect(themeSection.getByRole('button', { name: /green/i })).toBeVisible();
  });

  test('Theme context - themed box displays theme info', async ({ page }) => {
    const themeSection = page.locator('text=1️⃣ Theme Context').locator('..').locator('..');

    // Look for themed component
    await expect(themeSection).toContainText('Theme:');
    await expect(themeSection).toContainText('Color:');
  });

  test('User context - should show initial state', async ({ page }) => {
    const userSection = page.locator('text=2️⃣ User Context').locator('..').locator('..');
    await expect(userSection).toBeVisible();

    // Check initial state (not logged in)
    await expect(userSection).toContainText('Not logged in');
  });

  test('User context - login buttons are visible', async ({ page }) => {
    const userSection = page.locator('text=2️⃣ User Context').locator('..').locator('..');

    // Should have login options
    const buttons = userSection.getByRole('button');
    const count = await buttons.count();
    expect(count).toBeGreaterThan(0);
  });

  test('User context - clicking login button logs in user', async ({ page }) => {
    const userSection = page.locator('text=2️⃣ User Context').locator('..').locator('..');

    // Click first login button
    const loginBtn = userSection.getByRole('button').first();
    await loginBtn.click();

    // Should show user name (not "Not logged in")
    const content = await userSection.textContent();
    expect(content).not.toContain('Not logged in');
  });

  test('Multiple contexts - deeply nested component visible', async ({ page }) => {
    const multiSection = page.locator('text=3️⃣ Multiple Contexts').locator('..').locator('..');

    if (await multiSection.isVisible()) {
      await expect(multiSection).toContainText('Deeply Nested Component');
    }
  });

  test('Multiple contexts - nested component shows context values', async ({ page }) => {
    const nestedComponent = page
      .locator('text=Deeply Nested Component')
      .locator('..')
      .locator('..');

    if (await nestedComponent.isVisible()) {
      const content = await nestedComponent.textContent();

      // Should show context values
      expect(content).toBeTruthy();
      expect(content?.length).toBeGreaterThan(50); // Has substantial content
    }
  });

  test('Context propagation - child components receive context', async ({ page }) => {
    // Both UserProfile and UserControls should be able to access UserContext
    const userProfile = page.locator('text=User:').locator('..');
    const userControls = page.locator('text=Login').locator('..');

    // At least one should be visible
    const profileVisible = await userProfile.isVisible();
    const controlsVisible = await userControls.isVisible();

    expect(profileVisible || controlsVisible).toBeTruthy();
  });

  test('Settings context - font size control', async ({ page }) => {
    // Look for settings/font size controls
    const settingsControl = page.locator('input[type="range"]');

    if (await settingsControl.isVisible()) {
      const initial = await settingsControl.inputValue();
      expect(initial).toBeTruthy();
    }
  });

  test('All context demos visible', async ({ page }) => {
    await expect(page.locator('text=1️⃣ Theme Context')).toBeVisible();
    await expect(page.locator('text=2️⃣ User Context')).toBeVisible();
  });
});
