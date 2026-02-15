/**
 * Unit Tests: Home Page
 * Tests the Counter component integration
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { HomePage } from '../home.psr';

describe('HomePage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Rendering', () => {
    it('should render welcome heading', () => {
      const page = HomePage();
      container.appendChild(page);

      const heading = container.querySelector('h2');
      expect(heading).toBeTruthy();
      expect(heading?.textContent).toContain('Welcome to Pulsar Framework');
    });

    it('should render description text', () => {
      const page = HomePage();
      container.appendChild(page);

      const description = container.querySelector('p');
      expect(description).toBeTruthy();
      expect(description?.textContent).toContain('reactive UI framework');
    });

    it('should render Counter component', () => {
      const page = HomePage();
      container.appendChild(page);

      // Counter should be present with its specific ID
      const counter = container.querySelector('[id*="counter"]');
      expect(counter).toBeTruthy();
    });
  });

  describe('Structure', () => {
    it('should have proper section layout', () => {
      const page = HomePage();
      container.appendChild(page);

      expect(container.querySelector('div')).toBeTruthy();
    });
  });
});
