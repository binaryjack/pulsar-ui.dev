/**
 * Component configuration builder interface
 */

import { type ComponentRoundedSize } from '../../../design/sizes/component-rounded-size.type'
import { type ComponentShadowSize } from '../../../design/sizes/component-shadow-size.type'
import { type ComponentSize } from '../../../design/sizes/component-size.type'
import { type TransitionDuration } from '../../../design/tokens/legacy/transition-duration.type'
import { type ComponentColor } from '../../../design/variants/component-color.type'
import { type ComponentVariant } from '../../../design/variants/component-variant.type'
import { type IComponentConfig } from './component-config.type'

export interface IComponentConfigBuilder {
  new (color: ComponentColor): IComponentConfigBuilder
  config: IComponentConfig
  variant: (variant: ComponentVariant) => IComponentConfigBuilder
  color: (color?: ComponentColor) => IComponentConfigBuilder
  size: (size?: ComponentSize) => IComponentConfigBuilder
  rounded: (rounded?: ComponentRoundedSize) => IComponentConfigBuilder
  border: (border?: boolean) => IComponentConfigBuilder
  shadow: (shadow?: ComponentShadowSize) => IComponentConfigBuilder
  disabled: (disabled?: boolean) => IComponentConfigBuilder
  loading: (loading?: boolean) => IComponentConfigBuilder
  fullWidth: (fullWidth?: boolean) => IComponentConfigBuilder
  transition: (transition?: boolean) => IComponentConfigBuilder
  transitionDuration: (transitionDuration?: TransitionDuration) => IComponentConfigBuilder
  hover: (hover?: boolean) => IComponentConfigBuilder
  focus: (focus?: boolean) => IComponentConfigBuilder
  active: (active?: boolean) => IComponentConfigBuilder
  className: (className?: string) => IComponentConfigBuilder
  build: () => IComponentConfig
}
