/**
 * Pulsar UI Showcase - Sidebar Component
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ISidebarProps, IComponent } from '../types';

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
    'fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-gray-800',
    'border-r border-gray-200 dark:border-gray-700',
    'transition-transform duration-300 z-20 overflow-y-auto pt-16',
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
    <aside class={sidebarClasses}>
      <div class="p-4">
        {/* Category Tabs */}
        <div class="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const tabClasses = cn(
              'flex-1 px-3 py-2 text-sm font-medium rounded-t-lg transition-colors cursor-pointer',
              isActive
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            );

            return (
              <button class={tabClasses} onClick={() => onCategoryChange(cat.id)} type="button">
                <div class="text-center">
                  <div>{cat.name}</div>
                  <div class="text-xs opacity-70">{cat.count}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Component List */}
        <nav class="space-y-1">
          {filteredComponents.map((component) => {
            const isActive = activeComponent === component.id;
            const itemClasses = cn(
              'block w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer',
              isActive
                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            );

            return (
              <button
                class={itemClasses}
                onClick={() => onComponentChange(component.id)}
                type="button"
              >
                <div class="font-medium">{component.name}</div>
                <div class="text-xs opacity-70">{component.description}</div>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
