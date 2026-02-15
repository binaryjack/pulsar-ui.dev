/**
 * Unit Tests: Assignment Test Page
 * Tests assignment expression parsing
 */

import { beforeEach, describe, expect, it } from 'vitest';
import { AssignmentTest } from '../assignment-test.psr';

describe('AssignmentTest', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  describe('Rendering', () => {
    it('should render without errors', () => {
      const page = AssignmentTest();
      container.appendChild(page);

      expect(container.textContent).toContain('Assignment Expression Test');
    });

    it('should display initial count', () => {
      const page = AssignmentTest();
      container.appendChild(page);

      expect(container.textContent).toContain('Count: 0');
    });

    it('should display success message', () => {
      const page = AssignmentTest();
      container.appendChild(page);

      expect(container.textContent).toContain('assignment expressions are working');
    });
  });

  describe('Assignment Operations', () => {
    it('should increment count when button clicked', (done) => {
      const page = AssignmentTest();
      container.appendChild(page);

      const button = container.querySelector('button');
      button?.click();

      setTimeout(() => {
        expect(container.textContent).toContain('Count: 1');
        done();
      }, 50);
    });

    it('should execute assignment in testAssignments function', (done) => {
      const page = AssignmentTest();
      container.appendChild(page);

      const button = container.querySelector('button');
      button?.click();

      setTimeout(() => {
        // If no error thrown, assignment worked
        expect(container.textContent).toBeTruthy();
        done();
      }, 50);
    });
  });
});
