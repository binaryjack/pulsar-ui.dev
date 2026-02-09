/// <reference types="vite/client" />

/**
 * Absolute minimal Pulsar example
 */
import { pulse } from '@pulsar-framework/pulsar.dev';
import { DebugReactivity } from './main.psr';

// That's it! HMR handled automatically by vite plugin
const app = pulse(DebugReactivity);
