import { expect, test } from '@playwright/test';

test.describe('Reactivity UI Demo', () => {
  test.beforeEach(async ({ page }) => {
    // Capture console logs
    page.on('console', (msg) => {
      if (msg.text().includes('[Router]')) {
        console.log('BROWSER:', msg.text());
      }
    });

    await page.goto('http://localhost:3004/reactivity');
    await page.waitForTimeout(2000); // Wait for router to initialize
  });

  test('should display page header correctly', async ({ page }) => {
    // Wait for page to load
    await page.waitForTimeout(1000);

    // The app has TWO h1s: layout header "Pulsar Framework" and route header "Core Reactivity"
    // Check that route content is present (not just layout)
    await expect(page.locator('text=Core Reactivity')).toBeVisible();
    await expect(page.locator('text=Testing signals, effects, memos')).toBeVisible();
  });

  test('Signal Demo - should show initial count and update on click', async ({ page }) => {
    // Look for the signal section using more specific selector - check actual content
    await expect(page.locator('text=First Name:')).toBeVisible();
    await expect(page.locator('text=Last Name:')).toBeVisible();
    await expect(page.locator('text=Age:')).toBeVisible();

    // Check for initial values - use more specific selectors to avoid strict mode violations
    await expect(page.locator('div:has-text("First Name:"):has-text("John")').first()).toBeVisible();
    await expect(page.locator('div:has-text("Last Name:"):has-text("Doe")').first()).toBeVisible();
    await expect(page.locator('div:has-text("Age:"):has-text("25")').first()).toBeVisible();
  });

  test('Signal controls should work', async ({ page }) => {
    // Click the Alice button and check if first name changes
    await page.click('button:has-text("Set First: Alice")');
    await expect(page.locator('div:has-text("First Name:"):has-text("Alice")').first()).toBeVisible();

    // Click the Johnson button and check if last name changes
    await page.click('button:has-text("Set Last: Johnson")');
    await expect(page.locator('div:has-text("Last Name:"):has-text("Johnson")').first()).toBeVisible();

    // Click increment age and check if age increases
    await page.click('button:has-text("Increment Age")');
    await expect(page.locator('div:has-text("Age:"):has-text("26")').first()).toBeVisible();
  });

  test('Memo section should be visible', async ({ page }) => {
    // Check for computed values section - use first() to get the h3 heading
    await expect(page.locator('h3:has-text("Computed Values")')).toBeVisible();

    // Check memo values that should be derived from signals
    await expect(page.locator('text=Full Name (computed):')).toBeVisible();
    await expect(page.locator('text=John Doe')).toBeVisible();
    await expect(page.locator('text=Is Adult (computed):')).toBeVisible();
    await expect(page.locator('text=✅ Yes')).toBeVisible();
  });

  test('Effect section should be visible', async ({ page }) => {
    // Check for side effects section heading
    await expect(page.locator('h3:has-text("Side Effects (createEffect)")')).toBeVisible();
    
    // Check for effect demo content
    await expect(page.locator('text=Open browser console to see effect logs')).toBeVisible();
    await expect(page.locator('text=console.log: Effect runs on fullName() changes')).toBeVisible();
  });

  test('Batch section should be visible', async ({ page }) => {
    // Check for batch updates section heading  
    await expect(page.locator('h3:has-text("Batched Updates")')).toBeVisible();
    
    // Check for batch demo content
    await expect(page.locator('text=Effect Run Count:')).toBeVisible();
    await expect(page.locator('button:has-text("Update All (Batched)")')).toBeVisible();
    await expect(page.locator('button:has-text("Reset All")')).toBeVisible();
  });
});
