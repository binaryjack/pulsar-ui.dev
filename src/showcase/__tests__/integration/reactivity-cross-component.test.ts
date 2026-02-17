/**
 * Integration Tests: Reactivity Cross-Component
 * Tests signal sharing and reactivity across components
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { ReactivityTestPage } from '../../reactivity/reactivity-test.psr';

describe('Reactivity Cross-Component Integration', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Signal-Memo Integration', () => {
    it('should update memo when dependent signals change', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('John Doe');

      const aliceBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Set First: Alice')
      );

      aliceBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Alice Doe');
        done();
      }, 50);
    });

    it('should update multiple dependent memos', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);

      const ageBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Increment Age')
      );

      // Click 20 times to go from 25 to 45
      for (let i = 0; i < 20; i++) {
        ageBtn?.click();
      }

      setTimeout(() => {
        expect(container.textContent).toContain('45');
        expect(container.textContent).toContain('✅ Yes'); // Still adult
        done();
      }, 100);
    });
  });

  describe('Batch Update Integration', () => {
    it('should update all related displays simultaneously', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);

      const updateBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Update All (Batched)')
      );

      updateBtn?.click();

      setTimeout(() => {
        // All sections should show updated values
        expect(container.textContent).toContain('Jane');
        expect(container.textContent).toContain('Smith');
        expect(container.textContent).toContain('30');
        expect(container.textContent).toContain('Jane Smith'); // Memo updated
        done();
      }, 50);
    });

    it('should maintain consistency after reset', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);

      const updateBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Update All')
      );
      updateBtn?.click();

      setTimeout(() => {
        const resetBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
          btn.textContent?.includes('Reset All')
        );
        resetBtn?.click();

        setTimeout(() => {
          expect(container.textContent).toContain('John');
          expect(container.textContent).toContain('Doe');
          expect(container.textContent).toContain('25');
          expect(container.textContent).toContain('John Doe');
          done();
        }, 50);
      }, 50);
    });
  });
});
