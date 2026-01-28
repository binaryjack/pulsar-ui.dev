import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './showcase',
  resolve: {
    alias: {
      'pulsar/jsx-dev-runtime': resolve(
        __dirname,
        '../pulsar.dev/dist/jsx-runtime/jsx-runtime-standard.js'
      ),
      'pulsar/jsx-runtime': resolve(
        __dirname,
        '../pulsar.dev/dist/jsx-runtime/jsx-runtime-standard.js'
      ),
      pulsar: resolve(__dirname, '../pulsar.dev/dist/index.js'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'pulsar',
  },
  server: {
    port: 6006,
    hmr: {
      overlay: true,
    },
  },
  build: {
    outDir: '../dist-showcase',
    emptyOutDir: true,
  },
});
