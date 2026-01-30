/**
 * Transformation Verification Test
 * Tests that JSX inside component bodies is being transformed correctly
 */

import { Typography } from './src/components/atoms/typography';
import { Label } from './src/components/molecules/label';

// Test 1: Typography component
console.log('=== Test 1: Typography Component ===');
const typo = Typography({ children: 'Hello World', variant: 'body1' });
console.log('Typography result:', typo);
console.log('Is HTMLElement:', typo instanceof HTMLElement);
console.log('Tag name:', typo?.tagName);

// Test 2: Label component (uses Typography internally)
console.log('\n=== Test 2: Label Component ===');
const label = Label({ text: 'Username', required: true });
console.log('Label result:', label);
console.log('Is HTMLElement:', label instanceof HTMLElement);
console.log('Tag name:', label?.tagName);
console.log('Children:', label?.children);

// Test 3: Verify no appendChild errors
console.log('\n=== Test 3: Nested Components ===');
try {
  const container = document.createElement('div');
  container.appendChild(label);
  console.log('✅ appendChild successful - no errors!');
  console.log('Container HTML:', container.innerHTML.substring(0, 200) + '...');
} catch (error) {
  console.error('❌ appendChild failed:', error);
}

export { label, typo };
