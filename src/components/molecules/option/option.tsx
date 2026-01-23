

import { cn } from '@pulsar-framework/design-tokens'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type IOptionProps } from './option.type'

// External to the component so it's compiled ONCE!
const optionDefaultConfig = new ComponentConfigBuilder('primary').build()

// External to the component so it's compiled ONCE!
const optionDefaultStyling = new ComponentStylingBuilder()
  .base('py-2 px-3')
  .build()

/**
 * Option component
 * Creates a select option element - molecule component
 */
export const Option = ({
  config = optionDefaultConfig,
  styling = optionDefaultStyling,
  value,
  label,
  selected = false,
  children,
  ...rest
}: IOptionProps): HTMLElement => 
  <option
    value={value}
    selected={selected}
    className={cn(
      styling.base,
      config.disabled ? 'text-neutral-400' : '',
      config.className,
      styling.custom
    )}
    disabled={config.disabled}
    {...rest}
  >
    {label || children || value}
  </option>
