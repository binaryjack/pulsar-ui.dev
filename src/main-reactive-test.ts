/**
 * Entry point for Reactive Test
 */
import { bootstrapAppConfig } from '@pulsar-framework/pulsar.dev'
import { ReactiveTest } from './test-reactive.psr'

// Mount the reactive test component
bootstrapAppConfig({
  root: '#app',
  component: ReactiveTest,
  props: {},
});
