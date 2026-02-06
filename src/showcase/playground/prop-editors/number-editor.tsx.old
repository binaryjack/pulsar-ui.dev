/**
 * NumberEditor Component
 * Number input editor for numeric props with min/max/step support
 */

import { Input } from '../../../components/atoms/input';
import { Stack } from '../../../components/atoms/stack';
import { Typography } from '../../../components/atoms/typography';
import { Label } from '../../../components/molecules/label';
import type { PropEditorProps } from './prop-editor.types';

/**
 * NumberEditor
 * Renders a number input for editing numeric props
 */
export const NumberEditor = ({ config, onChange, className }: PropEditorProps): HTMLElement => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value === '' ? null : Number(target.value);
    onChange(config.name, value);
  };

  const inputId = `prop-${config.name}`;
  const displayLabel = config.label || config.name;
  const currentValue =
    config.value !== null && config.value !== undefined ? String(config.value) : '';

  // Build helper text from constraints
  const constraints: string[] = [];
  if (config.min !== undefined) constraints.push(`min: ${config.min}`);
  if (config.max !== undefined) constraints.push(`max: ${config.max}`);
  if (config.step !== undefined) constraints.push(`step: ${config.step}`);
  const constraintText = constraints.length > 0 ? `(${constraints.join(', ')})` : '';

  const labelText = `${displayLabel} ${constraintText}`.trim();

  return (
    <Stack direction="vertical" spacing="xs" className={className}>
      <Label text={labelText} htmlFor={inputId} required={config.required} />
      <Input
        id={inputId}
        type="number"
        value={currentValue}
        placeholder={config.defaultValue !== undefined ? String(config.defaultValue) : '0'}
        disabled={config.disabled}
        min={config.min !== undefined ? String(config.min) : undefined}
        max={config.max !== undefined ? String(config.max) : undefined}
        step={config.step !== undefined ? String(config.step) : undefined}
        oninput={handleChange}
      />
      {config.description && (
        <Typography tag="p" variant="caption" className="text-neutral-500">
          {config.description}
        </Typography>
      )}
    </Stack>
  );
};
