/**
 * Test 4: Conditional Rendering
 * Tests: Ternary expressions, conditional display, signal-based conditions
 */
import { useState } from '@pulsar-framework/pulsar.dev';

export const TestConditional = (): HTMLElement => {
  console.log('[TestConditional] Component START');

  const [isVisible, setIsVisible] = useState(true);
  const [mode, setMode] = useState<'info' | 'warning' | 'error'>('info');
  const [count, setCount] = useState(0);

  const modeConfig = {
    info: { bg: '#d1ecf1', color: '#0c5460', label: 'Info' },
    warning: { bg: '#fff3cd', color: '#856404', label: 'Warning' },
    error: { bg: '#f8d7da', color: '#721c24', label: 'Error' },
  };

  return (
    <div style="padding: 20px; font-family: sans-serif;">
      <h2>Test 4: Conditional Rendering</h2>

      <div style="margin: 20px 0;">
        <button
          onClick={() => setIsVisible(!isVisible())}
          style="padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;"
        >
          Toggle Visibility
        </button>

        <button
          onClick={() => {
            const modes: ('info' | 'warning' | 'error')[] = ['info', 'warning', 'error'];
            const currentIndex = modes.indexOf(mode());
            setMode(modes[(currentIndex + 1) % modes.length]);
          }}
          style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;"
        >
          Change Mode
        </button>
      </div>

      {isVisible() ? (
        <div style="margin: 20px 0; padding: 15px; background: #f0f0f0; border-radius: 8px;">
          <h3>Content is visible!</h3>

          <div
            style={`padding: 10px; background: ${modeConfig[mode()].bg}; color: ${modeConfig[mode()].color}; border-radius: 4px; margin: 10px 0;`}
          >
            <strong>Mode: {modeConfig[mode()].label}</strong>
          </div>

          <div style="margin: 15px 0;">
            <p>Counter: {count()}</p>
            <button
              onClick={() => setCount(count() + 1)}
              style="padding: 8px 16px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;"
            >
              Increment
            </button>
          </div>

          <div style="margin: 10px 0;">
            {count() === 0 ? (
              <p style="color: #6c757d;">Counter is at zero</p>
            ) : count() > 5 ? (
              <p style="color: #dc3545;">Counter is high! ({count()})</p>
            ) : (
              <p style="color: #28a745;">Counter is low ({count()})</p>
            )}
          </div>
        </div>
      ) : (
        <div style="margin: 20px 0; padding: 15px; background: #f8d7da; color: #721c24; border-radius: 8px;">
          <p>Content is hidden. Click "Toggle Visibility" to show.</p>
        </div>
      )}

      <div style="margin-top: 20px; padding: 10px; background: #d4edda; border-radius: 4px;">
        <small>
          ✅ Tests: ternary expressions, nested conditionals, signal-based conditions, dynamic
          styling
        </small>
      </div>
    </div>
  );
};
