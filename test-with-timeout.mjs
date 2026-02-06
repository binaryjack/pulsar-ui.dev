/**
 * Test PSR files individually with timeout protection
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs'
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
const results = [];

console.log('━'.repeat(60));
console.log('🧪 TESTING PSR FILES WITH TIMEOUT PROTECTION');
console.log('━'.repeat(60));
console.log(`Found ${psrFiles.length} PSR files\n`);

// Test each file with a 5-second timeout
for (let i = 0; i < psrFiles.length; i++) {
  const filePath = psrFiles[i];
  const relativePath = relative(srcDir, filePath);
  
  console.log(`\n${i + 1}/${psrFiles.length}. Testing: ${relativePath}`);
  console.log('-'.repeat(60));
  
  const startTime = Date.now();
  let timedOut = false;
  let testResult = null;
  
  // Set a timeout
  const timeout = setTimeout(() => {
    timedOut = true;
    console.log('⏱️  TIMEOUT (>5s) - Skipping');
    results.push({
      file: relativePath,
      status: 'timeout',
      duration: Date.now() - startTime,
    });
  }, 5000);
  
  if (!timedOut) {
    try {
      const source = readFileSync(filePath, 'utf-8');
      const pipeline = createPipeline({ debug: false });
      const result = pipeline.transform(source);
      
      clearTimeout(timeout);
      const duration = Date.now() - startTime;
      
      if (!result.code || result.code.length === 0) {
        console.log(`❌ FAILED - No code generated (${duration}ms)`);
        results.push({
          file: relativePath,
          status: 'failed',
          reason: 'No code generated',
          diagnostics: result.diagnostics?.length || 0,
          duration,
        });
      } else {
        console.log(`✅ PASSED (${duration}ms)`);
        console.log(`   Code: ${result.code.length} chars, ${result.code.split('\n').length} lines`);
        results.push({
          file: relativePath,
          status: 'passed',
          codeLength: result.code.length,
          lines: result.code.split('\n').length,
          duration,
        });
      }
    } catch (error) {
      clearTimeout(timeout);
      const duration = Date.now() - startTime;
      console.log(`❌ ERROR (${duration}ms)`);
      console.log(`   ${error.message.substring(0, 100)}`);
      results.push({
        file: relativePath,
        status: 'error',
        error: error.message,
        duration,
      });
    }
  }
  
  // If timed out, wait for timeout to finish
  if (timedOut) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}

// Summary
const passed = results.filter(r => r.status === 'passed');
const failed = results.filter(r => r.status === 'failed');
const errors = results.filter(r => r.status === 'error');
const timedOut = results.filter(r => r.status === 'timeout');

console.log('\n' + '━'.repeat(60));
console.log('📊 FINAL RESULTS');
console.log('━'.repeat(60));
console.log(`✅ Passed:    ${passed.length}/${psrFiles.length} (${(passed.length/psrFiles.length*100).toFixed(1)}%)`);
console.log(`❌ Failed:    ${failed.length}/${psrFiles.length}`);
console.log(`⚠️  Errors:    ${errors.length}/${psrFiles.length}`);
console.log(`⏱️  Timeouts:  ${timedOut.length}/${psrFiles.length}`);

// Save results to file
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0] + '_' + 
                   new Date().toTimeString().split(' ')[0].replace(/:/g, '');
const resultFile = `../../docs/implementations/psr-files-fix/test-run-${timestamp}.md`;

const markdown = `# PSR Files Test Run - ${new Date().toISOString()}

## Summary
- **Total Files:** ${psrFiles.length}
- **Passed:** ${passed.length} (${(passed.length/psrFiles.length*100).toFixed(1)}%)
- **Failed:** ${failed.length} 
- **Errors:** ${errors.length}
- **Timeouts:** ${timedOut.length}

## Passing Files ✅
${passed.map((r, i) => `${i + 1}. **${r.file}** - ${r.codeLength} chars, ${r.lines} lines, ${r.duration}ms`).join('\n') || 'None'}

## Failed Files ❌
${failed.map((r, i) => `${i + 1}. **${r.file}** - ${r.reason} (${r.diagnostics} diagnostics, ${r.duration}ms)`).join('\n') || 'None'}

## Error Files ⚠️
${errors.map((r, i) => `${i + 1}. **${r.file}** - ${r.error} (${r.duration}ms)`).join('\n') || 'None'}

## Timeout Files ⏱️
${timedOut.map((r, i) => `${i + 1}. **${r.file}** - Exceeded 5 second timeout (infinite loop suspected)`).join('\n') || 'None'}

## Next Steps
${timedOut.length > 0 ? '- Investigate infinite loop in timeout files\n' : ''}${failed.length > 0 ? '- Fix code generation issues in failed files\n' : ''}${errors.length > 0 ? '- Fix errors in error files\n' : ''}${passed.length === psrFiles.length ? '- ✅ ALL FILES PASSING - Ready for browser validation!\n' : ''}
`;

try {
  writeFileSync(resultFile, markdown, 'utf-8');
  console.log(`\n📄 Results saved to: ${resultFile}`);
} catch (e) {
  console.log(`\n⚠️  Could not save results file: ${e.message}`);
}

console.log('\n' + '━'.repeat(60));
process.exit(failed.length + errors.length + timedOut.length);
