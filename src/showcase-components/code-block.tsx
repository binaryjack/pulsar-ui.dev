/**
 * Pulsar UI Showcase - Code Block Component
 */

import type { ICodeBlockProps } from '../types';

export const CodeBlock = ({ code, language = 'tsx' }: ICodeBlockProps): HTMLElement => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-t-lg border border-gray-200 dark:border-gray-600">
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{language}</span>
        <button
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
          onClick={() => navigator.clipboard.writeText(code)}
          type="button"
        >
          Copy
        </button>
      </div>
      <pre className="!mt-0 !rounded-t-none border-t-0">
        <code>{code}</code>
      </pre>
    </div>
  );
};
