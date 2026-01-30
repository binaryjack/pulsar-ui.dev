/**
 * Pulsar UI Showcase - Main Entry Point
 * Using new Playground system
 */

import { bootstrapApp, createContext } from '@pulsar-framework/pulsar.dev';
import { PlaygroundDemo } from './showcase/pages/playground-demo';

// Import design system and base styles FIRST
import './showcase-styles.css';
import './styles/design-system.css';
import './styles/showcase-base.css';
import './styles/transitions.css';

// Define application context
interface IAppContext {
  appName: string;
  version: string;
  theme: string;
}

const AppContext = createContext<IAppContext>({
  appName: 'Pulsar UI Showcase',
  version: '0.7.0-alpha',
  theme: 'light',
});

// Wrapper component with context
const AppWithContext = (): HTMLElement => {
  return (
    <AppContext.Provider
      value={{
        appName: 'Pulsar UI Showcase',
        version: '0.7.0-alpha',
        theme: 'light',
      }}
    >
      <PlaygroundDemo />
    </AppContext.Provider>
  );
};

// Build and mount application
const root = bootstrapApp()
  .root('#app')
  .onError((error) => {
    console.error('Application error:', error);
  })
  .build();

// Mount the application
root.mount(<AppWithContext />);
