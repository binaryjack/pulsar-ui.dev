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
  readonly activeCategory: ComponentCategory;
  readonly activeComponent: string;
  readonly onCategoryChange: (category: ComponentCategory) => void;
  readonly onComponentChange: (component: string) => void;
}

export interface IHeaderProps {
  readonly onToggleSidebar: () => void;
  readonly sidebarOpen: boolean;
}

export interface IComponentShowcaseProps {
  readonly category: ComponentCategory;
  readonly component: string;
}

export interface IDemoSectionProps {
  readonly title: string;
  readonly description?: string;
  readonly children: HTMLElement | HTMLElement[];
}

export interface ICodeBlockProps {
  readonly code: string;
  readonly language?: string;
}
