/**
 * Spinner component type definitions
 */
import type { ComponentSize } from '@pulsar/design-tokens';
import type { Pulsar } from 'pulsar';
/**
 * Spinner component props
 */
export interface ISpinnerProps extends Pulsar.HtmlExtends<'span'> {
    /**
     * Size of the spinner
     * @default 'md'
     */
    size?: ComponentSize;
    className?: string;
    /**
     * Label for screen readers
     * @default 'Loading'
     */
    label?: string;
}
//# sourceMappingURL=spinner.type.d.ts.map