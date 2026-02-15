/**
 * Unit Tests: Context Test Page
 * Tests createContext, useContext, Provider pattern
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { ContextTestPage } from '../context-test.psr';

describe('ContextTestPage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Theme Context', () => {
    it('should render with default dark theme', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Theme: dark');
    });

    it('should switch to light theme when clicked', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const lightBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Light')
      );

      lightBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Theme: light');
        done();
      }, 50);
    });

    it('should update primary color', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const colorInput = container.querySelector('input[type="color"]') as HTMLInputElement;
      colorInput.value = '#ff0000';
      colorInput.dispatchEvent(new Event('input', { bubbles: true }));

      setTimeout(() => {
        expect(container.textContent).toContain('#ff0000');
        done();
      }, 50);
    });

    it('should apply theme to all themed components', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const lightBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Light')
      );

      lightBtn?.click();

      setTimeout(() => {
        const themedBoxes = Array.from(container.querySelectorAll('div')).filter((div) =>
          div.textContent?.includes('Themed Component')
        );

        expect(themedBoxes.length).toBeGreaterThanOrEqual(3);
        done();
      }, 50);
    });
  });

  describe('User Context', () => {
    it('should show not logged in state initially', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Not logged in');
    });

    it('should login as admin', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const adminBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Login as Admin')
      );

      adminBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Welcome, Alice!');
        expect(container.textContent).toContain('Role: admin');
        done();
      }, 50);
    });

    it('should login as user', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const userBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Login as User')
      );

      userBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Welcome, Bob!');
        expect(container.textContent).toContain('Role: user');
        done();
      }, 50);
    });

    it('should logout', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const adminBtn = Array.from(container.querySelectorAll('button')).find((btn) =>
        btn.textContent?.includes('Login as Admin')
      );
      adminBtn?.click();

      setTimeout(() => {
        const logoutBtn = Array.from(container.querySelectorAll('button')).find(
          (btn) => btn.textContent === 'Logout'
        );
        logoutBtn?.click();

        setTimeout(() => {
          expect(container.textContent).toContain('Not logged in');
          done();
        }, 50);
      }, 50);
    });
  });

  describe('Settings Context', () => {
    it('should render default font size', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Font: 16px');
    });

    it('should adjust font size with slider', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const slider = container.querySelector('input[type="range"]') as HTMLInputElement;
      slider.value = '20';
      slider.dispatchEvent(new Event('input', { bubbles: true }));

      setTimeout(() => {
        expect(container.textContent).toContain('Font: 20px');
        done();
      }, 50);
    });

    it('should toggle notifications', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const notifBtn = Array.from(container.querySelectorAll('button')).find(
        (btn) =>
          btn.textContent === 'ON' &&
          btn.previousElementSibling?.textContent?.includes('Notifications')
      );

      notifBtn?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Notifications: OFF');
        done();
      }, 50);
    });

    it('should change language', (done) => {
      const page = ContextTestPage();
      container.appendChild(page);

      const select = container.querySelector('select') as HTMLSelectElement;
      select.value = 'es';
      select.dispatchEvent(new Event('change', { bubbles: true }));

      setTimeout(() => {
        expect(container.textContent).toContain('Language: es');
        done();
      }, 50);
    });
  });

  describe('Deeply Nested Access', () => {
    it('should access all contexts from nested component', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      expect(container.textContent).toContain('Deeply Nested Component');
      expect(container.textContent).toContain('Can access all contexts');
    });

    it('should display context values in nested component', () => {
      const page = ContextTestPage();
      container.appendChild(page);

      const nestedDiv = Array.from(container.querySelectorAll('div')).find((div) =>
        div.textContent?.includes('Deeply Nested Component')
      );

      expect(nestedDiv?.textContent).toContain('Theme: dark');
      expect(nestedDiv?.textContent).toContain('User: Guest');
      expect(nestedDiv?.textContent).toContain('Font Size: 16px');
    });
  });
});
