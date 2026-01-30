/**
 * Code Generator
 * Converts Story configuration to JSX/TSX code strings
 */

import type { PropValue } from './prop-editors/prop-editor.types';
import type { Story } from './story.types';

/**
 * Format a prop value for code generation
 */
const formatPropValue = (value: PropValue, propName: string): string => {
  if (value === null || value === undefined) {
    return '';
  }

  // Boolean props
  if (typeof value === 'boolean') {
    return value ? propName : `${propName}={false}`;
  }

  // String props
  if (typeof value === 'string') {
    // Check if it's a template literal or expression
    if (value.includes('{') || value.includes('}')) {
      return `${propName}={\`${value}\`}`;
    }
    return `${propName}="${value}"`;
  }

  // Number props
  if (typeof value === 'number') {
    return `${propName}={${value}}`;
  }

  // Function props
  if (typeof value === 'function') {
    return `${propName}={${value.toString()}}`;
  }

  // Array/Object props
  if (typeof value === 'object') {
    return `${propName}={${JSON.stringify(value, null, 2)}}`;
  }

  return `${propName}={${String(value)}}`;
};

/**
 * Generate component name from component function
 */
const getComponentName = (component: Function): string => {
  // Try to extract name from function
  const name = component.name;
  if (name && name !== 'anonymous') {
    return name;
  }

  // Fallback to 'Component'
  return 'Component';
};

/**
 * Generate JSX code from Story configuration
 */
export const generateCode = (story: Story, currentProps: Record<string, PropValue>): string => {
  const componentName = getComponentName(story.component);

  // Filter out undefined/null props
  const definedProps = Object.entries(currentProps).filter(
    ([_, value]) => value !== null && value !== undefined
  );

  // If no props, return self-closing tag
  if (definedProps.length === 0) {
    return `<${componentName} />`;
  }

  // Format props
  const formattedProps = definedProps
    .map(([key, value]) => formatPropValue(value, key))
    .filter(Boolean)
    .join('\n  ');

  // Check if component has children
  const hasChildren = 'children' in currentProps && currentProps.children;

  if (hasChildren) {
    return `<${componentName}\n  ${formattedProps}\n>\n  {children}\n</${componentName}>`;
  }

  // Self-closing tag with props
  return `<${componentName}\n  ${formattedProps}\n/>`;
};

/**
 * Generate full example with imports
 */
export const generateFullExample = (
  story: Story,
  currentProps: Record<string, PropValue>
): string => {
  const componentName = getComponentName(story.component);
  const jsxCode = generateCode(story, currentProps);

  return `import { ${componentName} } from '@pulsar-ui/components';

export const Example = () => {
  return (
    ${jsxCode}
  );
};`;
};
