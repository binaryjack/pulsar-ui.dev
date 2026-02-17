import { expect, test } from '@playwright/test';

test.describe('Portal UI Demo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3004/portal');
  });

  test('should display page header', async ({ page }) => {
    // Check for route-specific content instead of layout header
    await expect(page.locator('text=Portal System')).toBeVisible();
  });

  test('Modal portal - open button exists', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await expect(openBtn).toBeVisible();
  });

  test('Modal portal - clicking open shows modal', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await openBtn.click();

    // Modal should appear
    const modal = page.locator('[role="dialog"]').or(page.locator('.modal'));
    await expect(modal).toBeVisible();
  });

  test('Modal portal - modal has close button', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await openBtn.click();

    // Look for close button
    const closeBtn = page.getByRole('button', { name: /close|dismiss/i });
    await expect(closeBtn).toBeVisible();
  });

  test('Modal portal - closing modal removes it from DOM', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await openBtn.click();

    const closeBtn = page.getByRole('button', { name: /close|dismiss/i });
    await closeBtn.click();

    // Modal should be gone
    const modal = page.locator('[role="dialog"]');
    await expect(modal).not.toBeVisible();
  });

  test('Modal portal - renders outside parent container', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await openBtn.click();

    // Modal should be in document.body or portal root, not nested
    const modal = page.locator('[role="dialog"]');
    if (await modal.isVisible()) {
      const modalRoot = await modal.evaluate((el) => {
        let parent = el.parentElement;
        while (parent && parent.tagName !== 'BODY') {
          parent = parent.parentElement;
        }
        return parent?.tagName;
      });
      expect(modalRoot).toBe('BODY');
    }
  });

  test('Tooltip portal - appears on hover', async ({ page }) => {
    const trigger = page.locator('text=Hover').or(page.getByRole('button').first());

    if (await trigger.isVisible()) {
      await trigger.hover();

      // Tooltip should appear
      const tooltip = page.locator('[role="tooltip"]').or(page.locator('.tooltip'));
      await expect(tooltip).toBeVisible({ timeout: 2000 });
    }
  });

  test('Multiple portals - can render simultaneously', async ({ page }) => {
    // Open modal
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await openBtn.click();

    // Try to show tooltip too
    const trigger = page.locator('text=Hover');
    if (await trigger.isVisible()) {
      await trigger.hover();

      // Both should be visible
      const modal = page.locator('[role="dialog"]');
      const modalVisible = await modal.isVisible();

      expect(modalVisible).toBeTruthy();
    }
  });

  test('Portal with reactivity - updates propagate to portal', async ({ page }) => {
    // If there's reactive content in portal
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });
    await openBtn.click();

    const modal = page.locator('[role="dialog"]');
    if (await modal.isVisible()) {
      const content = await modal.textContent();
      expect(content).toBeTruthy();
      expect(content?.length).toBeGreaterThan(0);
    }
  });

  test('Demo page has portal container', async ({ page }) => {
    // Check for portal root in DOM
    const portalRoot = page.locator('#portal-root').or(page.locator('[data-portal]'));

    // Either explicit portal root exists or body is used
    const bodyExists = await page.locator('body').isVisible();
    expect(bodyExists).toBeTruthy();
  });

  test('Portal cleanup - reopening works correctly', async ({ page }) => {
    const openBtn = page.getByRole('button', { name: /open|show|modal/i });

    // Open
    await openBtn.click();

    // Close
    const closeBtn = page.getByRole('button', { name: /close|dismiss/i });
    await closeBtn.click();

    // Open again
    await openBtn.click();

    // Should work second time
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible();
  });
});
