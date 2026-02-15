/**
 * Unit Tests: Error Boundary Test Page
 * Tests Tryer/Catcher error boundary pattern
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ErrorBoundaryTestPage } from '../error-boundary-test.psr';

describe('ErrorBoundaryTestPage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('Basic Error Boundary', () => {
    it('should render safe component initially', () => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('This component is safe');
    });

    it('should catch error when triggered', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const triggerBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Trigger Error');
      
      triggerBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Error Caught');
        expect(container.textContent).toContain('Critical render error!');
        done();
      }, 50);
    });

    it('should display custom error message', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const input = container.querySelector('input[placeholder*="Custom error"]') as HTMLInputElement;
      input.value = 'My custom error message';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      
      const triggerBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Trigger Error');
      triggerBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('My custom error message');
        done();
      }, 50);
    });

    it('should reset boundary when reset clicked', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const triggerBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Trigger Error');
      triggerBtn?.click();
      
      setTimeout(() => {
        const resetBtn = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.textContent?.includes('Reset Boundary'));
        resetBtn?.click();
        
        setTimeout(() => {
          expect(container.textContent).toContain('This component is safe');
          done();
        }, 50);
      }, 50);
    });
  });

  describe('Multiple Independent Boundaries', () => {
    it('should isolate errors to single section', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const toggleBtns = Array.from(container.querySelectorAll('button'))
        .filter(btn => btn.textContent === 'Toggle Error');
      
      toggleBtns[0]?.click(); // Section 1
      
      setTimeout(() => {
        expect(container.textContent).toContain('Section 1 failed');
        expect(container.textContent).not.toContain('Section 2 failed');
        expect(container.textContent).not.toContain('Section 3 failed');
        done();
      }, 50);
    });

    it('should allow multiple sections to error simultaneously', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const toggleBtns = Array.from(container.querySelectorAll('button'))
        .filter(btn => btn.textContent === 'Toggle Error');
      
      toggleBtns[0]?.click(); // Section 1
      toggleBtns[1]?.click(); // Section 2
      
      setTimeout(() => {
        expect(container.textContent).toContain('Section 1 failed');
        expect(container.textContent).toContain('Section 2 failed');
        done();
      }, 50);
    });
  });

  describe('Nested Boundaries', () => {
    it('should render healthy state initially', () => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('All components healthy');
    });

    it('should catch inner error with inner boundary', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const innerBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Toggle Inner Error');
      
      innerBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Inner boundary caught');
        expect(container.textContent).toContain('Inner component failed');
        expect(container.textContent).not.toContain('Outer boundary caught');
        done();
      }, 50);
    });

    it('should catch outer error with outer boundary', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const outerBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Toggle Outer Error');
      
      outerBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Outer boundary caught');
        expect(container.textContent).toContain('Outer component failed');
        done();
      }, 50);
    });
  });

  describe('Error Recovery Pattern', () => {
    it('should fail on first attempt', () => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('Attempt 1');
      expect(container.textContent).toContain('Service temporarily unavailable');
    });

    it('should track retry attempts', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const retryBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Retry');
      
      retryBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Attempts: 1 / 3');
        done();
      }, 50);
    });

    it('should succeed after 3 attempts', (done) => {
      const page = ErrorBoundaryTestPage();
      container.appendChild(page);
      
      const retryBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent === 'Retry');
      
      retryBtn?.click();
      setTimeout(() => {
        retryBtn?.click();
        setTimeout(() => {
          const finalBtn = Array.from(container.querySelectorAll('button'))
            .find(btn => btn.textContent === 'Final Attempt');
          finalBtn?.click();
          
          setTimeout(() => {
            expect(container.textContent).toContain('Success!');
            expect(container.textContent).toContain('after 3 retries');
            done();
          }, 50);
        }, 50);
      }, 50);
    });
  });
});
