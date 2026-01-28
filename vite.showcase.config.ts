import pulsar from '@pulsar-framework/vite-plugin';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [pulsar()],
  root: resolve(__dirname, '.'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'showcase-dist'),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
