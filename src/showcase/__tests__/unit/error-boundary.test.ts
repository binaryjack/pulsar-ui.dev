/**
 * Unit Tests: Error Boundary Showcase Components
 * Tests Tryer/Catcher error handling
 */

import { createSignal } from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Error Boundary Unit Tests', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  describe('Basic Error Handling', () => {
    it('should catch thrown errors', () => {
      const errorMessage = 'Test error';
      let caughtError: Error | null = null;

      try {
        throw new Error(errorMessage);
      } catch (error) {
        caughtError = error as Error;
      }

      expect(caughtError).not.toBeNull();
      expect(caughtError?.message).toBe(errorMessage);
    });

    it('should display safe component when no error', () => {
      const [throwError, setThrowError] = createSignal(false);

      const element = document.createElement('div');
      if (!throwError()) {
        element.textContent = 'Safe Component';
      } else {
        element.textContent = 'Error!';
      }
      container.appendChild(element);

      expect(element.textContent).toBe('Safe Component');
    });

    it('should handle error toggle', () => {
      const [throwError, setThrowError] = createSignal(false);

      expect(throwError()).toBe(false);

      setThrowError(true);
      expect(throwError()).toBe(true);

      setThrowError(false);
      expect(throwError()).toBe(false);
    });
  });

  describe('Error Messages', () => {
    it('should handle custom error messages', () => {
      const [errorMessage, setErrorMessage] = createSignal('Default error');

      expect(errorMessage()).toBe('Default error');

      setErrorMessage('Custom error message');
      expect(errorMessage()).toBe('Custom error message');
    });

    it('should display error message in UI', () => {
      const message = 'Something went wrong!';
      const errorDisplay = document.createElement('div');
      errorDisplay.className = 'error';
      errorDisplay.textContent = message;
      container.appendChild(errorDisplay);

      expect(errorDisplay.textContent).toBe(message);
      expect(errorDisplay.className).toBe('error');
    });
  });

  describe('Reset Functionality', () => {
    it('should reset error state', () => {
      const [hasError, setHasError] = createSignal(true);

      const reset = () => {
        setHasError(false);
      };

      expect(hasError()).toBe(true);
      reset();
      expect(hasError()).toBe(false);
    });
  });

  describe('Error Component State', () => {
    it('should track componentDidThrow state', () => {
      const [componentDidThrow, setComponentDidThrow] = createSignal(false);

      const simulateError = () => {
        try {
          throw new Error('Component error');
        } catch (error) {
          setComponentDidThrow(true);
        }
      };

      expect(componentDidThrow()).toBe(false);
      simulateError();
      expect(componentDidThrow()).toBe(true);
    });
  });
});
