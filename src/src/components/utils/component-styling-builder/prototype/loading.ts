/**
 * Loading styling prototype method
 */

import { type IComponentStylingBuilder } from '../component-styling-builder.type'

export const loading = function (this: IComponentStylingBuilder, loadingValue: string): IComponentStylingBuilder {
  this.styling = { ...this.styling, loading: loadingValue }
  return this
}
