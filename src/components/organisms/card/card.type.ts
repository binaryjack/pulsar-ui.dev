/**
 * Card component props interface
 * Organism: Composes header, body, footer sections
 */

import type { Pulsar } from 'pulsar'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface ICardProps extends Pulsar.HtmlExtends<'div'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Card sections
  readonly header?: HTMLElement
  readonly footer?: HTMLElement
  readonly children?: JSX.Children
  
  // Visual
  readonly elevation?: boolean
  readonly bordered?: boolean
}