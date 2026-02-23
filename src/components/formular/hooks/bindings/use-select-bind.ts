/**
 * useSelectBind
 *
 * Adapts a formular IUseFieldResult to the props contract of organisms/select/Select.
 * Note: `options` are NOT part of the bind — they are static data provided by the caller.
 * Called inside a component render function — values are evaluated in the reactive context.
 *
 * @example
 * ```tsx
 * const field = useFormContext().getField('country')
 * const state = useField(field)
 * const bind = useSelectBind(state)
 * return <Select {...bind} options={countryOptions} />
 * ```
 */

import type { IUseFieldResult } from '../use-field';
import type { ISelectBindProps } from './field-bindings.type';

export function useSelectBind(field: IUseFieldResult): ISelectBindProps {
  return {
    name: field.name(),
    value: () => String(field.value() ?? ''),
    disabled: field.isDisabled,
    required: field.isRequired,
    'aria-invalid': field.hasErrors,
    'aria-required': field.isRequired,
    onChange: (value: string) => field.setValue(value),
    onFocus: field.focus,
    onBlur: field.blur,
  };
}
