/**
 * MINIMAL TEST PAGE - No Router, No Complex Structure
 * Just basic atoms to test transformation and reactivity
 */

import { createEffect, useState } from '@pulsar-framework/pulsar.dev';
import { Input } from './components/atoms/input/input';
import { Button } from './components/molecules/button/button';

export const TestMinimal = (): HTMLElement => {
  console.log('[TestMinimal] Component executing...');

  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  // Log when signals change
  createEffect(() => {
    console.log('[TestMinimal] Count changed:', count());
  });

  createEffect(() => {
    console.log('[TestMinimal] Text changed:', text());
  });

  createEffect(() => {
    console.log('[TestMinimal] Items changed:', items());
  });

  const handleClick = () => {
    console.log('[TestMinimal] Button clicked, incrementing count');
    setCount(count() + 1);
  };

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    console.log('[TestMinimal] Input changed:', target.value);
    setText(target.value);
  };

  const addItem = () => {
    console.log('[TestMinimal] Adding item to array');
    const newItems = [...items(), `Item ${items().length + 1}`];
    setItems(newItems);
  };

  const container = (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', borderBottom: '2px solid #333', paddingBottom: '1rem' }}>
        <h1 style={{ margin: '0', fontSize: '2rem', color: '#333' }}>🧪 MINIMAL TEST PAGE</h1>
        <p style={{ margin: '0.5rem 0 0', color: '#666' }}>
          Testing basic components, transformation, and reactivity
        </p>
      </div>

      {/* Test Section 1: Button + Counter */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          border: '2px solid #4CAF50',
          borderRadius: '8px',
          backgroundColor: '#f0f9f0',
        }}
      >
        <h2 style={{ margin: '0 0 1rem', color: '#2E7D32' }}>
          ✅ Test 1: Button & Counter (useState)
        </h2>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
            Count: <span style={{ color: '#4CAF50' }}>{count()}</span>
          </div>
        </div>
        <Button onClick={handleClick} variant="primary">
          Click Me ({count()})
        </Button>
      </div>

      {/* Test Section 2: Input */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          border: '2px solid #2196F3',
          borderRadius: '8px',
          backgroundColor: '#e3f2fd',
        }}
      >
        <h2 style={{ margin: '0 0 1rem', color: '#1565C0' }}>✅ Test 2: Input (Two-way binding)</h2>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '1.2rem', color: '#333' }}>
            Current value: <span style={{ color: '#2196F3', fontWeight: 'bold' }}>{text()}</span>
          </div>
        </div>
        <Input
          value={text()}
          onChange={handleInputChange}
          placeholder="Type something..."
          style={{ width: '300px' }}
        />
      </div>

      {/* Test Section 3: Array.map() - THE CRITICAL TEST */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          border: '2px solid #FF9800',
          borderRadius: '8px',
          backgroundColor: '#fff3e0',
        }}
      >
        <h2 style={{ margin: '0 0 1rem', color: '#E65100' }}>
          🔥 Test 3: Array.map() Transformation (CRITICAL)
        </h2>
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ fontSize: '1.1rem', color: '#333', marginBottom: '0.5rem' }}>
            Array length:{' '}
            <span style={{ color: '#FF9800', fontWeight: 'bold' }}>{items().length}</span>
          </div>
          <Button onClick={addItem} variant="secondary">
            Add Item
          </Button>
        </div>

        {/* THIS IS THE CRITICAL TEST - array.map() transformation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            marginTop: '1rem',
          }}
        >
          {items().map((item, index) => (
            <div
              key={item}
              style={{
                padding: '1rem',
                backgroundColor: '#fff',
                border: '1px solid #FF9800',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontWeight: 'bold' }}>{index + 1}.</span>
              <span style={{ flex: 1, marginLeft: '1rem' }}>{item}</span>
              <Button
                onClick={() => {
                  console.log('[TestMinimal] Removing item:', item);
                  setItems(items().filter((i) => i !== item));
                }}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Debug Info */}
      <div
        style={{
          marginTop: '2rem',
          padding: '1.5rem',
          border: '2px solid #9C27B0',
          borderRadius: '8px',
          backgroundColor: '#f3e5f5',
        }}
      >
        <h2 style={{ margin: '0 0 1rem', color: '#6A1B9A' }}>🔍 Debug Info</h2>
        <pre
          style={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '0.9rem',
          }}
        >
          {`Current State:
  - Count: ${count()}
  - Text: "${text()}"
  - Items: [${items()
    .map((i) => `"${i}"`)
    .join(', ')}]

Check Console for:
  - [TestMinimal] logs
  - [REGISTRY.*] logs
  - [generate-keyed-map] logs
  - Transformation logs`}
        </pre>
      </div>
    </div>
  );

  console.log('[TestMinimal] Component rendered, returning container');
  return container;
};
