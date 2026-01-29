/**
 * Pulsar UI Showcase - Sidebar Component
 * Refactored to use Pulsar UI components
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Badge } from '../components/molecules/badge';
import { Button } from '../components/molecules/button';
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder';
import type { IComponent, ISidebarProps } from '../types';

const COMPONENTS: IComponent[] = [
  // Atoms
  { id: 'avatar', name: 'Avatar', category: 'atoms', description: 'User avatar with fallback' },
  { id: 'checkbox', name: 'Checkbox', category: 'atoms', description: 'Checkbox input' },
  { id: 'container', name: 'Container', category: 'atoms', description: 'Responsive container' },
  { id: 'divider', name: 'Divider', category: 'atoms', description: 'Visual separator' },
  { id: 'grid', name: 'Grid', category: 'atoms', description: 'CSS Grid layout' },
  { id: 'input', name: 'Input', category: 'atoms', description: 'Text input field' },
  { id: 'progress', name: 'Progress', category: 'atoms', description: 'Progress indicator' },
  { id: 'radio', name: 'Radio', category: 'atoms', description: 'Radio input' },
  { id: 'rating', name: 'Rating', category: 'atoms', description: 'Star rating' },
  { id: 'skeleton', name: 'Skeleton', category: 'atoms', description: 'Loading placeholder' },
  { id: 'slider', name: 'Slider', category: 'atoms', description: 'Range input' },
  { id: 'spinner', name: 'Spinner', category: 'atoms', description: 'Loading spinner' },
  { id: 'stack', name: 'Stack', category: 'atoms', description: 'Flexbox layout' },
  { id: 'textarea', name: 'Textarea', category: 'atoms', description: 'Multi-line input' },
  { id: 'toggle', name: 'Toggle', category: 'atoms', description: 'Toggle switch' },
  { id: 'tooltip', name: 'Tooltip', category: 'atoms', description: 'Hover tooltip' },
  { id: 'typography', name: 'Typography', category: 'atoms', description: 'Text styles' },

  // Molecules
  { id: 'accordion', name: 'Accordion', category: 'molecules', description: 'Collapsible panels' },
  { id: 'alert', name: 'Alert', category: 'molecules', description: 'Alert message' },
  { id: 'badge', name: 'Badge', category: 'molecules', description: 'Status badge' },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'molecules',
    description: 'Navigation trail',
  },
  { id: 'button', name: 'Button', category: 'molecules', description: 'Button component' },
  { id: 'dropdown', name: 'Dropdown', category: 'molecules', description: 'Dropdown menu' },
  { id: 'label', name: 'Label', category: 'molecules', description: 'Form label' },
  { id: 'list', name: 'List', category: 'molecules', description: 'Ordered/unordered list' },
  { id: 'menu', name: 'Menu', category: 'molecules', description: 'Navigation menu' },
  { id: 'pagination', name: 'Pagination', category: 'molecules', description: 'Page navigation' },
  { id: 'popover', name: 'Popover', category: 'molecules', description: 'Popover overlay' },
  {
    id: 'radio-group',
    name: 'RadioGroup',
    category: 'molecules',
    description: 'Radio button group',
  },
  { id: 'tabs', name: 'Tabs', category: 'molecules', description: 'Tabbed interface' },

  // Organisms
  { id: 'card', name: 'Card', category: 'organisms', description: 'Content card' },
  { id: 'drawer', name: 'Drawer', category: 'organisms', description: 'Side panel' },
  { id: 'modal', name: 'Modal', category: 'organisms', description: 'Modal dialog' },
  { id: 'select', name: 'Select', category: 'organisms', description: 'Select dropdown' },
  { id: 'table', name: 'Table', category: 'organisms', description: 'Data table' },
  { id: 'toast', name: 'Toast', category: 'organisms', description: 'Toast notification' },
];

export const Sidebar = ({
  open,
  activeCategory,
  activeComponent,
  onCategoryChange,
  onComponentChange,
}: ISidebarProps): HTMLElement => {
  const sidebarClasses = cn(
    'fixed top-0 left-0 bottom-0 overflow-y-auto',
    'bg-surface border-r border-border',
    'transition-transform z-fixed',
    open ? 'translate-x-0' : '-translate-x-full'
  );

  const categories = [
    {
      id: 'atoms' as const,
      name: 'Atoms',
      count: COMPONENTS.filter((c) => c.category === 'atoms').length,
    },
    {
      id: 'molecules' as const,
      name: 'Molecules',
      count: COMPONENTS.filter((c) => c.category === 'molecules').length,
    },
    {
      id: 'organisms' as const,
      name: 'Organisms',
      count: COMPONENTS.filter((c) => c.category === 'organisms').length,
    },
  ];

  const filteredComponents = COMPONENTS.filter((c) => c.category === activeCategory);

  return (
    <aside
      class={sidebarClasses}
      style={{
        width: 'var(--sidebar-width)',
        paddingTop: 'var(--header-height)',
      }}
    >
      <div class="p-md">
        {/* Category Tabs */}
        <div
          class="flex gap-xs mb-md border-b border-border"
          role="tablist"
          aria-label="Component categories"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const buttonConfig = new ComponentConfigBuilder(isActive ? 'primary' : 'secondary')
              .variant(isActive ? 'solid' : 'ghost')
              .size('sm')
              .build();

            return (
              <Button
                config={buttonConfig}
                onclick={() => onCategoryChange(cat.id)}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${cat.id}-panel`}
                className="flex-1 rounded-t-lg"
              >
                <div class="text-center w-full">
                  <div>{cat.name}</div>
                  <Badge
                    config={new ComponentConfigBuilder(isActive ? 'primary' : 'secondary')
                      .size('sm')
                      .build()}
                    label={cat.count.toString()}
                    className="mt-1 inline-flex"
                  />
                </div>
              </Button>
            );
          })}
        </div>

        {/* Component List */}
        <nav
          class="space-y-1"
          role="tabpanel"
          id={`${activeCategory}-panel`}
          aria-label={`${activeCategory} components`}
        >
          {filteredComponents.map((component) => {
            const isActive = activeComponent === component.id;
            const buttonConfig = new ComponentConfigBuilder(isActive ? 'primary' : 'secondary')
              .variant(isActive ? 'solid' : 'ghost')
              .size('sm')
              .fullWidth(true)
              .build();

            return (
              <Button
                config={buttonConfig}
                onclick={() => onComponentChange(component.id)}
                type="button"
                aria-label={`View ${component.name} component`}
                aria-current={isActive ? 'page' : undefined}
                className="justify-start text-left"
              >
                <div class="w-full text-left">
                  <div class="font-medium text-sm">{component.name}</div>
                  <div class="text-xs opacity-80">{component.description}</div>
                </div>
              </Button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
