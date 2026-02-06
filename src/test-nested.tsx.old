/**
 * Test 5: Nested Components
 * Tests: Component composition, prop passing, signal propagation
 */
import { useState } from '@pulsar-framework/pulsar.dev';

interface CounterDisplayProps {
  label: string;
  value: number;
  color: string;
}

const CounterDisplay = (props: CounterDisplayProps): HTMLElement => {
  console.log('[CounterDisplay] Rendering with props:', props);

  return (
    <div style={`padding: 10px; margin: 5px 0; background: ${props.color}; border-radius: 4px;`}>
      <strong>{props.label}:</strong> {props.value}
    </div>
  );
};

interface ButtonGroupProps {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const ButtonGroup = (props: ButtonGroupProps): HTMLElement => {
  return (
    <div style="display: flex; gap: 10px; margin: 10px 0;">
      <button
        onClick={props.onIncrement}
        style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        +
      </button>
      <button
        onClick={props.onDecrement}
        style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        -
      </button>
      <button
        onClick={props.onReset}
        style="padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Reset
      </button>
    </div>
  );
};

export const TestNested = (): HTMLElement => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const total = () => count1() + count2() + count3();

  return (
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Test 5: Nested Components</h2>

      <div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
        <h3>Counter 1</h3>
        <CounterDisplay label="Value" value={count1()} color="#d1ecf1" />
        <ButtonGroup
          onIncrement={() => setCount1((prev) => prev + 1)}
          onDecrement={() => setCount1((prev) => prev - 1)}
          onReset={() => setCount1(0)}
        />
      </div>

      <div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
        <h3>Counter 2</h3>
        <CounterDisplay label="Value" value={count2()} color="#fff3cd" />
        <ButtonGroup
          onIncrement={() => setCount2((prev) => prev + 1)}
          onDecrement={() => setCount2((prev) => prev - 1)}
          onReset={() => setCount2(0)}
        />
      </div>

      <div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
        <h3>Counter 3</h3>
        <CounterDisplay label="Value" value={count3()} color="#d4edda" />
        <ButtonGroup
          onIncrement={() => setCount3((prev) => prev + 1)}
          onDecrement={() => setCount3((prev) => prev - 1)}
          onReset={() => setCount3(0)}
        />
      </div>

      <div style="margin: 20px 0; padding: 20px; background: #e7f3ff; border: 2px solid #007bff; border-radius: 8px;">
        <h3>Total Sum</h3>
        <CounterDisplay label="Sum of all counters" value={total()} color="#cfe2ff" />
      </div>

      <div style="margin-top: 20px; padding: 10px; background: #d4edda; border-radius: 4px;">
        <small>
          ✅ Tests: nested components, prop passing, multiple signals, computed signals, component
          reusability
        </small>
      </div>
    </div>
  );
};
