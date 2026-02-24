/**
 * useField hook - Unified formular.dev field synchronization
 *
 * This hook consolidates ALL field state reactivity in ONE place for optimal performance.
 * Instead of having multiple hooks (useFieldValidation, useFieldState, useFieldFocus, etc.),
 * this single hook syncs all formular.dev signals to Pulsar reactivity.
 *
 * @example
 * ```tsx
 * const field = formContext.getField('email');
 * const {
 *   value,
 *   setValue,
 *   hasErrors,
 *   errors,
 *   guides,
 *   isValid,
 *   isDirty,
 *   isPristine,
 *   isTouched,
 *   isFocused,
 *   isDisabled,
 *   isRequired,
 *   focus,
 *   blur,
 *   reset,
 * } = useField(field);
 *
 * return (
 *   <input
 *     value={value()}
 *     onInput={(e) => setValue(e.target.value)}
 *     disabled={isDisabled()}
 *     required={isRequired()}
 *   />
 * );
 * ```
 */

import type { IFieldGuide } from '@pulsar-framework/formular.dev';
import { createEffect, createSignal, useSync } from '@pulsar-framework/pulsar.dev';
import type { IFieldError, IValidationResult } from '../types';

export interface IUseFieldResult {
  // ==================== VALUE MANAGEMENT ====================
  /** Reactive function: returns current field value */
  value: () => any;
  /** Set field value programmatically */
  setValue: (newValue: any) => void;

  // ==================== VALIDATION STATE ====================
  /** Reactive function: returns true if field has validation errors */
  hasErrors: () => boolean;
  /** Reactive function: returns array of error messages */
  errors: () => IFieldError[];
  /** Reactive function: returns array of guide/hint messages */
  guides: () => IFieldGuide[];
  /** Reactive function: returns raw validation results */
  validationResults: () => IValidationResult[];

  // ==================== FIELD STATE ====================
  /** Reactive function: returns true if field passes all validation */
  isValid: () => boolean;
  /** Reactive function: returns true if field has been modified */
  isDirty: () => boolean;
  /** Reactive function: returns true if field is in original state */
  isPristine: () => boolean;
  /** Reactive function: returns true if field has been interacted with */
  isTouched: () => boolean;
  /** Reactive function: returns true if field currently has focus */
  isFocused: () => boolean;

  // ==================== FIELD PROPERTIES ====================
  /** Reactive function: returns true if field is disabled */
  isDisabled: () => boolean;
  /** Reactive function: returns true if field is required */
  isRequired: () => boolean;
  /** Get field label */
  label: () => string;
  /** Get field name */
  name: () => string;
  /** Get field type */
  type: () => string;

  // ==================== FIELD ACTIONS ====================
  /** Focus the field */
  focus: () => void;
  /** Blur the field */
  blur: () => void;
  /** Reset field to default value */
  reset: () => void;
  /** Mark field as touched */
  touch: () => void;
}

/**
 * Hook to sync ALL formular.dev field state to Pulsar reactivity
 *
 * This is the ONE hook to rule them all - consolidates all field behaviors:
 * - Value management
 * - Validation state
 * - User interaction state (touched, focused, dirty)
 * - Field properties (disabled, required)
 * - Field actions (focus, blur, reset)
 *
 * @param field - The formular.dev field instance (from form.getField())
 * @returns Complete reactive field interface
 */
export function useField(field: any): IUseFieldResult {
  if (!field) {
    throw new Error('[useField] Field instance is required');
  }

  const input = field.input;

  // ==================== PER-SIGNAL REACTIVE BRIDGE ====================
  // Each formular signal gets its own useSync+createEffect subscription.
  // createEffect(() => { signal.get(); notify(); }) registers a dependency
  // inside formular's own reactive graph — guaranteed to fire whenever the
  // signal is set, regardless of whether notificationManager.notify() is
  // called anywhere in the code path.
  //
  // Plain properties (isDirty, isPristine, isFocus) are not formular signals,
  // so we subscribe to the observers channel (String(input.id)) which fires
  // via notificationManager.trigger() → observers.trigger(channelId).

  // --- Reactive signals ---
  const value = useSync<any>(
    (notify) =>
      createEffect(() => {
        input?._value?.get();
        notify();
      }),
    () => input?._value?.get()
  );

  const validationResults = useSync<IValidationResult[]>(
    (notify) =>
      createEffect(() => {
        (input as any)?._validationResults?.get();
        notify();
      }),
    () => (input as any)?._validationResults?.get() ?? []
  );

  const isValid = useSync<boolean>(
    (notify) =>
      createEffect(() => {
        input?._isValid?.get();
        notify();
      }),
    () => input?._isValid?.get() ?? true
  );

  // isRequired is static (set at field creation) — plain read, no reactive subscription needed
  const isRequired = () => input?.validationOptions?.required?.value ?? false;

  // --- Plain-property state (not signals) via observers channel ---
  const _channel = input?.id ? String(input.id) : null;

  const fieldStateSnapshot = useSync<{
    isDirty: boolean;
    isPristine: boolean;
    isFocus: boolean;
  }>(
    (notify) => {
      if (!_channel || !input?.notificationManager?.observers) return () => {};
      const cb = () => notify();
      input.notificationManager.observers.subscribe(_channel, cb, false);
      return () => input.notificationManager.observers.unSubscribe(_channel, cb, false);
    },
    () => ({
      isDirty: input?.isDirty ?? false,
      isPristine: input?.isPristine ?? true,
      isFocus: input?.isFocus ?? false,
    })
  );

  const isDirty = () => fieldStateSnapshot().isDirty;
  const isPristine = () => fieldStateSnapshot().isPristine;
  const isFocused = () => fieldStateSnapshot().isFocus;
  const isDisabled = () => input?.disabled ?? false;

  // ==================== TOUCHED TRACKING ====================
  // "Touched" = field was focused and then blurred at least once.
  // This is orthogonal to isDirty (user can focus+blur without changing value).
  // We track it locally because formular does not expose an isTouched flag.
  let _wasEverFocused = false;
  const [_isTouched, _setIsTouched] = createSignal(false);

  // ==================== DERIVED VALIDATION FUNCTIONS ====================
  const hasErrors = () => {
    const results = validationResults();
    return results.some((r) => r.state === false && r.error);
  };

  const errors = (): IFieldError[] => {
    const results = validationResults();
    return results
      .filter((result: IValidationResult) => result.state === false && result.error)
      .map(
        (result: IValidationResult) =>
          ({
            name: result.fieldName,
            message: result.error!,
            code: result.code,
          }) as IFieldError
      );
  };

  const guides = (): IFieldGuide[] => {
    const results = validationResults();
    // ✅ Return ALL guides regardless of validation state
    // Guides are helpful hints that should show even when validation passes
    return results
      .filter((result: IValidationResult) => result.guide)
      .map(
        (result: IValidationResult) =>
          ({
            name: result.fieldName,
            code: result.code,
            message: result.guide!,
          }) as IFieldGuide
      );
  };

  // ==================== DERIVED STATE FUNCTIONS ====================
  // "Touched" = has been focused then blurred; OR if the field is dirty
  // (if dirty, user must have interacted with it).
  const isTouched = () => _isTouched() || isDirty();

  // ==================== FIELD METADATA ====================
  const label = () => input?.label ?? field.name ?? '';
  const name = () => input?.name ?? field.name ?? '';
  const type = () => input?.type ?? 'text';

  // ==================== FIELD ACTIONS ====================
  // Go through formular's valueManager so isPristine/isDirty update
  // and the 'onUiUpdate' notifier fires → Pulsar snapshot re-reads state.
  const setValue = (newValue: any) => {
    if (input?.valueManager?.setValue) {
      input.valueManager.setValue(field, newValue);
    } else {
      input?._value?.set(newValue);
    }
  };

  const focus = () => {
    _wasEverFocused = true;
    field?.focus?.();
  };

  const blur = () => {
    // Mark as touched when the field is blurred after having been focused
    if (_wasEverFocused) _setIsTouched(true);
    field?.blur?.();
  };

  const reset = () => {
    field?.reset?.();
  };

  const touch = () => {
    // Directly mark as touched without requiring a real focus/blur cycle.
    _wasEverFocused = true;
    _setIsTouched(true);
  };

  return {
    // Value management
    value,
    setValue,

    // Validation state
    hasErrors,
    errors,
    guides,
    validationResults,

    // Field state
    isValid,
    isDirty,
    isPristine,
    isTouched,
    isFocused,

    // Field properties
    isDisabled,
    isRequired,
    label,
    name,
    type,

    // Field actions
    focus,
    blur,
    reset,
    touch,
  };
}
