/**
 * Label component props interface
 * Molecule: Composes Typography with form input
 */

import type { Pulsar } from 'pulsar'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface ILabelProps extends Pulsar.HtmlExtends<'label'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Label content
  readonly text: string
  readonly htmlFor?: string
  
  // States
  readonly required?: boolean
  readonly disabled?: boolean
  
  // Helper text
  readonly helperText?: string
  readonly errorText?: string
}
