/**
 * Integration Tests: Error Boundary + Reactivity
 * Tests error handling with reactive state
 */

import { $REGISTRY, createSignal } from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Error Boundary + Reactivity Integration', () => {
  let container: HTMLElement;

  beforeEach(() => {
    $REGISTRY.reset();
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    $REGISTRY.reset();
  });

  describe('Error State Management', () => {
    it('should toggle error state and display appropriate UI', () => {
      const [hasError, setHasError] = createSignal(false);
      const [errorMessage, setErrorMessage] = createSignal('');

      const render = () => {
        const div = document.createElement('div');
        if (hasError()) {
          const errorEl = document.createElement('div');
          errorEl.className = 'error';
          errorEl.textContent = errorMessage() || 'An error occurred';
          div.appendChild(errorEl);
        } else {
          const safeEl = document.createElement('div');
          safeEl.className = 'safe';
          safeEl.textContent = 'No errors';
          div.appendChild(safeEl);
        }
        return div;
      };

      let element = render();
      container.appendChild(element);
      expect(element.querySelector('.safe')).not.toBeNull();
      expect(element.querySelector('.error')).toBeNull();

      setHasError(true);
      setErrorMessage('Something went wrong!');
      container.innerHTML = '';
      element = render();
      container.appendChild(element);
      expect(element.querySelector('.error')).not.toBeNull();
      expect(element.querySelector('.error')?.textContent).toBe('Something went wrong!');
    });

    it('should reset error state', () => {
      const [hasError, setHasError] = createSignal(true);
      const [errorMessage, setErrorMessage] = createSignal('Error!');

      const reset = () => {
        setHasError(false);
        setErrorMessage('');
      };

      expect(hasError()).toBe(true);
      expect(errorMessage()).toBe('Error!');

      reset();
      expect(hasError()).toBe(false);
      expect(errorMessage()).toBe('');
    });
  });

  describe('Multiple Error Boundaries', () => {
    it('should handle errors in different boundaries independently', () => {
      const [error1, setError1] = createSignal(false);
      const [error2, setError2] = createSignal(false);

      expect(error1()).toBe(false);
      expect(error2()).toBe(false);

      setError1(true);
      expect(error1()).toBe(true);
      expect(error2()).toBe(false);

      setError2(true);
      expect(error1()).toBe(true);
      expect(error2()).toBe(true);
    });
  });

  describe('Error Recovery', () => {
    it('should retry after error', () => {
      const [attempt, setAttempt] = createSignal(0);
      const [hasError, setHasError] = createSignal(true);

      const retry = () => {
        setAttempt(attempt() + 1);
        if (attempt() >= 2) {
          setHasError(false);
        }
      };

      expect(hasError()).toBe(true);
      expect(attempt()).toBe(0);

      retry();
      expect(attempt()).toBe(1);
      expect(hasError()).toBe(true);

      retry();
      expect(attempt()).toBe(2);
      expect(hasError()).toBe(false);
    });
  });

  describe('Conditional Error Throwing', () => {
    it('should throw error based on condition', () => {
      const [shouldThrow, setShouldThrow] = createSignal(false);
      const [value, setValue] = createSignal(10);

      const compute = () => {
        if (shouldThrow()) {
          throw new Error('Computation failed');
        }
        return value() * 2;
      };

      expect(compute()).toBe(20);

      setShouldThrow(true);
      expect(() => compute()).toThrow('Computation failed');
    });
  });

  describe('Error Status Display', () => {
    it('should show different status based on error state', () => {
      const [status, setStatus] = createSignal<'safe' | 'warning' | 'error'>('safe');

      const getStatusColor = (status: string) => {
        switch (status) {
          case 'safe':
            return 'green';
          case 'warning':
            return 'yellow';
          case 'error':
            return 'red';
          default:
            return 'gray';
        }
      };

      expect(getStatusColor(status())).toBe('green');

      setStatus('warning');
      expect(getStatusColor(status())).toBe('yellow');

      setStatus('error');
      expect(getStatusColor(status())).toBe('red');
    });
  });
});
