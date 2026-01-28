import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'pulsar': path.resolve(__dirname, '../pulsar.dev/dist/index.js'),
      'pulsar/jsx-runtime': path.resolve(__dirname, '../pulsar.dev/dist/jsx-runtime.js'),
      'pulsar/jsx-dev-runtime': path.resolve(__dirname, '../pulsar.dev/dist/jsx-runtime.js'),
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
});
