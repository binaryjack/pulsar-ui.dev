/**
 * Integration Tests: Showcase Navigation
 * Tests router navigation between showcase pages
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { HomePage } from '../../home/home.psr';

describe.skip('Showcase Navigation Integration', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    // Reset URL
    window.history.pushState({}, '', '/');
  });

  describe('Navigation Bar', () => {
    it('should render all navigation buttons', () => {
      const app = HomePage();
      container.appendChild(app);

      expect(container.textContent).toContain('Home');
      expect(container.textContent).toContain('Reactivity');
      expect(container.textContent).toContain('JSX');
      expect(container.textContent).toContain('Control Flow');
      expect(container.textContent).toContain('Resources');
      expect(container.textContent).toContain('Errors');
      expect(container.textContent).toContain('Context');
      expect(container.textContent).toContain('About');
    });

    it('should have navigation buttons with proper styling', () => {
      const app = App();
      container.appendChild(app);

      const navButtons = container.querySelectorAll('nav button');
      expect(navButtons.length).toBeGreaterThanOrEqual(8);
    });
  });

  describe('Route Navigation', () => {
    it('should display home page by default', () => {
      const app = App();
      container.appendChild(app);

      expect(container.textContent).toContain('Welcome to Pulsar Framework');
    });

    it('should navigate to reactivity page', (done) => {
      const app = App();
      container.appendChild(app);

      const reactivityBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Reactivity')
      );

      reactivityBtn?.click();

      setTimeout(() => {
        expect(window.location.pathname).toBe('/reactivity');
        done();
      }, 50);
    });

    it('should navigate to about page', (done) => {
      const app = App();
      container.appendChild(app);

      const aboutBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'About'
      );

      aboutBtn?.click();

      setTimeout(() => {
        expect(window.location.pathname).toBe('/about');
        done();
      }, 50);
    });

    it('should update currentPath signal on navigation', (done) => {
      const app = App();
      container.appendChild(app);

      const jsxBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('JSX')
      );

      jsxBtn?.click();

      setTimeout(() => {
        expect(window.location.pathname).toBe('/jsx');
        done();
      }, 50);
    });
  });

  describe('Page Content Loading', () => {
    it('should load control flow page content', (done) => {
      const app = App();
      container.appendChild(app);

      const controlFlowBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Control Flow')
      );

      controlFlowBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Control Flow Primitives');
        done();
      }, 100);
    });

    it('should load context page content', (done) => {
      const app = App();
      container.appendChild(app);

      const contextBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Context')
      );

      contextBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Context API');
        done();
      }, 100);
    });
  });

  describe('Back Navigation', () => {
    it('should navigate back from about to home', (done) => {
      const app = App();
      container.appendChild(app);

      const aboutBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) => btn.textContent === 'About'
      );

      aboutBtn?.click();

      setTimeout(() => {
        const backBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
          btn.textContent?.includes('Back to Home')
        );

        backBtn?.click();

        setTimeout(() => {
          expect(window.location.pathname).toBe('/');
          done();
        }, 50);
      }, 100);
    });
  });
});
