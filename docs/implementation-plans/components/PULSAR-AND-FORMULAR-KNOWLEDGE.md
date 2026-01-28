# Pulsar & Formular Architecture Knowledge Base

**Date:** 2026-01-28  
**Purpose:** Comprehensive understanding of Pulsar and Formular to guide showcase implementation

---

## 🎯 Table of Contents

1. [Pulsar Core Architecture](#pulsar-core-architecture)
2. [Available Pulsar Hooks & Utilities](#available-pulsar-hooks--utilities)
3. [Formular Architecture & Integration](#formular-architecture--integration)
4. [Critical Patterns for Showcase](#critical-patterns-for-showcase)
5. [Integration Strategy](#integration-strategy)

---

## Pulsar Core Architecture

### 1. Reactivity System

Pulsar uses **signal-based fine-grained reactivity** similar to SolidJS:

#### **Signals** - Reactive Primitives

```typescript
// Prototype-based constructor
export const Signal = function <T>(this: ISignalInternal<T>, initialValue: T) {
  Object.defineProperty(this, '_value', {
    value: initialValue,
    writable: true,
    enumerable: false,
  });
  Object.defineProperty(this, 'subscribers', {
    value: new Set<() => void>(),
    enumerable: false,
  });
};

// Prototype methods
Signal.prototype.read = function () {
  const activeEffect = getActiveEffect();
  if (activeEffect) {
    this.subscribers.add(activeEffect.execute);
  }
  return this._value;
};

Signal.prototype.write = function (newValue) {
  if (this._value !== newValue) {
    this._value = newValue;
    this.subscribers.forEach((fn) => fn());
  }
};
```

**Key Properties:**

- Lazy evaluation (computed on read)
- Automatic dependency tracking
- Efficient updates (only when value changes)
- **Components run ONCE** - not on every state change
- Only subscribed DOM nodes update

#### **Effects** - Reactive Computations

```typescript
createEffect(() => {
  console.log(`Count: ${count()}`); // Auto-tracks count signal
  // Runs whenever count changes

  return () => {
    // Cleanup function (optional)
  };
});
```

**How it works:**

1. Effect runs, setting itself as "active"
2. Any signal reads during execution subscribe to this effect
3. When signals change, they notify the effect to re-run

#### **Batched Updates**

```typescript
batch(() => {
  setCount(1);
  setName('Bob');
  setAge(30);
});
// Effects run once, not three times
```

### 2. Component Model

Components are **factory functions** that return DOM elements:

```tsx
export const Counter = ({ initialCount = 0 }) => {
  // Setup (runs ONCE)
  const [count, setCount] = useState(initialCount);

  // JSX transforms to direct DOM operations
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Count: {count()} {/* count() subscribes this text node */}
    </button>
  );
};
```

**Transformation:**

- TypeScript Transformer compiles JSX → DOM code at build time
- Zero runtime JSX overhead
- Direct DOM manipulation (no virtual DOM)
- Signal subscriptions are automatic

### 3. Hooks System

React-compatible API built on signals:

```typescript
// State management
const [count, setCount] = useState(0);

// Side effects
useEffect(() => {
  console.log(count());
  return () => cleanup();
}, [count]);

// Computed values
const doubled = useMemo(() => count() * 2, [count]);

// Mutable references
const inputRef = useRef<HTMLInputElement>(null);
```

**Critical Difference from React:**

- **Signal access:** `count()` not `count`
- **No synthetic events:** Use DOM types (`KeyboardEvent` not `React.KeyboardEvent`)
- **Return types:** `HTMLElement` not `ReactNode`

### 4. Control Flow

Fine-grained control flow components:

```tsx
// Conditional rendering
<Show when={isLoggedIn()} fallback={<Login />}>
  <Dashboard />
</Show>

// List rendering with keyed reconciliation
<For each={items()} key={(item) => item.id}>
  {(item, index) => <ItemCard item={item} />}
</For>

// Dynamic components
<Dynamic component={componentSignal()} props={{...}} />
```

**Performance:**

- Without `key`: Recreates all items on change
- With `key`: Reuses DOM nodes (efficient for large lists)

---

## Available Pulsar Hooks & Utilities

### Core Hooks (from `pulsar/hooks`)

#### 1. **useState** - State Management

```typescript
const [count, setCount] = useState(0);

// Reading (subscribes to changes)
const value = count();

// Writing
setCount(5);
setCount((c) => c + 1);
```

#### 2. **useEffect** - Side Effects

```typescript
useEffect(() => {
  console.log(`Count: ${count()}`);

  return () => {
    // Cleanup function
  };
}, [count]);
```

#### 3. **useMemo** - Computed Values

```typescript
const doubled = useMemo(() => count() * 2, [count]);
console.log(doubled()); // Must call getter
```

#### 4. **useRef** - Mutable References

```typescript
const inputRef = useRef<HTMLInputElement>(null);

// Access DOM element
inputRef.current?.focus();
```

#### 5. **useReducer** - Redux-Style State

```typescript
const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: 'INCREMENT' });
```

### Specialized Hooks

#### 6. **useToggleable** - Open/Close/Idle Patterns

```typescript
const modal = useToggleable('closed');

// Check state
if (modal.isOpen()) {
  // Modal is open
}

// Control state
modal.open(); // Set to 'open'
modal.close(); // Set to 'closed'
modal.toggle(); // Toggle between open/closed
modal.reset(); // Set to 'idle'

// Direct state access
const currentState = modal.state();
modal.setState('open');
```

**Use Cases:**

- Modals, Dropdowns, Accordions, Drawers, Tooltips, Popovers
- Any UI component with open/closed states

#### 7. **useKeyBindings** - Keyboard Event Handling

```typescript
const handleKeyDown = useKeyBindings({
  onEnter: (e) => {
    e.preventDefault();
    submitForm();
  },
  onEscape: () => closeModal(),
  onArrowDown: () => selectNext(),
  onArrowUp: () => selectPrevious(),
  onArrowLeft: () => navigateLeft(),
  onArrowRight: () => navigateRight(),
  onSpace: (e) => toggleSelection(),
  onDelete: () => deleteItem(),
  onBackspace: () => deleteItem(),
  onTab: (e) => handleTab(),
  onKey: (e) => {
    // Generic handler for any key
  },
});

input.addEventListener('keydown', handleKeyDown);
```

**Supported Keys:**

- Enter, Space, Escape
- ArrowDown, ArrowUp, ArrowLeft, ArrowRight
- Delete, Backspace, Tab
- Generic `onKey` for custom handling

**Use Cases:**

- Form navigation, Dropdown selection, Modal escape
- Keyboard-accessible components, Shortcuts

#### 8. **useSync** - External State Synchronization

```typescript
// Bridge to external reactive systems (formular.dev, Redux, MobX, etc.)
const validationResults = useSync(
  (notify) => {
    // Subscribe to external changes
    return formularCreateEffect(() => {
      input._validationResults.get(); // Track dependency
      notify(); // Notify Pulsar of change
    });
  },
  () => input._validationResults.get() // Get snapshot
);

// Now use as normal Pulsar signal
return <div>{validationResults().map(...)}</div>
```

**Use Cases:**

- Formular.dev integration
- Redux store synchronization
- MobX observables
- Any external reactive system

#### 9. **useHttp** - HTTP Requests with Reactive State

```typescript
const { data, loading, error, execute, refetch } = useHttp(client, {
  url: '/users',
  method: 'GET'
})

// Trigger request
await execute()

// Access reactive values
if (loading()) {
  return <div>Loading...</div>
}

if (error()) {
  return <div>Error: {error()!.message}</div>
}

return <div>{JSON.stringify(data())}</div>
```

**Methods:**

- `execute(config?)` - Trigger request with optional config override
- `refetch()` - Re-run last request
- `reset()` - Clear state

**Signals:**

- `data()` - Response data
- `loading()` - Loading state
- `error()` - Error object
- `response()` - Full response

**Convenience Hooks:**

```typescript
useHttpGet(client, '/users');
useHttpPost(client, '/users', { body: data });
```

#### 10. **useFormular** - Form Management

```typescript
const form = useFormular({
  initialValues: {
    name: '',
    email: '',
    age: 0
  },
  validators: {
    email: 'required|email',
    age: 'required|min:18'
  },
  onSubmit: async (values) => {
    await api.post('/users', values)
  }
})

return (
  <form onSubmit={form.handleSubmit}>
    <input
      value={form.fields.name.value()}
      onInput={(e) => form.fields.name.setValue(e.target.value)}
    />
    {form.fields.name.error() && (
      <span class="error">{form.fields.name.error()}</span>
    )}
    <button type="submit" disabled={form.isSubmitting()}>
      Submit
    </button>
  </form>
)
```

**Form State:**

- `fields` - Nested object of field signals
- `isSubmitting()`, `isValid()`, `isDirty()`, `isTouched()`
- `error()`, `submitCount()`

**Methods:**

- `getValues()`, `setValues(partial)`
- `reset()`, `validate()`
- `handleSubmit(e)`, `submit()`
- `getField(path)` - Get field by path string

### Router Hooks

#### 11. **useRouter** - Router Instance

```typescript
const router = useRouter();
router.push('/users');
```

#### 12. **useNavigate** - Navigation Function

```typescript
const navigate = useNavigate();
navigate('/about');
```

#### 13. **useLocation** - Current Location

```typescript
const location = useLocation();
console.log(location.pathname, location.search, location.hash);
```

#### 14. **useParams** - Path Parameters

```typescript
const { id } = useParams<{ id: string }>();
// Route: /users/:id
```

#### 15. **useSearchParams** - Query String

```typescript
const [searchParams, setSearchParams] = useSearchParams();
console.log(searchParams.get('q'));
setSearchParams({ q: 'pulsar' });
```

### Lazy Loading Hooks

#### 16. **usePrefetchRoute** - Prefetch Routes

```typescript
const prefetch = usePrefetchRoute();
prefetch('/dashboard'); // Preload route
```

#### 17. **usePrefetchLink** - Prefetch on Hover

```typescript
const { onMouseEnter } = usePrefetchLink('/dashboard', {
  strategy: 'hover',
  delay: 100
})

<a href="/dashboard" onMouseEnter={onMouseEnter}>
  Dashboard
</a>
```

#### 18. **usePrefetchOnMount** - Prefetch After Mount

```typescript
usePrefetchOnMount(['/profile', '/settings'], {
  delay: 2000, // Wait 2s after mount
});
```

---

## Formular Architecture & Integration

### 1. Formular.dev Core Concepts

**formular.dev** is a **framework-agnostic form library** with:

- **Schema-first API** (inspired by Zod)
- **Type inference** from schemas
- **18+ built-in validators**
- **Multi-language support** (6 languages)
- **Country-specific validators** (phone, postal codes, SSN)
- **IoC container** (Dependency Injection)
- **Channel-based messaging** (pub-sub pattern)

#### Schema API

```typescript
import { createForm, f } from 'formular.dev';

// Define schema with full type inference
const userSchema = f.object({
  email: f.string().email().nonempty(),
  age: f.number().min(18).max(100),
  phone: f.string().phone('CH'), // Swiss phone format
  postalCode: f.string().postalCode('CH'), // Swiss postal code
});

// TypeScript infers: { email: string, age: number, phone: string, postalCode: string }
type User = f.infer<typeof userSchema>;

// Create form
const form = createForm({
  schema: userSchema,
  onSubmit: async (data) => {
    await api.post('/users', data); // data is fully typed!
  },
});
```

#### Field Lifecycle

Formular manages fields through specialized managers (all singletons with channel-based routing):

1. **NotificationManager** - Message bus with channel-based routing
2. **StyleManager** - Holds `className`, `classesList` state per field
3. **ValidationManager** - Holds validation state per field
4. **ValueManager** - Holds field value state
5. **TrackingManager** - Holds tracking state (touched, dirty, focused)

**Channel-Based Architecture:**

```typescript
// Each field subscribes to its own channel (field.id)
notificationManager.observers.subscribe('field-id', callback);

// Trigger field-specific updates
notificationManager.observers.trigger('field-id');

// Cross-field communication possible
field1.observers.subscribe(field2.id, () => {
  // React to field2 changes
});
```

### 2. Pulsar + Formular Integration

#### useFormular Hook (Pulsar Side)

Located in `packages/pulsar.dev/src/formular/`:

```typescript
// Signal-based form management
const form = useFormular<User>({
  initialValues: { name: '', email: '', age: 0 },
  validators: {
    email: 'required|email',
    age: 'required|min:18',
  },
  onSubmit: async (values) => {
    await api.post('/users', values);
  },
});

// Each field is a Pulsar signal
form.fields.name.value(); // Get value
form.fields.name.setValue('Bob'); // Set value
form.fields.name.error(); // Get error
form.fields.name.validate(); // Validate field

// Form-level signals
form.isSubmitting();
form.isValid();
form.isDirty();
```

**Implementation Details:**

- Wraps formular.dev field values in Pulsar signals
- Automatic validation on change/blur
- Batched updates for performance
- Full TypeScript support with generics
- No re-renders (signal-based updates only)

#### useSync Bridge (Core Pattern)

```typescript
// Bridge external reactive systems to Pulsar
const validationResults = useSync<IValidationResult[]>(
  (notify) => {
    return formularCreateEffect(() => {
      input._validationResults.get(); // Track formular signal
      notify(); // Notify Pulsar
    });
  },
  () => input._validationResults.get() // Snapshot
);

// Now reactive in Pulsar
{validationResults().map(result => <div>{result.message}</div>)}
```

#### useField Hook (pulsar-formular-ui)

Located in `packages/pulsar-formular-ui/src/hooks/useField.ts`:

```typescript
// Consolidated field hook - syncs ALL formular state to Pulsar
const field = formContext.getField('email')
const {
  value,           // Signal
  setValue,        // Setter
  hasErrors,       // Derived signal
  errors,          // Signal
  guides,          // Signal
  isValid,         // Signal
  isDirty,         // Signal
  isPristine,      // Signal
  isTouched,       // Signal
  isFocused,       // Signal
  isDisabled,      // Signal
  isRequired,      // Signal
  focus,           // Method
  blur,            // Method
  reset            // Method
} = useField(field)

return (
  <input
    value={value()}
    onInput={(e) => setValue(e.target.value)}
    disabled={isDisabled()}
    required={isRequired()}
  />
)
```

**Key Features:**

- ONE hook for ALL field state
- Uses `useSync` internally for formular signal bridging
- Reactive in Pulsar's system
- No manual subscription management

### 3. Integration Strategy for Showcase

**CRITICAL: NO Form Integration in Showcase!**

**For Showcase (pulsar-ui.dev):**

- **ONLY** showcase pure UI primitives (Input, Checkbox, Radio, etc.)
- **ONLY** demonstrate component APIs, variants, composition
- **NO** formular.dev integration examples
- **NO** form validation demos
- **NO** useFormular hook usage

**Why Learn About Formular Then?**

To understand:

1. **Ecosystem awareness** - Know what exists in the Pulsar ecosystem
2. **Design constraints** - Build primitives that COULD work with ANY form system (not just formular)
3. **Clear boundaries** - Avoid duplicating pulsar-formular-ui

**For Form-Specific Components (pulsar-formular-ui - SEPARATE PACKAGE):**

- FormProvider, FormField, FormLabel, FormError
- Integration with formular.dev's IoC container
- Submission strategies (DirectSubmissionStrategy, ContextSubmissionStrategy)
- useFormular hook integration

**Correct Showcase Example:**

```tsx
// ✅ CORRECT: Pure primitive demo, no form library
const InputDemo = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <h3>Input Component</h3>
      <Input value={value} onInput={(e) => setValue(e.target.value)} placeholder="Enter text" />
      <p>Current value: {value}</p>
    </div>
  );
};

// ❌ WRONG: Don't show formular integration in showcase
const LoginDemo = () => {
  const form = useFormular({
    /* ... */
  });
  return <form>...</form>;
};
```

**Design Principle: Form-System Agnostic**

Primitives should work with ANY form library:

```tsx
// Works with formular.dev (in pulsar-formular-ui)
<Input value={field.value()} onInput={(e) => field.setValue(e.target.value)} />

// Works with React Hook Form
<Input {...register('email')} />

// Works with vanilla state
<Input value={email} onInput={(e) => setEmail(e.target.value)} />
```

---

## Critical Patterns for Showcase

### 1. Reusable Patterns We Can Leverage

#### **Toggleable Pattern** (useToggleable)

- **Where to use:** Modal, Dropdown, Popover, Tooltip, Accordion, Drawer, Collapsible
- **Why:** Standardized open/close/idle state management
- **Example:**

```tsx
const Modal = ({ trigger, children }) => {
  const modal = useToggleable('closed');

  return (
    <>
      <div onClick={modal.open}>{trigger}</div>
      <Show when={modal.isOpen()}>
        <div class="modal-overlay" onClick={modal.close}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button onClick={modal.close}>Close</button>
          </div>
        </div>
      </Show>
    </>
  );
};
```

#### **Keyboard Navigation Pattern** (useKeyBindings)

- **Where to use:** Dropdown, Select, Combobox, Menu, Dialog, DatePicker
- **Why:** Consistent keyboard accessibility
- **Example:**

```tsx
const Dropdown = ({ options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dropdown = useToggleable('closed');

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

#### **Drawer Positioning Pattern** (useDrawerPosition)

- **Where to use:** Dropdown, Popover, Tooltip, ContextMenu
- **Why:** Viewport-aware positioning
- **Example:**

```tsx
const Popover = ({ trigger, content }) => {
  const popover = useToggleable();
  const triggerRef = useRef<HTMLElement>(null);

  const position = useDrawerPosition({
    triggerRef,
    isOpen: popover.isOpen,
    offset: { x: 0, y: 8 },
    preferredPosition: 'bottom',
    preferredAlignment: 'start',
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

### 2. Component Composition Patterns

#### **Compound Components** (with Context)

```tsx
// Modal.tsx
const ModalContext = createContext<IModalContext>();

export const Modal = ({ children }) => {
  const modal = useToggleable();

  return <ModalContext.Provider value={{ modal }}>{children}</ModalContext.Provider>;
};

Modal.Trigger = ({ children }) => {
  const { modal } = useContext(ModalContext);
  return <div onClick={modal.open}>{children}</div>;
};

Modal.Content = ({ children }) => {
  const { modal } = useContext(ModalContext);
  return (
    <Show when={modal.isOpen()}>
      <div class="modal-overlay" onClick={modal.close}>
        {children}
      </div>
    </Show>
  );
};

// Usage
<Modal>
  <Modal.Trigger>
    <Button>Open Modal</Button>
  </Modal.Trigger>
  <Modal.Content>
    <h2>Modal Content</h2>
  </Modal.Content>
</Modal>;
```

#### **Render Props Pattern**

```tsx
const Dropdown = ({ children, renderTrigger }) => {
  const dropdown = useToggleable();

  return (
    <div>
      {renderTrigger({ isOpen: dropdown.isOpen(), toggle: dropdown.toggle })}
      <Show when={dropdown.isOpen()}>{children}</Show>
    </div>
  );
};

// Usage
<Dropdown
  renderTrigger={({ isOpen, toggle }) => (
    <Button onClick={toggle}>{isOpen ? 'Close' : 'Open'}</Button>
  )}
>
  <DropdownContent />
</Dropdown>;
```

### 3. Performance Patterns

#### **Lazy Component Loading**

```tsx
import { lazy, Suspense } from 'pulsar'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

#### **Batched Updates**

```tsx
import { batch } from 'pulsar';

const updateMultiple = () => {
  batch(() => {
    setName('Bob');
    setAge(30);
    setEmail('bob@example.com');
  });
  // UI updates once, not three times
};
```

#### **Memoized Selectors**

```tsx
const filteredItems = useMemo(() => {
  return items().filter((item) => item.active);
}, [items]);
```

---

## Integration Strategy

### For Showcase Development

1. **Use Native Pulsar Hooks First**
   - ✅ useToggleable for open/close patterns
   - ✅ useKeyBindings for keyboard navigation
   - ✅ useMemo for expensive computations
   - ✅ useEffect for side effects

2. **Leverage Existing Utilities**
   - ✅ useDrawerPosition for popovers/dropdowns
   - ✅ ComponentConfigBuilder for styling variants
   - ✅ Design tokens for all styling

3. **Form Integration Pattern**
   - Use `useFormular` hook for form demos
   - Show how primitives work with forms
   - Avoid duplicating pulsar-formular-ui components
   - Link to pulsar-formular-ui for complex form needs

4. **Component Patterns to Follow**
   - Compound components for complex UIs (Modal, Dropdown)
   - Render props for flexible APIs
   - Context for shared state (avoid prop drilling)
   - Declarative TSX always (never imperative DOM)

5. **Performance Best Practices**
   - Use `For` with `key` for lists
   - Batch multiple state updates
   - Memoize expensive computations
   - Lazy load heavy components

### For Future Formular Integration

When form-specific components are needed:

1. **Use pulsar-formular-ui package** - Don't duplicate
2. **Bridge with useSync** - Connect formular signals to Pulsar
3. **Follow channel-based pattern** - Field-specific notifications
4. **Leverage useField hook** - Consolidated field state

---

## Key Takeaways

### ✅ What We Have

1. **Complete reactivity system** - Signals, effects, memos, batching
2. **Rich hooks ecosystem** - 18+ hooks covering most use cases
3. **Toggleable pattern** - Standardized for modals, dropdowns, etc.
4. **Keyboard navigation** - Declarative key bindings
5. **External state sync** - useSync for formular, Redux, etc.
6. **HTTP utilities** - useHttp for reactive data fetching
7. **Form integration** - useFormular hook bridges formular.dev
8. **Router hooks** - Full routing with lazy loading

### ⚠️ What to Avoid

1. **Duplicating pulsar-formular-ui** - Reference it instead
2. **Imperative DOM manipulation** - Always declarative TSX
3. **React patterns** - No synthetic events, use `value()` not `value`
4. **Creating custom hooks** - Check if Pulsar has it first
5. **Mixing with React** - Showcase is 100% Pulsar

### 🎯 What to Build

1. **Missing primitives** - Tooltip, Popover, Modal, Dropdown, etc.
2. **Layout components** - Stack, Grid, Container, Divider
3. **Feedback components** - Alert, Toast, Progress
4. **Data components** - Table, List, Pagination
5. **Navigation components** - Tabs, Breadcrumbs, Menu
6. **Showcase infrastructure** - Demo containers, code blocks, live editor

---

**Next Steps:** Update showcase-implementation.md and components-list.md with these patterns and integration strategies.
