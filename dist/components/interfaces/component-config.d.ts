/**
 * Component Configuration Builder
 * Prototype-based builder for creating component configurations
 *
 * Usage:
 * const config = new ComponentConfig('primary').size('sm').shadow('md').build()
 */
import { type ComponentColor } from '../../design/variants/component-color.type';
import { type IComponentConfigInternal } from './component-config-internal.interface';
/**
 * ComponentConfig constructor
 */
export declare const ComponentConfig: {
    new (color?: ComponentColor): IComponentConfigInternal;
};
//# sourceMappingURL=component-config.d.ts.map