/**
 * Quick test of arrow function transformation
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

console.log('Testing arrow function transformation...\n');
console.log('Source:\n', simpleArrow);
console.log('\n' + '='.repeat(60) + '\n');

const pipeline = createPipeline({ debug: true });
const result = pipeline.transform(simpleArrow);

// Log AST to see what was parsed
if (result.metadata && result.metadata.ast) {
  console.log('\n' + '='.repeat(60));
  console.log('AST INSPECTION:');
  console.log(JSON.stringify(result.metadata.ast, null, 2));
  console.log('='.repeat(60) + '\n');
}

console.log('Generated code:');
console.log(result.code);
console.log('\n' + '='.repeat(60));
console.log('Diagnostics:', result.diagnostics.length);
if (result.diagnostics.length > 0) {
  console.log('\nDiagnostic Messages:');
  result.diagnostics.forEach((diag, i) => {
    console.log(`\n${i + 1}. [${diag.severity}] ${diag.message}`);
    if (diag.location) {
      console.log(`   Location: Line ${diag.location.line}, Column ${diag.location.column}`);
    }
  });
}
const validationStatus = result.validation && result.validation.valid ? 'PASSED' : 'FAILED';
console.log('\nValidation:', validationStatus);
