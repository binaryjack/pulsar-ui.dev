/**
 * Checkbox component props interface
 * [COPILOT] this is an unique component
 * [COPILOT] this is a input of type checkbox
 * [COPILOT] can have default value
 * [COPILOT] it must accepts all HTMLInputElement rest props from consumer
 * [COPILOT] can have a default skeletton behavior on Loading (reuse available skeletton component) that replaces the actual component in loading time
 * [COPILOT] it must contains all regular ARIA that could be expected for this kid of component
 */

import type { Pulsar } from 'pulsar'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface ICheckboxProps extends Omit<Pulsar.HtmlExtends<'input'>, 'type'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Checkbox checked state
  readonly checked?: boolean
  readonly defaultChecked?: boolean
}
