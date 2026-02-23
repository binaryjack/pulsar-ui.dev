/**
 * Bridge between formular.dev signals and Pulsar's reactive system
 * Similar to React's useSyncExternalStore
 *
 * This hook allows Pulsar components to reactively subscribe to formular.dev signals
 * and trigger re-renders when the signal values change.
 */

import { createSignal } from '@pulsar-framework/pulsar.dev';

/**
 * Subscribe a Pulsar signal to a formular.dev signal
 *
 * @deprecated Pulsar's createEffect uses a separate reactive graph and cannot
 * track formular.dev signals. Use useField() from formular/hooks instead.
 * This function returns a one-shot snapshot that never updates.
 *
 * @param formularSignalGetter - The formular.dev signal getter to subscribe to
 * @returns A Pulsar signal that holds the initial value only — DOES NOT update
 */
export function useFormularSignal<T>(formularSignalGetter: () => T): [() => T, (value: T) => void] {
  console.warn(
    '[useFormularSignal] DEPRECATED: Pulsar createEffect cannot observe formular.dev signals. ' +
      'The returned signal will hold the initial value only and never update. ' +
      'Use useField() from @pulsar-framework/pulsar-ui.dev instead.'
  );
  const [pulsarValue, setPulsarValue] = createSignal<T>(formularSignalGetter());
  return [pulsarValue, setPulsarValue];
}
