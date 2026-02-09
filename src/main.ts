/// <reference types="vite/client" />

/**
 * Entry point - minimal Pulsarbootstrap
 */
import { pulse } from '@pulsar-framework/pulsar.dev';
import { App } from './main.psr';

// Mount app - wrap component call in arrow function for reactivity
pulse(App, {
  root: '#app',
  onMount: (element: HTMLElement) => {
    console.log('[App] Mounted!', element);
  },
  onError: (error: Error) => {
    console.error('[App] Error:', error);
  },
});
