/**
 * Demo: createEffect() API for auto-reactivity outside JSX components
 */

import { createEffect, useState } from '@pulsar-framework/pulsar.dev';

export const CreateEffectDemo = (): HTMLElement => {
  console.log('[CreateEffectDemo] Starting...');

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello');

  // createEffect automatically tracks signal dependencies and re-runs when they change
  let effectRuns = 0;
  createEffect(() => {
    effectRuns++;
    console.log(
      `[CreateEffectDemo] Effect run #${effectRuns}: count = ${count()}, message = "${message()}"`
    );

    // Demo: Update document title based on signals
    if (typeof document !== 'undefined') {
      document.title = `Count: ${count()} - ${message()}`;
    }

    // Return cleanup function (optional)
    return () => {
      console.log(`[CreateEffectDemo] Cleanup for run #${effectRuns}`);
    };
  });

  // Another effect with conditional dependency
  createEffect(() => {
    if (count() > 5) {
      console.log('[CreateEffectDemo] Count is high!', count());
    }
  });

  const handleIncrement = () => {
    console.log('[CreateEffectDemo] Incrementing count');
    setCount(count() + 1);
  };

  const handleChangeMessage = () => {
    const messages = ['Hello', 'World', 'Auto-Reactive', 'Effects'];
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    console.log('[CreateEffectDemo] Changing message to:', newMessage);
    setMessage(newMessage);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-bold mb-4">🔄 createEffect() Demo</h2>
      <p className="mb-4">
        This demonstrates <code>createEffect()</code> for automatic reactivity outside JSX. Check
        the console and document title for effect executions.
      </p>

      <div className="space-y-4">
        <div>
          <p>
            <strong>Count:</strong> {count()}
          </p>
          <button
            onclick={handleIncrement}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Increment Count
          </button>
        </div>

        <div>
          <p>
            <strong>Message:</strong> "{message()}"
          </p>
          <button
            onclick={handleChangeMessage}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Random Message
          </button>
        </div>

        <div className="text-sm text-gray-600">
          <p>• Effects automatically track signal dependencies</p>
          <p>• Re-run when any tracked signal changes</p>
          <p>• Support cleanup functions</p>
          <p>• Check browser console for effect logs</p>
        </div>
      </div>
    </div>
  );
};
