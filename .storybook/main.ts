import type { StorybookConfig } from '@storybook/html-vite';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    // Merge custom configuration
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || [];

    // Add our aliases - ORDER MATTERS! More specific paths first
    const aliases = [
      {
        find: /^pulsar\/jsx-dev-runtime$/,
        replacement: path.resolve(
          __dirname,
          '../../pulsar.dev/dist/jsx-runtime/jsx-runtime-standard.js'
        ),
      },
      {
        find: /^pulsar\/jsx-runtime$/,
        replacement: path.resolve(
          __dirname,
          '../../pulsar.dev/dist/jsx-runtime/jsx-runtime-standard.js'
        ),
      },
      {
        find: /^pulsar$/,
        replacement: path.resolve(__dirname, '../../pulsar.dev/dist/index.js'),
      },
    ];

    if (Array.isArray(config.resolve.alias)) {
      config.resolve.alias.unshift(...aliases);
    } else {
      // Convert object to array with our aliases first
      const existingAliases = Object.entries(config.resolve.alias || {}).map(
        ([find, replacement]) => ({
          find,
          replacement,
        })
      );
      config.resolve.alias = [...aliases, ...existingAliases];
    }

    return config;
  },
};
export default config;
