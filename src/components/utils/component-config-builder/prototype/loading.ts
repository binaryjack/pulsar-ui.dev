/**
 * Loading prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const loading = function (this: IComponentConfigBuilder, loadingValue?: boolean): IComponentConfigBuilder {
  this.config = { ...this.config, loading: loadingValue }
  return this
}
