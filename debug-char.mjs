/**
 * Debug exact character at failing position
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

// From test output: edge-case-1-array-map.psr - line 7, column 1955
const file = 'src/debug-tests/edge-case-1-array-map.psr';
const targetLine = 7;
const targetColumn = 1955;

const path = resolve(process.cwd(), file);
const content = readFileSync(path, 'utf-8');

console.log('🔍 Analyzing exact character at failing position...\n');

// Split into lines
const lines = content.split('\n');

if (lines.length >= targetLine) {
  const line = lines[targetLine - 1]; // 1-based to 0-based
  console.log(`Line ${targetLine} length: ${line.length}`);

  if (line.length >= targetColumn) {
    const char = line[targetColumn - 1]; // 1-based to 0-based
    const codePoint = char.codePointAt(0);

    console.log(`Character at position ${targetColumn}: "${char}"`);
    console.log(`Unicode code point: U+${codePoint.toString(16).toUpperCase()}`);
    console.log(`Character name: ${char.charCodeAt ? char.charCodeAt(0) : 'unknown'}`);

    // Show context around the character
    const contextStart = Math.max(0, targetColumn - 20);
    const contextEnd = Math.min(line.length, targetColumn + 20);
    const context = line.substring(contextStart, contextEnd);

    console.log(`Context: "${context}"`);
    console.log('         ' + ' '.repeat(Math.min(19, targetColumn - contextStart - 1)) + '^');

    // Check if it's in our Unicode ranges
    const isEmojiRange =
      (codePoint >= 0x1f300 && codePoint <= 0x1f9ff) || // Misc Symbols and Pictographs
      (codePoint >= 0x2600 && codePoint <= 0x26ff) || // Misc symbols
      (codePoint >= 0x2700 && codePoint <= 0x27bf) || // Dingbats
      (codePoint >= 0xfe00 && codePoint <= 0xfe0f); // Variation Selectors

    console.log(`Is in emoji ranges: ${isEmojiRange}`);

    // Additional ranges that might be missing
    const isSpecialRange =
      (codePoint >= 0x2000 && codePoint <= 0x206f) || // General Punctuation
      (codePoint >= 0x2070 && codePoint <= 0x209f) || // Superscripts
      (codePoint >= 0x2190 && codePoint <= 0x21ff) || // Arrows
      (codePoint >= 0x2200 && codePoint <= 0x22ff) || // Mathematical Operators
      (codePoint >= 0x2300 && codePoint <= 0x23ff) || // Miscellaneous Technical
      (codePoint >= 0x2400 && codePoint <= 0x243f) || // Control Pictures
      (codePoint >= 0x2440 && codePoint <= 0x245f) || // Optical Character Recognition
      (codePoint >= 0x2460 && codePoint <= 0x24ff) || // Enclosed Alphanumerics
      (codePoint >= 0x2500 && codePoint <= 0x257f) || // Box Drawing
      (codePoint >= 0x2580 && codePoint <= 0x259f) || // Block Elements
      (codePoint >= 0x25a0 && codePoint <= 0x25ff); // Geometric Shapes

    console.log(`Is in special ranges: ${isSpecialRange}`);
  } else {
    console.log(`❌ Column ${targetColumn} is beyond line length ${line.length}`);
  }
} else {
  console.log(`❌ Line ${targetLine} not found (file has ${lines.length} lines)`);
}

console.log('\n✅ Character analysis complete\n');
