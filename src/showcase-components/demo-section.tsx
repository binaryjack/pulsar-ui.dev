/**
 * Pulsar UI Showcase - Demo Section Component
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { IDemoSectionProps } from '../types';

export const DemoSection = ({ title, description, children }: IDemoSectionProps): HTMLElement => {
  return (
    <section class="space-y-4">
      <div class="border-b border-gray-200 dark:border-gray-700 pb-2">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {description && <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
      </div>

      <div class="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </section>
  );
};
