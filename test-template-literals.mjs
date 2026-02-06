/**
 * Test template literals and array access
 */

import { createPipeline } from '../pulsar-transformer/dist/index.js';

const test1 = `
const fn = (name: string): string => {
  const parts = name.split(' ');
  return parts[0];
};

component Test() {
  return <div>Test</div>;
}
`;

const test2 = `
const fn = (name: string): string => {
  const parts = name.split(' ');
  return \`\${parts[0]}\`;
};

component Test() {
  return <div>Test</div>;
}
`;

const test3 = `
const fn = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return \`\${parts[0][0]}\${parts[parts.length - 1][0]}\`.toUpperCase();
  }
  return name.substring(0, 2);
};

component Test() {
  return <div>Test</div>;
}
`;

const pipeline = createPipeline();

console.log('Test 1: Arrow function with array access\n');
const result1 = pipeline.transform(test1);
console.log(result1.code ? '✅ PASSED\n' : '❌ FAILED: ' + result1.diagnostics[0]?.message + '\n');

console.log('Test 2: Template literal basic\n');
const result2 = pipeline.transform(test2);
console.log(result2.code ? '✅ PASSED\n' : '❌ FAILED: ' + result2.diagnostics[0]?.message + '\n');

console.log('Test 3: Template literal with nested array access (exact avatar pattern)\n');
const result3 = pipeline.transform(test3);
console.log(result3.code ? '✅ PASSED' : '❌ FAILED: ' + result3.diagnostics[0]?.message);
