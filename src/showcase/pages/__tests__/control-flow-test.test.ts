/**
 * Unit Tests: Control Flow Test Page
 * Tests Show, For, Index components
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { ControlFlowTestPage } from '../control-flow-test.psr';

describe('ControlFlowTestPage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Show Component', () => {
    it('should display content when showContent is true', () => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Content is visible!');
    });

    it('should hide content and show fallback when toggled', (done) => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      const toggleBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Toggle Content'
      );

      toggleBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Content is hidden');
        expect(container.textContent).not.toContain('Content is visible!');
        done();
      }, 50);
    });

    it('should show error when error state is active', (done) => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      const toggleErrorBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Toggle Error'
      );

      toggleErrorBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Error state is active!');
        done();
      }, 50);
    });
  });

  describe('For Component (Keyed Lists)', () => {
    it('should render initial items list', () => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Apple');
      expect(container.textContent).toContain('Banana');
      expect(container.textContent).toContain('Cherry');
    });

    it('should display item prices', () => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('$1.99');
      expect(container.textContent).toContain('$0.99');
      expect(container.textContent).toContain('$2.49');
    });

    it('should add new item when Add Item clicked', (done) => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      const addBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Add Item'
      );

      addBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Total Items: 4');
        done();
      }, 50);
    });

    it('should remove item when Remove clicked', (done) => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      const removeBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Remove'
      );

      removeBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Total Items: 2');
        done();
      }, 50);
    });

    it('should sort items by price', (done) => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      const sortBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Sort by Price'
      );

      sortBtn?.click();

      setTimeout(() => {
        const items = container.textContent!;
        const bananaPos = items.indexOf('Banana');
        const applePos = items.indexOf('Apple');
        const cherryPos = items.indexOf('Cherry');

        expect(bananaPos).toBeLessThan(applePos);
        expect(applePos).toBeLessThan(cherryPos);
        done();
      }, 50);
    });

    it('should calculate total cost', () => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Total Cost:');
      expect(container.textContent).toContain('$5.47');
    });
  });

  describe('Index Component', () => {
    it('should render initial colors with indices', () => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Red');
      expect(container.textContent).toContain('Green');
      expect(container.textContent).toContain('Blue');
      expect(container.textContent).toContain('Yellow');
    });

    it('should display index numbers', () => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Index: 0');
      expect(container.textContent).toContain('Index: 1');
      expect(container.textContent).toContain('Index: 2');
      expect(container.textContent).toContain('Index: 3');
    });

    it('should shuffle colors when button clicked', (done) => {
      const page = ControlFlowTestPage();
      container.appendChild(page);

      const originalOrder = container.textContent;

      const shuffleBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Shuffle Colors'
      );

      shuffleBtn?.click();

      setTimeout(() => {
        // Colors should still exist but may be in different order
        expect(container.textContent).toContain('Red');
        expect(container.textContent).toContain('Green');
        expect(container.textContent).toContain('Blue');
        expect(container.textContent).toContain('Yellow');
        done();
      }, 50);
    });
  });
});
