/**
 * Test import type handling
 */

import { createPipeline } from '../pulsar-transformer/dist/index.js';

const test1 = `
import { cn } from '@lib';
import type { Props } from './types';

component Test() {
  return <div>Test</div>;
}
`;

const test2 = `
import type { IAvatarProps } from './avatar.type';

const helper = (name: string): string => name;

component Avatar({ name }: IAvatarProps) {
  return <div>{name}</div>;
}
`;

const pipeline = createPipeline({ debug: true });

console.log('Test 1: import + import type\n');
const result1 = pipeline.transform(test1);
if (result1.code) {
  console.log('✅ PASSED\n');
} else {
  console.log('❌ FAILED');
  result1.diagnostics.forEach((d) => console.log(`  ${d.type}: ${d.message}`));
  console.log('');
}

console.log('Test 2: Full avatar pattern\n');
const result2 = pipeline.transform(test2);
if (result2.code) {
  console.log('✅ PASSED');
} else {
  console.log('❌ FAILED');
  result2.diagnostics.forEach((d) => console.log(`  ${d.type}: ${d.message}`));
}
