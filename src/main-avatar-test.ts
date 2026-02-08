/**
 * Entry point for PSR Avatar Test
 */
import { bootstrapAppConfig } from '@pulsar-framework/pulsar.dev'
import { AvatarTest } from './test-psr-avatar.psr'

// Mount the component with correct API
bootstrapAppConfig({
  root: '#app',
  component: AvatarTest,
  props: {},
});
