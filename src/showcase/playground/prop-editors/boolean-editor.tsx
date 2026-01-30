/**
 * BooleanEditor Component
 * Toggle switch editor for boolean props
 */

import { Stack } from '../../../components/atoms/stack';
import { Toggle } from '../../../components/atoms/toggle';
import { Typography } from '../../../components/atoms/typography';
import { Label } from '../../../components/molecules/label';
import type { PropEditorProps } from './prop-editor.types';

/**
 * BooleanEditor
 * Renders a toggle switch for editing boolean props
 */
export const BooleanEditor = ({ config, onChange, className }: PropEditorProps): HTMLElement => {
  const handleChange = (checked: boolean) => {
    onChange(config.name, checked);
  };

  const displayLabel = config.label || config.name;
  const currentValue = Boolean(config.value);

  const children: HTMLElement[] = [
    Stack({
      direction: 'horizontal',
      spacing: 'sm',
      className: 'items-center',
      children: [
        Toggle({
          id: `prop-${config.name}`,
          checked: currentValue,
          disabled: config.disabled,
          onChange: handleChange,
        }),
        Label({ text: displayLabel, htmlFor: `prop-${config.name}`, required: config.required }),
      ],
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
