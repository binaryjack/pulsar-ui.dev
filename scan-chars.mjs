/**
 * Scan entire file for problematic characters
 */

import { readFileSync } from 'fs';

const files = [
  'src/debug-tests/edge-case-1-array-map.psr',
  'src/debug-tests/edge-case-2-nested-components.psr',
  'src/debug-tests/edge-case-3-conditionals.psr',
  'src/debug-tests/index.psr',
];

console.log('🔍 Scanning for all non-ASCII characters...\n');

for (const file of files) {
  const content = readFileSync(file, 'utf-8');

  console.log(`\n${'='.repeat(60)}`);
  console.log(`📄 ${file}`);
  console.log(`${'='.repeat(60)}`);

  let found = 0;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const codePoint = char.codePointAt(0);

    // Skip ASCII and common whitespace
    if (codePoint < 128) continue;

    found++;

    // Calculate line and column
    const beforeChar = content.substring(0, i);
    const lines = beforeChar.split('\n');
    const line = lines.length;
    const column = lines[lines.length - 1].length + 1;

    // Get context
    const contextStart = Math.max(0, i - 10);
    const contextEnd = Math.min(content.length, i + 10);
    const context = content
      .substring(contextStart, contextEnd)
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r');

    console.log(
      `  ${found}. '${char}' (U+${codePoint.toString(16).toUpperCase()}) at L${line}:C${column}`
    );
    console.log(`     Context: "${context}"`);

    // Check what ranges it falls into
    let ranges = [];

    // Emoji ranges
    if (codePoint >= 0x1f300 && codePoint <= 0x1f9ff) ranges.push('Emoji');
    if (codePoint >= 0x2600 && codePoint <= 0x26ff) ranges.push('Misc Symbols');
    if (codePoint >= 0x2700 && codePoint <= 0x27bf) ranges.push('Dingbats');
    if (codePoint >= 0xfe00 && codePoint <= 0xfe0f) ranges.push('Variation Selectors');

    // Additional ranges
    if (codePoint >= 0x2000 && codePoint <= 0x206f) ranges.push('General Punctuation');
    if (codePoint >= 0x2070 && codePoint <= 0x209f) ranges.push('Superscripts');
    if (codePoint >= 0x2190 && codePoint <= 0x21ff) ranges.push('Arrows');
    if (codePoint >= 0x2200 && codePoint <= 0x22ff) ranges.push('Math Operators');
    if (codePoint >= 0x2300 && codePoint <= 0x23ff) ranges.push('Misc Technical');
    if (codePoint >= 0x2460 && codePoint <= 0x24ff) ranges.push('Enclosed Alphanumerics');
    if (codePoint >= 0x25a0 && codePoint <= 0x25ff) ranges.push('Geometric Shapes');

    console.log(`     Ranges: ${ranges.length > 0 ? ranges.join(', ') : 'NOT COVERED'}`);

    if (found >= 20) {
      console.log(`     ... (stopping after 20 characters)`);
      break;
    }
  }

  if (found === 0) {
    console.log('  ✅ No non-ASCII characters found');
  } else {
    console.log(`\n  📊 Total non-ASCII characters: ${found}`);
  }
}

console.log('\n✅ Scan complete\n');
