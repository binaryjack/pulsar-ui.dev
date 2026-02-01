/**
 * Button component implementation
 * Framework: Pulsar
 */

import {
  cn,
  componentSizes,
  roundedClasses,
  shadowClasses,
  transitionDurationClasses,
} from '@pulsar-framework/design-tokens';
import { Skeleton } from '../../atoms/skeleton';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { type IButtonProps } from './button.type';

// External to the component so it's compiled ONCE!
const buttonDefaultConfig = new ComponentConfigBuilder('primary')
  .variant('solid')
  .size('md')
  .rounded('md')
  .transition(true)
  .build();

// External to the component so it's compiled ONCE!
const buttonDefaultStyling = new ComponentStylingBuilder()
  .base(
    'inline-flex items-center justify-center font-medium border focus:outline-none state-layer touch-target relative'
  )
  .background('bg-primary-600 hover:bg-primary-700 active:bg-primary-800')
  .border('border-transparent')
  .transition('transition-all duration-200')
  .hover('hover:shadow-lg hover:scale-[1.02]')
  .focus('focus:ring-4 focus:ring-primary-100 focus:ring-offset-2 focus:shadow-lg')
  .active('active:scale-[0.98] active:shadow-md')
  .disabled('opacity-40 cursor-not-allowed pointer-events-none')
  .custom('text-white')
  .build();

/**
 * Button component
 * Creates an accessible button element - atomic component (single element output)
 */
export const Button = ({
  config = buttonDefaultConfig,
  styling = buttonDefaultStyling,
  type = 'button',
  children,
  onclick,
  ...rest
}: IButtonProps): HTMLElement => {
  console.log('[Button] Called with config:', config);

  if (config.loading) {
    const skeleton = (
      <Skeleton
        width={config.fullWidth ? 'w-full' : 'w-32'}
        height={config.size ? componentSizes[config.size].height : 'h-10'}
        rounded={config.rounded}
      />
    );
    console.log(
      '[Button] Returning Skeleton:',
      skeleton,
      'instanceof HTMLElement:',
      skeleton instanceof HTMLElement
    );
    return skeleton;
  }

  // Variant styling - using inline classes since builder styles are already set
  const variantStyles = {
    solid: 'bg-primary-600 hover:bg-primary-700 text-white border-transparent',
    outline: 'bg-transparent border-primary-600 text-primary-600 hover:bg-primary-50',
    ghost: 'bg-transparent border-transparent text-primary-600 hover:bg-primary-50',
    text: 'bg-transparent border-transparent text-primary-600 hover:bg-primary-50',
  };

  const variantClass = config.variant
    ? variantStyles[config.variant as keyof typeof variantStyles]
    : '';

  const className = cn(
    styling.base,
    variantClass || styling.background, // Use variant or default background
    styling.border,
    styling.custom, // Contains text-white
    styling.transition,
    config.size ? componentSizes[config.size].padding : '',
    config.size ? componentSizes[config.size].fontSize : '',
    config.fullWidth ? 'w-full' : '',
    config.rounded ? roundedClasses[config.rounded] : '',
    config.shadow ? shadowClasses[config.shadow] : '',
    config.transitionDuration ? transitionDurationClasses[config.transitionDuration] : '',
    config.disabled ? styling.disabled : '',
    config.hover ? styling.hover : '',
    config.focus ? styling.focus : '',
    config.active ? styling.active : '',
    config.className,
    styling.custom
  );

  const button = (
    <button
      type={type}
      className={className}
      disabled={config.disabled || false}
      ariaBusy={config.loading ? 'true' : 'false'}
      onclick={onclick}
      {...rest}
    >
      {children}
    </button>
  );

  console.log(
    '[Button] Returning button:',
    button,
    'instanceof HTMLElement:',
    button instanceof HTMLElement
  );
  return button;
};
