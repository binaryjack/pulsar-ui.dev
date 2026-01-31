/**
 * Pulsar UI Showcase - Sidebar Component
 * Updated to show only Playground-enabled components
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Badge } from '../components/molecules/badge';
import { Button } from '../components/molecules/button';
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder';
import type { IComponent, ISidebarProps } from '../types';

const COMPONENTS: IComponent[] = [
  // Atoms - Playground enabled
  { id: 'input', name: 'Input', category: 'atoms', description: 'Text input field ⚡ Playground' },
  { id: 'toggle', name: 'Toggle', category: 'atoms', description: 'Toggle switch ⚡ Playground' },

  // Molecules - Playground enabled
  {
    id: 'button',
    name: 'Button',
    category: 'molecules',
    description: 'Button component ⚡ Playground',
  },
];

const sidebarClasses = cn(
  'h-full overflow-y-auto',
  'bg-surface border-r border-border',
  'transition-all duration-300',
  'flex-shrink-0'
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

export const Sidebar = ({
  open,
  width,
  activeCategory,
  activeComponent,
  onCategoryChange,
  onComponentChange,
  onResizeStart,
}: ISidebarProps): HTMLElement => {
  const filteredComponents = COMPONENTS.filter((c) => c.category === activeCategory);

  return (
    <aside
      className={sidebarClasses}
      style={{
        width: open ? `${width}px` : '0px',
        overflow: open ? 'auto' : 'hidden',

        position: 'relative',
      }}
    >
      <div className="p-md">
        {/* Category Tabs */}
        <div
          className="flex gap-xs mb-md border-b border-border"
          role="tablist"
          aria-label="Component categories"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const buttonConfig = new ComponentConfigBuilder(isActive ? 'primary' : 'secondary')
              .variant(isActive ? 'solid' : 'ghost')
              .size('sm')
              .build();

            const badgeConfig = new ComponentConfigBuilder(isActive ? 'primary' : 'secondary')
              .size('sm')
              .build();

            return (
              <Button
                key={cat.id}
                config={buttonConfig}
                onclick={() => onCategoryChange(cat.id)}
                type="button"
                role="tab"
                aria-selected={isActive.toString()}
                aria-controls={`${cat.id}-panel`}
                className="flex-1 rounded-t-lg"
              >
                <div className="text-center w-full">
                  <div>{cat.name}</div>
                  <Badge
                    config={badgeConfig}
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
          className="space-y-1"
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
                key={component.id}
                config={buttonConfig}
                onclick={() => onComponentChange(component.id)}
                type="button"
                aria-label={`View ${component.name} component`}
                aria-current={isActive ? 'page' : undefined}
                className="justify-start text-left"
              >
                <div className="w-full text-left">
                  <div className="font-medium text-sm">{component.name}</div>
                  <div className="text-xs opacity-80">{component.description}</div>
                </div>
              </Button>
            );
          })}
        </nav>
      </div>
      {/* Resize Handle */}
      {open && (
        <div
          onMouseDown={onResizeStart}
          className="absolute top-0 right-0 bottom-0 bg-border hover:bg-primary-500 transition-colors"
          style={{
            width: '4px',
            cursor: 'col-resize',
            zIndex: '1000',
          }}
          title="Drag to resize"
        />
      )}
    </aside>
  );
};
