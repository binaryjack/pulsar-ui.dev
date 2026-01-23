/**
 * Component configuration interface
 */
import { type ComponentColor, type ComponentRoundedSize, type ComponentShadowSize, type ComponentSize, type ComponentVariant, type TransitionDuration } from '@pulsar/design-tokens';
export interface IComponentConfig {
    readonly color?: ComponentColor;
    readonly variant?: ComponentVariant;
    readonly size?: ComponentSize;
    readonly rounded?: ComponentRoundedSize;
    readonly border?: boolean;
    readonly shadow?: ComponentShadowSize;
    readonly disabled?: boolean;
    readonly loading?: boolean;
    readonly fullWidth?: boolean;
    readonly transition?: boolean;
    readonly transitionDuration?: TransitionDuration;
    readonly hover?: boolean;
    readonly focus?: boolean;
    readonly active?: boolean;
    readonly className?: string;
}
//# sourceMappingURL=component-config.type.d.ts.map