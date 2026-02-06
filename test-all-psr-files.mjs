/**
 * Test all PSR files in pulsar-ui.dev
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'
import { createPipeline } from '../pulsar-transformer/dist/index.js'

// Find all .psr files recursively
function findPSRFiles(dir, fileList = []) {
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      findPSRFiles(filePath, fileList);
    } else if (file.endsWith('.psr')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const srcDir = './src';
const psrFiles = findPSRFiles(srcDir);

console.log('━'.repeat(60));
console.log('🧪 TESTING ALL PSR FILES IN PULSAR-UI.DEV');
console.log('━'.repeat(60));
console.log(`Found ${psrFiles.length} PSR files\n`);

const pipeline = createPipeline({
  debug: true, // ENABLE DEBUG MODE
  debugLogger: {
    enabled: true,
    console: true,
    timestamps: true,
    performance: true,
    minLevel: 'trace',
  },
});
const results = {
  passed: [],
  failed: [],
  warnings: [],
};

psrFiles.forEach((filePath, index) => {
  const relativePath = relative(srcDir, filePath);
  
  // TEMPORARY: Skip files with known parser hangs
  if (relativePath.includes('edge-case-1-array-map') || relativePath.includes('edge-case-3-conditionals')) {
    console.log(`\n${index + 1}. SKIPPED: ${relativePath} (known parser hang)`);
    console.log('-'.repeat(60));
    results.failed.push({
      file: relativePath,
      reason: 'Skipped - known parser infinite loop',
    });
    return;
  }
  
  console.log(`\n${index + 1}. Testing: ${relativePath}`);
  console.log('-'.repeat(60));

  try {
    const source = readFileSync(filePath, 'utf-8');
    const result = pipeline.transform(source);

    // Check if code was generated
    if (!result.code || result.code.trim().length === 0) {
      results.failed.push({
        file: relativePath,
        reason: 'No code generated',
        diagnostics: result.diagnostics,
      });
      console.log('❌ FAILED - No code generated');
      if (result.diagnostics.length > 0) {
        console.log(`   Diagnostics: ${result.diagnostics.length}`);
        result.diagnostics.slice(0, 3).forEach((diag, i) => {
          console.log(`   ${i + 1}. ${diag.message}`);
        });
      }
      return;
    }

    // Check validation
    const isValid = result.validation && result.validation.valid;
    if (!isValid) {
      results.warnings.push({
        file: relativePath,
        reason: 'Validation failed',
        diagnostics: result.diagnostics,
      });
      console.log('⚠️  GENERATED BUT VALIDATION FAILED');
      console.log(`   Code length: ${result.code.length} chars`);
      if (result.diagnostics.length > 0) {
        console.log(`   Diagnostics: ${result.diagnostics.length}`);
      }
      return;
    }

    // Success
    results.passed.push({
      file: relativePath,
      codeLength: result.code.length,
      lines: result.code.split('\n').length,
    });
    console.log('✅ PASSED');
    console.log(`   Code: ${result.code.length} chars, ${result.code.split('\n').length} lines`);
  } catch (error) {
    results.failed.push({
      file: relativePath,
      reason: error.message,
      stack: error.stack,
    });
    console.log('❌ FAILED - Exception');
    console.log(`   Error: ${error.message}`);
  }
});

// Summary
console.log('\n' + '━'.repeat(60));
console.log('📊 FINAL RESULTS');
console.log('━'.repeat(60));
console.log(`✅ Passed:   ${results.passed.length}/${psrFiles.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}/${psrFiles.length}`);
console.log(`❌ Failed:   ${results.failed.length}/${psrFiles.length}`);
console.log(`Success Rate: ${((results.passed.length / psrFiles.length) * 100).toFixed(1)}%`);

// Details of failures
if (results.failed.length > 0) {
  console.log('\n' + '━'.repeat(60));
  console.log('❌ FAILED FILES DETAILS');
  console.log('━'.repeat(60));
  results.failed.forEach((fail, i) => {
    console.log(`\n${i + 1}. ${fail.file}`);
    console.log(`   Reason: ${fail.reason}`);
    if (fail.diagnostics && fail.diagnostics.length > 0) {
      console.log(`   Diagnostics:`);
      fail.diagnostics.slice(0, 3).forEach((diag) => {
        console.log(`   - ${diag.message}`);
      });
    }
  });
}

// Details of warnings
if (results.warnings.length > 0) {
  console.log('\n' + '━'.repeat(60));
  console.log('⚠️  WARNING FILES DETAILS');
  console.log('━'.repeat(60));
  results.warnings.forEach((warn, i) => {
    console.log(`\n${i + 1}. ${warn.file}`);
    console.log(`   Reason: ${warn.reason}`);
  });
}

console.log('\n' + '━'.repeat(60));

process.exit(results.failed.length > 0 ? 1 : 0);
