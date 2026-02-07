import pulsar from '@pulsar-framework/vite-plugin';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    pulsar({
      debug: true,
      // Debug Channels: Filter transformation logs by pipeline phase
      // Available: 'lexer', 'parser', 'analyzer', 'transform', 'emitter', 'validator', 'pipeline'
      // Omit to see all channels (default), specify array to filter
      debugChannels: ['emitter', 'validator'], // Only show code generation & validation
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
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
