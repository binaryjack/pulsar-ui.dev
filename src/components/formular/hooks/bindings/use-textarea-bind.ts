/**
 * useTextareaBind
 *
 * Adapts a formular IUseFieldResult to the props contract of atom/textarea/Textarea.
 * Called inside a component render function — values are evaluated in the reactive context.
 *
 * @example
 * ```tsx
 * const field = useFormContext().getField('description')
 * const state = useField(field)
 * const bind = useTextareaBind(state)
 * return <Textarea {...bind} />
 * ```
 */

import type { IUseFieldResult } from '../use-field';
import type { ITextareaBindProps } from './field-bindings.type';

export function useTextareaBind(field: IUseFieldResult): ITextareaBindProps {
  return {
    name: field.name(),
    value: () => String(field.value() ?? ''),
    disabled: field.isDisabled,
    required: field.isRequired,
    'aria-invalid': field.hasErrors,
    'aria-required': field.isRequired,
    onInput: (e: Event & { target: HTMLTextAreaElement }) => field.setValue(e.target.value),
    onFocus: field.focus,
    onBlur: field.blur,
  };
}
