/**
 * Pulsar UI Showcase - Main Application Entry Point
 * Testing AppContextProvider with imported components (enhanced transformer)
 */

import { AppContextProvider, bootstrapApp } from '@pulsar-framework/pulsar.dev';
import { App } from './app';

// // Main App component that uses imported Input
// const App = (): HTMLElement => {
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState('Hello from AppContextProvider');

//   return (
//     <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
//       <h1>Pulsar UI Showcase - Count: {count()}</h1>
//       <p>Testing AppContextProvider with imported components</p>

//       <button
//         onClick={() => setCount((prev) => prev + 1)}
//         style={{
//           padding: '10px 20px',
//           margin: '10px 0',
//           background: '#007bff',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         Increment: {count()}
//       </button>

//       <div style={{ marginTop: '20px' }}>
//         <h3>Testing Imported Input Component:</h3>
//         <Input
//           value={inputValue()}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Type something to test component imports..."
//           style={{ width: '100%', marginBottom: '10px' }}
//         />
//         <p style={{ color: '#666' }}>
//           Current input value: <strong>{inputValue()}</strong>
//         </p>
//       </div>

//       <div
//         style={{ marginTop: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '4px' }}
//       >
//         <h4>🧪 Enhanced Transformer Test</h4>
//         <p>This setup tests:</p>
//         <ul>
//           <li>✅ AppContextProvider pattern</li>
//           <li>✅ Imported Input component from ./components/atoms/input/input</li>
//           <li>✅ Enhanced transformer with dependency resolution</li>
//           <li>✅ Component transformation order (dependencies first)</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// Build application root using proper Pulsar pattern
const appRoot = bootstrapApp()
  .root('#app')
  .onMount((element) => {
    console.log('[Pulsar UI] App mounted successfully', element);
  })
  .onError((error) => {
    console.error('[Pulsar UI] App error:', error);
  })
  .build();

// Use AppContextProvider pattern with imported components
const AppStart = (): HTMLElement => {
  return (
    <AppContextProvider
      root={appRoot}
      context={{
        appName: 'Pulsar UI Showcase',
        version: '2.0.0',
        theme: 'light',
      }}
    >
      <App />
    </AppContextProvider>
  );
};

appRoot.mount(<AppStart />);
