/**
 * useFieldValidation hook
 * Abstracts validation data gathering from formular.dev fields
 *
 * @example
 * ```tsx
 * const { hasErrors, errors, guides } = useFieldValidation(field);
 *
 * return (
 *   <div>
 *     {hasErrors() && <ErrorList errors={errors()} />}
 *   </div>
 * );
 * ```
 */

import type { IFieldGuide } from '@pulsar-framework/formular.dev';
import type { IFieldError, IValidationResult } from '../types';
import { useField } from './use-field';

export interface IFieldValidationResult {
  /** Reactive function: returns true if field has validation errors */
  hasErrors: () => boolean;
  /** Reactive function: returns array of error messages */
  errors: () => IFieldError[];
  /** Reactive function: returns array of guide/hint messages */
  guides: () => IFieldGuide[];
  /** Reactive function: returns raw validation results */
  validationResults: () => IValidationResult[];
}

/**
 * Hook to extract and track validation state from formular.dev field
 *
 * @param field - The formular.dev field instance (from form.getField())
 * @returns Reactive functions for validation state
 */
export function useFieldValidation(field: any): IFieldValidationResult {
  // Delegate to the unified useField hook — it owns the single notifier bridge.
  const { hasErrors, errors, guides, validationResults } = useField(field);
  return { hasErrors, errors, guides, validationResults };
}
