/**
 * Unit Tests: Reactivity Test Page
 * Tests signals, memos, effects, and batch updates
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ReactivityTestPage } from '../reactivity-test.psr';

describe('ReactivityTestPage', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  describe('Signal State', () => {
    it('should render initial signal values', () => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('John');
      expect(container.textContent).toContain('Doe');
      expect(container.textContent).toContain('25');
    });

    it('should update firstName when button clicked', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const aliceBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Set First: Alice'));
      
      aliceBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Alice');
        done();
      }, 50);
    });

    it('should update lastName when button clicked', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const johnsonBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Set Last: Johnson'));
      
      johnsonBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Johnson');
        done();
      }, 50);
    });

    it('should increment age when button clicked', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const incrementBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Increment Age'));
      
      incrementBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('26');
        done();
      }, 50);
    });
  });

  describe('Computed Values (Memos)', () => {
    it('should display computed full name', () => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const fullNameText = Array.from(container.querySelectorAll('div'))
        .find(div => div.textContent?.includes('Full Name (computed)'));
      expect(fullNameText?.textContent).toContain('John Doe');
    });

    it('should update full name when signals change', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const aliceBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Set First: Alice'));
      
      aliceBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Alice Doe');
        done();
      }, 50);
    });

    it('should display isAdult computed value', () => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      expect(container.textContent).toContain('Is Adult');
      expect(container.textContent).toContain('✅ Yes');
    });
  });

  describe('Batch Updates', () => {
    it('should update all values simultaneously', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const updateBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Update All (Batched)'));
      
      updateBtn?.click();
      
      setTimeout(() => {
        expect(container.textContent).toContain('Jane');
        expect(container.textContent).toContain('Smith');
        expect(container.textContent).toContain('30');
        done();
      }, 50);
    });

    it('should reset all values', (done) => {
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const updateBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Update All'));
      updateBtn?.click();
      
      setTimeout(() => {
        const resetBtn = Array.from(container.querySelectorAll('button'))
          .find(btn => btn.textContent?.includes('Reset All'));
        resetBtn?.click();
        
        setTimeout(() => {
          expect(container.textContent).toContain('John');
          expect(container.textContent).toContain('Doe');
          expect(container.textContent).toContain('25');
          done();
        }, 50);
      }, 50);
    });
  });

  describe('Side Effects', () => {
    it('should log to console when name changes', (done) => {
      const consoleSpy = vi.spyOn(console, 'log');
      const page = ReactivityTestPage();
      container.appendChild(page);
      
      const aliceBtn = Array.from(container.querySelectorAll('button'))
        .find(btn => btn.textContent?.includes('Set First: Alice'));
      
      aliceBtn?.click();
      
      setTimeout(() => {
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining('[Effect] Full name changed to:')
        );
        done();
      }, 50);
    });
  });
});
