/**
 * Stack Component - Declarative Implementation
 * Flexbox layout using design tokens
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IStackProps } from './stack.type';

/**
 * Stack component
 * Creates a flexbox layout - atomic component
 */
export const Stack = ({
  direction = 'vertical',
  spacing = 'md',
  align,
  justify,
  wrap = false,
  children,
  class: className,
  ...rest
}: IStackProps): HTMLElement => {
  const spacingClasses = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    'space-between': 'justify-between',
    'space-around': 'justify-around',
    'space-evenly': 'justify-evenly',
  };

  const stackClasses = cn(
    'flex',
    direction === 'vertical' ? 'flex-col' : 'flex-row',
    typeof spacing === 'string' && spacingClasses[spacing as keyof typeof spacingClasses],
    align && alignClasses[align],
    justify && justifyClasses[justify],
    wrap && 'flex-wrap',
    className
  );

  const customStyle = typeof spacing !== 'string' ? `gap: ${spacing}` : undefined;

  return (
    <div class={stackClasses} style={customStyle} {...rest}>
      {children}
    </div>
  );
};

/**
 * VStack - Vertical Stack helper
 */
export const VStack = (props: IStackProps): HTMLElement =>
  Stack({ ...props, direction: 'vertical' });

/**
 * HStack - Horizontal Stack helper
 */
export const HStack = (props: IStackProps): HTMLElement =>
  Stack({ ...props, direction: 'horizontal' });
