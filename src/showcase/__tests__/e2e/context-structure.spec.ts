import { test } from '@playwright/test';

test('Debug context structure', async ({ page }) => {
  page.on('console', (msg) => {
    console.log(`[BROWSER ${msg.type()}]:`, msg.text());
  });

  await page.goto('http://localhost:3004/context');
  await page.waitForTimeout(2000);

  // Check DOM structure
  const structure = await page.evaluate(() => {
    const walkNodes = (node, depth = 0) => {
      const indent = '  '.repeat(depth);
      let result = `${indent}${node.nodeName}`;
      if (node.id) result += `#${node.id}`;
      if (node.className) result += `.${node.className}`;
      if (node.textContent && node.textContent.trim() && node.children.length === 0) {
        result += `: "${node.textContent.trim().slice(0, 50)}"`;
      }
      result += '\\n';

      for (const child of node.children) {
        result += walkNodes(child, depth + 1);
      }
      return result;
    };

    const contextSection =
      document.body.querySelector('[data-testid], section') || document.body.firstElementChild;
    return walkNodes(contextSection);
  });

  console.log('[DOM STRUCTURE]:\\n', structure);

  // Check if providers are in DOM
  const providerCheck = await page.evaluate(() => {
    return {
      hasThemeProvider: document.body.textContent.includes('ThemeProvider'),
      hasUserProvider: document.body.textContent.includes('UserProvider'),
      contextElements: document.querySelectorAll('[data-context]').length,
    };
  });

  console.log('[PROVIDER CHECK]:', providerCheck);
});
