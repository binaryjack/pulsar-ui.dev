/**
 * Prop Editor Type Definitions
 * Types for interactive prop manipulation in the playground
 */

/**
 * Supported prop types for editing
 */
export type PropType = 'string' | 'number' | 'boolean' | 'select' | 'color' | 'object' | 'array';

/**
 * Prop value can be any primitive or complex type
 */
export type PropValue = string | number | boolean | object | any[] | null | undefined;

/**
 * Callback when a prop value changes
 */
export type PropChangeHandler = (propName: string, newValue: PropValue) => void;

/**
 * Configuration for a single prop editor
 */
export interface PropEditorConfig {
  /** Name of the prop (matches component prop name) */
  name: string;

  /** Display label (defaults to name if not provided) */
  label?: string;

  /** Type of the prop (determines which editor to render) */
  type: PropType;

  /** Current value of the prop */
  value: PropValue;

  /** Default value (shown in placeholder or for reset) */
  defaultValue?: PropValue;

  /** Help text or description */
  description?: string;

  /** For 'select' type: available options */
  options?: Array<{ label: string; value: PropValue }>;

  /** For 'number' type: minimum value */
  min?: number;

  /** For 'number' type: maximum value */
  max?: number;

  /** For 'number' type: step increment */
  step?: number;

  /** Whether the prop is required */
  required?: boolean;

  /** Whether the prop is disabled (read-only) */
  disabled?: boolean;

  /** Custom validation function */
  validate?: (value: PropValue) => boolean | string;
}

/**
 * Props for individual editor components
 */
export interface PropEditorProps {
  /** Editor configuration */
  config: PropEditorConfig;

  /** Callback when value changes */
  onChange: PropChangeHandler;

  /** Optional custom CSS class */
  className?: string;
}

/**
 * Props for the main PropEditor orchestrator
 */
export interface IPropsEditorProps {
  /** Array of prop configurations to render */
  props: PropEditorConfig[];

  /** Callback when any prop value changes */
  onChange: PropChangeHandler;

  /** Optional custom CSS class */
  className?: string;
}
