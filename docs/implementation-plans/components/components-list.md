# Pulsar UI - Component Library Inventory

**Last Updated:** 2026-01-28  
**Status:** Planning Phase  
**Target:** Comprehensive primitive component library

📚 **See Also:** [Pulsar & Formular Knowledge Base](./PULSAR-AND-FORMULAR-KNOWLEDGE.md) for patterns and hooks

---

## Philosophy

**Pulsar UI** focuses on **primitive, composable components** that serve as building blocks for higher-level UI patterns. We avoid duplication with `pulsar-formular-ui` (form-specific components) and leverage `@pulsar/design-tokens` for consistent styling.

### Key Principles

1. **Primitives First** - Focus on atomic, reusable building blocks
2. **Framework Native** - Built with Pulsar, for Pulsar (no React dependencies)
3. **Design Token Driven** - All styling derived from `@pulsar/design-tokens`
4. **Composition Over Configuration** - Simple components that compose well
5. **DRY** - No duplication with `pulsar-formular-ui`
6. **Leverage Native Hooks** - Use useToggleable, useKeyBindings, useDrawerPosition, etc.

---

## 🧰 Reusable Patterns (Use These!)

Before implementing components, leverage Pulsar's built-in hooks:

### State Management Patterns

- **useToggleable** → For components with open/close/idle states (Modal, Dropdown, Accordion, Tooltip, etc.)
- **useState** → For simple reactive state
- **useReducer** → For complex state machines

### Interaction Patterns

- **useKeyBindings** → For keyboard navigation (Dropdown, Dialog, Menu, DatePicker)
- **useDrawerPosition** → For viewport-aware positioning (Popover, Dropdown, Tooltip)
- **useRef** → For DOM element references

### Data Patterns

- **useHttp** → For data fetching with loading/error states
- **useMemo** → For expensive computations

**Rule:** Always check if Pulsar provides the pattern before creating custom solutions!

**⚠️ Note on Forms:** This showcase does NOT demonstrate form integration. Primitives should be designed to work with ANY form system (form-agnostic). For formular.dev integration, see **pulsar-formular-ui** package.

---

## Component Categories

### ✅ Already Implemented

#### Atoms (9 components)

- ✅ **Checkbox** - Boolean selection primitive
- ✅ **Icon** - SVG icon wrapper (uses design-system art-kit)
- ✅ **Input** - Text input primitive
- ✅ **Radio** - Single selection primitive
- ✅ **Skeleton** - Loading placeholder
- ✅ **Spinner** - Loading indicator
- ✅ **Textarea** - Multi-line text input
- ✅ **Toggle** - Switch/toggle primitive
- ✅ **Typography** - Text rendering with variants

#### Molecules (5 components)

- ✅ **Badge** - Status/label indicator
- ✅ **Button** - Interactive action trigger
- ✅ **Label** - Form field label
- ✅ **Option** - Select option primitive
- ✅ **RadioGroup** - Radio button group

#### Organisms (8 components)

- ✅ **Card** - Content container
- ✅ **Commands** - Command palette
- ✅ **DatePicker** - Date selection (converted to Pulsar)
- ✅ **Footer** - Page footer
- ✅ **Header** - Page header
- ✅ **RetractablePanel** - Collapsible side panel
- ✅ **Select** - Dropdown selection
- ✅ **Stepper** - Multi-step form (React - needs conversion)

---

## 🎯 Missing Primitives (To Implement)

### Priority 1: Core Interactions

#### **Tooltip**

- **Category:** Atom
- **Purpose:** Contextual help text on hover/focus
- **Hooks to Use:** `useToggleable` (hover state), `useDrawerPosition` (placement)
- **API:**
  ```tsx
  <Tooltip content="Help text" placement="top" delay={200}>
    <Button>Hover me</Button>
  </Tooltip>
  ```
- **Implementation Pattern:**
  ```tsx
  const Tooltip = ({ content, children, placement, delay = 200 }) => {
    const tooltip = useToggleable('closed');
    const triggerRef = useRef(null);
    const position = useDrawerPosition({
      triggerRef,
      isOpen: tooltip.isOpen,
      offset: { x: 0, y: 4 },
    });

    return (
      <>
        <div ref={triggerRef} onMouseEnter={tooltip.open} onMouseLeave={tooltip.close}>
          {children}
        </div>
        <Show when={tooltip.isOpen()}>
          <div style={position()} role="tooltip">
            {content}
          </div>
        </Show>
      </>
    );
  };
  ```
- **Features:**
  - Configurable placement (top, bottom, left, right)
  - Arrow indicator
  - Delay control
  - Accessibility (ARIA roles)

#### **Popover**

- **Category:** Molecule
- **Purpose:** Floating content container (more complex than tooltip)
- **Hooks to Use:** `useToggleable` (click state), `useDrawerPosition` (placement), Portal
- **API:**
  ```tsx
  <Popover trigger={<Button>Open</Button>} placement="bottom">
    <PopoverContent>Complex content here</PopoverContent>
  </Popover>
  ```
- **Implementation Pattern:**
  ```tsx
  const Popover = ({ trigger, children, placement }) => {
    const popover = useToggleable();
    const triggerRef = useRef(null);
    const position = useDrawerPosition({ triggerRef, isOpen: popover.isOpen });

    return (
      <>
        <div ref={triggerRef} onClick={popover.toggle}>
          {trigger}
        </div>
        <Show when={popover.isOpen()}>
          <Portal>
            <div style={position()}>{children}</div>
          </Portal>
        </Show>
      </>
    );
  };
  ```
- **Features:**
  - Click or hover trigger
  - Portal rendering
  - Focus management
  - Click-outside handling

#### **Dropdown**

- **Category:** Molecule
- **Purpose:** Menu/action list (different from Select - no form integration)
- **Hooks to Use:** `useToggleable` (open state), `useKeyBindings` (navigation), `useDrawerPosition` (placement)
- **API:**
  ```tsx
  <Dropdown trigger={<Button>Menu</Button>}>
    <DropdownItem onClick={...}>Action 1</DropdownItem>
    <DropdownItem onClick={...}>Action 2</DropdownItem>
  </Dropdown>
  ```
- **Implementation Pattern:**
  ```tsx
  const Dropdown = ({ trigger, children }) => {
    const dropdown = useToggleable();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleKeyDown = useKeyBindings({
      onEscape: dropdown.close,
      onArrowDown: () => setSelectedIndex((i) => i + 1),
      onArrowUp: () => setSelectedIndex((i) => Math.max(i - 1, 0)),
      onEnter: () => selectItem(),
    });

    return (
      <div onKeyDown={handleKeyDown}>
        <div onClick={dropdown.toggle}>{trigger}</div>
        <Show when={dropdown.isOpen()}>{children}</Show>
      </div>
    );
  };
  ```
- **Features:**
  - Keyboard navigation
  - Nested menus
  - Dividers
  - Icons

#### **Modal/Dialog**

- **Category:** Organism
- **Purpose:** Overlay dialog box
- **API:**
  ```tsx
  <Modal isOpen={isOpen()} onClose={close}>
    <ModalHeader>Title</ModalHeader>
    <ModalBody>Content</ModalBody>
    <ModalFooter>
      <Button onClick={close}>Cancel</Button>
      <Button onClick={confirm}>Confirm</Button>
    </ModalFooter>
  </Modal>
  ```
- **Features:**
  - Portal rendering
  - Backdrop
  - Focus trap
  - ESC to close
  - Scroll lock

---

### Priority 2: Layout & Structure

#### **Divider**

- **Category:** Atom
- **Purpose:** Visual separator
- **API:**
  ```tsx
  <Divider orientation="horizontal" />
  <Divider orientation="vertical" />
  ```

#### **Stack** (VStack/HStack)

- **Category:** Atom
- **Purpose:** Flexbox layout helper
- **API:**
  ```tsx
  <VStack spacing="md" align="center">
    <div>Item 1</div>
    <div>Item 2</div>
  </VStack>
  ```

#### **Grid**

- **Category:** Atom
- **Purpose:** CSS Grid layout helper
- **API:**
  ```tsx
  <Grid columns={3} gap="md">
    <div>Cell 1</div>
    <div>Cell 2</div>
    <div>Cell 3</div>
  </Grid>
  ```

#### **Container**

- **Category:** Atom
- **Purpose:** Responsive max-width container
- **API:**
  ```tsx
  <Container maxWidth="lg" padding="md">
    Content
  </Container>
  ```

---

### Priority 3: Feedback & Status

#### **Alert**

- **Category:** Molecule
- **Purpose:** Notification/message display
- **API:**
  ```tsx
  <Alert variant="success" closable onClose={...}>
    <AlertIcon />
    <AlertTitle>Success!</AlertTitle>
    <AlertDescription>Operation completed</AlertDescription>
  </Alert>
  ```
- **Variants:** success, warning, error, info

#### **Toast**

- **Category:** Organism
- **Purpose:** Temporary notification (auto-dismiss)
- **API:**
  ```tsx
  // Via composable hook
  const toast = useToast();
  toast.success('Saved!', { duration: 3000 });
  ```
- **Features:**
  - Position control (top-right, bottom-left, etc.)
  - Auto-dismiss
  - Queue management
  - Action buttons

#### **Progress**

- **Category:** Atom
- **Purpose:** Linear progress indicator
- **API:**
  ```tsx
  <Progress value={50} max={100} />
  <Progress indeterminate /> {/* Loading spinner */}
  ```

#### **ProgressCircular**

- **Category:** Atom
- **Purpose:** Circular progress indicator
- **API:**
  ```tsx
  <ProgressCircular value={75} size="lg" />
  ```

---

### Priority 4: Data Display

#### **Table**

- **Category:** Organism
- **Purpose:** Tabular data display (primitive, not DataGrid)
- **API:**
  ```tsx
  <Table>
    <TableHead>
      <TableRow>
        <TableHeader>Name</TableHeader>
        <TableHeader>Value</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Item 1</TableCell>
        <TableCell>100</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  ```
- **Features:**
  - Striped rows
  - Hover states
  - Compact/comfortable density

#### **List**

- **Category:** Molecule
- **Purpose:** Styled list display
- **API:**
  ```tsx
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
  </List>
  ```
- **Variants:** unordered, ordered, unstyled

#### **Avatar**

- **Category:** Atom
- **Purpose:** User profile image/initials
- **API:**
  ```tsx
  <Avatar src="/user.jpg" alt="John Doe" size="md" />
  <Avatar fallback="JD" size="md" />
  ```

#### **AvatarGroup**

- **Category:** Molecule
- **Purpose:** Multiple overlapping avatars
- **API:**
  ```tsx
  <AvatarGroup max={3}>
    <Avatar src="/user1.jpg" />
    <Avatar src="/user2.jpg" />
    <Avatar src="/user3.jpg" />
  </AvatarGroup>
  ```

---

### Priority 5: Navigation

#### **Tabs**

- **Category:** Molecule
- **Purpose:** Tabbed navigation/content switching
- **API:**
  ```tsx
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content 1</TabsContent>
    <TabsContent value="tab2">Content 2</TabsContent>
  </Tabs>
  ```

#### **Breadcrumbs**

- **Category:** Molecule
- **Purpose:** Hierarchical navigation
- **API:**
  ```tsx
  <Breadcrumbs>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/products">Products</BreadcrumbItem>
    <BreadcrumbItem current>Item</BreadcrumbItem>
  </Breadcrumbs>
  ```

#### **Pagination**

- **Category:** Molecule
- **Purpose:** Page navigation
- **API:**
  ```tsx
  <Pagination currentPage={currentPage()} totalPages={10} onPageChange={setPage} />
  ```

#### **Menu**

- **Category:** Molecule
- **Purpose:** Navigation menu (horizontal/vertical)
- **API:**
  ```tsx
  <Menu orientation="vertical">
    <MenuItem href="/home">Home</MenuItem>
    <MenuItem href="/about">About</MenuItem>
    <MenuSubmenu label="Products">
      <MenuItem href="/products/1">Product 1</MenuItem>
    </MenuSubmenu>
  </Menu>
  ```

---

### Priority 6: Advanced Primitives

#### **Accordion**

- **Category:** Molecule
- **Purpose:** Collapsible content sections
- **API:**
  ```tsx
  <Accordion>
    <AccordionItem>
      <AccordionTrigger>Section 1</AccordionTrigger>
      <AccordionContent>Content 1</AccordionContent>
    </AccordionItem>
  </Accordion>
  ```

#### **Drawer**

- **Category:** Organism
- **Purpose:** Side panel overlay (similar to Modal but from edge)
- **API:**
  ```tsx
  <Drawer isOpen={isOpen()} onClose={close} placement="right">
    <DrawerHeader>Title</DrawerHeader>
    <DrawerBody>Content</DrawerBody>
  </Drawer>
  ```

#### **Slider**

- **Category:** Atom
- **Purpose:** Range input control
- **API:**
  ```tsx
  <Slider value={value()} onChange={setValue} min={0} max={100} />
  ```

#### **Switch**

- **Category:** Atom (similar to Toggle but distinct API)
- **Purpose:** Binary on/off control
- **Note:** May consolidate with Toggle if APIs align

---

## 🚫 Components NOT Included (Handled by pulsar-formular-ui)

These are **form-specific** components handled by `pulsar-formular-ui`:

- ❌ **Form** - Form wrapper with validation context
- ❌ **FormField** - Field wrapper with label/error/helper
- ❌ **FInputField** - Integrated input with form context
- ❌ **FCheckboxField** - Integrated checkbox with form context
- ❌ **FTextareaField** - Integrated textarea with form context
- ❌ **FSelectField** - Integrated select with form context
- ❌ **FRadioButton** - Integrated radio with form context
- ❌ **FToggleField** - Integrated toggle with form context
- ❌ **ValidationResults** - Validation error display
- ❌ **HelperText** - Field helper text
- ❌ **FieldLabel** - Field label (though we have primitive Label)

**Rationale:** These components integrate with FORMULAR's reactive form state, validation, and context. Pulsar UI provides the **primitives** (Input, Checkbox, etc.) that these components **wrap**.

---

## Component Count Summary

| Category      | Implemented | To Implement | Total  |
| ------------- | ----------- | ------------ | ------ |
| **Atoms**     | 9           | 10           | 19     |
| **Molecules** | 5           | 10           | 15     |
| **Organisms** | 8           | 3            | 11     |
| **TOTAL**     | **22**      | **23**       | **45** |

---

## Implementation Order

### Phase 1: Core Interactions (Week 1-2)

1. Tooltip
2. Popover
3. Dropdown
4. Modal/Dialog

### Phase 2: Layout & Feedback (Week 3-4)

5. Stack (VStack/HStack)
6. Grid
7. Container
8. Divider
9. Alert
10. Toast
11. Progress
12. ProgressCircular

### Phase 3: Data & Navigation (Week 5-6)

13. Table
14. List
15. Avatar
16. AvatarGroup
17. Tabs
18. Breadcrumbs
19. Pagination
20. Menu

### Phase 4: Advanced (Week 7-8)

21. Accordion
22. Drawer
23. Slider

---

## Design System Integration

All components use `@pulsar/design-tokens`:

```typescript
import {
  colorTokens,
  spacingTokens,
  typographyTokens,
  shadowTokens,
  borderRadiusTokens,
  transitionTokens,
} from '@pulsar/design-tokens';
```

### Component Styling Pattern

```typescript
// Use ComponentConfigBuilder for variant management
import { ComponentConfigBuilder } from '../utils/component-config-builder'

const defaultConfig = new ComponentConfigBuilder('primary')
  .size('md')
  .rounded('md')
  .shadow('sm')
  .build()

export const MyComponent = ({ config = defaultConfig, ...props }) => {
  // Component implementation using design tokens
  return <div className={buildStyles(config)}>...</div>
}
```

---

## Next Steps

1. ✅ Remove Storybook dependencies
2. ✅ Create showcase implementation plan (see `showcase-implementation.md`)
3. ⏳ Implement Priority 1 components (Tooltip, Popover, Dropdown, Modal)
4. ⏳ Build custom Pulsar-based showcase app
5. ⏳ Continue with Priority 2-4 components

---

**References:**

- [Copilot Implementation Rules](../../copilot-implementation-rules.md)
- [Root Implementation Rules](../../../../../copiot-implementation-rules.md)
- [@pulsar/design-tokens](../../../../pulsar-design-system/README.md)
- [pulsar-formular-ui](../../../../pulsar-formular-ui/)
