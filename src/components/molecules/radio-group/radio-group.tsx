/**
 * RadioGroup component implementation
 * Framework: Pulsar
 * Molecule: Composes multiple Radio atoms with labels
 */

import { cn } from '@pulsar-framework/design-tokens'
import { Radio } from '../../atoms/radio'
import { Skeleton } from '../../atoms/skeleton'
import { Typography } from '../../atoms/typography'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { type IRadioGroupProps } from './radio-group.type'

// External to the component so it's compiled ONCE!
const radioGroupDefaultConfig = new ComponentConfigBuilder('primary').build()

// External to the component so it's compiled ONCE!
const radioGroupDefaultStyling = new ComponentStylingBuilder()
  .base('flex gap-4')
  .build()

/**
 * RadioGroup component
 * Creates a group of radio buttons - molecule component
 */
export const RadioGroup = ({
  config = radioGroupDefaultConfig,
  styling = radioGroupDefaultStyling,
  name,
  options,
  value,
  defaultValue,
  orientation = 'vertical',
  onChange,
  ...rest
}: IRadioGroupProps): HTMLElement => 
  config.loading ?
    <Skeleton width="w-full" height="h-24" rounded="md" /> :
    <div
      className={cn(
        styling.base,
        orientation === 'vertical' ? 'flex-col' : 'flex-row',
        config.className,
        styling.custom
      )}
      role="radiogroup"
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    >
      {options.map((option) => (
        <label
          className={cn(
            'flex items-center gap-2 cursor-pointer',
            option.disabled ? 'opacity-50 cursor-not-allowed' : ''
          )}
        >
          <Radio
            name={name}
            value={option.value}
            checked={value ? value === option.value : undefined}
            defaultChecked={defaultValue === option.value}
            config={new ComponentConfigBuilder('primary')
              .disabled(option.disabled || config.disabled)
              .build()}
            onchange={(e) => {
              if (onChange && (e.target as HTMLInputElement).checked) {
                onChange(option.value)
              }
            }}
          />
          <Typography
            variant="body2"
            config={new ComponentConfigBuilder('primary').build()}
          >
            {option.label}
          </Typography>
        </label>
      ))}
    </div>
