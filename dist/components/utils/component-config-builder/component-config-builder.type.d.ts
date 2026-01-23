/**
 * Component configuration builder interface
 */
import { type ComponentColor, type ComponentRoundedSize, type ComponentShadowSize, type ComponentSize, type ComponentVariant, type TransitionDuration } from '@pulsar/design-tokens';
import { type IComponentConfig } from './component-config.type';
export interface IComponentConfigBuilder {
    new (color: ComponentColor): IComponentConfigBuilder;
    config: IComponentConfig;
    variant: (variant: ComponentVariant) => IComponentConfigBuilder;
    color: (color?: ComponentColor) => IComponentConfigBuilder;
    size: (size?: ComponentSize) => IComponentConfigBuilder;
    rounded: (rounded?: ComponentRoundedSize) => IComponentConfigBuilder;
    border: (border?: boolean) => IComponentConfigBuilder;
    shadow: (shadow?: ComponentShadowSize) => IComponentConfigBuilder;
    disabled: (disabled?: boolean) => IComponentConfigBuilder;
    loading: (loading?: boolean) => IComponentConfigBuilder;
    fullWidth: (fullWidth?: boolean) => IComponentConfigBuilder;
    transition: (transition?: boolean) => IComponentConfigBuilder;
    transitionDuration: (transitionDuration?: TransitionDuration) => IComponentConfigBuilder;
    hover: (hover?: boolean) => IComponentConfigBuilder;
    focus: (focus?: boolean) => IComponentConfigBuilder;
    active: (active?: boolean) => IComponentConfigBuilder;
    className: (className?: string) => IComponentConfigBuilder;
    build: () => IComponentConfig;
}
//# sourceMappingURL=component-config-builder.type.d.ts.map