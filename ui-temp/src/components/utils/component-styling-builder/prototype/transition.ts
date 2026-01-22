/**
 * Transition styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const transition = function (this: IComponentStylingBuilder, transitionValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, transition: transitionValue }
  return this
}
