/**
 * Pulsar UI Showcase - Main App Component
 */

import { cn } from '@pulsar-framework/design-tokens';
import { useState } from '@pulsar-framework/pulsar.dev';
import { ComponentShowcase } from './showcase-components/component-showcase';
import { Header } from './showcase-components/header';
import { Sidebar } from './showcase-components/sidebar';
import type { ComponentCategory } from './types';

export const App = (): HTMLElement => {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('atoms');
  const [activeComponent, setActiveComponent] = useState<string>('avatar');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const handleCategoryChange = (category: ComponentCategory) => {
    setActiveCategory(category);
  };

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainClasses = cn('flex-1 transition-all duration-300', sidebarOpen ? 'ml-64' : 'ml-0');

  return (
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

      <Sidebar
        open={sidebarOpen}
        activeCategory={activeCategory}
        activeComponent={activeComponent}
        onCategoryChange={handleCategoryChange}
        onComponentChange={handleComponentChange}
      />

      <main class={mainClasses}>
        <div class="max-w-7xl mx-auto px-4 py-8">
          <ComponentShowcase category={activeCategory} component={activeComponent} />
        </div>
      </main>
    </div>
  );
};
