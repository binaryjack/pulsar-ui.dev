/**
 * Vitest Configuration for Pulsar UI Showcase Tests
 */

import pulsar from '@synetics/vite-plugin';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    pulsar({
      debug: false,
      autoInjectHMR: false,
      enableDependencyResolution: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/showcase/__tests__/setup.ts'],
    include: ['src/showcase/**/__tests__/**/*.test.ts', 'src/showcase/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/showcase/pages/**/*.syn'],
      exclude: ['node_modules/', 'src/showcase/**/__tests__/**', 'dist/'],
    },
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      '@synetics/synetics.dev': path.resolve(__dirname, '../synetics.dev/src'),
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.syn', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  assetsInclude: [],
  optimizeDeps: {
    extensions: ['.syn', '.ts', '.tsx', '.js', '.jsx'],
  },
});
