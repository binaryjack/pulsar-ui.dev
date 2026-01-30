/**
 * Pulsar UI Showcase - Component Showcase Container
 * Updated with design system tokens
 */

import type { IComponentShowcaseProps } from '../types';

// Import all demo pages
// Atoms
import { AvatarDemo } from '../showcase-demos/atoms/avatar-demo';
import { CheckboxDemo } from '../showcase-demos/atoms/checkbox-demo';
import { DividerDemo } from '../showcase-demos/atoms/divider-demo';
import { InputPlaygroundDemo } from '../showcase-demos/atoms/input-playground-demo'; // ✅ Playground
import { ProgressDemo } from '../showcase-demos/atoms/progress-demo';
import { RadioDemo } from '../showcase-demos/atoms/radio-demo';
import { RatingDemo } from '../showcase-demos/atoms/rating-demo';
import { SkeletonDemo } from '../showcase-demos/atoms/skeleton-demo';
import { SliderDemo } from '../showcase-demos/atoms/slider-demo';
import { SpinnerDemo } from '../showcase-demos/atoms/spinner-demo';
import { StackDemo } from '../showcase-demos/atoms/stack-demo';
import { TextareaDemo } from '../showcase-demos/atoms/textarea-demo';
import { TogglePlaygroundDemo } from '../showcase-demos/atoms/toggle-playground-demo'; // ✅ Playground
import { TooltipDemo } from '../showcase-demos/atoms/tooltip-demo';
import { TypographyDemo } from '../showcase-demos/atoms/typography-demo';

// Molecules
import { AccordionDemo } from '../showcase-demos/molecules/accordion-demo';
import { AlertDemo } from '../showcase-demos/molecules/alert-demo';
import { BadgeDemo } from '../showcase-demos/molecules/badge-demo';
import { BreadcrumbsDemo } from '../showcase-demos/molecules/breadcrumbs-demo';
import { ButtonPlaygroundDemo } from '../showcase-demos/molecules/button-playground-demo'; // ✅ Playground
import { DropdownDemo } from '../showcase-demos/molecules/dropdown-demo';
import { LabelDemo } from '../showcase-demos/molecules/label-demo';
import { ListDemo } from '../showcase-demos/molecules/list-demo';
import { MenuDemo } from '../showcase-demos/molecules/menu-demo';
import { PaginationDemo } from '../showcase-demos/molecules/pagination-demo';
import { PopoverDemo } from '../showcase-demos/molecules/popover-demo';
import { RadioGroupDemo } from '../showcase-demos/molecules/radio-group-demo';
import { TabsDemo } from '../showcase-demos/molecules/tabs-demo';

// Organisms
import { CardDemo } from '../showcase-demos/organisms/card-demo';
import { DrawerDemo } from '../showcase-demos/organisms/drawer-demo';
import { ModalDemo } from '../showcase-demos/organisms/modal-demo';
import { TableDemo } from '../showcase-demos/organisms/table-demo';
import { ToastDemo } from '../showcase-demos/organisms/toast-demo';

const DEMO_COMPONENTS = {
  // Atoms (✅ = Playground-enabled)
  avatar: AvatarDemo,
  checkbox: CheckboxDemo,
  divider: DividerDemo,
  input: InputPlaygroundDemo, // ✅ NEW: Interactive playground
  progress: ProgressDemo,
  radio: RadioDemo,
  rating: RatingDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  stack: StackDemo,
  textarea: TextareaDemo,
  toggle: TogglePlaygroundDemo, // ✅ NEW: Interactive playground
  tooltip: TooltipDemo,
  typography: TypographyDemo,

  // Molecules (✅ = Playground-enabled)
  accordion: AccordionDemo,
  alert: AlertDemo,
  badge: BadgeDemo,
  breadcrumbs: BreadcrumbsDemo,
  button: ButtonPlaygroundDemo, // ✅ NEW: Interactive playground
  dropdown: DropdownDemo,
  label: LabelDemo,
  list: ListDemo,
  menu: MenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  'radio-group': RadioGroupDemo,
  tabs: TabsDemo,

  // Organisms
  card: CardDemo,
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
      <div
        class="text-center animate-fade-in"
        style={{ padding: 'var(--spacing-3xl) var(--spacing-md)' }}
      >
        <div
          class="inline-flex items-center justify-center mb-md"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-neutral-100)',
          }}
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="var(--color-neutral-400)"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>

        <h2
          class="text-2xl font-bold text-text mb-sm"
          style={{ marginBottom: 'var(--spacing-sm)' }}
        >
          Component Demo Coming Soon
        </h2>

        <p class="text-text-muted">
          The demo for <strong class="text-primary-600">{component}</strong> is currently being
          developed.
        </p>
      </div>
    );
  }

  return (
    <div
      class="space-y-8 animate-fade-in"
      style={{
        animationDelay: '50ms',
        animationFillMode: 'both',
      }}
    >
      <DemoComponent />
    </div>
  );
};
