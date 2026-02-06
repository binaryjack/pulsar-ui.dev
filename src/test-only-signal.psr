/**
 * ABSOLUTE MINIMAL - Just one signal call in text
 */

import { useState } from '@pulsar-framework/pulsar.dev';

export const TestOnlySignal2 = (): HTMLElement => {
  console.log('[TestOnlySignal] START');

  const [count, setCount] = useState(0);
  console.log('[TestOnlySignal] count created, initial value:', count());

  console.log('[TestOnlySignal] Creating div...');
  const container = <div>Test: {count()}</div>;

  console.log('[TestOnlySignal] Returning container');
  return container;
};

export const TestOnlySignal1 = (): HTMLElement => {
  console.log('[TestOnlySignal] START');

  const [count, setCount] = useState(0);
  console.log('[TestOnlySignal] count created, initial value:', count());

  console.log('[TestOnlySignal] Creating div...');
  const container = (
    <div>
      Test: {count()}
      <div>Nested component: {TestOnlySignal2()}</div>
    </div>
  );

  console.log('[TestOnlySignal] Returning container');
  return container;
};
