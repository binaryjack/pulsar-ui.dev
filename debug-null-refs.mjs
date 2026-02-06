/**
 * Debug null reference errors in main.psr and simple-psr-test.psr
 */

import { readFileSync } from 'fs';
import { createPipeline } from '../pulsar-transformer/dist/index.js';

const files = [
  {
    name: 'main.psr',
    path: './src/main.psr',
  },
  {
    name: 'simple-psr-test.psr',
    path: './src/simple-psr-test.psr',
  },
];

console.log('🔍 Debugging null reference errors\n');

const pipeline = createPipeline({ debug: true });

files.forEach((file, index) => {
  console.log(`\n${index + 1}. ${file.name}`);
  console.log('='.repeat(70));

  try {
    const source = readFileSync(file.path, 'utf-8');
    console.log(`Source (first 300 chars):\n${source.substring(0, 300)}...\n`);

    const result = pipeline.transform(source);

    if (result.diagnostics.length > 0) {
      console.log('Diagnostics:');
      result.diagnostics.forEach((diag) => {
        console.log(`- [${diag.phase}] ${diag.message}`);
      });
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
    console.log(`\nStack (first 10 lines):`);
    console.log(error.stack.split('\n').slice(0, 10).join('\n'));
  }

  console.log('\n' + '='.repeat(70));
});
