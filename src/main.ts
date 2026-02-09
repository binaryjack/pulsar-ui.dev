/// <reference types="vite/client" />

/**
 * Entry point - bootstrap the app with HMR support
 */
import { bootstrapApp } from '@pulsar-framework/pulsar.dev';
import { DebugReactivity } from './main.psr';

console.log('[main.ts] Starting bootstrap...');
console.log('[main.ts] DebugReactivity:', DebugReactivity);

// Build app instance
const app = bootstrapApp()
  .root('#app')
  .onMount((element) => {
    console.log('[App] Mounted successfully!', element);
  })
  .onError((error) => {
    console.error('[App] Error:', error);
  })
  .build();

// Initial mount
app.mount(DebugReactivity());

console.log('[main.ts] Bootstrap complete');

// HMR: Handle hot updates from main.psr
if (import.meta.hot) {
  // Accept updates to main.psr
  import.meta.hot.accept('./main.psr', async (newModule) => {
    console.log('[HMR] main.psr updated, performing hot reload...');

    if (newModule) {
      // Unmount old app
      await app.unmount();
      console.log('[HMR] Old app unmounted');

      // Mount new component
      await app.mount(newModule.DebugReactivity());
      console.log('[HMR] New app mounted');
    }
  });

  // Accept updates to self (main.ts) without reload
  import.meta.hot.accept();
}
