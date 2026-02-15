/**
 * Unit Tests: About Page
 * Tests router interaction, toggle details, navigation
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { AboutPage } from '../about.psr';

describe('AboutPage', () => {
  let container: HTMLElement;
  const mockRouter = {
    navigate: vi.fn(),
    location: { pathname: '/about', search: '' }
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render about heading', () => {
      const page = AboutPage();
      container.appendChild(page);
      
      const heading = container.querySelector('h2');
      expect(heading?.textContent).toContain('About Pulsar Framework');
    });

    it('should render key features list', () => {
      const page = AboutPage();
      container.appendChild(page);
      
      const list = container.querySelector('ul');
      expect(list).toBeTruthy();
      expect(list?.querySelectorAll('li').length).toBeGreaterThan(5);
    });

    it('should render toggle details button', () => {
      const page = AboutPage();
      container.appendChild(page);
      
      const button = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Show More Details'));
      expect(button).toBeTruthy();
    });

    it('should render back to home button', () => {
      const page = AboutPage();
      container.appendChild(page);
      
      const button = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Back to Home'));
      expect(button).toBeTruthy();
    });
  });

  describe('Toggle Details Behavior', () => {
    it('should hide details by default', () => {
      const page = AboutPage();
      container.appendChild(page);
      
      const detailsSection = Array.from(container.querySelectorAll('div'))
        .find(div => div.textContent?.includes('Navigation System'));
      expect(detailsSection).toBeFalsy();
    });

    it('should show details after clicking toggle button', (done) => {
      const page = AboutPage();
      container.appendChild(page);
      
      const toggleBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Show More Details'));
      
      toggleBtn?.click();
      
      setTimeout(() => {
        const detailsSection = Array.from(container.querySelectorAll('div'))
          .find(div => div.textContent?.includes('Navigation System'));
        expect(detailsSection).toBeTruthy();
        done();
      }, 50);
    });

    it('should toggle button text when clicked', (done) => {
      const page = AboutPage();
      container.appendChild(page);
      
      const toggleBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Show More'));
      
      expect(toggleBtn?.textContent).toContain('Show More Details');
      toggleBtn?.click();
      
      setTimeout(() => {
        expect(toggleBtn?.textContent).toContain('Hide Details');
        done();
      }, 50);
    });
  });

  describe('Router Integration', () => {
    it('should display current route path', () => {
      const page = AboutPage();
      container.appendChild(page);
      
      const routeInfo = Array.from(container.querySelectorAll('p'))
        .find(p => p.textContent?.includes('Current Path'));
      expect(routeInfo).toBeTruthy();
    });
  });
});
