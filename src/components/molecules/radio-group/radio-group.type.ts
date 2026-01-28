/**
 * RadioGroup component props interface
 * Molecule: Composes multiple Radio atoms
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'
import { type IRadioOption } from './radio-option.type'

export interface IRadioGroupProps extends Pulsar.HtmlExtends<'div'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // RadioGroup data
  readonly name: string
  readonly options: readonly IRadioOption[]
  readonly value?: string
  readonly defaultValue?: string
  
  // Layout
  readonly orientation?: 'horizontal' | 'vertical'
  
  // Change handler
  readonly onChange?: (value: string) => void
}
