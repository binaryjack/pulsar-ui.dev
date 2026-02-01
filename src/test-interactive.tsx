/**
 * Test 2: Interactive Signals
 * Tests: onClick handlers, signal updates, reactivity
 */
import { useState } from '@pulsar-framework/pulsar.dev';

export const TestInteractive = (): HTMLElement => {
  console.log('[TestInteractive] Component START');

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Click a button!');

  console.log('[TestInteractive] Signals created');

  return (
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Test 2: Interactive Signals</h2>

      <div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
        <p>
          Count: <strong>{count()}</strong>
        </p>
        <p>
          Message: <strong>{message()}</strong>
        </p>
      </div>

      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <button
          onClick={() => {
            console.log('[TestInteractive] Increment clicked');
            setCount((prev) => {
              const newValue = prev + 1;
              setMessage(`Incremented to ${newValue}`);
              return newValue;
            });
          }}
          style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Increment
        </button>

        <button
          onClick={() => {
            console.log('[TestInteractive] Decrement clicked');
            setCount((prev) => {
              const newValue = prev - 1;
              setMessage(`Decremented to ${newValue}`);
              return newValue;
            });
          }}
          style="padding: 10px 20px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Decrement
        </button>

        <button
          onClick={() => {
            console.log('[TestInteractive] Reset clicked');
            setCount(0);
            setMessage('Reset to zero!');
          }}
          style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Reset
        </button>
      </div>

      <div style="margin-top: 20px; padding: 10px; background: #d4edda; border-radius: 4px;">
        <small>
          ✅ Tests: onClick handlers, multiple signals, reactivity, string interpolation in updates
        </small>
      </div>
    </div>
  );
};
