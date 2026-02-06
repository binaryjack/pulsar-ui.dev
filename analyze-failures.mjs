/**
 * Detailed failure analysis for specific PSR files
 */

import { readFileSync } from 'fs';
import { createPipeline } from '../pulsar-transformer/dist/index.js';

const failedFiles = [
  {
    name: 'simple-main.psr',
    path: './src/simple-main.psr',
    expectedIssue: 'Component without parentheses',
  },
  {
    name: 'avatar.psr',
    path: './src/components/atoms/avatar/avatar.psr',
    expectedIssue: 'Destructuring with type annotation',
  },
  {
    name: 'main.psr',
    path: './src/main.psr',
    expectedIssue: 'No component declaration (pure JS)',
  },
  {
    name: 'test-psr-avatar.psr',
    path: './src/test-psr-avatar.psr',
    expectedIssue: 'Unknown',
  },
];

console.log('━'.repeat(70));
console.log('🔬 DETAILED FAILURE ANALYSIS');
console.log('━'.repeat(70));

const pipeline = createPipeline({ debug: true });

failedFiles.forEach((file, index) => {
  console.log(`\n${index + 1}. ${file.name}`);
  console.log(`   Expected Issue: ${file.expectedIssue}`);
  console.log('─'.repeat(70));

  try {
    const source = readFileSync(file.path, 'utf-8');
    console.log(`\n   Source (first 200 chars):`);
    console.log(`   ${source.substring(0, 200).replace(/\n/g, '\n   ')}`);
    console.log(`   ...\n`);

    const result = pipeline.transform(source);

    console.log(`   Result:`);
    console.log(`   - Code generated: ${result.code ? result.code.length + ' chars' : 'NONE'}`);
    console.log(`   - Diagnostics: ${result.diagnostics.length}`);

    if (result.diagnostics.length > 0) {
      console.log(`\n   Diagnostics Details:`);
      result.diagnostics.forEach((diag, i) => {
        console.log(`   ${i + 1}. [${diag.phase}] ${diag.message}`);
        if (diag.location) {
          console.log(`      Location: Line ${diag.location.line}, Column ${diag.location.column}`);
        }
      });
    }
  } catch (error) {
    console.log(`\n   ❌ EXCEPTION: ${error.message}`);
    console.log(`   Stack: ${error.stack.split('\n').slice(0, 3).join('\n   ')}`);
  }

  console.log('\n' + '─'.repeat(70));
});

console.log('\n' + '━'.repeat(70));
console.log('📝 SUMMARY OF ISSUES');
console.log('━'.repeat(70));
console.log(`
Common issues found:

1. Component declaration without parentheses
   - File: simple-main.psr
   - Syntax: component Main { ... }
   - Fix needed: Parser should support optional parentheses for no-param components

2. Destructuring with type annotations
   - File: avatar.psr  
   - Syntax: component Avatar({ ...rest }: IAvatarProps) { ... }
   - Fix needed: Parser needs to handle rest parameter spread

3. Non-component files (pure JS/TS)
   - File: main.psr
   - Issue: No component declaration, just imports and function calls
   - Fix needed: Better error message or pass-through for non-PSR files

4. Encoding/character issues
   - Files: debug-tests/*.psr
   - Issue: Special characters (emoji, unicode) breaking lexer
   - Fix needed: Better UTF-8 handling in lexer
`);
