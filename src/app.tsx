/**
 * Pulsar UI Showcase - Main App Component
 * Updated with design system tokens and URL-based routing
 */

import { cn } from '@pulsar-framework/design-tokens';
import { createEffect, routerContext, useNavigate, useState } from '@pulsar-framework/pulsar.dev';
import { ComponentShowcase } from './showcase-components/component-showcase';
import { Header } from './showcase-components/header';
import { Sidebar } from './showcase-components/sidebar';
import type { ComponentCategory } from './types';

export const App = (): HTMLElement => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState<ComponentCategory>('atoms');
  const [activeComponent, setActiveComponent] = useState<string>('input');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  // Sync state with URL params on mount and when URL changes
  createEffect(() => {
    // Access the reactive query signal from router context
    const query = routerContext.currentQuery;
    const categoryFromUrl = (query?.get('category') as ComponentCategory) || 'atoms';
    const componentFromUrl = query?.get('component') || 'input';

    setActiveCategory(categoryFromUrl);
    setActiveComponent(componentFromUrl);
  });

  const handleCategoryChange = (category: ComponentCategory) => {
    setActiveCategory(category);
    // Update URL when category changes
    navigate(`/?category=${category}&component=${activeComponent()}`);
  };

  const handleComponentChange = (component: string) => {
    setActiveComponent(component);
    // Update URL when component changes
    navigate(`/?category=${activeCategory()}&component=${component}`);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const mainClasses = cn(
    'flex-1 transition-smooth bg-background',
    sidebarOpen() ? 'ml-64' : 'ml-0'
  );

  return (
    <div className="min-h-screen bg-background" style={{ minHeight: '100vh' }}>
      <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen()} />
      <Sidebar
        open={sidebarOpen()}
        activeCategory={activeCategory()}
        activeComponent={activeComponent()}
        onCategoryChange={handleCategoryChange}
        onComponentChange={handleComponentChange}
      />
      <main
        className={mainClasses}
        style={{
          paddingTop: 'var(--header-height)',
          minHeight: '100vh',
        }}
      >
        <div
          className="max-w-7xl mx-auto px-md py-lg"
          style={{
            maxWidth: '1280px',
          }}
        >
          <ComponentShowcase category={activeCategory()} component={activeComponent()} />
        </div>
      </main>
    </div>
  );
};
