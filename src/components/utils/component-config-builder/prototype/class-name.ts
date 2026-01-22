/**
 * ClassName prototype method for ComponentConfigBuilder
 */

import { type IComponentConfigBuilder } from '../component-config-builder.type'

export const className = function (this: IComponentConfigBuilder, classNameValue?: string): IComponentConfigBuilder {
  this.config = { ...this.config, className: classNameValue }
  return this
}
