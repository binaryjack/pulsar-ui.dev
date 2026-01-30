/**
 * PropEditor Component
 * Orchestrator that routes to appropriate editor based on prop type
 */

import { Divider } from '../../../components/atoms/divider';
import { Stack } from '../../../components/atoms/stack';
import { Typography } from '../../../components/atoms/typography';
import { Card } from '../../../components/organisms/card';
import { BooleanEditor } from './boolean-editor';
import { NumberEditor } from './number-editor';
import type { IPropsEditorProps, PropEditorConfig } from './prop-editor.types';
import { SelectEditor } from './select-editor';
import { StringEditor } from './string-editor';

/**
 * PropEditor
 * Main prop editing interface - detects type and renders appropriate editor
 */
export const PropEditor = ({ props, onChange, className }: IPropsEditorProps): HTMLElement => {
  /**
   * Render the appropriate editor based on prop type
   */
  const renderEditor = (config: PropEditorConfig): HTMLElement | null => {
    const editorProps = { config, onChange };

    switch (config.type) {
      case 'string':
        return StringEditor(editorProps);

      case 'number':
        return NumberEditor(editorProps);

      case 'boolean':
        return BooleanEditor(editorProps);

      case 'select':
        return SelectEditor(editorProps);

      // TODO: Implement additional editors
      case 'color':
      case 'object':
      case 'array':
        return (
          <Stack direction="vertical" spacing="xs">
            <Typography tag="p" variant="body2" className="text-neutral-400 italic">
              {config.type} editor not yet implemented
            </Typography>
          </Stack>
        );

      default:
        return (
          <Typography tag="p" variant="body2" className="text-error-500">
            Unknown prop type: {config.type}
          </Typography>
        );
    }
  };

  if (!props || props.length === 0) {
    return (
      <Card className={className}>
        <Typography tag="p" variant="body2" className="text-neutral-500 italic">
          No editable props configured
        </Typography>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <Stack direction="vertical" spacing="md">
        <Typography tag="h3" variant="h4" className="font-semibold">
          Component Props
        </Typography>

        <Divider />

        <Stack direction="vertical" spacing="lg">
          {props
            .map((propConfig) => renderEditor(propConfig))
            .filter((editor): editor is HTMLElement => editor !== null)}
        </Stack>
      </Stack>
    </Card>
  );
};
