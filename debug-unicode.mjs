/**
 * Debug Unicode issues in PSR files
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

const files = [
  'src/debug-tests/edge-case-1-array-map.psr',
  'src/debug-tests/edge-case-2-nested-components.psr',
  'src/debug-tests/edge-case-3-conditionals.psr',
  'src/debug-tests/index.psr',
];

console.log('🔍 Analyzing Unicode characters in PSR files...\n');

for (const file of files) {
  const path = resolve(process.cwd(), file);
  const content = readFileSync(path, 'utf-8');

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📄 File: ${file}`);
  console.log(`${'='.repeat(60)}`);

  // Find all emojis and special Unicode characters
  const emojiRegex =
    /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}\u{1F100}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F900}-\u{1F9FF}]/gu;

  let match;
  let count = 0;

  while ((match = emojiRegex.exec(content)) !== null) {
    count++;
    const char = match[0];
    const position = match.index;

    // Calculate line and column
    const beforeMatch = content.substring(0, position);
    const lines = beforeMatch.split('\n');
    const line = lines.length;
    const column = lines[lines.length - 1].length + 1;

    // Get context (20 chars before and after)
    const contextStart = Math.max(0, position - 20);
    const contextEnd = Math.min(content.length, position + 20);
    const context = content
      .substring(contextStart, contextEnd)
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r');

    console.log(
      `\n  ${count}. Character: ${char} (U+${char.codePointAt(0).toString(16).toUpperCase()})`
    );
    console.log(`     Position: ${position} (Line ${line}, Column ${column})`);
    console.log(`     Context: "${context}"`);
  }

  if (count === 0) {
    console.log('\n  ✅ No emoji/special Unicode characters found');
  } else {
    console.log(`\n  📊 Total: ${count} emoji/special Unicode characters`);
  }

  // Check for replacement character �
  if (content.includes('�')) {
    console.log('\n  ⚠️  WARNING: File contains replacement character (U+FFFD) �');
    const replacementPositions = [];
    for (let i = 0; i < content.length; i++) {
      if (content[i] === '�') {
        const beforeMatch = content.substring(0, i);
        const lines = beforeMatch.split('\n');
        const line = lines.length;
        const column = lines[lines.length - 1].length + 1;
        replacementPositions.push({ position: i, line, column });
      }
    }
    replacementPositions.forEach((pos, idx) => {
      console.log(
        `     ${idx + 1}. Position: ${pos.position} (Line ${pos.line}, Column ${pos.column})`
      );
    });
  }
}

console.log('\n\n✅ Analysis complete\n');
