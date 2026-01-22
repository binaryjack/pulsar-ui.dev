# Atomic Component Implementation Pattern

This document defines the **canonical pattern** for implementing atomic components in the Atomos Prime design system.

## Reference Implementation: Input Component

The Input component serves as the gold standard for all atomic component implementations.

## Core Principles

### 1. External Constants (Compiled Once)
All configuration and styling defaults **MUST** be defined outside the component function to ensure they are compiled once, not on every render.

```tsx
// ✅ CORRECT - External constants
const inputDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('md').build()
const inputDefaultStyling = new ComponentStylingBuilder()
  .base('block border font-medium focus:outline-none')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .background('bg-white text-neutral-900')
  .readOnly('bg-neutral-50 cursor-default')
  .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
  .build()
```

```tsx
// ❌ WRONG - Inline data in component
export const Input = ({ config, ...rest }: IInputProps) => {
  const defaultConfig = { variant: 'primary', size: 'md' } // ❌ Created on every render
  const finalConfig = config || defaultConfig
  // ...
}
```

### 2. Ternary Operator in Return
Use ternary operators directly in the return statement for conditional rendering. No if-statements before return.

```tsx
// ✅ CORRECT - Ternary in return
export const Input = ({
  config = inputDefaultConfig,
  styling = inputDefaultStyling,
  ...rest
}: IInputProps): HTMLElement => 
  config.loading ?
    <Skeleton width={config.fullWidth ? 'w-full' : 'w-64'} height="h-10" rounded={config.rounded} /> :
    <input
      type={type}
      className={cn(/* ... */)}
      {...rest}
    />
```

```tsx
// ❌ WRONG - If-statement before return
export const Input = ({ config, ...rest }: IInputProps) => {
  if (config.loading) {
    return <Skeleton />
  }
  return <input />
}
```

### 3. No Inline Logic in className
All conditional styling logic **MUST** use external constants or builder methods. No inline mapping or conditionals.

```tsx
// ✅ CORRECT - External size classes
const inputSizeClasses: Record<ComponentSize, string> = {
  xs: 'px-2 py-1 text-xs h-7',
  md: 'px-3 py-2 text-base h-10',
  // ...
}

// Usage in component
className={cn(
  styling.base,
  config.size ? inputSizeClasses[config.size] : '',
  config.disabled ? styling.disabled : styling.background
)}
```

```tsx
// ❌ WRONG - Inline conditionals
className={cn(
  'block border',
  config.rounded === 'sm' ? 'rounded-sm' : '', // ❌ Inline mapping
  config.rounded === 'md' ? 'rounded-md' : '', // ❌ Repeated logic
  config.disabled ? 'bg-neutral-100 cursor-not-allowed' : 'bg-white' // ❌ Inline styles
)}
```

### 4. Single Element Output (Atomic)
Atomic components **MUST** return exactly ONE HTML element. No wrapper divs, no complex structures.

```tsx
// ✅ CORRECT - Single element
export const Input = (props: IInputProps): HTMLElement => 
  config.loading ?
    <Skeleton /> : // Single element
    <input {...props} /> // Single element

// ❌ WRONG - Multiple elements or wrappers
export const Input = (props: IInputProps): HTMLElement => 
  <div> {/* ❌ Wrapper div */}
    <label>Input</label> {/* ❌ Additional element */}
    <input {...props} />
  </div>
```

### 5. ComponentConfigBuilder & ComponentStylingBuilder
Every component **MUST** accept both `config` and `styling` props using the builder pattern.

```tsx
export interface IInputProps extends Pulsar.HtmlExtends<'input'> {
  readonly config?: IComponentConfig     // ✅ Configuration (size, variant, states)
  readonly styling?: IComponentStyling   // ✅ Styling (classes for states)
  // ... other props
}
```

### 6. Pulsar.HtmlExtends for Type Safety
All components **MUST** extend `Pulsar.HtmlExtends<'element'>` to provide native HTML attributes via rest props.

```tsx
// ✅ CORRECT
export interface IInputProps extends Pulsar.HtmlExtends<'input'> {
  readonly config?: IComponentConfig
  readonly value?: string | number
}

// ❌ WRONG - Missing HTML attributes
export interface IInputProps {
  readonly config?: IComponentConfig
  // ❌ No way to pass id, className, onClick, etc.
}
```

### 7. Loading State with Skeleton
Components with `config.loading` **MUST** use the Skeleton component, not custom loading UI.

```tsx
// ✅ CORRECT
config.loading ?
  <Skeleton width={config.fullWidth ? 'w-full' : 'w-64'} height="h-10" rounded={config.rounded} /> :
  <input {...props} />

// ❌ WRONG - Custom loading div
config.loading ?
  <div className="animate-pulse bg-gray-200" /> : // ❌ Custom implementation
  <input {...props} />
```

## Complete Example: Input Component

```tsx
/**
 * Input component implementation
 * Framework: Pulsar
 */

import { cn, inputSizeClasses, roundedClasses } from '../../../design/utility'
import { ComponentConfigBuilder } from '../../utils/component-config-builder/component-config-builder'
import { ComponentStylingBuilder } from '../../utils/component-styling-builder/component-styling-builder'
import { Skeleton } from '../skeleton'
import { type IInputProps } from './input.type'

// External to the component so it's compiled ONCE!
const inputDefaultConfig = new ComponentConfigBuilder('primary').size('md').rounded('md').build()

// External to the component so it's compiled ONCE!
const inputDefaultStyling = new ComponentStylingBuilder()
  .base('block border font-medium focus:outline-none')
  .transition('transition-colors duration-200')
  .border('border-neutral-300')
  .focus('focus:ring-2 focus:ring-primary-500 focus:border-primary-600')
  .background('bg-white text-neutral-900')
  .readOnly('bg-neutral-50 cursor-default')
  .disabled('bg-neutral-100 text-neutral-500 cursor-not-allowed')
  .build()

/**
 * Input component
 * Creates an accessible text input - atomic component (single element output)
 */
export const Input = ({
  config = inputDefaultConfig,
  styling = inputDefaultStyling,
  type = 'text',
  value,
  defaultValue,
  ...rest
}: IInputProps): HTMLElement => 
  config.loading ?
    <Skeleton width={config.fullWidth ? 'w-full' : 'w-64'} height="h-10" rounded={config.rounded} /> :
    <input
      type={type}
      className={cn(
        styling.base,
        styling.transition,
        styling.border,
        styling.focus,
        config.size ? inputSizeClasses[config.size] : '',
        config.disabled ? styling.disabled : 'readOnly' in rest && rest.readOnly ? styling.readOnly : styling.background,
        config.rounded ? roundedClasses[config.rounded] : '',
        config.fullWidth ? 'w-full' : '',
        config.className,
        styling.custom
      )}
      value={value}
      defaultValue={defaultValue}
      disabled={config.disabled}
      ariaBusy={config.loading ? 'true' : 'false'}
      {...rest}
    />
```

### Type Definition

```typescript
import type { Pulsar } from 'pulsar'
import { type InputType } from '../../enums/input-type.type'
import { type IComponentConfig } from '../../utils/component-config-builder/component-config.type'
import { type IComponentStyling } from '../../utils/component-styling-builder/component-styling.type'

export interface IInputProps extends Omit<Pulsar.HtmlExtends<'input'>, 'value' | 'defaultValue'> {
  // Component configuration
  readonly config?: IComponentConfig
  
  // Component styling
  readonly styling?: IComponentStyling
  
  // Input type
  readonly type?: InputType
  
  // Input value (string or number to match HTMLInputElement)
  readonly value?: string | number
  readonly defaultValue?: string | number
}
```

## Common Violations to Avoid

### ❌ Violation 1: Complex Props Instead of Simple Atoms
```tsx
// ❌ WRONG - prefix/suffix make it a molecule
export interface IInputProps {
  readonly prefix?: HTMLElement
  readonly suffix?: HTMLElement
}
```
**Solution**: Atoms are single elements. Prefix/suffix belong in molecule components.

### ❌ Violation 2: Inline Variant Mapping
```tsx
// ❌ WRONG
const variantMap = {
  solid: solidVariants,
  outline: outlineVariants
}
const variantStyles = variantMap[config.variant][config.color]
```
**Solution**: Use ComponentStylingBuilder with predefined styles.

### ❌ Violation 3: Inline Rounded/Shadow Classes
```tsx
// ❌ WRONG
config.rounded === 'sm' ? 'rounded-sm' : '',
config.rounded === 'md' ? 'rounded-md' : '',
config.shadow === 'sm' ? 'shadow-sm' : ''
```
**Solution**: Use external `roundedClasses` and `shadowClasses` constants.

### ❌ Violation 4: Complex Event Handlers
```tsx
// ❌ WRONG - Creating ripple effect in atomic component
const handleClick = (e) => {
  createRippleEffect(e)
  rest.onClick?.()
}
```
**Solution**: Ripple effects belong in molecule/organism components. Atoms are simple.

### ❌ Violation 5: Multiple Elements
```tsx
// ❌ WRONG - Wrapping in extra elements
return (
  <div>
    <label>{label}</label>
    <input />
  </div>
)
```
**Solution**: Atoms return a single element. Label+Input is a molecule.

## Checklist for New Components

- [ ] External `defaultConfig` and `defaultStyling` constants
- [ ] Ternary operator in return statement (loading ? Skeleton : element)
- [ ] Single element output (no wrappers)
- [ ] Props extend `Pulsar.HtmlExtends<'element'>`
- [ ] Accept `config?: IComponentConfig` and `styling?: IComponentStyling`
- [ ] Use external size/rounded/shadow class mappings
- [ ] No inline logic in className (use external constants)
- [ ] Skeleton component for loading state
- [ ] No complex features (ripple, icons, labels) - keep it atomic

## When to Use Molecules Instead

If your component needs any of these, it's a **molecule**, not an atom:
- Multiple HTML elements (label + input, icon + text)
- Wrapper elements for layout
- Complex interactions (ripple effects, animations)
- Composition of other components
- Prefix/suffix/adornments

**Atoms are simple, single-element building blocks. Molecules combine atoms into more complex UI.**
