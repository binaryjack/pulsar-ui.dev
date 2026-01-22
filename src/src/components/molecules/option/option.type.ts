/**
 * Option component props interface
 * Molecule: Option element for select dropdowns
 */

import type { Pulsar } from 'pulsar'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface IOptionProps extends Pulsar.HtmlExtends<'option'> {
  // Component configuration
  readonly config?: IComponentConfig
  // Component styling
  readonly name?: string
  // Component styling
  readonly styling?: IComponentStyling
    // Option data
  readonly value?: string
  readonly label?: string
  readonly children?: JSX.Children
    // States
  readonly selected?: boolean
}
