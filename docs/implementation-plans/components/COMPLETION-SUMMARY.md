# Pulsar UI - Storybook Removal & Showcase Planning Complete

**Date:** 2026-01-28  
**Status:** ✅ Complete

---

## ✅ Completed Tasks

### 1. Storybook Removal

- ✅ Removed all Storybook dependencies
  - `@storybook/addon-essentials`
  - `@storybook/addon-interactions`
  - `@storybook/addon-links`
  - `@storybook/blocks`
  - `@storybook/html`
  - `@storybook/html-vite`
  - `@storybook/test`
  - `storybook`
- ✅ Deleted directories:
  - `.storybook/`
  - `storybook-static/`
  - `src/stories/`
- ✅ Disabled Stepper story (React-based, needs conversion)

### 2. Documentation Created

#### **components-list.md**

- ✅ Complete inventory of 22 existing components
- ✅ Identified 23 missing primitives to implement
- ✅ Clear categorization (Atoms/Molecules/Organisms)
- ✅ Defined what NOT to implement (handled by pulsar-formular-ui)
- ✅ Implementation phases and priorities

#### **showcase-implementation.md**

- ✅ Comprehensive architecture for custom Pulsar-based showcase
- ✅ Detailed component structure and file organization
- ✅ Technical implementation patterns
- ✅ 6-week phased rollout plan
- ✅ Code examples and templates
- ✅ All critical implementation rules included

---

## 📋 Critical Implementation Rules Summary

### Core Architectural Patterns (from `copiot-implementation-rules.md`)

1. **File Naming:** Always kebab-case

   ```
   my-component.tsx
   my-component.type.ts
   my-component.enum.ts
   ```

2. **One Item Per File:**
   - Enums: `[feature].enum.ts`
   - Interfaces: `[feature].interface.ts`
   - Consts: `[feature].ts`
   - Prototype methods: `prototype/[method].ts`

3. **Feature Slice Pattern:**
   Organize by feature/domain, not technical layer

   ```
   feature/
   ├── feature.ts           # Constructor
   ├── feature.types.ts     # Interfaces
   ├── prototype/           # Methods
   │   ├── method1.ts
   │   └── method2.ts
   └── index.ts             # Public exports
   ```

4. **Prototype-Based Classes Only:**

   ```typescript
   export const Signal = function <T>(this: ISignalInternal<T>, initialValue: T) {
     Object.defineProperty(this, 'value', {
       value: initialValue,
       writable: true,
       enumerable: false,
     });
   } as unknown as { new <T>(initialValue: T): ISignalInternal<T> };
   ```

5. **No `any` Types:** Always use proper interfaces

6. **Type Safety:** Proper interfaces, type guards, generics

7. **Factory Functions:** Ergonomic public API alongside constructors

8. **Immutable API Surface:** Readonly where appropriate

9. **Context Objects:** Pass state through, avoid globals

10. **Visitor Pattern:** For tree traversal (AST transformations)

### Component-Specific Rules (from `pulsar-ui.dev/docs/copilot-implementation-rules.md`)

11. **Declarative TSX:** Always use `return <jsx>...</jsx>`, never imperative DOM

    ```tsx
    // ✅ CORRECT
    export const MyComponent = ({ id, name, ...rest }: IMyComponent) => {
      return (
        <div id={id} {...rest}>
          {name()}
        </div>
      );
    };

    // ❌ WRONG
    export const MyComponent = ({ id, name }: IMyComponent) => {
      const div = document.createElement('div');
      div.id = id;
      return div;
    };
    ```

12. **ComponentConfigBuilder Pattern:**

    ```typescript
    const config = new ComponentConfigBuilder('primary')
      .size('md')
      .rounded('md')
      .shadow('sm')
      .build()

    <MyComponent config={config} />
    ```

13. **Component Props Interface:**

    ```typescript
    export interface IMyComponent extends Pulsar.HtmlExtends<'div'> {
      id: string;
      config?: IComponentConfig;
      // ... component-specific props
    }
    ```

14. **Design Tokens Integration:**

    ```typescript
    import { colorTokens, spacingTokens, typographyTokens } from '@pulsar/design-tokens';
    ```

15. **Pulsar Hooks:**

    ```typescript
    import { useState, useEffect, useRef, useMemo, useKeyBindings, useToggleable } from 'pulsar';
    ```

16. **No Mixed Enums/Types in Interfaces:** Extract them

    ```typescript
    // ❌ WRONG
    interface IComponent {
      size: 'sm' | 'md' | 'lg'; // Inline type
    }

    // ✅ CORRECT
    export type ComponentSize = 'sm' | 'md' | 'lg';
    interface IComponent {
      size: ComponentSize;
    }
    ```

17. **Component Styling Externalization:**
    - No inline style objects in components
    - Use ComponentStylingBuilder (similar to ConfigBuilder)
    - Data-oriented styling must be external

18. **Loading States:**

    ```tsx
    {
      config.loading ? <Skeleton /> : <ActualComponent />;
    }
    ```

19. **No Prefix/Suffix in Atoms:**
    - Atoms are single, atomic components
    - Prefix/suffix composition happens in Molecules

20. **Validation Separation:**
    - No validation logic in UI primitives
    - Validation handled by FORMULAR integration layer

---

## 🎯 Next Steps (Immediate)

### Phase 1: Showcase Foundation (This Week)

1. **Create showcase directory structure:**

   ```bash
   mkdir -p showcase/{layouts,components,pages,data,utils,styles}
   mkdir -p showcase/components/{sidebar,header,demo,playground}
   mkdir -p showcase/pages/components/{atoms,molecules,organisms}
   ```

2. **Set up Vite config:**
   - Create `vite.config.showcase.ts`
   - Add npm scripts to `package.json`:
     ```json
     {
       "scripts": {
         "showcase:dev": "vite --config vite.config.showcase.ts",
         "showcase:build": "vite build --config vite.config.showcase.ts"
       }
     }
     ```

3. **Create core files:**
   - `showcase/index.html` - Entry point
   - `showcase/main.ts` - Bootstrap application
   - `showcase/app.tsx` - Main app component
   - `showcase/router.ts` - Route configuration

4. **Build foundational components:**
   - `layouts/main-layout.tsx` - App shell
   - `components/sidebar/sidebar.tsx` - Navigation
   - `components/header/header.tsx` - Top bar
   - `data/navigation.ts` - Nav structure

5. **Test routing:**
   - Create home page
   - Create first demo page (Button)
   - Verify navigation works

---

## 📊 Component Implementation Pipeline

### Current State

- ✅ **22 components implemented** (Atoms: 9, Molecules: 5, Organisms: 8)
- ⚠️ **1 component needs conversion** (Stepper - React to Pulsar)
- 🎯 **23 components to implement** (see components-list.md for priorities)

### Showcase Progress

- Phase 1: Foundation (Week 1) - **Not Started**
- Phase 2: Demo Infrastructure (Week 2) - **Not Started**
- Phase 3: Component Showcase (Week 3-4) - **Not Started**
- Phase 4: Polish & Features (Week 5) - **Not Started**
- Phase 5: Advanced Examples (Week 6) - **Not Started**

---

## 📁 File Organization Reference

### Component Structure

```
components/
├── atoms/
│   ├── my-component/
│   │   ├── my-component.tsx              # Main component
│   │   ├── my-component.type.ts          # Props interface
│   │   ├── my-component.config.type.ts   # Config interface (if needed)
│   │   └── index.ts                      # Exports
│   └── ...
├── molecules/
│   └── ...
├── organisms/
│   └── ...
├── hooks/                                 # Shared hooks
│   ├── use-drawer-position.ts
│   └── ...
├── utils/
│   ├── component-config-builder/
│   │   ├── component-config-builder.ts
│   │   ├── component-config.type.ts
│   │   ├── component-config-builder.type.ts
│   │   └── prototype/
│   │       ├── variant.ts
│   │       ├── size.ts
│   │       └── ...
│   └── component-styling-builder/
│       └── ... (similar structure)
└── interfaces/                            # Shared interfaces
    └── ...
```

### Showcase Structure

```
showcase/
├── index.html
├── main.ts
├── app.tsx
├── router.ts
├── layouts/
│   ├── main-layout.tsx
│   └── demo-layout.tsx
├── components/
│   ├── sidebar/
│   ├── header/
│   ├── demo/
│   └── playground/
├── pages/
│   ├── home.tsx
│   ├── getting-started.tsx
│   └── components/
│       ├── atoms/
│       ├── molecules/
│       └── organisms/
├── data/
│   ├── component-registry.ts
│   ├── navigation.ts
│   └── examples.ts
├── utils/
│   ├── syntax-highlighter.ts
│   └── copy-to-clipboard.ts
└── styles/
    ├── showcase.css
    └── code-theme.css
```

---

## 🔗 Key Documents

1. **[components-list.md](./components-list.md)**
   - Component inventory
   - Missing primitives
   - Implementation priorities
   - What NOT to build (formular-ui)

2. **[showcase-implementation.md](./showcase-implementation.md)**
   - Complete architecture
   - Technical implementation
   - Code templates
   - 6-week roadmap

3. **[../../copilot-implementation-rules.md](../../copilot-implementation-rules.md)**
   - Pulsar UI specific rules
   - Component patterns
   - Builder patterns

4. **[../../../../../copiot-implementation-rules.md](../../../../../copiot-implementation-rules.md)**
   - Core architectural patterns
   - Prototype classes
   - Type safety rules

5. **[../../../../pulsar-design-system/README.md](../../../../pulsar-design-system/README.md)**
   - Design tokens documentation
   - Color palette
   - Spacing/typography scales

---

## ✅ Success Criteria

### Documentation

- ✅ All implementation rules consolidated
- ✅ Component inventory complete
- ✅ Showcase architecture defined
- ✅ Code templates provided

### Cleanup

- ✅ Storybook fully removed
- ✅ No React dependencies
- ✅ Old stories deleted

### Next Phase

- ⏳ Showcase foundation (Week 1)
- ⏳ Demo infrastructure (Week 2)
- ⏳ Component documentation (Week 3-4)

---

**Status:** ✅ Planning Complete, Ready for Implementation  
**Next Action:** Begin Phase 1 - Showcase Foundation  
**Owner:** Development Team
