/// <reference types="vite/client" />

/**
 * Entry point - MAIN PSR APP
 */
import { pulse } from '@pulsar-framework/pulsar.dev';
import App from './main.psr';

// Mount the REAL APP from main.psr
pulse(App, {
  root: '#app',
  onMount: (element: HTMLElement) => {
    console.log('[App] Main PSR App Mounted!', element);
  },
  onError: (error: Error) => {
    console.error('[App] PSR App Error:', error);
    // Show the error in the DOM for debugging
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText =
      'background: #dc2626; color: white; padding: 20px; font-family: monospace;';
    errorDiv.innerHTML = `
      <h2>🚨 PSR APP ERROR</h2>
      <pre>${error.message}</pre>
      <pre>${error.stack}</pre>
    `;
    document.body.appendChild(errorDiv);
  },
});
