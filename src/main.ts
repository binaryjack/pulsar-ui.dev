/// <reference types="vite/client" />

/**
 * Entry point - minimal Pulsar bootstrap
 */
import { pulse } from '@pulsar-framework/pulsar.dev';
import { DebugReactivity } from './main.psr';

// Mount app - HMR auto-injected by vite plugin
pulse(DebugReactivity, {
  root: '#app',
  onMount: (element: HTMLElement) => {
    console.log('[App] Mounted!', element);
  },
  onError: (error: Error) => {
    console.error('[App] Error:', error);
  },
});
