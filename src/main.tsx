/**
 * Pulsar UI Showcase - Main Entry Point
 */

import { AppContextProvider } from '@pulsar-framework/pulsar.dev';
import { App } from './app';
import './showcase-styles.css';
const app = (
  <AppContextProvider
    root={appRoot}
    context={{
      appName: 'Pulsar UI Showcase',
      version: '0.7.0-alpha',
      theme: 'light',
    }}
  >
    <App />
  </AppContextProvider>
);

// 3. Append to DOM (AppContextProvider handles root.mount() internally)
document.getElementById('app')?.appendChild(app);
