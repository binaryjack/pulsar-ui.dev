/**
 * Pulsar UI Showcase - Code Block Component
 */

import { cn } from '@pulsar-framework/design-tokens';
import type { ICodeBlockProps } from '../types';

export const CodeBlock = ({ code, language = 'tsx' }: ICodeBlockProps): HTMLElement => {
  return (
    <div class="mt-4">
      <div class="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-t-lg border border-gray-200 dark:border-gray-600">
        <span class="text-xs font-medium text-gray-600 dark:text-gray-400">{language}</span>
        <button
          class="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          onClick={() => navigator.clipboard.writeText(code)}
          type="button"
        >
          Copy
        </button>
      </div>
      <pre class="!mt-0 !rounded-t-none border-t-0">
        <code>{code}</code>
      </pre>
    </div>
  );
};
