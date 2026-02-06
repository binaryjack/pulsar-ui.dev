import { createPipeline } from '../pulsar-transformer/dist/index.js';

const test = `
const fn = (name: string): string => {
  return name;
};

/**
 * Avatar component - PSR syntax
 * Creates a user avatar - atomic component
 */
component Avatar({ name }: { name: string }) {
  return <div>{name}</div>;
}
`;

const pipeline = createPipeline({ debug: false });
console.log('Testing JSDoc before component...\n');
const result = pipeline.transform(test);

if (result.code) {
  console.log('✅ PASSED');
} else {
  console.log('❌ FAILED');
  result.diagnostics.forEach((d) => {
    console.log(`  [${d.phase}] ${d.type}: ${d.message}`);
  });
}
