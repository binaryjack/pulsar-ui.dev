/**
 * Entry point - bootstrap the app
 */
import { bootstrapApp } from '@pulsar-framework/pulsar.dev'
import { DebugReactivity } from './main.psr'

console.log('[main.ts] Starting bootstrap...');
console.log('[main.ts] DebugReactivity:', DebugReactivity);

bootstrapApp()
  .root('#app')
  .onMount((element) => {
    console.log('[App] Mounted successfully!', element);
  })
  .onError((error) => {
    console.error('[App] Error:', error);
  })
  .build()
  .mount(DebugReactivity());

console.log('[main.ts] Bootstrap complete');
