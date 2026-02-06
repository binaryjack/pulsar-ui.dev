/**
 * Edge Case 2: Nested Component Children
 *
 * Tests:
 * - Deep component nesting (3+ levels)
 * - Component children with reactive props
 * - Mixed static and reactive children
 * - Proper children prop passing
 */

import { useState } from '@pulsar-framework/pulsar.dev';

// Simple component definitions for testing
interface IContainerProps {
  title?: string;
  children?: HTMLElement | HTMLElement[];
}

const Container = (props: IContainerProps): HTMLElement => {
  const el = document.createElement('div');
  el.style.cssText =
    'padding: 1.5rem; border: 2px solid #3182ce; border-radius: 8px; margin-bottom: 1rem; background: #ebf8ff;';

  if (props.title) {
    const titleEl = document.createElement('h3');
    titleEl.textContent = props.title;
    titleEl.style.cssText = 'margin: 0 0 1rem; color: #2c5282; font-size: 1.3rem;';
    el.appendChild(titleEl);
  }

  if (props.children) {
    if (Array.isArray(props.children)) {
      props.children.forEach((child) => el.appendChild(child));
    } else {
      el.appendChild(props.children);
    }
  }

  return el;
};

interface IStackProps {
  direction?: 'vertical' | 'horizontal';
  spacing?: 'sm' | 'md' | 'lg';
  children?: HTMLElement | HTMLElement[];
}

const Stack = (props: IStackProps): HTMLElement => {
  const direction = props.direction || 'vertical';
  const spacing = props.spacing || 'md';

  const spacingMap = { sm: '0.5rem', md: '1rem', lg: '1.5rem' };

  const el = document.createElement('div');
  el.style.cssText = `display: flex; flex-direction: ${direction === 'vertical' ? 'column' : 'row'}; gap: ${spacingMap[spacing]};`;

  if (props.children) {
    if (Array.isArray(props.children)) {
      props.children.forEach((child) => el.appendChild(child));
    } else {
      el.appendChild(props.children);
    }
  }

  return el;
};

interface ICardProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  children?: HTMLElement | HTMLElement[];
}

const Card = (props: ICardProps): HTMLElement => {
  const variant = props.variant || 'default';

  const variantStyles = {
    default: 'background: white; border: 2px solid #e2e8f0;',
    success: 'background: #f0fff4; border: 2px solid #68d391;',
    warning: 'background: #fffaf0; border: 2px solid #f6ad55;',
    error: 'background: #fff5f5; border: 2px solid #fc8181;',
  };

  const el = document.createElement('div');
  el.style.cssText = `${variantStyles[variant]} padding: 1rem; border-radius: 6px;`;

  if (props.children) {
    if (Array.isArray(props.children)) {
      props.children.forEach((child) => el.appendChild(child));
    } else {
      el.appendChild(props.children);
    }
  }

  return el;
};

export const EdgeCase2NestedComponents = (): HTMLElement => {
  console.log('[EdgeCase2] Initializing nested components test');

  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState('Hello, Pulsar!');
  const [status, setStatus] = useState<'default' | 'success' | 'warning' | 'error'>('default');

  const increment = () => setCounter((c) => c + 1);
  const decrement = () => setCounter((c) => c - 1);
  const reset = () => setCounter(0);

  const cycleStatus = () => {
    const statuses: Array<'default' | 'success' | 'warning' | 'error'> = [
      'default',
      'success',
      'warning',
      'error',
    ];
    const currentIndex = statuses.indexOf(status());
    const nextIndex = (currentIndex + 1) % statuses.length;
    setStatus(statuses[nextIndex]);
  };

  return (
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: system-ui;">
      <div style="border-bottom: 2px solid #805ad5; padding-bottom: 1rem; margin-bottom: 2rem;">
        <h1 style="margin: 0; color: #805ad5; font-size: 2rem;">
          🟣 Edge Case 2: Nested Components
        </h1>
        <p style="margin: 0.5rem 0 0; color: #666;">
          Testing deep component nesting with reactive children
        </p>
      </div>

      {/* CRITICAL: This is the edge case - deeply nested components with reactive props */}
      <Container title="Level 1: Container">
        <Stack direction="vertical" spacing="lg">
          {/* Level 2: Stack with multiple Card children */}

          <Card variant={status()}>
            {/* Level 3: Card with reactive content */}
            <div style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem; color: #2d3748;">
              Counter: <span style="color: #3182ce; font-size: 1.5rem;">{counter()}</span>
            </div>
            <div style="color: #718096; font-size: 0.875rem; margin-bottom: 1rem;">
              Status: <strong>{status()}</strong>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button
                onClick={increment}
                style="padding: 0.5rem 1rem; background: #48bb78; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
              >
                +1
              </button>
              <button
                onClick={decrement}
                style="padding: 0.5rem 1rem; background: #fc8181; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
              >
                -1
              </button>
              <button
                onClick={reset}
                style="padding: 0.5rem 1rem; background: #a0aec0; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;"
              >
                Reset
              </button>
            </div>
          </Card>

          <Card variant="success">
            <div style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem; color: #2d3748;">
              Message Display
            </div>
            <div style="padding: 0.75rem; background: white; border-radius: 4px; margin-bottom: 1rem; font-family: monospace;">
              {message()}
            </div>
            <input
              type="text"
              value={message()}
              onInput={(e: Event) => setMessage((e.target as HTMLInputElement).value)}
              style="width: 100%; padding: 0.5rem; border: 1px solid #cbd5e0; border-radius: 4px; font-size: 1rem;"
            />
          </Card>

          <Card variant="warning">
            <div style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem; color: #2d3748;">
              Status Cycler
            </div>
            <div style="margin-bottom: 1rem; padding: 0.75rem; background: white; border-radius: 4px;">
              Current status variant: <strong style="color: #d69e2e;">{status()}</strong>
            </div>
            <button
              onClick={cycleStatus}
              style="padding: 0.5rem 1.5rem; background: #ed8936; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%;"
            >
              Cycle Status
            </button>
          </Card>
        </Stack>
      </Container>

      {/* Another nested structure */}
      <Container title="Level 1: Second Container">
        <Stack direction="horizontal" spacing="md">
          <Card variant="default">
            <div style="text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📊</div>
              <div style="font-weight: bold;">Clicks</div>
              <div style="font-size: 1.5rem; color: #3182ce;">{counter()}</div>
            </div>
          </Card>

          <Card variant={counter() > 5 ? 'success' : 'default'}>
            <div style="text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">
                {counter() > 5 ? '🎉' : '⏱️'}
              </div>
              <div style="font-weight: bold;">Progress</div>
              <div style="font-size: 1rem; color: #718096;">
                {counter() > 5 ? 'Goal reached!' : 'Keep going...'}
              </div>
            </div>
          </Card>

          <Card variant={counter() < 0 ? 'error' : 'default'}>
            <div style="text-align: center;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">
                {counter() < 0 ? '⚠️' : '✅'}
              </div>
              <div style="font-weight: bold;">Validation</div>
              <div style="font-size: 1rem; color: #718096;">
                {counter() < 0 ? 'Negative!' : 'Valid'}
              </div>
            </div>
          </Card>
        </Stack>
      </Container>

      {/* Debug info */}
      <div style="padding: 1.5rem; background: #faf5ff; border-radius: 8px; border: 2px solid #d6bcfa; margin-top: 2rem;">
        <h2 style="margin: 0 0 1rem; color: #6b46c1; font-size: 1.2rem;">🔍 Debug Info</h2>
        <pre style="background: white; padding: 1rem; border-radius: 4px; overflow: auto; font-size: 0.875rem; margin: 0;">
          {`Current State:
  - Counter: ${counter()}
  - Message: "${message()}"
  - Status: ${status()}

Nesting Structure:
  Container (Level 1)
    └─ Stack (Level 2)
        ├─ Card (Level 3)
        │   └─ Reactive content (Level 4)
        ├─ Card (Level 3)
        │   └─ Input with reactive binding (Level 4)
        └─ Card (Level 3)
            └─ Button with reactive state (Level 4)

Expected Behavior:
  ✅ All components should receive transformed children
  ✅ Reactive props should update correctly
  ✅ Component hierarchy preserved
  ✅ No "React is not defined" errors

Check Console for:
  - [jsx-transform] Transforming <Container>
  - [jsx-transform] Transforming <Stack>
  - [jsx-transform] Transforming <Card>
  - [generate-component-call] Children processing`}
        </pre>
      </div>
    </div>
  );
};
