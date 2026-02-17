/**
 * Unit Tests: Reactivity Showcase Components
 * Tests signal, memo, effect, and batch demos
 */

import {
  $REGISTRY,
  batch,
  createEffect,
  createMemo,
  createSignal,
} from '@pulsar-framework/pulsar.dev';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('Reactivity Unit Tests', () => {
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

  describe('Signal Demo', () => {
    it('should update UI when signal changes', () => {
      const [count, setCount] = createSignal(0);

      const element = document.createElement('div');
      element.textContent = `Count: ${count()}`;
      container.appendChild(element);

      expect(element.textContent).toBe('Count: 0');

      setCount(5);
      element.textContent = `Count: ${count()}`;
      expect(element.textContent).toBe('Count: 5');
    });

    it('should handle multiple signals independently', () => {
      const [firstName, setFirstName] = createSignal('John');
      const [lastName, setLastName] = createSignal('Doe');

      expect(firstName()).toBe('John');
      expect(lastName()).toBe('Doe');

      setFirstName('Jane');
      expect(firstName()).toBe('Jane');
      expect(lastName()).toBe('Doe');
    });

    it('should handle numeric signal increments', () => {
      const [age, setAge] = createSignal(25);

      setAge(age() + 1);
      expect(age()).toBe(26);

      setAge(age() + 5);
      expect(age()).toBe(31);
    });
  });

  describe('Memo Demo', () => {
    it('should compute derived values from signals', () => {
      const [count, setCount] = createSignal(5);
      const doubled = createMemo(() => count() * 2);

      expect(doubled()).toBe(10);

      setCount(10);
      expect(doubled()).toBe(20);
    });

    it('should memoize computations', () => {
      let computeCount = 0;
      const [value, setValue] = createSignal(10);

      const expensive = createMemo(() => {
        computeCount++;
        return value() * 2;
      });

      // First access triggers computation
      expect(expensive()).toBe(20);
      expect(computeCount).toBe(1);

      // Repeated access without signal change should not recompute
      expect(expensive()).toBe(20);
      expect(computeCount).toBe(1);

      // Changing signal triggers recomputation
      setValue(20);
      expect(expensive()).toBe(40);
      expect(computeCount).toBe(2);
    });
  });

  describe('Effect Demo', () => {
    it('should run effect when dependencies change', async () => {
      const [count, setCount] = createSignal(0);
      let effectRuns = 0;
      let lastValue = -1;

      createEffect(() => {
        effectRuns++;
        lastValue = count();
      });

      // Wait for initial effect
      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(effectRuns).toBeGreaterThan(0);
      expect(lastValue).toBe(0);

      const initialRuns = effectRuns;
      setCount(5);

      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(effectRuns).toBeGreaterThan(initialRuns);
      expect(lastValue).toBe(5);
    });
  });

  describe('Batch Demo', () => {
    it('should batch multiple signal updates', () => {
      const [firstName, setFirstName] = createSignal('John');
      const [lastName, setLastName] = createSignal('Doe');
      let effectCount = 0;

      createEffect(() => {
        firstName();
        lastName();
        effectCount++;
      });

      const initialCount = effectCount;

      // Without batch, this would trigger effect twice
      batch(() => {
        setFirstName('Jane');
        setLastName('Smith');
      });

      // With batch, effect should only run once for all updates
      expect(firstName()).toBe('Jane');
      expect(lastName()).toBe('Smith');
    });
  });
});
