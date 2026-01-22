/**
 * Build styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'
import { type IComponentStyling } from '../component-styling.type'

export const build = function (this: IComponentStylingBuilder): IComponentStyling {
  return { ...this.styling }
}
