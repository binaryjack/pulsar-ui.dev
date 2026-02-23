/**
 * useToggleBind
 *
 * Adapts a formular IUseFieldResult to the props contract of atom/toggle/Toggle.
 * Called inside a component render function — values are evaluated in the reactive context.
 *
 * @example
 * ```tsx
 * const field = useFormContext().getField('notifications')
 * const state = useField(field)
 * const bind = useToggleBind(state)
 * return <Toggle {...bind} />
 * ```
 */

import type { IUseFieldResult } from '../use-field';
import type { IToggleBindProps } from './field-bindings.type';

export function useToggleBind(field: IUseFieldResult): IToggleBindProps {
  return {
    name: field.name(),
    checked: () => Boolean(field.value()),
    disabled: field.isDisabled,
    required: field.isRequired,
    'aria-invalid': field.hasErrors,
    'aria-required': field.isRequired,
    onChange: (checked: boolean) => field.setValue(checked),
    onFocus: field.focus,
    onBlur: field.blur,
  };
}
