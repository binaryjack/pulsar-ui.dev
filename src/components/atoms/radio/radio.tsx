/**
 * Radio component implementation
 * Framework: Pulsar
 */

import { checkboxSizeClasses, cn } from '@pulsar-framework/design-tokens';
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder';
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder';
import { Skeleton } from '../skeleton';
import { type IRadioProps } from './radio.type';

// External to the component so it's compiled ONCE!
const radioDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('full').build();

// External to the component so it's compiled ONCE!
const radioDefaultStyling = new ComponentStylingBuilder()
  .base('border cursor-pointer focus:outline-none rounded-full')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .background('bg-white checked:bg-primary-600 checked:border-primary-600')
  .disabled('bg-neutral-100 cursor-not-allowed')
  .build();
/**
 * Radio component
 * Creates an accessible radio input - atomic component (single element output)
 */
export const Radio = ({
  config = radioDefaultConfig,
  styling = radioDefaultStyling,
  checked,
  defaultChecked,
  name,
  value,
  ...rest
}: IRadioProps): HTMLElement => {
  if (config.loading) {
    return (
      <Skeleton
        width={config.size ? checkboxSizeClasses[config.size] : 'w-5'}
        height={config.size ? checkboxSizeClasses[config.size].split(' ')[1] : 'h-5'}
        rounded="full"
      />
    );
  }

  const className = cn(
    styling.base,
    styling.transition,
    styling.border,
    styling.focus,
    styling.background,
    config.size ? checkboxSizeClasses[config.size] : '',
    config.disabled ? styling.disabled : '',
    config.className,
    styling.custom
  );

  return (
    <input
      type="radio"
      name={name}
      value={value !== undefined ? String(value) : undefined}
      className={className}
      checked={checked !== undefined ? Boolean(checked) : undefined}
      defaultChecked={defaultChecked !== undefined ? Boolean(defaultChecked) : undefined}
      disabled={config.disabled || false}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />
  );
};
