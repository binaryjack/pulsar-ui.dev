/**
 * Component styling builder
 * Prototype-based builder for creating component styling configurations
 */

import { type IComponentStylingBuilder } from './component-styling-builder.type'
import { active } from './prototype/active'
import { background } from './prototype/background'
import { base } from './prototype/base'
import { border } from './prototype/border'
import { build } from './prototype/build'
import { custom } from './prototype/custom'
import { disabled } from './prototype/disabled'
import { focus } from './prototype/focus'
import { hover } from './prototype/hover'
import { loading } from './prototype/loading'
import { readOnly } from './prototype/read-only'
import { rounded } from './prototype/rounded'
import { shadow } from './prototype/shadow'
import { size } from './prototype/size'
import { transition } from './prototype/transition'
import { variant } from './prototype/variant'

export const ComponentStylingBuilder = function (this: IComponentStylingBuilder) {
  this.styling = {}
} as unknown as IComponentStylingBuilder

Object.assign(ComponentStylingBuilder.prototype, {
  base,
  variant,
  size,
  rounded,
  border,
  shadow,
  disabled,
  loading,
  hover,
  focus,
  active,
  transition,
  background,
  readOnly,
  custom,
  build
})
