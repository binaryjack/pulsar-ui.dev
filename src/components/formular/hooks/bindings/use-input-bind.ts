/**
 * useInputBind
 *
 * Adapts a formular IUseFieldResult to the props contract of atom/input/Input.
 * Called inside a component render function — values are evaluated in the reactive context.
 *
 * @example
 * ```tsx
 * const field = useFormContext().getField('email')
 * const state = useField(field)
 * const bind = useInputBind(state)
 * return <Input {...bind} />
 * ```
 */

import type { IUseFieldResult } from '../use-field';
import type { IInputBindProps } from './field-bindings.type';

export function useInputBind(field: IUseFieldResult): IInputBindProps {
  return {
    name: field.name(),
    value: () => field.value() ?? '',
    disabled: field.isDisabled,
    required: field.isRequired,
    'aria-invalid': field.hasErrors,
    'aria-required': field.isRequired,
    onInput: (e: Event & { target: HTMLInputElement }) => field.setValue(e.target.value),
    onFocus: field.focus,
    onBlur: field.blur,
  };
}
