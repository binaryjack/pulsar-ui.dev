/**
 * TEST SIGNAL INTERPOLATION - Just one signal, no components
 */

import { useState } from '@pulsar-framework/pulsar.dev';

export const TestSignal = (): HTMLElement => {
  console.log('[TestSignal] Executing...');

  const [count, setCount] = useState(0);

  console.log('[TestSignal] count() initial value:', count());

  const handleClick = () => {
    console.log('[TestSignal] Incrementing count');
    setCount(count() + 1);
  };

  const container = (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', color: '#333' }}>
      <h1>🔬 SIGNAL INTERPOLATION TEST</h1>
      <p>Testing if signal values can be displayed</p>

      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#e3f2fd',
          borderRadius: '4px',
        }}
      >
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Count value: {count()}
        </div>

        <button
          onClick={handleClick}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Increment (current: {count()})
        </button>
      </div>

      <div
        style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
          fontSize: '0.9rem',
        }}
      >
        <strong>What to check:</strong>
        <ul style={{ margin: '0.5rem 0', paddingLeft: '1.5rem' }}>
          <li>Do you see the count value above?</li>
          <li>Does it say "Count value: 0"?</li>
          <li>Can you click the button?</li>
          <li>Does the count increment when clicked?</li>
        </ul>
      </div>
    </div>
  );

  console.log('[TestSignal] Returning container');
  return container;
};
