/**
 * Debug file encoding to find Unicode replacement characters (�)
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const files = [
  'src/debug-tests/edge-case-1-array-map.psr',
  'src/debug-tests/edge-case-2-nested-components.psr',
  'src/debug-tests/index.psr',
];

console.log('🔍 Analyzing file encoding and replacement characters...\n');

for (const file of files) {
  const path = resolve(process.cwd(), file);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📄 File: ${file}`);
  console.log(`${'='.repeat(60)}`);

  try {
    // Try different encodings
    const utf8Content = readFileSync(path, 'utf-8');
    const latin1Content = readFileSync(path, 'latin1');
    const utf16Content = readFileSync(path, 'utf16le');

    // Check for replacement characters in UTF-8 reading
    const replacementCount = (utf8Content.match(/\uFFFD/g) || []).length;

    console.log(`  Replacement chars (�) found: ${replacementCount}`);

    if (replacementCount > 0) {
      console.log('  ❌ File contains replacement characters - encoding issue detected');

      // Find positions of replacement characters
      for (let i = 0; i < utf8Content.length; i++) {
        if (utf8Content[i] === '\uFFFD') {
          const beforeMatch = utf8Content.substring(0, i);
          const lines = beforeMatch.split('\n');
          const line = lines.length;
          const column = lines[lines.length - 1].length + 1;

          const contextStart = Math.max(0, i - 15);
          const contextEnd = Math.min(utf8Content.length, i + 15);
          const context = utf8Content
            .substring(contextStart, contextEnd)
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\uFFFD/g, '�');

          console.log(`    Position ${i} (Line ${line}, Column ${column}): "${context}"`);
        }
      }

      // Try to fix by re-encoding from latin1 to UTF-8
      console.log('\n  🔧 Attempting to fix by converting from Latin1 to UTF-8...');

      try {
        const fixedContent = latin1Content;
        const fixedPath = path.replace('.psr', '-fixed.psr');
        writeFileSync(fixedPath, fixedContent, 'utf-8');
        console.log(`  ✅ Fixed file written to: ${fixedPath}`);

        // Test the fixed content
        const fixedTest = readFileSync(fixedPath, 'utf-8');
        const fixedReplacements = (fixedTest.match(/\uFFFD/g) || []).length;
        console.log(`  Replacement chars in fixed file: ${fixedReplacements}`);
      } catch (error) {
        console.log(`  ❌ Failed to create fixed file: ${error.message}`);
      }
    } else {
      console.log('  ✅ No replacement characters - file encoding is OK');
    }

    // Show file size info
    console.log(`  File size: ${utf8Content.length} chars`);
  } catch (error) {
    console.log(`  ❌ Error reading file: ${error.message}`);
  }
}

console.log('\n✅ Encoding analysis complete\n');
