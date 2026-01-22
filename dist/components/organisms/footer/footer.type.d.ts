/**
 * Footer component props interface
 * Organism: Page footer with content sections
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface IFooterProps extends Pulsar.HtmlExtends<'footer'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly copyright?: string;
    readonly links?: HTMLElement;
}
//# sourceMappingURL=footer.type.d.ts.map