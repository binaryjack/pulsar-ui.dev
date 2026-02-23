/**
 * useRadioBind
 *
 * Adapts a formular IUseFieldResult to the props contract of atom/radio/Radio
 * for a single radio option within a group.
 *
 * `radioValue` is the value this specific radio option represents.
 * `checked` is derived by comparing field value against `radioValue`.
 *
 * @example
 * ```tsx
 * const field = useFormContext().getField('gender')
 * const state = useField(field)
 * return (
 *   <>
 *     <Radio {...useRadioBind(state, 'male')}   label="Male" />
 *     <Radio {...useRadioBind(state, 'female')} label="Female" />
 *   </>
 * )
 * ```
 */

import type { IUseFieldResult } from '../use-field';
import type { IRadioBindProps } from './field-bindings.type';

export function useRadioBind(field: IUseFieldResult, radioValue: string): IRadioBindProps {
  return {
    name: field.name(),
    value: radioValue,
    checked: () => field.value() === radioValue,
    disabled: field.isDisabled,
    required: field.isRequired,
    'aria-invalid': field.hasErrors,
    'aria-required': field.isRequired,
    onChange: () => field.setValue(radioValue),
    onFocus: field.focus,
    onBlur: field.blur,
  };
}
