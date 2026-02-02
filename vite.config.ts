import pulsar from '@pulsar-framework/vite-plugin';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    pulsar({
      debug: true,
      debugChannels: {
        detector: true,
        transform: true,
        generator: false,
        visitor: false,
        wire: false,
        performance: false,
      },
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
