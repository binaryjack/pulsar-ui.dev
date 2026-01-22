/**
 * Component styling builder interface
 */

import { type IComponentStyling } from './component-styling.type'

export interface IComponentStylingBuilder {
  new (): IComponentStylingBuilder
  styling: IComponentStyling
  base: (base: string) => IComponentStylingBuilder
  variant: (variant: string) => IComponentStylingBuilder
  size: (size: string) => IComponentStylingBuilder
  rounded: (rounded: string) => IComponentStylingBuilder
  border: (border: string) => IComponentStylingBuilder
  shadow: (shadow: string) => IComponentStylingBuilder
  disabled: (disabled: string) => IComponentStylingBuilder
  loading: (loading: string) => IComponentStylingBuilder
  hover: (hover: string) => IComponentStylingBuilder
  focus: (focus: string) => IComponentStylingBuilder
  active: (active: string) => IComponentStylingBuilder
  transition: (transition: string) => IComponentStylingBuilder
  background: (background: string) => IComponentStylingBuilder
  readOnly: (readOnly: string) => IComponentStylingBuilder
  custom: (custom: string) => IComponentStylingBuilder
  build: () => IComponentStyling
}
