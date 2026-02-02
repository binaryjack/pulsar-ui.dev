/**
 * Pulsar UI Showcase - Type Definitions
 */

export type ComponentCategory = 'atoms' | 'molecules' | 'organisms';

export interface IComponent {
  readonly id: string;
  readonly name: string;
  readonly category: ComponentCategory;
  readonly description: string;
}

export interface ISidebarProps {
  readonly open: boolean;
  readonly width: number;
  readonly activeCategory: () => ComponentCategory;
  readonly activeComponent: () => string;
  readonly onCategoryChange: (category: ComponentCategory) => void;
  readonly onComponentChange: (component: string) => void;
  readonly onResizeStart: () => void;
}

export interface IHeaderProps {
  readonly onToggleSidebar: () => void;
  readonly sidebarOpen: boolean;
}

export interface IComponentShowcaseProps {
  readonly category: ComponentCategory;
  readonly component: string;
}

export interface ICodeBlockProps {
  readonly code: string;
  readonly language?: string;
}
