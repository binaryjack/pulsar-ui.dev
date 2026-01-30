/**
 * Pulsar UI Showcase - Main App Component
 * Updated with design system tokens
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
