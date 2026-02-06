import { readFileSync } from 'fs';
import { createPipeline } from '../pulsar-transformer/dist/index.js';

const source = readFileSync('src/components/atoms/avatar/avatar.psr', 'utf-8');

console.log('📄 Avatar.psr Info:');
console.log('File length:', source.length, 'chars');
console.log('Lines:', source.split('\n').length);
console.log('\n🔍 Parsing avatar.psr...\n');

const pipeline = createPipeline({ debug: false });
const result = pipeline.transform(source);

if (result.code) {
  console.log('✅ SUCCESS! Generated', result.code.length, 'chars of code');
} else {
  console.log('❌ FAILED\n');
  console.log('Diagnostics:');
  result.diagnostics.forEach((d, i) => {
    console.log(`${i + 1}. [${d.phase || 'unknown'}] ${d.type}: ${d.message}`);
    if (d.location) {
      console.log(`   Location: line ${d.location.line}, column ${d.location.column}`);
    }
  });
}
