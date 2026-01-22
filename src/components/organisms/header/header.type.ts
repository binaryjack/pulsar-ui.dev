/**
 * Header component props interface
 * Organism: Page header with logo, navigation, and actions
 */

import type { Pulsar } from 'pulsar'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface IHeaderProps extends Pulsar.HtmlExtends<'header'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Header sections
  readonly logo?: HTMLElement
  readonly navigation?: HTMLElement
  readonly actions?: HTMLElement
  
  // Layout
  readonly sticky?: boolean
}