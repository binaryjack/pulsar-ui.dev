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

  return (
    <Stack direction="vertical" spacing="xs" className={className}>
      <Stack direction="horizontal" spacing="sm" className="items-center">
        <Toggle
          id={`prop-${config.name}`}
          checked={currentValue}
          disabled={config.disabled}
          onChange={handleChange}
        />
        <Label text={displayLabel} htmlFor={`prop-${config.name}`} required={config.required} />
      </Stack>
      {config.description && (
        <Typography tag="p" variant="caption" className="text-neutral-500">
          {config.description}
        </Typography>
      )}
    </Stack>
  );
};
