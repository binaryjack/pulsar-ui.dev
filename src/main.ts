/// <reference types="vite/client" />

/**
 * Entry point - MAIN PSR APP
 */
import './styles.css';
import { pulse, ServiceManager } from '@pulsar-framework/pulsar.dev'
import App from './main.psr'

// Apply persisted theme before paint (html has data-theme="dark" as default)
const _saved = (() => { try { return localStorage.getItem('__pulsar_theme__'); } catch { return null; } })();
if (_saved && _saved !== document.documentElement.getAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', _saved);
}

// Define a simple ConfigService for demo purposes
class ConfigService {
  theme = 'dark';
  apiUrl = 'https://api.example.com';
}

// Setup ServiceManager
const services = new ServiceManager();

services.registerClass('config', ConfigService, {
  lifetime: 'singleton',
});

console.log('[App] ServiceManager configured with ConfigService');

// Mount the REAL APP from main.psr
pulse(App, {
  root: '#app',
  services, // Pass ServiceManager to pulse
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
