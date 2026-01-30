/**
 * StringEditor Component
 * Text input editor for string props
 */

import { Input } from '../../../components/atoms/input';
import { Stack } from '../../../components/atoms/stack';
import { Typography } from '../../../components/atoms/typography';
import { Label } from '../../../components/molecules/label';
import type { PropEditorProps } from './prop-editor.types';

/**
 * StringEditor
 * Renders a text input for editing string props
 */
export const StringEditor = ({ config, onChange, className }: PropEditorProps): HTMLElement => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    onChange(config.name, target.value || null);
  };

  const inputId = `prop-${config.name}`;
  const displayLabel = config.label || config.name;
  const currentValue = (config.value as string) || '';

  const children: HTMLElement[] = [
    Label({ text: displayLabel, htmlFor: inputId, required: config.required }),
    Input({
      id: inputId,
      type: 'text',
      value: currentValue,
      placeholder: (config.defaultValue as string) || `Enter ${displayLabel.toLowerCase()}...`,
      disabled: config.disabled,
      oninput: handleChange,
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

  return Stack({
    direction: 'vertical',
    spacing: 'xs',
    className,
    children,
  });
};
