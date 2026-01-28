/**
 * Container Component - Declarative Implementation
 * Responsive max-width container using design tokens
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IContainerProps } from './container.type';

/**
 * Container component
 * Creates a responsive max-width wrapper - atomic component
 */
export const Container = ({
  maxWidth = 'xl',
  padding = 'md',
  centered = true,
  children,
  class: className,
  ...rest
}: IContainerProps): HTMLElement => {
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    xs: 'px-2',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
    xl: 'px-12',
  };

  const containerClasses = cn(
    'w-full',
    maxWidthClasses[maxWidth],
    paddingClasses[padding],
    centered && 'mx-auto',
    className
  );

  return (
    <div class={containerClasses} {...rest}>
      {children}
    </div>
  );
};
