/**
 * Unit Tests: JSX Test Page
 * Tests reactive attributes, event handlers, style objects
 */

import { beforeEach, describe, expect, it } from 'vitest'
import { JsxTestPage } from '../jsx-test.psr'

describe('JsxTestPage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Reactive Attributes', () => {
    it('should render initial background color', () => {
      const page = JsxTestPage();
      container.appendChild(page);

      // Check that the color value is displayed in text
      expect(container.textContent).toContain('Background Color: #3b82f6');
    });

    it('should change background color when button clicked', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const greenBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Green'
      );

      greenBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('#10b981');
        done();
      }, 50);
    });

    it('should toggle disabled state', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const toggleBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Toggle Disabled')
      );

      toggleBtn?.click();

      setTimeout(() => {
        const disabledBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
          btn.textContent?.includes('Disabled Button')
        );
        expect(disabledBtn?.hasAttribute('disabled')).toBe(true);
        done();
      }, 50);
    });
  });

  describe('Event Handlers', () => {
    it('should increment click count', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Click Count: 0');

      const clickBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Click Me!'
      );

      clickBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Click Count: 1');
        done();
      }, 50);
    });

    it('should reset click count', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const clickBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Click Me!'
      );
      clickBtn?.click();

      setTimeout(() => {
        const resetBtn = Array.from(container.querySelectorAll('button')).find(
          (btn) => btn.textContent === 'Reset'
        );
        resetBtn?.click();

        setTimeout(() => {
          expect(container.textContent).toContain('Click Count: 0');
          done();
        }, 50);
      }, 50);
    });

    it('should capture input value', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const input = Array.from(container.querySelectorAll('input')).find((inp) =>
        inp.placeholder?.includes('Type something')
      );

      if (input) {
        (input as HTMLInputElement).value = 'test input';
        input.dispatchEvent(new Event('input', { bubbles: true }));

        setTimeout(() => {
          expect(container.textContent).toContain('test input');
          done();
        }, 50);
      }
    });

    it('should capture key press', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const input = Array.from(container.querySelectorAll('input')).find((inp) =>
        inp.placeholder?.includes('Press any key')
      );

      if (input) {
        const event = new KeyboardEvent('keypress', { key: 'A', bubbles: true });
        input.dispatchEvent(event);

        setTimeout(() => {
          expect(container.textContent).toContain('Last Key Pressed: A');
          done();
        }, 50);
      }
    });
  });

  describe('Reactive Style Objects', () => {
    it('should render with initial font size', () => {
      const page = JsxTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Font size: 16px');
    });

    it('should increase font size', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const largerBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Larger'
      );

      largerBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Font size: 18px');
        done();
      }, 50);
    });

    it('should decrease font size', (done) => {
      const page = JsxTestPage();
      container.appendChild(page);

      const smallerBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'Smaller'
      );

      smallerBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Font size: 14px');
        done();
      }, 50);
    });
  });
});
