/**
 * Pulsar UI Showcase - Header Component
 */

import { cn } from '@pulsar-framework/design-tokens';
import { Button } from '../components/molecules/button';
import { ComponentConfigBuilder } from '../components/utils/component-config-builder/component-config-builder';
import type { IHeaderProps } from '../types';

export const Header = ({ onToggleSidebar, sidebarOpen }: IHeaderProps): HTMLElement => {
  const headerClasses = cn(
    'fixed top-0 left-0 right-0 z-30',
    'bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700',
    'transition-all duration-300',
    sidebarOpen && 'pl-64'
  );

  const toggleButtonConfig = new ComponentConfigBuilder('primary')
    .variant('ghost')
    .size('sm')
    .build();

  return (
    <header class={headerClasses}>
      <div class="flex items-center justify-between px-4 py-3">
        <div class="flex items-center gap-4">
          <Button config={toggleButtonConfig} onclick={onToggleSidebar} aria-label="Toggle sidebar">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
            <div>
              <h1 class="text-xl font-bold text-gray-900 dark:text-white">Pulsar UI</h1>
              <p class="text-xs text-gray-500 dark:text-gray-400">Component Library</p>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="https://github.com/binaryjack/pulsar-ui.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
