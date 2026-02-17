/**
 * Integration Tests: Context Provider-Consumer
 * Tests context propagation through component tree
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { ContextTestPage } from '../../context/context-test.psr';

describe('Context Provider-Consumer Integration', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Multi-Context Propagation', () => {
    it('should provide all contexts to nested components', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      const nested = Array.from(container.querySelectorAll('div')).find((div) =>
        div.textContent?.includes('Deeply Nested Component')
      );

      expect(nested).toBeTruthy();
      expect(nested?.textContent).toContain('Theme:');
      expect(nested?.textContent).toContain('User:');
      expect(nested?.textContent).toContain('Font Size:');
    });

    it('should update all consumers when provider value changes', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const lightBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Light')
      );

      lightBtn?.click();

      setTimeout(() => {
        // All themed components should reflect change
        const themedBoxes = Array.from(container.querySelectorAll('div')).filter((div) =>
          div.textContent?.includes('Themed Component')
        );

        expect(themedBoxes.length).toBeGreaterThan(0);

        // Nested component should also update
        const nested = Array.from(container.querySelectorAll('div')).find((div) =>
          div.textContent?.includes('Deeply Nested Component')
        );
        expect(nested?.textContent).toContain('Theme: light');

        done();
      }, 50);
    });
  });

  describe('Independent Context Updates', () => {
    it('should update user context without affecting theme', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const initialTheme = container.textContent?.includes('Theme: dark');

      const adminBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Login as Admin')
      );

      adminBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Welcome, Alice!');
        expect(container.textContent).toContain('Theme: dark'); // Unchanged
        done();
      }, 50);
    });

    it('should update settings context without affecting others', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const slider = container.querySelector('input[type="range"]') as HTMLInputElement;
      slider.value = '20';
      slider.dispatchEvent(new Event('input', { bubbles: true }));

      setTimeout(() => {
        expect(container.textContent).toContain('Font: 20px');
        expect(container.textContent).toContain('Theme: dark'); // Unchanged
        expect(container.textContent).toContain('User: Guest'); // Unchanged
        done();
      }, 50);
    });
  });

  describe('Cross-Context Dependencies', () => {
    it('should access multiple contexts in single component', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      const nested = Array.from(container.querySelectorAll('div')).find((div) =>
        div.textContent?.includes('Deeply Nested Component')
      );

      // Should list all three context values
      const nestedContent = nested?.textContent || '';
      expect(nestedContent).toContain('Theme:');
      expect(nestedContent).toContain('User:');
      expect(nestedContent).toContain('Font Size:');
    });
  });
});
