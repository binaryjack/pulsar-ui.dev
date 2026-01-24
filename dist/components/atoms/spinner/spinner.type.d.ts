/**
 * Spinner component type definitions
 */
import type { ComponentSize } from '@pulsar/design-tokens';
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
/**
 * Spinner component props
 */
export interface ISpinnerProps extends Pulsar.HtmlExtends<'span'> {
    /**
     * Component configuration
     */
    config?: IComponentConfig;
    /**
     * Component styling
     */
    styling?: IComponentStyling;
    /**
     * Size of the spinner
     * @default 'md'
     */
    size?: ComponentSize;
    /**
     * CSS class name
     */
    className?: string;
    /**
     * Label for screen readers
     * @default 'Loading'
     */
    label?: string;
}
//# sourceMappingURL=spinner.type.d.ts.map