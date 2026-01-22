/**
 * Toggle component props interface
 * [COPILOT] this is an unique component
 * [COPILOT] this component can be wether vertical / horizontal oriented
 * [COPILOT] can have default value
 * [COPILOT] can have a default skeletton behavior on Loading (reuse available skeletton component) that replaces the actual component in loading time
 * [COPILOT] it must contains all regular ARIA that could be expected for this kid of component
 */
import type { Pulsar } from 'pulsar';
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type';
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type';
export interface IToggleProps extends Pulsar.HtmlExtends<'button'> {
    readonly config?: IComponentConfig;
    readonly styling?: IComponentStyling;
    readonly checked?: boolean;
    readonly defaultChecked?: boolean;
    readonly onChange?: (checked: boolean) => void;
}
//# sourceMappingURL=toggle.type.d.ts.map