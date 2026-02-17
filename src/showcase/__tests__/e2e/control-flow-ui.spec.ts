import { expect, test } from '@playwright/test';

test.describe('Control Flow UI Demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3004/control-flow');
  });

  test('should display page header', async ({ page }) => {
    // Check for route-specific content instead of layout header
    await expect(page.locator('text=Control Flow Primitives')).toBeVisible();
  });

  test('Show component - should toggle visibility', async ({ page }) => {
    const showSection = page
      .locator('text=👁️ Conditional Rendering (Show)')
      .locator('..')
      .locator('..');
    await expect(showSection).toBeVisible();

    // Check initial state - should show content
    const toggleBtn = showSection.getByRole('button', { name: /toggle/i });

    // Content should be visible initially
    await expect(showSection).toContainText('This content is visible!');

    // Toggle off
    await toggleBtn.click();

    // Content should be hidden
    await expect(showSection.locator('text=This content is visible!')).not.toBeVisible();
  });

  test('Show component - toggle multiple times', async ({ page }) => {
    const showSection = page
      .locator('text=👁️ Conditional Rendering (Show)')
      .locator('..')
      .locator('..');
    const toggleBtn = showSection.getByRole('button', { name: /toggle/i });

    // Toggle off
    await toggleBtn.click();
    await expect(showSection.locator('text=This content is visible!')).not.toBeVisible();

    // Toggle on
    await toggleBtn.click();
    await expect(showSection).toContainText('This content is visible!');

    // Toggle off again
    await toggleBtn.click();
    await expect(showSection.locator('text=This content is visible!')).not.toBeVisible();
  });

  test('For component - should render list items', async ({ page }) => {
    const forSection = page.locator('text=🔁 List Rendering (For)').locator('..').locator('..');
    await expect(forSection).toBeVisible();

    // Check initial list items are visible
    await expect(forSection).toContainText('Apple');
    await expect(forSection).toContainText('Banana');
    await expect(forSection).toContainText('Cherry');
  });

  test('For component - add item button works', async ({ page }) => {
    const forSection = page.locator('text=🔁 List Rendering (For)').locator('..').locator('..');

    // Find add button
    const addBtn = forSection.getByRole('button', { name: /add/i });
    await addBtn.click();

    // Check new item appears in DOM
    const items = forSection.locator('[class*="item"]');
    const count = await items.count();
    expect(count).toBeGreaterThan(3); // More than initial 3 items
  });

  test('For component - remove item button works', async ({ page }) => {
    const forSection = page.locator('text=🔁 List Rendering (For)').locator('..').locator('..');

    // Find first remove button
    const removeBtn = forSection.getByRole('button', { name: /remove/i }).first();
    await removeBtn.click();

    // Apple should be gone
    await expect(forSection.locator('text=Apple')).not.toBeVisible();
  });

  test('Index component - should render with indices', async ({ page }) => {
    const indexSection = page.locator('text=🔢 Indexed List').locator('..').locator('..');
    await expect(indexSection).toBeVisible();

    // Check items show with index
    await expect(indexSection).toContainText('0:');
    await expect(indexSection).toContainText('1:');
    await expect(indexSection).toContainText('2:');
  });

  test('Switch/Match - should show correct option', async ({ page }) => {
    const switchSection = page
      .locator('text=🔀 Multiple Conditions (Switch/Match)')
      .locator('..')
      .locator('..');
    await expect(switchSection).toBeVisible();

    // Should show one of the status options
    const hasLoading = await switchSection.locator('text=Loading...').isVisible();
    const hasSuccess = await switchSection.locator('text=Success').isVisible();
    const hasError = await switchSection.locator('text=Error').isVisible();

    expect(hasLoading || hasSuccess || hasError).toBeTruthy();
  });

  test('Switch/Match - switches between states', async ({ page }) => {
    const switchSection = page
      .locator('text=🔀 Multiple Conditions (Switch/Match)')
      .locator('..')
      .locator('..');

    // Find button to change state
    const buttons = switchSection.getByRole('button');
    const count = await buttons.count();

    if (count > 0) {
      await buttons.first().click();

      // Something should be displayed
      const content = await switchSection.textContent();
      expect(content).toBeTruthy();
      expect(content?.length).toBeGreaterThan(0);
    }
  });

  test('Nested control flow - Show + For combination', async ({ page }) => {
    // Look for section with both Show and For
    const nestedSection = page.locator('text=Nested').locator('..').locator('..');

    if (await nestedSection.isVisible()) {
      // Should have toggle and list
      const hasToggle = await nestedSection.getByRole('button', { name: /toggle/i }).isVisible();
      const hasItems = await nestedSection.textContent();

      expect(hasToggle || (hasItems && hasItems.length > 0)).toBeTruthy();
    }
  });

  test('All control flow demos visible', async ({ page }) => {
    await expect(page.locator('text=👁️ Conditional Rendering (Show)')).toBeVisible();
    await expect(page.locator('text=🔁 List Rendering (For)')).toBeVisible();
  });
});
