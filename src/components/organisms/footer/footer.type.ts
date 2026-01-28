/**
 * Footer component props interface
 * Organism: Page footer with content sections
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface IFooterProps extends Pulsar.HtmlExtends<'footer'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Footer sections
  readonly copyright?: string
  readonly links?: HTMLElement
}