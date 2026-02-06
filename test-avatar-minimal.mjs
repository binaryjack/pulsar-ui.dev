/**
 * Minimal test case for avatar.psr parsing issue
 */

import { createPipeline } from '../pulsar-transformer/dist/index.js';

// Test 1: Simple arrow function with type annotation
const test1 = `
component Test() {
  const fn = (name: string): string => {
    return name;
  };
  return <div>{fn('test')}</div>;
}
`;

// Test 2: Component with destructuring
const test2 = `
component Test({ name }: { name: string }) {
  return <div>{name}</div>;
}
`;

// Test 3: Component with destructuring + default
const test3 = `
component Test({ name = 'default' }: { name?: string }) {
  return <div>{name}</div>;
}
`;

// Test 4: Component with destructuring + rest
const test4 = `
component Test({ name, ...rest }: { name: string; [key: string]: any }) {
  return <div {...rest}>{name}</div>;
}
`;

// Test 5: Full avatar pattern
const test5 = `
const getInitials = (name: string): string => {
  return name.substring(0, 2);
};

component Avatar({ size = 'md', ...rest }: { size?: string }) {
  return <div>{size}</div>;
}
`;

const tests = [
  { name: 'Arrow function with return type', code: test1 },
  { name: 'Component with destructuring', code: test2 },
  { name: 'Component with default value', code: test3 },
  { name: 'Component with rest', code: test4 },
  { name: 'Full avatar pattern', code: test5 },
];

const pipeline = createPipeline({ debug: false });

console.log('🧪 AVATAR.PSR MINIMAL TEST CASES\n');

tests.forEach((test, i) => {
  console.log(`${i + 1}. ${test.name}`);
  console.log('-'.repeat(60));

  try {
    const result = pipeline.transform(test.code);

    if (result.code && result.code.length > 0) {
      console.log('✅ PASSED');
    } else {
      console.log('❌ FAILED - No code generated');
      if (result.diagnostics.length > 0) {
        result.diagnostics.forEach((d) => {
          if (d.type === 'error') {
            console.log(`   Error: ${d.message}`);
          }
        });
      }
    }
  } catch (error) {
    console.log('❌ FAILED - Exception');
    console.log(`   Error: ${error.message}`);
  }

  console.log('');
});
