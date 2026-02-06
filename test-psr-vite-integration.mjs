/**
 * Test PSR file transformation through vite plugin integration
 * Simulates what the vite plugin does when it encounters .psr files
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, extname } from 'path';
import { createPipeline } from '../pulsar-transformer/dist/index.js';

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

console.log('\n' + '═'.repeat(70));
console.log('🧪 VITE PLUGIN - PSR FILE TRANSFORMATION TEST');
console.log('═'.repeat(70));
console.log(`Found ${psrFiles.length} PSR files to transform\n`);

const results = {
  passed: [],
  failed: [],
  warnings: [],
  totalTransformed: 0,
};

psrFiles.forEach((filePath, index) => {
  const fileName = relative(srcDir, filePath);
  process.stdout.write(`[${index + 1}/${psrFiles.length}] ${fileName}... `);

  try {
    const psrCode = readFileSync(filePath, 'utf8');
    const pipeline = createPipeline({
      filePath: filePath,
      debug: false,
    });

    const result = pipeline.transform(psrCode);

    if (!result.code || result.code.trim().length === 0) {
      process.stdout.write('❌ EMPTY OUTPUT\n');
      results.failed.push({
        file: fileName,
        error: 'Empty transformation output',
      });
      return;
    }

    const errors = result.diagnostics.filter((d) => d.type === 'error');
    const warnings = result.diagnostics.filter((d) => d.type === 'warning');

    if (errors.length > 0) {
      process.stdout.write(`⚠️ TRANSFORMED WITH ERRORS\n`);
      results.warnings.push({
        file: fileName,
        errors: errors.map((e) => e.message),
      });
    } else {
      process.stdout.write(`✅ OK\n`);
      results.passed.push(fileName);
    }

    if (warnings.length > 0) {
      results.warnings.push({
        file: fileName,
        warnings: warnings.map((w) => w.message),
      });
    }

    results.totalTransformed++;
  } catch (error) {
    process.stdout.write(`❌ ERROR\n`);
    results.failed.push({
      file: fileName,
      error: error.message,
    });
  }
});

// Print summary
console.log('\n' + '═'.repeat(70));
console.log('📊 TRANSFORMATION TEST SUMMARY');
console.log('═'.repeat(70));

console.log(`\n✅ Passed: ${results.passed.length}`);
if (results.passed.length > 0 && results.passed.length <= 10) {
  results.passed.forEach((f) => console.log(`   • ${f}`));
}

console.log(`\n⚠️  Warnings: ${results.warnings.length}`);
if (results.warnings.length > 0 && results.warnings.length <= 5) {
  results.warnings.slice(0, 5).forEach((w) => {
    console.log(`   • ${w.file}`);
    if (w.warnings) {
      w.warnings.slice(0, 2).forEach((msg) => console.log(`     - ${msg}`));
    }
  });
}

console.log(`\n❌ Failed: ${results.failed.length}`);
if (results.failed.length > 0 && results.failed.length <= 5) {
  results.failed.forEach((f) => {
    console.log(`   • ${f.file}`);
    console.log(`     - ${f.error}`);
  });
}

console.log(`\n📈 Total Transformed: ${results.totalTransformed}/${psrFiles.length}`);

if (results.failed.length === 0) {
  console.log('\n🎉 All PSR files transformed successfully via pipeline!');
  console.log(
    '   The vite plugin should now handle .psr files correctly in dev mode.'
  );
} else {
  console.log(
    `\n⚠️  ${results.failed.length} files failed transformation. Review errors above.`
  );
}

console.log('═'.repeat(70) + '\n');
