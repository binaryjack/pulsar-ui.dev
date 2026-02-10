import pulsar from '@pulsar-framework/vite-plugin';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    pulsar({
      debug: true,
      autoInjectHMR: true, // Auto-inject HMR for pulse() calls
      debugChannels: [
        'emitter',
        'signal-binding',
        'wire',
        'reactivity',
        'lexer',
        'parser',
        'analyzer',
        'transform',
        'validator',
        'pipeline',
        'effect',
        'signal-creation',
      ],
      enableDependencyResolution: true,
    }),
  ],
  root: resolve(__dirname, '.'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    // Exclude large test files from watch to reduce memory usage
    watch: {
      ignored: [
        '**/test-comprehensive*.psr',
        '**/test-real-world*.psr',
        '**/test-edge-cases.psr',
        '**/test-advanced.psr',
        '**/test-complex.psr',
        '**/showcase-app.psr',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
