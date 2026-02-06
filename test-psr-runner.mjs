import { existsSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createPipeline } from '../pulsar-transformer/dist/pipeline/create-pipeline.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = __dirname;

console.log('🎯 PSR Test Runner - Proving PSR → Website Works!\n');
console.log('Working directory:', rootDir);
console.log('');

// PSR files to transform
const psrFiles = [
  'src/main.psr',
  'src/debug-tests/index.psr',
  'src/debug-tests/edge-case-1-array-map.psr',
  'src/debug-tests/edge-case-2-nested-components.psr',
  'src/debug-tests/edge-case-3-conditionals.psr',
];

const pipeline = createPipeline();
const transformedFiles = [];

console.log('📝 Transforming PSR files...\n');

psrFiles.forEach((file) => {
  const psrPath = join(rootDir, file);
  const jsPath = psrPath.replace('.psr', '.psr.js');

  if (!existsSync(psrPath)) {
    console.log(`⚠️  ${file} - NOT FOUND, skipping`);
    return;
  }

  try {
    const psrCode = readFileSync(psrPath, 'utf-8');
    const result = pipeline.transform(psrCode);

    if (result.diagnostics.length > 0) {
      console.log(`❌ ${file} - Transformation errors:`);
      result.diagnostics.forEach((diag) => {
        console.log(`   ${diag.message}`);
      });
      return;
    }

    writeFileSync(jsPath, result.code, 'utf-8');
    transformedFiles.push({ psr: file, js: jsPath });
    console.log(`✅ ${file} → ${file.replace('.psr', '.psr.js')}`);
  } catch (error) {
    console.log(`❌ ${file} - Error: ${error.message}`);
  }
});

console.log(`\n📊 Transformation Complete: ${transformedFiles.length}/${psrFiles.length} files\n`);

// Generate test HTML
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PSR Test Suite - Proving PSR Works!</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    
    #app {
      background: white;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      min-height: calc(100vh - 4rem);
      overflow: hidden;
    }
    
    .loading {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 400px;
      gap: 1rem;
    }
    
    .spinner {
      width: 60px;
      height: 60px;
      border: 4px solid #e2e8f0;
      border-top-color: #667eea;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    .error {
      padding: 2rem;
      background: #fed7d7;
      border-left: 4px solid #fc8181;
      border-radius: 8px;
      margin: 2rem;
    }
    
    .error h2 {
      color: #742a2a;
      margin-bottom: 1rem;
    }
    
    .error pre {
      background: #fff5f5;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      color: #742a2a;
    }
  </style>
  <script type="importmap">
  {
    "imports": {
      "@pulsar-framework/pulsar.dev": "/packages/pulsar.dev/dist/index.js",
      "@pulsar-framework/pulsar.dev/": "/packages/pulsar.dev/dist/"
    }
  }
  </script>
</head>
<body>
  <div id="app">
    <div class="loading">
      <div class="spinner"></div>
      <h2 style="color: #2d3748;">Loading PSR Test Suite...</h2>
      <p style="color: #718096;">Transforming PSR → JavaScript → DOM</p>
    </div>
  </div>

  <script type="module">
    console.log('🚀 PSR Test Suite Starting...');
    console.log('📦 Transformation Results:');
    console.log('${transformedFiles.map((f) => f.psr).join('\\n   ')}');
    
    try {
      // Import the transformed PSR main entry
      const { bootstrapApp } = await import('@pulsar-framework/pulsar.dev');
      const { DebugTestSuitePSR } = await import('./src/debug-tests/index.psr.js');
      
      console.log('✅ PSR modules loaded successfully!');
      console.log('🎯 Mounting PSR components...');
      
      bootstrapApp()
        .root('#app')
        .onMount((element) => {
          console.log('✅ PSR Test Suite Mounted!', element);
          console.log('📊 RenderCapture will validate output...');
        })
        .onError((error) => {
          console.error('❌ Mount Error:', error);
          document.getElementById('app').innerHTML = \`
            <div class="error">
              <h2>❌ PSR Mount Error</h2>
              <p>The PSR components failed to mount. Check console for details.</p>
              <pre>\${error.stack || error.message}</pre>
            </div>
          \`;
        })
        .build()
        .mount(DebugTestSuitePSR());
        
    } catch (error) {
      console.error('❌ Critical Error:', error);
      document.getElementById('app').innerHTML = \`
        <div class="error">
          <h2>❌ PSR Loading Error</h2>
          <p>Failed to load PSR modules. This indicates a transformation or runtime issue.</p>
          <pre>\${error.stack || error.message}</pre>
          <h3 style="margin-top: 1rem;">Troubleshooting:</h3>
          <ul style="padding-left: 2rem; margin-top: 0.5rem;">
            <li>Check if PSR files were transformed correctly</li>
            <li>Verify import paths in generated .psr.js files</li>
            <li>Check browser console for module loading errors</li>
            <li>Ensure @pulsar-framework/pulsar.dev is built</li>
          </ul>
        </div>
      \`;
    }
  </script>
</body>
</html>`;

const htmlPath = join(rootDir, 'test-psr.html');
writeFileSync(htmlPath, html, 'utf-8');

console.log('📄 Test HTML Generated:');
console.log(`   ${htmlPath}\n`);
console.log('🌐 To run the test:');
console.log('   1. Start dev server: pnpm dev');
console.log('   2. Open: http://localhost:5173/test-psr.html');
console.log('   3. Check console for RenderCapture validation\n');
console.log('🎯 What to expect:');
console.log('   ✅ PSR components render visually');
console.log('   ✅ Signals update DOM reactively');
console.log('   ✅ Events fire correctly');
console.log('   ✅ RenderCapture validates output');
console.log('   ✅ Console shows "PASS" for all tests\n');
console.log('❌ If it fails:');
console.log('   - Check transformation errors above');
console.log('   - Inspect browser console for runtime errors');
console.log('   - Verify RenderCapture output\n');
console.log('🔥 THIS IS THE MOMENT OF TRUTH! 🔥\n');
