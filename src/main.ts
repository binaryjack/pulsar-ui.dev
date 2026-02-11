/// <reference types="vite/client" />

/**
 * Entry point - minimal Pulsarbootstrap
 */
import { pulse } from '@pulsar-framework/pulsar.dev';
import { TestSimple } from './test-simple.psr';

// Mount app - wrap component call in arrow function for reactivity
pulse(TestSimple, {
  root: '#app',
  onMount: (element: HTMLElement) => {
    console.log('[App] Mounted!', element);
  },
  onError: (error: Error) => {
    console.error('[App] Error:', error);
  },
});
