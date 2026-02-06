/**
 * Comprehensive test of all transformer fixes
 */

import { createPipeline } from '../pulsar-transformer/dist/index.js';

const testCases = [
  {
    name: 'Variable Declarations (Parser Token Bug Fix)',
    source: `component Test() {
  const x = 1;
  let y = 2;
  return <div>Test</div>;
}`,
  },
  {
    name: 'Arrow Function with Block Body (All Fixes)',
    source: `component Test() {
  const updateStep = (next) => {
    setStep(Math.max(1, next));
  };
  return <div>Test</div>;
}`,
  },
  {
    name: 'Member Expression (Analyzer Fix)',
    source: `component Test() {
  const val = Math.max(1, 2);
  return <div>Test</div>;
}`,
  },
  {
    name: 'Binary Expression',
    source: `component Test() {
  const sum = 1 + 2;
  return <div>Test</div>;
}`,
  },
  {
    name: 'Conditional Expression',
    source: `component Test() {
  const val = isActive ? 1 : 0;
  return <div>Test</div>;
}`,
  },
];

console.log('━'.repeat(60));
console.log('🔧 COMPREHENSIVE TRANSFORMER TEST');
console.log('━'.repeat(60));
console.log(`Testing ${testCases.length} scenarios...\n`);

const pipeline = createPipeline({ debug: false });
let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
  console.log(`\n${index + 1}. ${test.name}`);
  console.log('-'.repeat(60));

  try {
    const result = pipeline.transform(test.source);

    if (result.code && result.code.trim().length > 0) {
      const validationStatus = result.validation && result.validation.valid;
      if (validationStatus) {
        console.log('✅ PASSED');
        console.log(`   Code: ${result.code.split('\n')[0].substring(0, 50)}...`);
        passed++;
      } else {
        console.log('⚠️  GENERATED BUT VALIDATION FAILED');
        console.log(`   Diagnostics: ${result.diagnostics.length}`);
        failed++;
      }
    } else {
      console.log('❌ FAILED - No code generated');
      console.log(`   Diagnostics: ${result.diagnostics.length}`);
      if (result.diagnostics.length > 0) {
        result.diagnostics.forEach((diag) => {
          console.log(`      ${diag.message}`);
        });
      }
      failed++;
    }
  } catch (error) {
    console.log('❌ FAILED - Exception');
    console.log(`   Error: ${error.message}`);
    failed++;
  }
});

console.log('\n' + '━'.repeat(60));
console.log('📊 RESULTS');
console.log('━'.repeat(60));
console.log(`✅ Passed: ${passed}/${testCases.length}`);
console.log(`❌ Failed: ${failed}/${testCases.length}`);
console.log(`Success Rate: ${((passed / testCases.length) * 100).toFixed(1)}%`);
console.log('━'.repeat(60));

process.exit(failed > 0 ? 1 : 0);
