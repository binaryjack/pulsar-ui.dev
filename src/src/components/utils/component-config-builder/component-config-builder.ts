/**
 * Component configuration builder
 * Prototype-based builder for creating component configurations
 */

import { ComponentColor } from '@pulsar/design-tokens'
import { type IComponentConfigBuilder } from './component-config-builder.type'
import { active } from './prototype/active'
import { border } from './prototype/border'
import { build } from './prototype/build'
import { className } from './prototype/class-name'
import { color } from './prototype/color'
import { disabled } from './prototype/disabled'
import { focus } from './prototype/focus'
import { fullWidth } from './prototype/full-width'
import { hover } from './prototype/hover'
import { loading } from './prototype/loading'
import { rounded } from './prototype/rounded'
import { shadow } from './prototype/shadow'
import { size } from './prototype/size'
import { transition } from './prototype/transition'
import { transitionDuration } from './prototype/transition-duration'
import { variant } from './prototype/variant'

export const ComponentConfigBuilder = function (
  this: IComponentConfigBuilder,
  color: ComponentColor
) {
  this.config = { color: color }
} as unknown as IComponentConfigBuilder

Object.assign(ComponentConfigBuilder.prototype, {
  variant,
  color,
  size,
  rounded,
  border,
  shadow,
  disabled,
  loading,
  fullWidth,
  transition,
  transitionDuration,
  hover,
  focus,
  active,
  className,
  build
})
