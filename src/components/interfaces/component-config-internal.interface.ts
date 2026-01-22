/**
 * Component configuration internal interface
 * Used internally by ComponentConfig builder
 */

import { type IComponentConfig } from './component-config.interface'

export interface IComponentConfigInternal extends IComponentConfig {
  _built: boolean
}
