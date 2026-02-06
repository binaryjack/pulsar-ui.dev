/**
 * Test 2b: Simple Interactive (debugging version)
 * Just one signal, one button
 */
import { useState } from '@pulsar-framework/pulsar.dev';

export const TestSimpleInteractive = (): HTMLElement => {
  console.log('[TestSimpleInteractive] START');

  const [count, setCount] = useState(0);

  return (
    <div style="padding: 20px;">
      <h2>Test 2b: Simple Interactive tes</h2>
      <p>Count: {count()}</p>
      <button
        onClick={() => {
          console.log('[TestSimpleInteractive] Button clicked');
          setCount((prev) => prev + 1);
        }}
      >
        Increment me
      </button>
    </div>
  );
};
