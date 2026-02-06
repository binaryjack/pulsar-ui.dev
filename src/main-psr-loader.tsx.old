/**
 * PSR Loader - Loads PSR components from .psr files
 * This TSX file imports PSR components and mounts them
 */

import { bootstrapApp } from '@pulsar-framework/pulsar.dev';
import { DebugTestSuitePSR } from './debug-tests/index.psr';

console.log('🔥 PSR Loader: Loading PSR components...');

bootstrapApp()
  .root('#app')
  .onMount((element) => {
    console.log('✅ PSR Test Suite mounted successfully!', element);
  })
  .onError((error) => {
    console.error('❌ PSR Error:', error);
  })
  .build()
  .mount(DebugTestSuitePSR());
