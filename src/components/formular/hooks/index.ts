/**
 * Hooks exports
 */

export { useField } from './use-field';
export type { IUseFieldResult } from './use-field';
export { useFieldValidation } from './use-field-validation';
export type { IFieldValidationResult } from './use-field-validation';
export { useFormularSignal } from './use-formular-signal';

// Signal adapter / headless bind hooks — atoms stay agnostic of formular
export {
  useCheckboxBind,
  useInputBind,
  useRadioBind,
  useSelectBind,
  useTextareaBind,
  useToggleBind,
} from './bindings';
export type {
  IBaseBindProps,
  ICheckboxBindProps,
  IInputBindProps,
  IRadioBindProps,
  ISelectBindProps,
  ITextareaBindProps,
  IToggleBindProps,
} from './bindings';
