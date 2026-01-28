/**
 * Badge component props interface
 * Molecule: Composes icon + text content
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface IBadgeProps extends Pulsar.HtmlExtends<'span'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Content
  readonly label?: string
  readonly children?: string | number | HTMLElement | Array<string | number | HTMLElement>
  readonly icon?: HTMLElement
  readonly iconPosition?: 'left' | 'right'
  
  // Visual
  readonly dot?: boolean
}
