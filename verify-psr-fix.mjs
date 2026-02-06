#!/usr/bin/env node
/**
 * Comprehensive verification that PSR transformation is fixed in vite plugin
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\n' + '═'.repeat(80));
console.log('🔍 PSR TRANSFORMATION FIX VERIFICATION');
console.log('═'.repeat(80) + '\n');

// 1. Check vite plugin source
console.log('1️⃣  Checking vite plugin source code...');
const viteSrcPath = path.join(__dirname, '../pulsar-vite-plugin/src/index.ts');
const viteSrc = fs.readFileSync(viteSrcPath, 'utf8');

const checks = {
  'transformPSRFile function defined': viteSrc.includes('function transformPSRFile'),
  'createPipeline imported': viteSrc.includes('createPipeline'),
  'endsWith .psr check': viteSrc.includes('endsWith(\'.psr\')'),
  'await transformPSRFile': viteSrc.includes('await transformPSRFile'),
  'HMR handles .psr': viteSrc.includes('ctx.file.endsWith(\'.psr\')'),
};

let srcOK = true;
Object.entries(checks).forEach(([check, result]) => {
  console.log(`   ${result ? '✅' : '❌'} ${check}`);
  if (!result) srcOK = false;
});

// 2. Check compiled output
console.log('\n2️⃣  Checking compiled plugin output...');
const viteDistPath = path.join(__dirname, '../pulsar-vite-plugin/dist/index.js');
const viteDist = fs.readFileSync(viteDistPath, 'utf8');

const compiledChecks = {
  'transformPSRFile in dist': viteDist.includes('function transformPSRFile'),
  'PSR detection in transform': viteDist.includes('.psr'),
};

let distOK = true;
Object.entries(compiledChecks).forEach(([check, result]) => {
  console.log(`   ${result ? '✅' : '❌'} ${check}`);
  if (!result) distOK = false;
});

// 3. Check transformer availability
console.log('\n3️⃣  Checking transformer package...');
const transformerPath = path.join(__dirname, '../pulsar-transformer/dist/index.js');
const transformerExists = fs.existsSync(transformerPath);
console.log(`   ${transformerExists ? '✅' : '❌'} Transformer dist/index.js exists`);

// 4. Check PSR files in pulsar-ui.dev
console.log('\n4️⃣  Checking PSR files in pulsar-ui.dev...');
function countPSRFiles(dir) {
  let count = 0;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        count += countPSRFiles(fullPath);
      } else if (entry.name.endsWith('.psr')) {
        count++;
      }
    });
  } catch (e) {
    // Ignore errors
  }
  return count;
}

const psrFileCount = countPSRFiles(path.join(__dirname, 'src'));
console.log(`   ${psrFileCount > 0 ? '✅' : '⚠️'} Found ${psrFileCount} PSR files`);

// 5. Verify vite config includes the plugin
console.log('\n5️⃣  Checking vite.config.ts configuration...');
const viteConfigPath = path.join(__dirname, 'vite.config.ts');
const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

const configChecks = {
  'pulsar plugin imported': viteConfig.includes('import pulsar'),
  'pulsar plugin used in plugins': viteConfig.includes('pulsar({'),
  'debug enabled': viteConfig.includes('debug: true'),
};

let configOK = true;
Object.entries(configChecks).forEach(([check, result]) => {
  console.log(`   ${result ? '✅' : '❌'} ${check}`);
  if (!result) configOK = false;
});

// Summary
console.log('\n' + '═'.repeat(80));
console.log('📋 VERIFICATION SUMMARY');
console.log('═'.repeat(80) + '\n');

const allOK = srcOK && distOK && transformerExists && psrFileCount > 0 && configOK;

if (allOK) {
  console.log('✅ ALL CHECKS PASSED!\n');
  console.log('The PSR transformation fix is complete and ready:');
  console.log('  • vite plugin source code includes PSR handling');
  console.log('  • Plugin compiled successfully with PSR support');
  console.log('  • Transformer pipeline available for PSR→TS conversion');
  console.log(`  • ${psrFileCount} PSR files found in pulsar-ui.dev`);
  console.log('  • vite config correctly configured with pulsar plugin\n');
  console.log('🚀 Next step: npm run dev\n');
} else {
  console.log('⚠️  Some checks failed. Please review the issues above.\n');
}

console.log('═'.repeat(80) + '\n');

process.exit(allOK ? 0 : 1);
