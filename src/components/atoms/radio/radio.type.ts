/**
 * Radio component props interface
 * [COPILOT] this is an unique component
 * [COPILOT] this is an input of type radio
 * [COPILOT] can have default value
 * [COPILOT] it must accepts all HTMLInputElement rest props from consumer
 * [COPILOT] can have a default skeletton behavior on Loading (reuse available skeletton component) that replaces the actual component in loading time
 * [COPILOT] it must contains all regular ARIA that could be expected for this kid of component
 */

import type { Pulsar } from '@pulsar-framework/pulsar.dev'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface IRadioProps extends Omit<Pulsar.HtmlExtends<'input'>, 'type' | 'value'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Radio checked state
  readonly checked?: boolean
  readonly defaultChecked?: boolean
  
  // Radio name (required for grouping)
  readonly name: string
  
  // Radio value
  readonly value?: string
}