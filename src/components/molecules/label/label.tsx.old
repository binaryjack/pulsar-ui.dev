/**
 * Label component implementation
 * Framework: Pulsar
 * Molecule: Label with optional helper text and required indicator
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { Typography } from '../../atoms/typography';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { type ILabelProps } from './label.type';

// External to the component so it's compiled ONCE!
const labelDefaultConfig = new ComponentConfigBuilder('primary').build();

// External to the component so it's compiled ONCE!
const labelDefaultStyling = new ComponentStylingBuilder()
  .base('block mb-2 transition-colors duration-200')
  .build();

/**
 * Label component
 * Creates a form label with optional helper/error text - molecule component
 */
export const Label = ({
  config = labelDefaultConfig,
  styling = labelDefaultStyling,
  text,
  htmlFor,
  required = false,
  disabled = false,
  helperText,
  errorText,
  ...rest
}: ILabelProps): HTMLElement =>
  config.loading ? (
    <Skeleton width="w-32" height="h-5" rounded="sm" />
  ) : (
    <label
      htmlFor={htmlFor}
      className={cn(
        styling.base,
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        config.className,
        styling.custom
      )}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      <Typography variant="body2" config={new ComponentConfigBuilder('primary').build()}>
        {text}
        {required && <span className="text-error-600 ml-1">*</span>}
      </Typography>

      {errorText ? (
        <Typography
          variant="caption"
          config={new ComponentConfigBuilder('primary').className('text-error-600 mt-1').build()}
        >
          {errorText}
        </Typography>
      ) : helperText ? (
        <Typography
          variant="caption"
          config={new ComponentConfigBuilder('primary').className('text-neutral-500 mt-1').build()}
        >
          {helperText}
        </Typography>
      ) : null}
    </label>
  );
