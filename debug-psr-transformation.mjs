/**
 * Debug PSR Transformation
 * Uses new debug logger and validator to inspect transformation issues
 */

import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createPipeline } from '../pulsar-transformer/dist/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Test file to debug
const testFile = process.argv[2] || 'src/simple-psr-test.psr';
const psrPath = join(__dirname, testFile);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔍 PSR TRANSFORMATION DEBUG');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📄 File: ${testFile}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Read PSR source
let psrSource;
try {
  psrSource = readFileSync(psrPath, 'utf-8');
  console.log('✅ PSR file loaded successfully\n');
} catch (error) {
  console.error('❌ Failed to read PSR file:', error.message);
  process.exit(1);
}

// Create pipeline with debug enabled
const pipeline = createPipeline({
  debug: true,
  debugChannels: ['lexer', 'parser', 'analyzer', 'transform', 'emitter', 'validator', 'pipeline'],
});

console.log('🔧 Pipeline Configuration:');
console.log('  - Debug: ENABLED');
console.log('  - Channels: ALL (7 channels)');
console.log('  - Validation: ENABLED\n');

// Transform
console.log('⚡ Starting transformation...\n');
let result;
try {
  result = pipeline.transform(psrSource, testFile);
} catch (error) {
  console.error('❌ FATAL ERROR during transformation:', error.message);
  console.error(error.stack);
  process.exit(1);
}

// Display diagnostics
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 TRANSFORMATION DIAGNOSTICS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (result.diagnostics && result.diagnostics.length > 0) {
  console.log(`⚠️  Found ${result.diagnostics.length} diagnostic messages:\n`);

  result.diagnostics.forEach((diag, index) => {
    const icon = diag.severity === 'error' ? '❌' : diag.severity === 'warning' ? '⚠️' : 'ℹ️';
    console.log(`${icon} [${diag.phase.toUpperCase()}] ${diag.message}`);
    if (diag.location) {
      console.log(`   Location: Line ${diag.location.line}, Column ${diag.location.column}`);
    }
    if (index < result.diagnostics.length - 1) console.log('');
  });
  console.log('');
} else {
  console.log('✅ No diagnostics - transformation clean\n');
}

// Display validation results
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✓ VALIDATION RESULTS');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (result.validation) {
  const { valid, issues, errorCount, warningCount } = result.validation;

  if (valid) {
    console.log('✅ ALL VALIDATION RULES PASSED\n');
  } else {
    console.log(`❌ VALIDATION FAILED - ${errorCount} errors, ${warningCount} warnings:\n`);

    const errors = issues.filter((i) => i.severity === 'error');
    const warnings = issues.filter((i) => i.severity === 'warning');

    if (errors.length > 0) {
      console.log('ERRORS:');
      errors.forEach((error, index) => {
        console.log(`  ${index + 1}. [${error.rule}] ${error.message}`);
        if (error.location) {
          console.log(
            `     Location: Line ${error.location.line}, Column ${error.location.column}`
          );
        }
        if (index < errors.length - 1) console.log('');
      });
      console.log('');
    }

    if (warnings.length > 0) {
      console.log('WARNINGS:');
      warnings.forEach((warning, index) => {
        console.log(`  ${index + 1}. [${warning.rule}] ${warning.message}`);
        if (warning.location) {
          console.log(
            `     Location: Line ${warning.location.line}, Column ${warning.location.column}`
          );
        }
        if (index < warnings.length - 1) console.log('');
      });
      console.log('');
    }
  }
} else {
  console.log('⚠️  No validation data available\n');
}

// Display generated code preview
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📝 GENERATED CODE (First 50 lines)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (result.code) {
  const lines = result.code.split('\n').slice(0, 50);
  lines.forEach((line, index) => {
    console.log(`${String(index + 1).padStart(3, ' ')} │ ${line}`);
  });

  if (result.code.split('\n').length > 50) {
    console.log('\n... (truncated, see full output below)');
  }
  console.log('');
} else {
  console.log('❌ No code generated\n');
}

// Display debug logs if available
if (result.debugLogs && result.debugLogs.length > 0) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🐛 DEBUG LOGS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  // Group by channel
  const logsByChannel = {};
  result.debugLogs.forEach((log) => {
    if (!logsByChannel[log.channel]) {
      logsByChannel[log.channel] = [];
    }
    logsByChannel[log.channel].push(log);
  });

  Object.entries(logsByChannel).forEach(([channel, logs]) => {
    console.log(`\n📡 ${channel.toUpperCase()} (${logs.length} entries):`);
    console.log('─'.repeat(60));

    logs.forEach((log, index) => {
      const timestamp = new Date(log.timestamp).toLocaleTimeString();
      console.log(`[${timestamp}] ${log.message}`);
      if (log.data) {
        console.log(
          `  Data:`,
          JSON.stringify(log.data, null, 2)
            .split('\n')
            .map((l) => '  ' + l)
            .join('\n')
        );
      }
      if (index < logs.length - 1) console.log('');
    });
  });
  console.log('');
}

// Summary
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📈 TRANSFORMATION SUMMARY');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const success =
  !result.diagnostics?.some((d) => d.type === 'error') &&
  (!result.validation || result.validation.valid);

console.log(`Status: ${success ? '✅ SUCCESS' : '❌ FAILED'}`);
console.log(`Diagnostics: ${result.diagnostics?.length || 0} messages`);
console.log(`Validation: ${result.validation?.valid ? 'PASSED' : 'FAILED'}`);
console.log(`Generated: ${result.code ? result.code.length + ' characters' : 'NONE'}`);
console.log(`Debug Logs: ${result.debugLogs?.length || 0} entries\n`);

// Full generated code
if (result.code && process.argv.includes('--full')) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📄 FULL GENERATED CODE');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log(result.code);
  console.log('');
}

process.exit(success ? 0 : 1);
