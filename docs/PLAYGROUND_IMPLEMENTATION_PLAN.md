# Pulsar UI Playground - Implementation Plan

**Version:** 1.0  
**Date:** January 29, 2026  
**Status:** Planning Phase

---

## 🎯 Vision & Goals

Create a lightweight, Storybook-inspired playground for Pulsar UI components without the overhead of external tools. The playground will serve three purposes:

1. **Visual Inspection** - Raw gallery showing all components in default state
2. **Interactive Testing** - Sandbox for testing components with different props/contexts
3. **SEO-Friendly Documentation** - Server-side rendered component documentation

---

## 🏗️ Architecture Principles

### Fundamental Laws

1. **Pure Pulsar Components Only**
   - Everything UI-related must be a Pulsar component
   - No external UI libraries (except syntax highlighter - single exception)
   - All playground infrastructure built with pulsar-ui.dev components

2. **Declarative Only**
   - No imperative DOM manipulation
   - Reactive state management using Pulsar patterns
   - Pure functions for component logic

3. **Type Safety**
   - No `any` types
   - No stub/placeholder types
   - Full TypeScript strict mode

4. **Prototype-Based Classes**
   - ES6 classes only for builders/utilities
   - Never for components (components are functions)
   - Example: `ComponentConfigBuilder`, `ComponentStylingBuilder`

5. **Feature Slice Pattern**
   - Organize by feature, not by technical concern
   - Colocation of related files
   - Self-contained modules

---

## 📁 Project Structure

```
src/
├── showcase/
│   ├── pages/                           # Feature-sliced pages
│   │   ├── dashboard/
│   │   │   ├── dashboard.tsx
│   │   │   ├── dashboard.config.ts
│   │   │   └── dashboard.data.ts
│   │   ├── playground/
│   │   │   ├── playground.tsx
│   │   │   ├── playground.config.ts
│   │   │   └── playground.data.ts
│   │   └── raw-gallery/
│   │       ├── raw-gallery.tsx
│   │       ├── raw-gallery.config.ts
│   │       └── raw-gallery.data.ts
│   │
│   ├── preparation/                     # Raw component files for visual inspection
│   │   └── components/
│   │       ├── atoms/
│   │       │   ├── button-raw.tsx
│   │       │   ├── input-raw.tsx
│   │       │   └── ...
│   │       ├── molecules/
│   │       │   ├── alert-raw.tsx
│   │       │   └── ...
│   │       └── organisms/
│   │           ├── card-raw.tsx
│   │           └── ...
│   │
│   ├── playground/                      # Playground infrastructure
│   │   ├── components/
│   │   │   ├── component-sandbox/
│   │   │   │   ├── component-sandbox.tsx
│   │   │   │   ├── component-sandbox.type.ts
│   │   │   │   └── component-sandbox.config.ts
│   │   │   ├── prop-editor/
│   │   │   │   ├── prop-editor.tsx
│   │   │   │   ├── prop-editor.type.ts
│   │   │   │   └── editors/
│   │   │   │       ├── string-editor.tsx
│   │   │   │       ├── boolean-editor.tsx
│   │   │   │       ├── number-editor.tsx
│   │   │   │       ├── color-editor.tsx
│   │   │   │       └── object-editor.tsx
│   │   │   ├── event-logger/
│   │   │   │   ├── event-logger.tsx
│   │   │   │   ├── event-log-card.tsx
│   │   │   │   └── event-logger.type.ts
│   │   │   ├── code-viewer/
│   │   │   │   ├── code-viewer.tsx
│   │   │   │   ├── code-highlighter.tsx  # Uses Prism.js (exception)
│   │   │   │   └── code-viewer.type.ts
│   │   │   └── retractable-panel/
│   │   │       ├── retractable-panel.tsx
│   │   │       └── retractable-panel.type.ts
│   │   ├── contexts/
│   │   │   ├── general-form-context.tsx     # Lightweight form state
│   │   │   ├── dropdown-context.tsx         # If needed
│   │   │   └── toggleable-context.tsx       # If needed
│   │   └── types/
│   │       └── story.type.ts                # Core story interface
│   │
│   ├── stories/                         # Story configurations per component
│   │   ├── atoms/
│   │   │   ├── button/
│   │   │   │   ├── button.story.tsx
│   │   │   │   ├── button.story.config.ts
│   │   │   │   └── button.story.data.ts
│   │   │   └── ...
│   │   ├── molecules/
│   │   └── organisms/
│   │
│   ├── navigation/                      # Navigation infrastructure
│   │   ├── sidebar-nav/
│   │   │   ├── sidebar-nav.tsx
│   │   │   └── sidebar-nav.type.ts
│   │   ├── dashboard-header/
│   │   │   ├── dashboard-header.tsx
│   │   │   └── dashboard-header.type.ts
│   │   └── routes/
│   │       ├── routes.config.ts         # Route registry (no hardcoded routes)
│   │       ├── routes.type.ts
│   │       └── route-registry.ts        # Type-safe route management
│   │
│   ├── layout.tsx                       # Main showcase layout
│   └── root.tsx                         # Root showcase entry
│
└── components/                          # Existing component library
    ├── atoms/
    ├── molecules/
    └── organisms/
```

---

## 🔍 Phase 1: Component Audit & Alignment

### Objectives

- Document current state of all 42 components
- Identify components needing refactoring
- List incomplete/missing components
- Ensure all follow declarative pattern

### Audit Checklist Per Component

```typescript
interface ComponentAuditResult {
  name: string;
  category: 'atoms' | 'molecules' | 'organisms';
  status: 'complete' | 'incomplete' | 'needs-refactor';
  issues: {
    usesImperative?: boolean; // DOM manipulation
    hasAnyTypes?: boolean; // Type safety
    missingProps?: string[]; // Incomplete interface
    needsContext?: string[]; // Required contexts
    rendering?: 'working' | 'broken'; // Visual test result
  };
  dependencies: string[]; // Other components used
}
```

### Audit Process

1. **Scan Components** (Automated)
   - Check for imperative patterns (`.querySelector`, `.addEventListener`)
   - Find `any` types in interfaces
   - Verify prop completeness
   - Document dependencies

2. **Visual Test** (Manual)
   - Render each component with default props
   - Document rendering issues
   - Screenshot default state

3. **Generate Report**
   - `COMPONENT_AUDIT_REPORT.md`
   - Prioritized fix list
   - Missing component list

---

## 🛠️ Phase 2: Missing Components Development

### Required New Components

#### 2.1 Core Playground Components

| Component          | Type     | Priority | Purpose                             |
| ------------------ | -------- | -------- | ----------------------------------- |
| `RetractablePanel` | Organism | P0       | Bottom panel for event logs         |
| `CodeHighlighter`  | Molecule | P0       | Syntax highlighting (uses Prism.js) |
| `ColorPicker`      | Molecule | P1       | Color prop editor                   |
| `Slider`           | Atom     | P1       | Number prop editor                  |
| `ObjectEditor`     | Molecule | P1       | JSON-like prop editor               |
| `EventLogCard`     | Molecule | P1       | Single event display                |
| `EventLogViewer`   | Organism | P1       | Event log container                 |

#### 2.2 Context Providers

| Context              | Priority | Purpose                               |
| -------------------- | -------- | ------------------------------------- |
| `GeneralFormContext` | P1       | Lightweight form state (NOT formular) |
| `DropdownContext`    | P2       | Check if exists, create if needed     |
| `ToggleableContext`  | P2       | Check if exists, create if needed     |
| `AppContext`         | P0       | Global app state                      |

#### 2.3 Navigation Components

| Component         | Type     | Priority | Purpose                    |
| ----------------- | -------- | -------- | -------------------------- |
| `SidebarNav`      | Organism | P0       | Retractable navigation     |
| `DashboardHeader` | Molecule | P0       | Logo + description         |
| `RouteRegistry`   | Utility  | P0       | Type-safe route management |

### Component Development Pattern

Each component follows this structure:

```typescript
// component-name.type.ts
import type { Pulsar } from '@pulsar-framework/pulsar.dev';
import type { IComponentConfig } from '...';
import type { IComponentStyling } from '...';

export interface IComponentNameProps extends Pulsar.HtmlExtends<'div'> {
  readonly config?: IComponentConfig;
  readonly styling?: IComponentStyling;
  readonly specificProp: string;
  readonly children?: JSX.Children;
}

// component-name.tsx
import { ComponentConfigBuilder } from '...';
import { ComponentStylingBuilder } from '...';
import type { IComponentNameProps } from './component-name.type';

const defaultConfig = new ComponentConfigBuilder('primary').build();
const defaultStyling = new ComponentStylingBuilder()
  .base('...')
  .build();

export const ComponentName = ({
  config = defaultConfig,
  styling = defaultStyling,
  specificProp,
  children,
  ...rest
}: IComponentNameProps): HTMLElement => {
  return <div {...rest}>{children}</div>;
};
```

---

## 📄 Phase 3: Raw Component Gallery

### Purpose

Visual regression testing - render all components in default state for immediate inspection.

### File Structure

```
src/showcase/preparation/components/
├── atoms/
│   ├── avatar-raw.tsx
│   ├── button-raw.tsx
│   ├── checkbox-raw.tsx
│   └── ... (one per component)
├── molecules/
└── organisms/
```

### Raw Component Pattern

```typescript
// button-raw.tsx
import { Button } from '../../../components/molecules/button';
import { ComponentConfigBuilder } from '../../../components/utils/...';

export const ButtonRaw = (): HTMLElement => {
  return (
    <div class="p-4 border border-gray-200 rounded">
      <h3 class="text-sm font-bold mb-2">Button (Default)</h3>
      <Button config={new ComponentConfigBuilder('primary').build()}>
        Click Me
      </Button>
    </div>
  );
};
```

### Raw Gallery Page

```typescript
// raw-gallery.tsx
import { ButtonRaw } from '../../preparation/components/atoms/button-raw';
import { InputRaw } from '../../preparation/components/atoms/input-raw';
// ... all raw components

export const RawGallery = (): HTMLElement => {
  return (
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-8">Raw Component Gallery</h1>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">Atoms</h2>
        <div class="grid grid-cols-3 gap-4">
          <ButtonRaw />
          <InputRaw />
          {/* ... all atoms */}
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-4">Molecules</h2>
        <div class="grid grid-cols-2 gap-4">
          {/* ... all molecules */}
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-bold mb-4">Organisms</h2>
        <div class="grid grid-cols-1 gap-4">
          {/* ... all organisms */}
        </div>
      </section>
    </div>
  );
};
```

---

## 🎮 Phase 4: Component Sandbox System

### 4.1 Story Type Definition

```typescript
// story.type.ts
export interface Story {
  // Component to render
  component: (props: any) => HTMLElement;

  // Component props with values
  props: Record<string, unknown>;

  // Optional context wrapper
  context?: {
    provider: (props: any) => HTMLElement;
    value: unknown;
  };

  // Story metadata
  metadata: {
    name: string;
    category: 'atoms' | 'molecules' | 'organisms';
    description?: string;
    tags?: string[];
  };

  // Event handlers
  events?: Record<string, (data: unknown) => void>;

  // Extra data (collections, etc.)
  data?: {
    collections?: Record<string, unknown[]>;
    metadata?: Record<string, unknown>;
  };
}

export interface StoryConfig {
  variants?: readonly string[];
  colors?: readonly string[];
  sizes?: readonly string[];
  states?: readonly string[];
  [key: string]: readonly unknown[] | undefined;
}

export interface StoryData {
  defaultProps: Record<string, unknown>;
  testData?: Record<string, unknown>;
  collections?: Record<string, unknown[]>;
}
```

### 4.2 Story Configuration Pattern

```typescript
// button.story.config.ts
export const buttonStoryConfig = {
  variants: ['solid', 'outline', 'ghost'],
  colors: ['primary', 'secondary', 'success', 'warning', 'error'],
  sizes: ['sm', 'md', 'lg'],
  states: ['default', 'disabled', 'loading'],
} as const;

// button.story.data.ts
export const buttonStoryData = {
  defaultProps: {
    children: 'Click me',
  },
  testData: {
    longText: 'This is a very long button label',
    shortText: 'OK',
  },
};

// button.story.tsx
import { Button } from '../../../components/molecules/button';
import { ComponentConfigBuilder } from '../../../components/utils/...';
import { buttonStoryConfig } from './button.story.config';
import { buttonStoryData } from './button.story.data';
import type { Story } from '../../playground/types/story.type';

export const ButtonStories: Story[] = [
  {
    component: Button,
    props: {
      config: new ComponentConfigBuilder('primary').build(),
      children: buttonStoryData.defaultProps.children,
    },
    metadata: {
      name: 'Button - Primary',
      category: 'molecules',
      description: 'Default primary button',
      tags: ['button', 'primary', 'action'],
    },
    events: {
      onclick: (e) => console.log('Button clicked', e),
    },
  },
  // ... more stories
];
```

### 4.3 Component Sandbox

```typescript
// component-sandbox.tsx
import type { Story } from '../types/story.type';

export interface IComponentSandboxProps {
  story: Story;
  onEventCapture?: (eventName: string, data: unknown) => void;
}

export const ComponentSandbox = ({
  story,
  onEventCapture
}: IComponentSandboxProps): HTMLElement => {
  const { component: Component, props, context, events } = story;

  // Wrap events with capture logic
  const wrappedEvents = events ? Object.entries(events).reduce((acc, [key, handler]) => {
    acc[key] = (data: unknown) => {
      onEventCapture?.(key, data);
      handler(data);
    };
    return acc;
  }, {} as Record<string, (data: unknown) => void>) : {};

  const componentElement = (
    <Component {...props} {...wrappedEvents} />
  );

  // If context is needed, wrap component
  if (context) {
    const { provider: ContextProvider, value } = context;
    return (
      <ContextProvider value={value}>
        {componentElement}
      </ContextProvider>
    );
  }

  return componentElement;
};
```

---

## 🔧 Phase 5: Prop Editor System

### 5.1 Prop Type Detection

```typescript
// prop-editor.type.ts
export type PropEditorType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'color'
  | 'select'
  | 'object'
  | 'array';

export interface PropEditorConfig {
  type: PropEditorType;
  label: string;
  defaultValue: unknown;
  options?: readonly unknown[]; // For select type
  min?: number; // For number type
  max?: number; // For number type
  step?: number; // For number type
}
```

### 5.2 Individual Editors

Each editor is a component:

- `StringEditor` - Text input
- `BooleanEditor` - Toggle/Checkbox
- `NumberEditor` - Slider component
- `ColorEditor` - ColorPicker component
- `SelectEditor` - Dropdown
- `ObjectEditor` - JSON editor (textarea with validation)

---

## 📊 Phase 6: Event Logger System

### 6.1 Event Log Structure

```typescript
// event-logger.type.ts
export interface EventLog {
  id: string;
  timestamp: number;
  eventName: string;
  data: unknown;
  componentName: string;
}

export interface IEventLoggerProps {
  logs: EventLog[];
  onClear?: () => void;
  maxLogs?: number;
}
```

### 6.2 Retractable Panel Component

Bottom-mounted panel that can be collapsed/expanded:

- Drag handle to resize
- Collapse/expand button
- Clear logs button
- Auto-scroll to latest

---

## 🗺️ Phase 7: Routing & Navigation

### 7.1 Route Configuration System

**Research Required:** Investigate Pulsar routing:

- Client-side routing (CSR)
- Server-side routing (SSR)
- Hybrid approach
- Route parameters
- Dynamic imports

```typescript
// routes.type.ts
export interface Route {
  readonly path: string;
  readonly label: string;
  readonly component: () => HTMLElement;
  readonly ssr: boolean; // Server-side rendered?
  readonly children?: RouteMap;
}

export type RouteMap = Record<string, Route>;

// routes.config.ts
import { DashboardPage } from '../pages/dashboard/dashboard';
import { PlaygroundPage } from '../pages/playground/playground';
import { RawGalleryPage } from '../pages/raw-gallery/raw-gallery';

export const SHOWCASE_ROUTES = {
  dashboard: {
    path: '/',
    label: 'Dashboard',
    component: DashboardPage,
    ssr: true, // SEO-friendly landing page
  },
  rawGallery: {
    path: '/raw',
    label: 'Raw Components',
    component: RawGalleryPage,
    ssr: false, // Client-side only
  },
  playground: {
    path: '/playground',
    label: 'Playground',
    component: PlaygroundPage,
    ssr: false, // Interactive, client-side only
  },
  components: {
    path: '/components',
    label: 'Components',
    ssr: true, // SEO-friendly component docs
    children: {
      button: {
        path: '/components/button',
        label: 'Button',
        component: () => import('../pages/components/button'),
        ssr: true,
      },
      // ... all components
    },
  },
} as const satisfies RouteMap;
```

### 7.2 SSR Strategy

**SEO Requirements:**

- Component documentation pages must be SSR
- Code examples must be pre-rendered
- Metadata for social sharing

**CSR Requirements:**

- Playground must be client-side (interactive)
- Raw gallery can be client-side (dev tool)

**Implementation:**

```typescript
// Per-route SSR configuration
export const getRouteSSRConfig = (route: Route) => ({
  prerender: route.ssr,
  metadata: {
    title: `Pulsar UI - ${route.label}`,
    description: `${route.label} component documentation`,
    ogImage: `/og-images/${route.path}.png`,
  },
});
```

---

## 📱 Phase 8: Layout & Navigation UI

### 8.1 Main Layout

```typescript
// layout.tsx
import { SidebarNav } from './navigation/sidebar-nav/sidebar-nav';
import { DashboardHeader } from './navigation/dashboard-header/dashboard-header';
import { SHOWCASE_ROUTES } from './navigation/routes/routes.config';

export const ShowcaseLayout = ({ children }: { children: JSX.Children }): HTMLElement => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div class="flex h-screen">
      <SidebarNav
        routes={SHOWCASE_ROUTES}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main class="flex-1 overflow-auto">
        <DashboardHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <div class="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
```

### 8.2 Retractable Sidebar Nav

Features:

- Collapse/expand animation
- Route highlighting
- Nested route support
- Icon + label display

---

## 📈 Implementation Timeline

### Week 1: Foundation & Audit

- **Day 1-2:** Component audit (automated + manual)
- **Day 3:** Generate audit report + prioritization
- **Day 4-5:** Research Pulsar routing (SSR/CSR)

### Week 2: Raw Gallery (Quick Win)

- **Day 1-2:** Create all raw component files
- **Day 3:** Build raw gallery page
- **Day 4:** Test rendering, document issues
- **Day 5:** Fix critical rendering bugs

### Week 3: Missing Components

- **Day 1:** RetractablePanel + basic layout
- **Day 2:** CodeHighlighter (Prism.js integration)
- **Day 3:** ColorPicker + Slider
- **Day 4:** ObjectEditor + EventLogCard
- **Day 5:** Context providers (GeneralFormContext)

### Week 4: Playground Infrastructure

- **Day 1-2:** ComponentSandbox + Story types
- **Day 3:** PropEditor system
- **Day 4:** EventLogger system
- **Day 5:** Integration testing

### Week 5: Navigation & Routing

- **Day 1-2:** Route configuration + SidebarNav
- **Day 3:** Dashboard page + header
- **Day 4:** Component documentation pages
- **Day 5:** SSR configuration

### Week 6: Stories & Polish

- **Day 1-3:** Create stories for all components
- **Day 4:** Documentation writing
- **Day 5:** Final testing + deployment

---

## ✅ Success Criteria

### Must Have

- [ ] All 42 components render without errors in raw gallery
- [ ] Component sandbox can render any component with props
- [ ] Prop editor works for basic types (string, number, boolean)
- [ ] Event logger captures and displays events
- [ ] Routing works with SSR for documentation pages
- [ ] Navigation is intuitive and responsive

### Should Have

- [ ] Advanced prop editors (color, object)
- [ ] Code generation for all components
- [ ] Search/filter in component list
- [ ] Dark mode support

### Nice to Have

- [ ] Export/import story configurations
- [ ] Component usage analytics
- [ ] Accessibility testing panel
- [ ] Visual regression testing

---

## 🚧 Open Questions

1. **Pulsar Routing:**
   - How does Pulsar handle SSR routing?
   - Can we mix SSR and CSR routes?
   - Dynamic route parameters support?

2. **Component Contexts:**
   - Which components actually need context?
   - How to auto-detect context requirements?

3. **Code Generation:**
   - Which syntax highlighter library? (Prism.js vs Highlight.js)
   - How to generate clean, copy-paste-ready code?

4. **Performance:**
   - Lazy loading for component pages?
   - Virtual scrolling for large lists?

---

## 📝 Notes & Decisions Log

### Decision 1: No Storybook

**Reason:** Too much overhead, complex configuration, not Pulsar-native  
**Alternative:** Build lightweight custom solution

### Decision 2: Prism.js for Syntax Highlighting

**Reason:** Lightweight, no React dependency, good language support  
**Trade-off:** External library (only exception to "pure Pulsar" rule)

### Decision 3: Feature Slice Pattern

**Reason:** Better scalability, easier maintenance, clearer ownership  
**Example:** `/pages/button/button.tsx` + `button.config.ts` + `button.data.ts`

### Decision 4: Server-Side Rendering for Docs

**Reason:** SEO is critical for framework adoption  
**Scope:** Only documentation/showcase pages, not interactive playground

---

## 🔗 Related Documents

- [Component Audit Report](./COMPONENT_AUDIT_REPORT.md) - To be generated
- [Routing Strategy](./ROUTING_STRATEGY.md) - To be researched
- [SSR Implementation Guide](./SSR_GUIDE.md) - To be written

---

**Last Updated:** January 29, 2026  
**Next Review:** After Phase 1 completion
