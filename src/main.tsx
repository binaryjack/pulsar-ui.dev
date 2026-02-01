/**
 * Pulsar UI Showcase - Test Suite Runner
 * Switch between different test scenarios to validate transformer fixes
 */

import { bootstrapApp } from '@pulsar-framework/pulsar.dev';
import { TestArrayMap } from './test-array-map';
import { TestComplex } from './test-complex';
import { TestConditional } from './test-conditional';
import { TestInteractive } from './test-interactive';
import { TestNested } from './test-nested';
import { TestOnlySignal1 } from './test-only-signal';
import { TestSimpleInteractive } from './test-simple-interactive';

// Test suite - configure which test to run
const tests = {
  'test1-basic': { component: TestOnlySignal1, name: 'Test 1: Basic Signal' },
  'test2-simple': { component: TestSimpleInteractive, name: 'Test 2: Simple Interactive' },
  'test2-interactive': { component: TestInteractive, name: 'Test 2: Interactive Buttons' },
  'test3-array-map': { component: TestArrayMap, name: 'Test 3: Array.map() & wire()' },
  'test4-conditional': { component: TestConditional, name: 'Test 4: Conditional Rendering' },
  'test5-nested': { component: TestNested, name: 'Test 5: Nested Components' },
  'test6-complex': { component: TestComplex, name: 'Test 6: Complex Combination' },
};

// 🎯 Change this to switch tests:
const currentTest = 'test2-simple';

const testConfig = tests[currentTest];
console.log(`[main.tsx] 🧪 Running: ${testConfig.name}`);
console.log(
  '[main.tsx] Available tests:',
  Object.keys(tests).map((k) => tests[k].name)
);

// Build and mount application
const root = bootstrapApp()
  .root('#app')
  .onError((error) => {
    console.error('[main.tsx] ❌ Application error:', error);
    console.error('[main.tsx] Stack trace:', error.stack);
  })
  .build();

// Mount the selected test
try {
  const TestComponent = testConfig.component;
  root.mount(<TestComponent />);
  console.log(`[main.tsx] ✅ ${testConfig.name} mounted successfully`);
} catch (error) {
  console.error(`[main.tsx] ❌ Failed to mount ${testConfig.name}:`, error);
  console.error('[main.tsx] Error details:', error);
}
