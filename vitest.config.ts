/**
 * Vitest Configuration for Pulsar UI Showcase Tests
 */

import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/showcase/__tests__/setup.ts'],
    include: ['src/showcase/**/__tests__/**/*.test.ts', 'src/showcase/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/showcase/pages/**/*.psr'],
      exclude: ['node_modules/', 'src/showcase/**/__tests__/**', 'dist/'],
    },
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      '@pulsar-framework/pulsar.dev': path.resolve(__dirname, '../pulsar.dev/src'),
    },
  },
});
