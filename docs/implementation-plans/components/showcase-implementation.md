# Pulsar UI Showcase - Implementation Plan

**Last Updated:** 2026-01-28  
**Status:** Planning  
**Goal:** Build a custom showcase application using Pulsar framework itself (no Storybook)

📚 **See Also:** [Pulsar & Formular Knowledge Base](./PULSAR-AND-FORMULAR-KNOWLEDGE.md) for architecture details

---

## 🎯 Vision

Create a **self-documenting component library** where Pulsar UI components are showcased using **Pulsar itself**. This approach provides:

1. **Dogfooding** - Use our own framework to prove its capabilities
2. **True Examples** - Real Pulsar code, not React wrappers
3. **Live Playground** - Interactive demos with code examples
4. **Documentation Hub** - Comprehensive API docs and usage guides
5. **Performance Showcase** - Demonstrate Pulsar's reactivity and speed

---

## 🧠 Available Pulsar Hooks & Utilities

Before building, leverage what Pulsar already provides:

### Core Hooks

- **useState** - State management with signals
- **useEffect** - Side effects with cleanup
- **useMemo** - Computed values
- **useRef** - Mutable references
- **useReducer** - Redux-style state

### Specialized Hooks (REUSE THESE!)

- **useToggleable** - For modals, dropdowns, accordions, drawers, tooltips (open/close/idle states)
- **useKeyBindings** - Declarative keyboard navigation (Enter, Escape, Arrows, etc.)
- **useSync** - Bridge external reactive systems (formular.dev, Redux, MobX)
- **useHttp** - HTTP requests with reactive state (loading, data, error)
- **useFormular** - Form management with validation (bridges formular.dev)

### Router Hooks

- **useRouter**, **useNavigate**, **useLocation**
- **useParams**, **useSearchParams**
- **usePrefetchRoute**, **usePrefetchLink**, **usePrefetchOnMount**

### Custom Hooks

- **useDrawerPosition** - Viewport-aware positioning (already exists in pulsar-ui.dev)

**Critical Rule:** Always check if Pulsar has a hook before creating custom solutions!

---

## ⚠️ Important: Scope & Boundaries

### What This Showcase IS

**Pure UI Primitives:**

- ✅ Focus on atomic, reusable components (Button, Input, Checkbox, etc.)
- ✅ Demonstrate component APIs, variants, and composition
- ✅ Show how primitives work in isolation
- ✅ Design components to be form-system agnostic
- ✅ Keep examples simple and focused on the component itself

### What This Showcase IS NOT

**Form Integration:**

- ❌ NO formular.dev integration demos
- ❌ NO form validation examples
- ❌ NO useFormular hook usage
- ❌ NO form management patterns

**Why?** Form integration belongs in **pulsar-formular-ui** (separate package)

### Design Principle: Form-System Agnostic

When building primitives, design them to work with ANY form library:

```tsx
// ✅ GOOD: Generic primitive with standard props
const Input = ({ value, onInput, disabled, required, ...props }) => {
  return (
    <input value={value} onInput={onInput} disabled={disabled} required={required} {...props} />
  );
};

// Usage: Works with ANY form library or vanilla JS
<Input value={email} onInput={(e) => setEmail(e.target.value)} />;

// ❌ WRONG: Tightly coupled to formular
const Input = ({ field }) => {
  return <input value={field.value()} onInput={(e) => field.setValue(e.target.value)} />;
};
```

**Key Insight:**
Learning about formular.dev helps us understand:

1. The ecosystem we're part of
2. How to design components that COULD work with form systems
3. What NOT to duplicate (form management is in pulsar-formular-ui)

But showcase demos are **primitive-focused ONLY**.

### Component Patterns to Follow

#### 1. **Toggleable Pattern** (useToggleable)

Use for: Modal, Dropdown, Popover, Tooltip, Accordion, Drawer, Collapsible

```tsx
const Modal = ({ trigger, children }) => {
  const modal = useToggleable('closed');

  return (
    <>
      <div onClick={modal.open}>{trigger}</div>
      <Show when={modal.isOpen()}>
        <div class="modal-overlay" onClick={modal.close}>
          {children}
        </div>
      </Show>
    </>
  );
};
```

#### 2. **Keyboard Navigation Pattern** (useKeyBindings)

Use for: Dropdown, Select, Combobox, Menu, Dialog

```tsx
const Dropdown = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdown = useToggleable();

  const handleKeyDown = useKeyBindings({
    onEscape: dropdown.close,
    onEnter: () => selectOption(options[selectedIndex()]),
    onArrowDown: () => setSelectedIndex((i) => Math.min(i + 1, options.length - 1)),
    onArrowUp: () => setSelectedIndex((i) => Math.max(i - 1, 0)),
  });

  return (
    <div onKeyDown={handleKeyDown} tabindex="0">
      {/* ... */}
    </div>
  );
};
```

#### 3. **Drawer Positioning Pattern** (useDrawerPosition)

Use for: Dropdown, Popover, Tooltip, ContextMenu

```tsx
const Popover = ({ trigger, content }) => {
  const popover = useToggleable();
  const triggerRef = useRef<HTMLElement>(null);

  const position = useDrawerPosition({
    triggerRef,
    isOpen: popover.isOpen,
    offset: { x: 0, y: 8 },
  });

  return (
    <>
      <div ref={triggerRef} onClick={popover.toggle}>
        {trigger}
      </div>
      <Show when={popover.isOpen()}>
        <div style={position()}>{content}</div>
      </Show>
    </>
  );
};
```

#### 4. **Compound Components Pattern**

Use for: Complex components with multiple parts (Modal, Accordion, Tabs)

```tsx
const Modal = ({ children }) => {
  const modal = useToggleable();
  return <ModalContext.Provider value={{ modal }}>{children}</ModalContext.Provider>;
};

Modal.Trigger = ({ children }) => {
  const { modal } = useContext(ModalContext);
  return <div onClick={modal.open}>{children}</div>;
};

Modal.Content = ({ children }) => {
  const { modal } = useContext(ModalContext);
  return <Show when={modal.isOpen()}>{children}</Show>;
};

// Usage
<Modal>
  <Modal.Trigger>
    <Button>Open</Button>
  </Modal.Trigger>
  <Modal.Content>
    <h2>Content</h2>
  </Modal.Content>
</Modal>;
```

---

## 📐 Architecture

### High-Level Structure

```
packages/pulsar-ui.dev/
├── showcase/                    # Showcase application
│   ├── index.html              # Entry point
│   ├── main.ts                 # Bootstrap
│   ├── app.tsx                 # Main app component
│   ├── router.ts               # Route configuration
│   │
│   ├── layouts/
│   │   ├── main-layout.tsx     # App shell (sidebar + content)
│   │   └── demo-layout.tsx     # Demo page layout
│   │
│   ├── components/
│   │   ├── sidebar/
│   │   │   ├── sidebar.tsx             # Navigation sidebar
│   │   │   ├── sidebar-section.tsx     # Grouped nav items
│   │   │   └── sidebar-item.tsx        # Single nav link
│   │   │
│   │   ├── header/
│   │   │   ├── header.tsx              # Top header bar
│   │   │   ├── theme-toggle.tsx        # Dark/light mode
│   │   │   └── search-bar.tsx          # Component search
│   │   │
│   │   ├── demo/
│   │   │   ├── demo-container.tsx      # Wrapper for demos
│   │   │   ├── demo-preview.tsx        # Live component preview
│   │   │   ├── code-block.tsx          # Syntax-highlighted code
│   │   │   ├── props-table.tsx         # API documentation table
│   │   │   └── example-tabs.tsx        # Multiple examples per component
│   │   │
│   │   └── playground/
│   │       ├── live-editor.tsx         # Interactive code editor
│   │       ├── controls-panel.tsx      # Props/config controls
│   │       └── output-panel.tsx        # Live rendered output
│   │
│   ├── pages/
│   │   ├── home.tsx                    # Landing page
│   │   ├── getting-started.tsx         # Installation/setup guide
│   │   ├── design-tokens.tsx           # Design system showcase
│   │   │
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── button-demo.tsx
│   │   │   │   ├── input-demo.tsx
│   │   │   │   ├── checkbox-demo.tsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── molecules/
│   │   │   │   ├── badge-demo.tsx
│   │   │   │   ├── label-demo.tsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   └── organisms/
│   │   │       ├── card-demo.tsx
│   │   │       ├── modal-demo.tsx
│   │   │       └── ...
│   │   │
│   │   └── examples/
│   │       ├── form-example.tsx        # Complete form example
│   │       ├── dashboard-example.tsx   # Dashboard layout
│   │       └── data-table-example.tsx  # Table with sorting/filtering
│   │
│   ├── data/
│   │   ├── component-registry.ts       # Component metadata
│   │   ├── navigation.ts               # Navigation structure
│   │   └── examples.ts                 # Code examples
│   │
│   ├── utils/
│   │   ├── syntax-highlighter.ts       # Code highlighting
│   │   ├── copy-to-clipboard.ts        # Copy code utility
│   │   └── route-helpers.ts            # Routing utilities
│   │
│   └── styles/
│       ├── showcase.css                # Showcase-specific styles
│       ├── code-theme.css              # Code syntax theme
│       └── layout.css                  # Layout utilities
│
├── vite.config.showcase.ts             # Separate Vite config for showcase
└── package.json                        # Add showcase scripts
```

---

## 🧱 Core Components

### 1. Main Layout (`layouts/main-layout.tsx`)

```tsx
import { useState } from 'pulsar';
import { Sidebar } from '../components/sidebar/sidebar';
import { Header } from '../components/header/header';
import { Router } from 'pulsar/router';

export const MainLayout = ({ children }: { children: HTMLElement }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div class={`app-layout theme-${theme()}`}>
      <Header
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        onMenuToggle={() => setSidebarOpen((o) => !o)}
      />

      <div class="layout-container">
        <Sidebar isOpen={sidebarOpen} />

        <main class="content-area">{children}</main>
      </div>
    </div>
  );
};
```

### 2. Demo Container (`components/demo/demo-container.tsx`)

```tsx
import { useState } from 'pulsar';
import { DemoPreview } from './demo-preview';
import { CodeBlock } from './code-block';
import { PropsTable } from './props-table';
import { ExampleTabs } from './example-tabs';

interface DemoContainerProps {
  title: string;
  description: string;
  component: () => HTMLElement;
  code: string;
  props: PropDefinition[];
  examples?: Example[];
}

export const DemoContainer = ({
  title,
  description,
  component,
  code,
  props,
  examples,
}: DemoContainerProps) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div class="demo-container">
      <div class="demo-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div class="demo-tabs">
        <button
          class={activeTab() === 'preview' ? 'active' : ''}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </button>
        <button class={activeTab() === 'code' ? 'active' : ''} onClick={() => setActiveTab('code')}>
          Code
        </button>
      </div>

      <div class="demo-content">
        {activeTab() === 'preview' ? (
          <DemoPreview>{component()}</DemoPreview>
        ) : (
          <CodeBlock code={code} language="tsx" />
        )}
      </div>

      {examples && examples.length > 0 && <ExampleTabs examples={examples} />}

      <PropsTable props={props} />
    </div>
  );
};
```

### 3. Code Block with Syntax Highlighting

```tsx
import { useEffect, useRef } from 'pulsar';
import { highlightCode } from '../../utils/syntax-highlighter';

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.innerHTML = highlightCode(code, language);
    }
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    // Show toast notification
  };

  return (
    <div class="code-block">
      <div class="code-header">
        <span class="language-label">{language}</span>
        <button onClick={handleCopy} class="copy-button">
          Copy
        </button>
      </div>
      <pre>
        <code ref={codeRef}></code>
      </pre>
    </div>
  );
};
```

### 4. Component Registry (`data/component-registry.ts`)

```typescript
export interface ComponentMeta {
  id: string
  name: string
  category: 'atoms' | 'molecules' | 'organisms'
  description: string
  path: string
  status: 'stable' | 'beta' | 'alpha'
  props: PropDefinition[]
  examples: Example[]
}

export interface PropDefinition {
  name: string
  type: string
  required: boolean
  default?: string
  description: string
}

export interface Example {
  title: string
  description?: string
  code: string
  component: () => HTMLElement
}

export const componentRegistry: ComponentMeta[] = [
  {
    id: 'button',
    name: 'Button',
    category: 'molecules',
    description: 'Interactive action trigger with variants',
    path: '/components/molecules/button',
    status: 'stable',
    props: [
      {
        name: 'config',
        type: 'IComponentConfig',
        required: false,
        default: 'primary variant',
        description: 'Component configuration for styling variants'
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Click event handler'
      }
    ],
    examples: [
      {
        title: 'Basic Button',
        code: `<Button config={new ComponentConfigBuilder('primary').build()}>
  Click me
</Button>`,
        component: () => {
          const config = new ComponentConfigBuilder('primary').build()
          return <Button config={config}>Click me</Button>
        }
      },
      {
        title: 'Button Variants',
        code: `<Button config={new ComponentConfigBuilder('primary').build()}>Primary</Button>
<Button config={new ComponentConfigBuilder('secondary').build()}>Secondary</Button>
<Button config={new ComponentConfigBuilder('ghost').build()}>Ghost</Button>`,
        component: () => (
          <div style="display: flex; gap: 1rem;">
            <Button config={new ComponentConfigBuilder('primary').build()}>Primary</Button>
            <Button config={new ComponentConfigBuilder('secondary').build()}>Secondary</Button>
            <Button config={new ComponentConfigBuilder('ghost').build()}>Ghost</Button>
          </div>
        )
      }
    ]
  },
  // ... more components
]
```

---

## 🛠️ Technical Implementation

### Routing

Use Pulsar's built-in router:

```typescript
// showcase/router.ts
import { createRouter } from 'pulsar/router';
import { HomePage } from './pages/home';
import { ButtonDemo } from './pages/components/atoms/button-demo';
// ... other imports

export const router = createRouter([
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/getting-started',
    component: GettingStarted,
  },
  {
    path: '/components/atoms/:componentId',
    component: AtomDemo,
  },
  {
    path: '/components/molecules/:componentId',
    component: MoleculeDemo,
  },
  {
    path: '/components/organisms/:componentId',
    component: OrganismDemo,
  },
]);
```

### State Management

Use Pulsar's reactive signals:

```typescript
// Global state for theme, search, etc.
import { createStore } from 'pulsar';

export const showcaseStore = createStore({
  theme: 'light' as 'light' | 'dark',
  sidebarOpen: true,
  searchQuery: '',
  activeComponent: null as string | null,
});
```

### Syntax Highlighting

Use a lightweight library like Prism.js or highlight.js:

```typescript
// utils/syntax-highlighter.ts
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';

export function highlightCode(code: string, language: string): string {
  const grammar = Prism.languages[language];
  if (!grammar) return code;

  return Prism.highlight(code, grammar, language);
}
```

---

## 🎨 Design & Theming

### Design Tokens Integration

```css
/* showcase/styles/showcase.css */
@import '@pulsar/design-tokens/css';

:root {
  /* Layout */
  --sidebar-width: 280px;
  --header-height: 64px;
  --content-max-width: 1200px;

  /* Code blocks */
  --code-bg: var(--neutral-900);
  --code-text: var(--neutral-50);

  /* Demo containers */
  --demo-border: var(--neutral-300);
  --demo-bg: var(--neutral-50);
}

.theme-dark {
  --demo-border: var(--neutral-700);
  --demo-bg: var(--neutral-800);
}
```

### Component Demo Styling

```css
.demo-container {
  border: 1px solid var(--demo-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin: var(--spacing-lg) 0;
}

.demo-preview {
  padding: var(--spacing-xl);
  background: var(--demo-bg);
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.code-block {
  background: var(--code-bg);
  color: var(--code-text);
  padding: var(--spacing-md);
  overflow-x: auto;
}
```

---

## 📦 Build Configuration

### Vite Config for Showcase

```typescript
// vite.config.showcase.ts
import { defineConfig } from 'vite';
import { pulsarVitePlugin } from '@pulsar/vite-plugin';

export default defineConfig({
  plugins: [pulsarVitePlugin()],
  root: './showcase',
  build: {
    outDir: '../dist-showcase',
    emptyOutDir: true,
  },
  server: {
    port: 3001,
  },
});
```

### Package.json Scripts

```json
{
  "scripts": {
    "showcase:dev": "vite --config vite.config.showcase.ts",
    "showcase:build": "vite build --config vite.config.showcase.ts",
    "showcase:preview": "vite preview --config vite.config.showcase.ts"
  }
}
```

---

## 🚀 Implementation Phases

### Phase 1: Foundation (Week 1)

**Goal:** Basic showcase structure

- [x] Remove Storybook completely
- [ ] Set up showcase directory structure
- [ ] Create basic layouts (MainLayout, DemoLayout)
- [ ] Implement router with basic navigation
- [ ] Create Header and Sidebar components
- [ ] Set up design token integration
- [ ] Implement theme toggle (light/dark)

**Deliverable:** Navigate between empty pages with working layout

---

### Phase 2: Demo Infrastructure (Week 2)

**Goal:** Reusable demo components

- [ ] Build DemoContainer component
- [ ] Implement CodeBlock with syntax highlighting
- [ ] Create PropsTable component
- [ ] Build ExampleTabs component
- [ ] Implement copy-to-clipboard utility
- [ ] Create component registry system
- [ ] Add search functionality

**Deliverable:** One fully documented component (Button)

---

### Phase 3: Component Showcase (Week 3-4)

**Goal:** Document all existing components

- [ ] Create demo pages for all 22 existing components
  - [ ] 9 Atoms
  - [ ] 5 Molecules
  - [ ] 8 Organisms
- [ ] Write comprehensive examples for each
- [ ] Document all props and usage patterns
- [ ] Add interactive playgrounds for complex components

**Deliverable:** Complete showcase of existing library

---

### Phase 4: Polish & Features (Week 5)

**Goal:** Enhanced UX

- [ ] Implement live code editor (Monaco or CodeMirror)
- [ ] Add component search with fuzzy matching
- [ ] Create "Getting Started" guide
- [ ] Add design tokens showcase page
- [ ] Implement keyboard shortcuts
- [ ] Add mobile-responsive layout
- [ ] Performance optimization (code splitting)

**Deliverable:** Production-ready showcase

---

### Phase 5: Advanced Examples (Week 6)

**Goal:** Real-world patterns

- [ ] Build complex form example
- [ ] Create dashboard example
- [ ] Implement data table with sorting/filtering
- [ ] Add modal workflow example
- [ ] Create multi-step form with Stepper
- [ ] Build authentication flow example

**Deliverable:** Pattern library for common use cases

---

## 📝 Critical Implementation Rules

### From `copiot-implementation-rules.md`:

1. **File Naming:** Always kebab-case
2. **One Item Per File:**
   - Enums: `[feature].enum.ts`
   - Interfaces: `[feature].interface.ts`
   - Prototypes: `prototype/[method].ts`

3. **Prototype-Based Classes:**

   ```typescript
   export const MyClass = function (this: IMyClass, ...args) {
     // Constructor logic
   } as unknown as { new (...args): IMyClass };
   ```

4. **No `any` Types:** Always use proper interfaces

5. **Feature Slice Pattern:** Organize by feature, not technical layer

### From `pulsar-ui.dev/docs/copilot-implementation-rules.md`:

6. **Component Structure:**

   ```tsx
   export const MyComponent = ({ config, ...rest }: IMyComponentProps) => {
     // Declarative TSX return
     return <div {...rest}>Content</div>;
   };
   ```

7. **ComponentConfigBuilder Pattern:**

   ```typescript
   const config = new ComponentConfigBuilder('primary').size('md').rounded('md').build();
   ```

8. **Design Token Usage:**

   ```typescript
   import { colorTokens, spacingTokens } from '@pulsar/design-tokens';
   ```

9. **Pulsar Hooks:**

   ```typescript
   import { useState, useEffect, useRef } from 'pulsar';
   ```

10. **No React Dependencies:** Pure Pulsar implementation

---

## 🔍 Component Demo Template

Each component demo should follow this structure:

```tsx
// showcase/pages/components/atoms/button-demo.tsx
import { DemoContainer } from '../../../components/demo/demo-container';
import { Button } from '@pulsar/ui/components/molecules/button';
import { ComponentConfigBuilder } from '@pulsar/ui/utils/component-config-builder';

export const ButtonDemo = () => {
  const componentMeta = {
    title: 'Button',
    description: 'Interactive action trigger with multiple variants',
    component: () => <Button>Click me</Button>,
    code: `import { Button } from '@pulsar/ui'

<Button>Click me</Button>`,
    props: [
      {
        name: 'config',
        type: 'IComponentConfig',
        required: false,
        default: 'primary variant',
        description: 'Component styling configuration',
      },
      {
        name: 'onClick',
        type: '() => void',
        required: false,
        description: 'Click event handler',
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        default: 'false',
        description: 'Disabled state',
      },
    ],
    examples: [
      {
        title: 'Variants',
        description: 'Different visual styles',
        code: `<Button config={new ComponentConfigBuilder('primary').build()}>Primary</Button>
<Button config={new ComponentConfigBuilder('secondary').build()}>Secondary</Button>
<Button config={new ComponentConfigBuilder('ghost').build()}>Ghost</Button>`,
        component: () => (
          <div style="display: flex; gap: 1rem;">
            <Button config={new ComponentConfigBuilder('primary').build()}>Primary</Button>
            <Button config={new ComponentConfigBuilder('secondary').build()}>Secondary</Button>
            <Button config={new ComponentConfigBuilder('ghost').build()}>Ghost</Button>
          </div>
        ),
      },
      {
        title: 'Sizes',
        code: `<Button config={new ComponentConfigBuilder('primary').size('sm').build()}>Small</Button>
<Button config={new ComponentConfigBuilder('primary').size('md').build()}>Medium</Button>
<Button config={new ComponentConfigBuilder('primary').size('lg').build()}>Large</Button>`,
        component: () => (
          <div style="display: flex; gap: 1rem; align-items: center;">
            <Button config={new ComponentConfigBuilder('primary').size('sm').build()}>Small</Button>
            <Button config={new ComponentConfigBuilder('primary').size('md').build()}>
              Medium
            </Button>
            <Button config={new ComponentConfigBuilder('primary').size('lg').build()}>Large</Button>
          </div>
        ),
      },
      {
        title: 'States',
        code: `<Button disabled>Disabled</Button>
<Button config={new ComponentConfigBuilder('primary').loading(true).build()}>Loading</Button>`,
        component: () => (
          <div style="display: flex; gap: 1rem;">
            <Button disabled>Disabled</Button>
            <Button config={new ComponentConfigBuilder('primary').loading(true).build()}>
              Loading
            </Button>
          </div>
        ),
      },
    ],
  };

  return <DemoContainer {...componentMeta} />;
};
```

---

## 📊 Success Metrics

### Technical Metrics

- ✅ Zero React dependencies
- ✅ All components documented
- ✅ <100ms time to interactive
- ✅ Full TypeScript coverage
- ✅ Responsive on all devices

### UX Metrics

- ✅ Search finds components <200ms
- ✅ Code examples copyable with one click
- ✅ Live demos interactive and smooth
- ✅ Mobile-friendly navigation

### Developer Metrics

- ✅ Easy to add new components
- ✅ Examples auto-generated from registry
- ✅ Hot module replacement working
- ✅ Build time <10s

---

## 🔗 Related Documents

- [Component List](./components-list.md) - Full component inventory
- [Copilot Implementation Rules](../../copilot-implementation-rules.md) - Pulsar UI rules
- [Root Implementation Rules](../../../../../copiot-implementation-rules.md) - Core architectural patterns
- [@pulsar/design-tokens](../../../../pulsar-design-system/README.md) - Design system
- [Pulsar Router Docs](../../../../pulsar.dev/docs/router.md) - Routing documentation

---

## 🎯 Next Immediate Steps

1. **Remove Storybook:**

   ```bash
   pnpm remove @storybook/react @storybook/react-vite storybook
   rm -rf .storybook storybook-static
   rm -rf src/stories
   ```

2. **Create showcase structure:**

   ```bash
   mkdir -p showcase/{layouts,components,pages,data,utils,styles}
   ```

3. **Set up basic routing and layout:**
   - Create `showcase/main.ts`
   - Build `MainLayout` component
   - Implement router

4. **Build first demo:**
   - Pick Button component
   - Create comprehensive demo page
   - Test all patterns

5. **Iterate:**
   - Add more components
   - Refine demo components
   - Polish UX

---

**Status:** Ready to begin Phase 1  
**Owner:** Development Team  
**Timeline:** 6 weeks to complete showcase  
**Dependencies:** None (all required components already exist)
