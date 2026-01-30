/**
 * CodeHighlighter Component
 * Syntax-highlighted code block with copy functionality
 */

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import { Stack } from '../../components/atoms/stack';
import { Typography } from '../../components/atoms/typography';
import { Button } from '../../components/molecules/button';

export interface ICodeHighlighterProps {
  /** Code to highlight */
  code: string;

  /** Language for syntax highlighting */
  language?: 'javascript' | 'typescript' | 'jsx' | 'tsx' | 'json';

  /** Show copy button */
  showCopy?: boolean;

  /** Custom CSS class */
  className?: string;
}

/**
 * CodeHighlighter
 * Renders syntax-highlighted code with Prism.js
 */
export const CodeHighlighter = ({
  code,
  language = 'tsx',
  showCopy = true,
  className,
}: ICodeHighlighterProps): HTMLElement => {
  // Highlight the code
  const highlighted = Prism.highlight(
    code,
    Prism.languages[language] || Prism.languages.tsx,
    language
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied to clipboard');
      // TODO: Show toast notification
    });
  };

  const container = Stack({
    direction: 'vertical',
    spacing: 'xs',
    className: `relative ${className || ''}`,
    children: [],
  });

  // Header with language label and copy button
  const header = Stack({
    direction: 'horizontal',
    spacing: 'sm',
    className: 'justify-between items-center px-4 py-2 bg-neutral-800 border-b border-neutral-700',
    children: [
      Typography({
        tag: 'span',
        variant: 'caption',
        className: 'text-neutral-400 uppercase font-mono',
        children: language,
      }),
    ],
  });

  if (showCopy) {
    header.appendChild(
      Button({
        onclick: handleCopy,
        children: '📋 Copy',
      })
    );
  }

  container.appendChild(header);

  // Code block with highlighting
  const pre = document.createElement('pre');
  pre.className = 'language-' + language;
  pre.style.cssText = `
    margin: 0;
    padding: 1rem;
    background: #1e1e1e;
    color: #d4d4d4;
    overflow-x: auto;
    border-radius: 0 0 0.5rem 0.5rem;
    font-family: 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.5;
  `;

  const codeElement = document.createElement('code');
  codeElement.className = 'language-' + language;
  codeElement.innerHTML = highlighted;

  pre.appendChild(codeElement);
  container.appendChild(pre);

  return container;
};
