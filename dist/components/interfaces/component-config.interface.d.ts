/**
 * Common component configuration interface
 * Used across all components to provide consistent styling configuration
 */
import { type ComponentSize } from '../../design/sizes';
import { type ComponentColor, type ComponentVariant } from '../../design/variants';
export interface IComponentConfig {
    readonly variant?: ComponentVariant;
    readonly color?: ComponentColor;
    readonly size?: ComponentSize;
    readonly rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    readonly border?: boolean;
    readonly shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    readonly disabled?: boolean;
    readonly loading?: boolean;
    readonly fullWidth?: boolean;
    readonly transition?: boolean;
    readonly transitionDuration?: 'fast' | 'normal' | 'slow';
    readonly hover?: boolean;
    readonly focus?: boolean;
    readonly active?: boolean;
    readonly className?: string;
}
/**
 * Default component configuration
 */
export declare const defaultComponentConfig: Required<Omit<IComponentConfig, 'className'>>;
//# sourceMappingURL=component-config.interface.d.ts.map