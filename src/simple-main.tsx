/**
 * Simple PSR Entry - No imports, just mount the component
 */

import { bootstrapApp } from '@pulsar-framework/pulsar.dev';
import { SimplePSRTest } from './simple-psr-test.psr';

const element = SimplePSRTest();
bootstrapApp().root('#app').build().mount(element);
