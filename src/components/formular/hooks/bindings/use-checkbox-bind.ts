/**
 * useCheckboxBind
 *
 * Adapts a formular IUseFieldResult to the props contract of atom/checkbox/Checkbox.
 * Called inside a component render function — values are evaluated in the reactive context.
 *
 * @example
 * ```tsx
 * const field = useFormContext().getField('agree')
 * const state = useField(field)
 * const bind = useCheckboxBind(state)
 * return <Checkbox {...bind} />
 * ```
 */

import type { IUseFieldResult } from '../use-field';
import type { ICheckboxBindProps } from './field-bindings.type';

export function useCheckboxBind(field: IUseFieldResult): ICheckboxBindProps {
  return {
    name: field.name(),
    checked: Boolean(field.value()),
    disabled: field.isDisabled(),
    required: field.isRequired(),
    'aria-invalid': field.hasErrors(),
    'aria-required': field.isRequired(),
    onChange: (e: Event & { target: HTMLInputElement }) => field.setValue(e.target.checked),
    onFocus: field.focus,
    onBlur: field.blur,
  };
}
