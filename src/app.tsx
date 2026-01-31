/**
 * Pulsar UI Showcase - Main App Component
 * Updated with design system tokens and URL-based routing
 */

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
  const [sidebarWidth, setSidebarWidth] = useState<number>(256);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Sync state with URL params on mount and when URL changes
  createEffect(() => {
    // Access the reactive query signal from router context
    const query = routerContext.currentQuery;
    const categoryFromUrl = (query?.get('category') as ComponentCategory) || 'atoms';
    const componentFromUrl = query?.get('component') || 'input';

    setActiveCategory(categoryFromUrl);
    setActiveComponent(componentFromUrl);
  });

  // Resize handlers
  const handleResizeStart = () => {
    setIsResizing(true);
  };

  createEffect(() => {
    if (!isResizing()) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(200, Math.min(600, e.clientX));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="w-full h-[50px]">
        <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen()} />
      </div>
      <div className="flex flex-1 flex-row">
        <Sidebar
          open={sidebarOpen()}
          width={sidebarWidth()}
          activeCategory={activeCategory()}
          activeComponent={activeComponent()}
          onCategoryChange={handleCategoryChange}
          onComponentChange={handleComponentChange}
          onResizeStart={handleResizeStart}
        />
        <main
          className="flex-1"
          style={{
            marginLeft: sidebarOpen() ? '0' : '0',
            transition: 'margin-left 0.3s ease',
            display: 'relative',
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
    </div>
  );
};
