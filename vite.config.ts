import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      // ORDER MATTERS - more specific paths must come first
      {
        find: /^pulsar\/jsx-dev-runtime$/,
        replacement: path.resolve(
          __dirname,
          '../pulsar.dev/dist/jsx-runtime/jsx-runtime-standard.js'
        ),
      },
      {
        find: /^pulsar\/jsx-runtime$/,
        replacement: path.resolve(
          __dirname,
          '../pulsar.dev/dist/jsx-runtime/jsx-runtime-standard.js'
        ),
      },
      {
        find: /^pulsar$/,
        replacement: path.resolve(__dirname, '../pulsar.dev/dist/index.js'),
      },
    ],
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
