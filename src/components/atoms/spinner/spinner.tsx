/**
 * Spinner component implementation
 * Framework: Pulsar
 * Type: Atom
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ISpinnerProps } from './spinner.type';

// External - compiled ONCE
const spinnerSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
} as const;

/**
 * Spinner component
 * Creates an animated loading spinner
 */
export const Spinner = ({
  size = 'md',
  label = 'Loading',
  className,
  ...rest
}: ISpinnerProps): HTMLElement => (
  <span
    className={cn(
      'inline-block border-2 border-current border-t-transparent rounded-full animate-spin',
      spinnerSizes[size],
      className
    )}
    role="status"
    ariaLabel={label}
    {...rest}
  />
);
