/**
 * Story Configuration Types
 * Defines the structure for component story configurations in the playground
 */

import type { PropEditorConfig } from './prop-editors';

/**
 * Base Story interface - defines a single component demonstration
 */
export interface Story {
  /** Unique identifier for the story */
  id: string;

  /** Display name for the story */
  title: string;

  /** Optional description of what this story demonstrates */
  description?: string;

  /** The component function to render */
  component: (props: any) => HTMLElement;

  /** Initial props to pass to the component */
  props: Record<string, any>;

  /** Context providers needed for the component (FormContext, AppContext, etc.) */
  context?: StoryContext[];

  /** Event handlers to capture and log */
  events?: StoryEvent[];

  /** Prop editors for interactive prop manipulation */
  propEditors?: PropEditorConfig[];

  /** Additional metadata */
  metadata?: StoryMetadata;

  /** Sample data for the component (optional, loaded from .data.ts) */
  data?: any;
}

/**
 * Context provider configuration
 */
export interface StoryContext {
  /** Context provider name */
  name: string;

  /** Context provider component */
  provider: (props: { children: HTMLElement }) => HTMLElement;

  /** Initial context value */
  value: any;
}

/**
 * Event capture configuration
 */
export interface StoryEvent {
  /** Event name (e.g., 'onclick', 'onchange', 'onsubmit') */
  name: string;

  /** Display label for the event */
  label: string;

  /** Whether to capture this event */
  capture?: boolean;

  /** Custom event handler */
  handler?: (event: Event) => void;
}

/**
 * Story metadata
 */
export interface StoryMetadata {
  /** Component category (atoms, molecules, organisms) */
  category?: 'atoms' | 'molecules' | 'organisms';

  /** Tags for filtering/searching */
  tags?: string[];

  /** Related components */
  related?: string[];

  /** Documentation link */
  docs?: string;

  /** Whether this is a featured story */
  featured?: boolean;

  /** Author information */
  author?: string;

  /** Last updated date */
  updated?: string;
}

/**
 * Logged event structure
 */
export interface LoggedEvent {
  /** Unique event ID */
  id: string;

  /** Event name */
  name: string;

  /** Timestamp */
  timestamp: number;

  /** Event data/payload */
  data: any;

  /** Target element information */
  target?: {
    tagName: string;
    id?: string;
    className?: string;
  };
}
