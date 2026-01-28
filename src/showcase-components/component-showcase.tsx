/**
 * Pulsar UI Showcase - Component Showcase Container
 */

import type { IComponentShowcaseProps } from '../types';

// Import all demo pages
import { AvatarDemo } from '../showcase-demos/atoms/avatar-demo';
import { CheckboxDemo } from '../showcase-demos/atoms/checkbox-demo';
import { InputDemo } from '../showcase-demos/atoms/input-demo';
import { ProgressDemo } from '../showcase-demos/atoms/progress-demo';
import { RadioDemo } from '../showcase-demos/atoms/radio-demo';
import { RatingDemo } from '../showcase-demos/atoms/rating-demo';
import { SliderDemo } from '../showcase-demos/atoms/slider-demo';
import { TextareaDemo } from '../showcase-demos/atoms/textarea-demo';
import { ToggleDemo } from '../showcase-demos/atoms/toggle-demo';
import { TooltipDemo } from '../showcase-demos/atoms/tooltip-demo';
import { AccordionDemo } from '../showcase-demos/molecules/accordion-demo';
import { AlertDemo } from '../showcase-demos/molecules/alert-demo';
import { BreadcrumbsDemo } from '../showcase-demos/molecules/breadcrumbs-demo';
import { DropdownDemo } from '../showcase-demos/molecules/dropdown-demo';
import { ListDemo } from '../showcase-demos/molecules/list-demo';
import { MenuDemo } from '../showcase-demos/molecules/menu-demo';
import { PaginationDemo } from '../showcase-demos/molecules/pagination-demo';
import { PopoverDemo } from '../showcase-demos/molecules/popover-demo';
import { TabsDemo } from '../showcase-demos/molecules/tabs-demo';
import { DrawerDemo } from '../showcase-demos/organisms/drawer-demo';
import { ModalDemo } from '../showcase-demos/organisms/modal-demo';
import { TableDemo } from '../showcase-demos/organisms/table-demo';
import { ToastDemo } from '../showcase-demos/organisms/toast-demo';

const DEMO_COMPONENTS = {
  // Atoms
  avatar: AvatarDemo,
  checkbox: CheckboxDemo,
  input: InputDemo,
  radio: RadioDemo,
  rating: RatingDemo,
  slider: SliderDemo,
  progress: ProgressDemo,
  textarea: TextareaDemo,
  toggle: ToggleDemo,
  tooltip: TooltipDemo,

  // Molecules
  accordion: AccordionDemo,
  alert: AlertDemo,
  breadcrumbs: BreadcrumbsDemo,
  dropdown: DropdownDemo,
  list: ListDemo,
  menu: MenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  tabs: TabsDemo,

  // Organisms
  drawer: DrawerDemo,
  modal: ModalDemo,
  table: TableDemo,
  toast: ToastDemo,
};

export const ComponentShowcase = ({
  category,
  component,
}: IComponentShowcaseProps): HTMLElement => {
  const DemoComponent = DEMO_COMPONENTS[component as keyof typeof DEMO_COMPONENTS];

  if (!DemoComponent) {
    return (
      <div class="text-center py-12">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Component Demo Coming Soon
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          The demo for <strong>{component}</strong> is currently being developed.
        </p>
      </div>
    );
  }

  return (
    <div class="space-y-8">
      <DemoComponent />
    </div>
  );
};
