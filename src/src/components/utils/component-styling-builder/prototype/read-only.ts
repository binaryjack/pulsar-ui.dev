/**
 * Read-only styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const readOnly = function (this: IComponentStylingBuilder, readOnlyValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, readOnly: readOnlyValue }
  return this
}
