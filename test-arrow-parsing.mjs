/**
 * Quick test of arrow function parsing
 */

import { createPipeline } from '../pulsar-transformer/dist/index.js';

const simpleArrow = `
component Test() {
  const updateStep = (next) => {
    setStep(Math.max(1, next));
  };
  return <div>Test</div>;
}
`;

console.log('Testing arrow function parsing...\n');
console.log('Source:\n', simpleArrow);
console.log('\n' + '='.repeat(60) + '\n');

const lexer = createLexer();
const tokens = lexer.tokenize(simpleArrow);
consolpipeline = createPipeline({ debug: false });
const result = pipeline.transform(simpleArrow);

console.log('Generated code:');
console.log(result.code);
console.log('\n' + '='.repeat(60));
console.log('Diagnostics:', result.diagnostics.length);
const validationStatus = result.validation && result.validation.valid ? 'PASSED' : 'FAILED';
console.log('Validation:', validationStatus);
