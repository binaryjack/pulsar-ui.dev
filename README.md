# Atomos Prime

A design system built with Pulsar framework and TailwindCSS.

## Features

- 🎨 **Design Tokens**: Comprehensive color, spacing, typography, and shadow tokens
- 📏 **Size System**: Consistent sizing across all components (xs, sm, md, lg, xl)
- 🎭 **Variant System**: Multiple style variants (solid, outline, ghost, soft)
- �️ **Builder Pattern**: Fluent API for component configuration
- 🎯 **Type-Safe**: Full TypeScript support with strict typing
- ♿ **Accessible**: ARIA attributes and keyboard navigation built-in
- 🚀 **Pulsar-Based**: Built for the Pulsar framework (no React dependencies)
- 💅 **TailwindCSS**: Utility-first styling with custom configuration
- 📦 **One Item Per File**: Clean, maintainable architecture

## Installation

```bash
pnpm install
```

## Quick Start

### Builder Pattern Configuration

All components use a fluent builder pattern for configuration:

```typescript
import { ComponentConfig, Button } from '@atomos/prime'

// Create a configuration
const config = new ComponentConfig('primary')  // Start with color
  .variant('solid')                             // Set variant
  .size('lg')                                   // Set size
  .rounded('md')                                // Border radius
  .shadow('lg')                                 // Shadow
  .fullWidth()                                  // Full width
  .build()                                      // Build final config

// Use configuration with component
const myButton = Button({
  config,
  label: 'Click Me',
  onclick: () => console.log('Clicked!')
})
```

### Components

#### Button

```typescript
import { Button, PrimaryButton, ComponentConfig } from '@atomos/prime'

// Using custom configuration
const config = new ComponentConfig('primary')
  .size('md')
  .rounded('lg')
  .build()

const myButton = Button({
  config,
  label: 'Save Changes',
  icon: '<svg>...</svg>',
  onclick: () => console.log('Saving...')
})

// Using factory variants
const primary = PrimaryButton({ 
  label: 'Primary Action',
  onclick: () => {}
})

const danger = DangerButton({ 
  label: 'Delete',
  onclick: () => {}
})
```

**Props**: Extends `Pulsar.HtmlExtends<'button'>`
- `config?: IComponentConfig` - Component configuration (built with ComponentConfig)
- `label?: string` - Button text
- `icon?: HTMLElement | string` - Icon element or HTML string
- `iconPosition?: 'left' | 'right'` - Icon position
- `iconOnly?: boolean` - Icon-only mode
- `loading?: boolean` - Loading state
- `ripple?: boolean` - Ripple effect on click
- All standard HTML button attributes via `...rest`

#### Input

```typescript
import { Input, ComponentConfig } from '@atomos/prime'

const config = new ComponentConfig('primary')
  .size('md')
  .fullWidth()
  .build()

const emailInput = Input({
  config,
  type: 'email',
  placeholder: 'your@email.com',
  required: true,
  oninput: (e) => console.log(e.target.value)
})

// With error state
const errorInput = Input({
  type: 'password',
  error: true,
  errorMessage: 'Password is required',
  required: true
})

// With prefix/suffix
const priceInput = Input({
  type: 'number',
  prefix: '$',
  suffix: 'USD',
  placeholder: '0.00'
})
```

**Props**: Extends `Pulsar.HtmlExtends<'input'>`
- `config?: IComponentConfig` - Component configuration
- `type?: InputType` - Input type (text, email, password, etc.)
- `error?: boolean` - Error state
- `errorMessage?: string` - Error message to display
- `prefix?: string | HTMLElement` - Prefix element
- `suffix?: string | HTMLElement` - Suffix element
- All standard HTML input attributes via `...rest`

### ComponentConfig Builder Methods

```typescript
new ComponentConfig(color)      // Constructor: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
  .variant(value)                // 'solid' | 'outline' | 'ghost' | 'soft'
  .size(value)                   // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  .rounded(value)                // 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  .shadow(value)                 // 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  .border(boolean)               // Enable/disable border
  .disabled(boolean)             // Disabled state
  .loading(boolean)              // Loading state
  .fullWidth(boolean)            // Full width
  .transition(boolean)           // Enable transitions
  .transitionDuration(value)     // 'fast' | 'normal' | 'slow'
  .hover(boolean)                // Enable hover effects
  .focus(boolean)                // Enable focus effects
  .active(boolean)               // Enable active effects
  .className(string)             // Additional CSS classes
  .build()                       // Returns IComponentConfig
```

## Design System

### Tokens

- **Colors**: primary, secondary, success, warning, error, neutral (50-950 shades)
- **Spacing**: xs, sm, md, lg, xl, 2xl, 3xl, 4xl
- **Typography**: Font families, sizes, weights, line heights
- **Shadows**: none, sm, md, lg, xl, 2xl, inner
- **Borders**: Radius tokens for consistent rounded corners
- **Transitions**: Duration and timing functions

### Architecture Principles

1. **One Item Per File**: Each type, enum, interface in separate file
2. **Prototype-Based Classes**: No ES6 classes, function constructors only
3. **Builder Pattern**: Fluent API for configuration
4. **Type Safety**: No `any` types, full type coverage
5. **Pulsar.HtmlExtends**: Type-safe HTML element props extension
6. **Declarative TSX**: Components return JSX syntax

## Advanced Usage

See [EXAMPLES.ts](./EXAMPLES.ts) for comprehensive usage examples including:
- Custom configurations
- Form compositions
- Error handling
- Loading states
- Icon buttons
- Responsive designs

## Development

```bash
# Build
pnpm build

# Watch mode
pnpm dev
```

## License

MIT
