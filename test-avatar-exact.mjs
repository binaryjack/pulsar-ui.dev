import { createPipeline } from '../pulsar-transformer/dist/index.js';

const test = `
import { cn } from '@pulsar-framework/design-tokens';
import type { IAvatarProps } from './avatar.type';

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return \`\${parts[0][0]}\${parts[parts.length - 1][0]}\`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

component Avatar({
  size = 'md'
}: IAvatarProps) {
  return <div>{size}</div>;
}
`;

const pipeline = createPipeline({ debug: false });
console.log('Testing exact avatar.psr pattern (simplified)...\n');
const result = pipeline.transform(test);

if (result.code) {
  console.log('✅ PASSED - Generated', result.code.length, 'chars');
} else {
  console.log('❌ FAILED');
  result.diagnostics.forEach((d) => {
    console.log(`  [${d.phase}] ${d.type}: ${d.message}`);
  });
}
