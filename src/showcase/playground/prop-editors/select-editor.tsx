/**
 * SelectEditor Component
 * Dropdown-based prop editor for enum/union types
 */

import { Stack } from '../../../components/atoms/stack';
import { Typography } from '../../../components/atoms/typography';
import { Label } from '../../../components/molecules/label';
import { Select } from '../../../components/organisms/select';
import type { PropEditorProps } from './prop-editor.types';

/**
 * SelectEditor
 * Handles enum, union, and predefined option props
 */
export const SelectEditor = ({ config, onChange, className }: PropEditorProps): HTMLElement => {
  const handleChange = (value: string) => {
    onChange(config.name, value);
  };

  const inputId = `prop-${config.name}`;
  const displayLabel = config.label || config.name;
  const currentValue =
    config.value !== null && config.value !== undefined
      ? String(config.value)
      : config.defaultValue
        ? String(config.defaultValue)
        : '';

  // Get options from config
  const options = config.options || [];

  const children: HTMLElement[] = [
    Label({ text: displayLabel, htmlFor: inputId, required: config.required }),
    Select({
      id: inputId,
      value: currentValue,
      options: options.map((opt) => ({
        value: String(typeof opt === 'string' ? opt : opt.value),
        label: typeof opt === 'string' ? opt : opt.label,
      })),
      disabled: config.disabled,
      onchange: (e: Event) => {
        const target = e.target as HTMLSelectElement;
        handleChange(target.value);
      },
    }),
  ];

  if (config.description) {
    children.push(
      Typography({
        tag: 'p',
        variant: 'caption',
        className: 'text-neutral-500',
        children: config.description,
      })
    );
  }

  return Stack({ direction: 'vertical', spacing: 'xs', className, children });
};
