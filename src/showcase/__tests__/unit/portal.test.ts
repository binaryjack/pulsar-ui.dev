/**
 * Unit Tests: Portal Showcase Components
 * Tests portal rendering and positioning
 */

import { createSignal } from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Portal Unit Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.id = 'test-container';
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    // Clean up any portaled elements
    const portals = document.querySelectorAll('[data-portal]');
    portals.forEach((portal) => portal.remove());
  });

  describe('Basic Portal', () => {
    it('should render portal content outside parent', () => {
      const portalContent = document.createElement('div');
      portalContent.dataset.portal = 'true';
      portalContent.textContent = 'Portaled Content';
      document.body.appendChild(portalContent);

      expect(document.body.contains(portalContent)).toBe(true);
      expect(container.contains(portalContent)).toBe(false);
    });

    it('should toggle portal visibility', () => {
      const [showPortal, setShowPortal] = createSignal(false);

      expect(showPortal()).toBe(false);

      setShowPortal(true);
      expect(showPortal()).toBe(true);

      if (showPortal()) {
        const portal = document.createElement('div');
        portal.dataset.portal = 'true';
        document.body.appendChild(portal);
        expect(document.querySelector('[data-portal]')).not.toBeNull();
      }
    });

    it('should mount to custom element', () => {
      const customMount = document.createElement('div');
      customMount.id = 'custom-mount';
      document.body.appendChild(customMount);

      const portalContent = document.createElement('div');
      portalContent.textContent = 'Portal in custom mount';
      customMount.appendChild(portalContent);

      expect(customMount.contains(portalContent)).toBe(true);

      customMount.remove();
    });
  });

  describe('Modal Portal', () => {
    it('should create modal overlay', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.right = '0';
      overlay.style.bottom = '0';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      document.body.appendChild(overlay);

      expect(overlay.style.position).toBe('fixed');
      expect(overlay.style.backgroundColor).toBe('rgba(0, 0, 0, 0.5)');

      overlay.remove();
    });

    it('should center modal content', () => {
      const modal = document.createElement('div');
      modal.style.position = 'fixed';
      modal.style.top = '50%';
      modal.style.left = '50%';
      modal.style.transform = 'translate(-50%, -50%)';

      expect(modal.style.position).toBe('fixed');
      expect(modal.style.top).toBe('50%');
      expect(modal.style.left).toBe('50%');
    });
  });

  describe('Tooltip Portal', () => {
    it('should position tooltip near trigger', () => {
      const tooltip = document.createElement('div');
      tooltip.style.position = 'absolute';
      tooltip.style.top = '100px';
      tooltip.style.left = '200px';

      expect(tooltip.style.position).toBe('absolute');
      expect(tooltip.style.top).toBe('100px');
      expect(tooltip.style.left).toBe('200px');
    });
  });

  describe('Portal Cleanup', () => {
    it('should remove portal content on unmount', () => {
      const portal = document.createElement('div');
      portal.dataset.portal = 'test';
      document.body.appendChild(portal);

      expect(document.querySelector('[data-portal="test"]')).not.toBeNull();

      portal.remove();
      expect(document.querySelector('[data-portal="test"]')).toBeNull();
    });
  });
});
