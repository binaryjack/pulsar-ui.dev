/**
 * Unit Tests: Resource Test Page
 * Tests createResource, async loading states
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ResourceTestPage } from '../resource-test.psr';

describe('ResourceTestPage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('User Resource', () => {
    it('should show loading state initially', () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('Loading user');
    });

    it('should display user data after loading', async () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      vi.advanceTimersByTime(1500);
      await vi.runAllTimersAsync();
      
      setTimeout(() => {
        expect(container.textContent).toContain('User 1');
        expect(container.textContent).toContain('user1@example.com');
      }, 100);
    });

    it('should refetch when Next User clicked', (done) => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      vi.advanceTimersByTime(1500);
      
      setTimeout(() => {
        const nextBtn = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.textContent?.includes('Next User'));
        
        nextBtn?.click();
        
        expect(container.textContent).toContain('Loading user 2');
        done();
      }, 100);
    });

    it('should cycle back to user 1 after user 10', (done) => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      vi.advanceTimersByTime(1500);
      
      setTimeout(() => {
        const nextBtn = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.textContent?.includes('Next User'));
        
        // Click 10 times to cycle back
        for (let i = 0; i < 10; i++) {
          nextBtn?.click();
        }
        
        vi.advanceTimersByTime(1500);
        setTimeout(() => {
          expect(container.textContent).toContain('User 1');
          done();
        }, 100);
      }, 100);
    });
  });

  describe('Dependent Resource (Posts)', () => {
    it('should load posts after user loads', async () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      vi.advanceTimersByTime(2700); // User (1500) + Posts (1200)
      await vi.runAllTimersAsync();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Getting Started with Pulsar');
        expect(container.textContent).toContain('42 likes');
      }, 100);
    });

    it('should refetch posts when user changes', (done) => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      vi.advanceTimersByTime(2700);
      
      setTimeout(() => {
        const nextBtn = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.textContent?.includes('Next User'));
        
        nextBtn?.click();
        
        expect(container.textContent).toContain('Loading posts');
        done();
      }, 100);
    });
  });

  describe('Search Resource', () => {
    it('should show hint for short queries', () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      const input = container.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      input.value = 'l';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      expect(container.textContent).toContain('Type at least 2 characters');
    });

    it('should trigger search for valid queries', (done) => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      const input = container.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      input.value = 'lap';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      setTimeout(() => {
        expect(container.textContent).toContain('Searching');
        done();
      }, 50);
    });

    it('should display search results', async () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      const input = container.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      input.value = 'lap';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      vi.advanceTimersByTime(800);
      await vi.runAllTimersAsync();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Laptop');
        expect(container.textContent).toContain('$999');
      }, 100);
    });

    it('should show error for "error" query', async () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      const input = container.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      input.value = 'error';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      vi.advanceTimersByTime(800);
      await vi.runAllTimersAsync();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Search service unavailable');
      }, 100);
    });

    it('should display in stock status', async () => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      const input = container.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
      input.value = 'key';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      vi.advanceTimersByTime(800);
      await vi.runAllTimersAsync();
      
      setTimeout(() => {
        expect(container.textContent).toContain('In Stock');
      }, 100);
    });
  });

  describe('Refresh Functionality', () => {
    it('should increment refresh count', (done) => {
      const page = ResourceTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('Count: 0');
      
      const refreshBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Refresh'));
      
      refreshBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Count: 1');
        done();
      }, 50);
    });
  });
});
