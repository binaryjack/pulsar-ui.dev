/**
 * Toggle component implementation
 * Framework: Pulsar
 */

import { cn, toggleSizeClasses } from '@pulsar-framework/design-tokens';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { Skeleton } from '../skeleton';
import { type IToggleProps } from './toggle.type';

// External to the component so it's compiled ONCE!
const toggleDefaultConfig = new ComponentConfigBuilder('primary')
  .size('md')
  .rounded('full')
  .build();

// External to the component so it's compiled ONCE!
const toggleDefaultStyling = new ComponentStylingBuilder()
  .base(
    'relative inline-flex items-center rounded-full cursor-pointer focus:outline-none transition-all duration-200 state-layer touch-target-comfortable'
  )
  .focus('focus:ring-4 focus:ring-primary-100 focus:ring-offset-2')
  .background('bg-neutral-300 aria-checked:bg-primary-600')
  .disabled('opacity-40 cursor-not-allowed')
  .build();

/**
 * Toggle component
 * Creates an accessible toggle switch - atomic component (single element output)
 */
export const Toggle = ({
  config = toggleDefaultConfig,
  styling = toggleDefaultStyling,
  checked = false,
  ...rest
}: IToggleProps): HTMLElement => {
  if (config.loading) {
    return (
      <Skeleton
        width={config.size ? toggleSizeClasses[config.size].split(' ')[0] : 'w-11'}
        height={config.size ? toggleSizeClasses[config.size].split(' ')[1] : 'h-6'}
        rounded="full"
      />
    );
  }

  const className = cn(
    styling.base,
    styling.focus,
    styling.background,
    config.size ? toggleSizeClasses[config.size] : '',
    config.disabled ? styling.disabled : '',
    config.className,
    styling.custom
  );

  return (
    <button
      type="button"
      role="switch"
      ariaChecked={checked ? 'true' : 'false'}
      className={className}
      disabled={config.disabled || false}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />
  );
};
