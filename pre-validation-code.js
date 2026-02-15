import { $REGISTRY, createEffect, createSignal, insert, t_element } from '@pulsar-framework/pulsar.dev';

export interface ICounterProps {
  id?: string;
}
export function Counter({id}): HTMLElement {
  return $REGISTRY.execute('component:Counter', () => {
    console.log('[Counter] Initializing with id:', id);
    const [count, setCount] = createSignal(0);
    const increment = () => {
      console.log('[Click] Increment, before:', count());
      setCount((count() + 1));
      console.log('[Click] After:', count());
    };
    const decrement = () => {
      console.log('[Click] Decrement, before:', count());
      setCount((count() - 1));
    };
    const reset = () => {
      console.log('[Click] Reset');
      setCount(0);
    };
    return t_element('div', { style: 'background: #1a1a1a; padding: 30px; border-radius: 12px; margin-bottom: 20px;' }, [t_element('h2', { style: 'font-size: 24px; margin-bottom: 20px; color: #f59e0b;' }, ['🧪 Test: Basic Signal Reactivity']), t_element('div', { style: 'display: flex; gap: 20px; align-items: center; margin-bottom: 20px; flex-wrap: wrap;' }, [t_element('button', { onClick: increment, style: 'padding: 16px 32px; font-size: 20px; background: #3b82f6; border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; transition: background 0.2s;' }, ['\r\n          ➕ Increment\r\n        ']), t_element('button', { onClick: decrement, style: 'padding: 16px 32px; font-size: 20px; background: #ef4444; border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; transition: background 0.2s;' }, ['\r\n          ➖ Decrement\r\n        ']), t_element('button', { onClick: reset, style: 'padding: 16px 32px; font-size: 20px; background: #6b7280; border: none; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; transition: background 0.2s;' }, ['\r\n          🔄 Reset\r\n        '])]), ((() => { const _el$ = t_element('div', { style: 'font-size: 48px; font-weight: bold; color: #10b981; margin-top: 20px; padding: 20px; background: #0a0a0a; border-radius: 8px; text-align: center;' }, ['\r\n        Count: ']); insert(_el$, () => count()); return _el$; })()), t_element('div', { style: 'margin-top: 30px; padding: 20px; background: #2a2a2a; border-radius: 8px;' }, [t_element('h3', { style: 'font-size: 18px; margin-bottom: 10px; color: #10b981;' }, ['\r\n          ✅ Features Being Tested\r\n        ']), t_element('ul', { style: 'list-style: none; padding: 0; color: #d1d5db;' }, [t_element('li', { style: 'padding: 5px 0;' }, ['✓ Component props (id: ', (id || 'none'), ')']), t_element('li', { style: 'padding: 5px 0;' }, ['✓ createSignal() reactivity']), t_element('li', { style: 'padding: 5px 0;' }, ['✓ Event handlers (onClick)']), t_element('li', { style: 'padding: 5px 0;' }, ['✓ JSX expression interpolation ', '` {count()} `']), t_element('li', { style: 'padding: 5px 0;' }, ['✓ Console logging and debugging'])])])]);
  });
}