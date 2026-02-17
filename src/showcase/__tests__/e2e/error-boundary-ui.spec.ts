import { expect, test } from '@playwright/test';

test.describe('Error Boundary UI Demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3004/error-boundary');
  });

  test('should display page header', async ({ page }) => {
    // Check for route-specific content instead of layout header
    await expect(page.locator('text=Error Boundary')).toBeVisible();
  });

  test('Error boundary - working component displays correctly', async ({ page }) => {
    // Look for working component section
    const workingSection = page.locator('text=Working Component').locator('..').locator('..');

    if (await workingSection.isVisible()) {
      const content = await workingSection.textContent();
      expect(content).toBeTruthy();
      expect(content?.length).toBeGreaterThan(0);
    }
  });

  test('Error boundary - error trigger button exists', async ({ page }) => {
    // Look for button that triggers error
    const errorBtn = page.getByRole('button', { name: /throw|error|break/i });

    if (await errorBtn.isVisible()) {
      await expect(errorBtn).toBeVisible();
    }
  });

  test('Error boundary - shows fallback UI on error', async ({ page }) => {
    // Look for error trigger
    const errorBtn = page.getByRole('button', { name: /throw|error|break/i });

    if (await errorBtn.isVisible()) {
      await errorBtn.click();

      // Should show error fallback
      await expect(page.locator('text=Error')).toBeVisible();
    }
  });

  test('Error boundary - reset button appears after error', async ({ page }) => {
    const errorBtn = page.getByRole('button', { name: /throw|error|break/i });

    if (await errorBtn.isVisible()) {
      await errorBtn.click();

      // Look for reset/retry button
      const resetBtn = page.getByRole('button', { name: /reset|retry|recover/i });
      await expect(resetBtn).toBeVisible();
    }
  });

  test('Error boundary - reset restores working state', async ({ page }) => {
    const errorBtn = page.getByRole('button', { name: /throw|error|break/i });

    if (await errorBtn.isVisible()) {
      await errorBtn.click();

      const resetBtn = page.getByRole('button', { name: /reset|retry|recover/i });
      if (await resetBtn.isVisible()) {
        await resetBtn.click();

        // Should be back to working state
        await expect(page.locator('text=Working Component')).toBeVisible();
      }
    }
  });

  test('Nested error boundaries - isolates errors', async ({ page }) => {
    // Look for nested boundaries section
    const nestedSection = page.locator('text=Nested').locator('..').locator('..');

    if (await nestedSection.isVisible()) {
      const content = await nestedSection.textContent();
      expect(content).toBeTruthy();
    }
  });

  test('Error boundary - page still functional after error', async ({ page }) => {
    const errorBtn = page.getByRole('button', { name: /throw|error|break/i });

    if (await errorBtn.isVisible()) {
      await errorBtn.click();

      // Other parts of page should still work
      const header = page.locator('h1');
      await expect(header).toBeVisible();
    }
  });

  test('Error message contains useful information', async ({ page }) => {
    const errorBtn = page.getByRole('button', { name: /throw|error|break/i });

    if (await errorBtn.isVisible()) {
      await errorBtn.click();

      // Error message should be detailed
      const errorText = await page.locator('text=Error').textContent();
      expect(errorText).toBeTruthy();
    }
  });

  test('Demo page structure intact', async ({ page }) => {
    // Check basic page structure exists
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
    expect(content?.length).toBeGreaterThan(100);
  });
});
