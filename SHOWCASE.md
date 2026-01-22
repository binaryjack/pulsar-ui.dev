# Atomos Prime Component Showcase

## Overview

Two ways to explore the Atomos Prime design system components:

### 1. Interactive HTML Showcase (✅ Ready to Use)

A live interactive page showcasing all components with Pulsar JSX rendering.

**Start the showcase:**
```bash
cd packages/atomos-prime.dev
# Open showcase.html in your browser or use a dev server
```

**Features:**
- ✅ All atoms, molecules, and organisms displayed
- ✅ Live Pulsar JSX rendering
- ✅ Organized by component type
- ✅ Interactive examples
- ✅ Works immediately with no build step

### 2. Storybook (⚠️ Configuration Issues)

Storybook has been partially configured but is experiencing pnpm workspace module resolution issues.

**Files created:**
- `.storybook/main.ts` - Storybook configuration
- `.storybook/preview.ts` - Global preview settings
- `src/stories/` - Component stories (Button, Input, Badge, Card)
- `src/stories/Introduction.mdx` - Documentation

**To attempt running Storybook:**
```bash
pnpm --filter=@atomos/prime storybook
```

**Known Issues:**
- Module resolution conflicts with pnpm workspace
- Vite 7 compatibility (Storybook expects Vite 4-6)
- Requires additional troubleshooting for monorepo setup

## Recommended Approach

**Use the HTML Showcase** (`showcase.html`) for immediate component exploration.

The showcase demonstrates:

### Atoms
- **Buttons**: Primary, Secondary, Success, Error, Disabled, Loading states
- **Inputs**: Text, Password, Disabled states
- **Typography**: H1-H6, Body, Caption variants
- **Checkbox & Radio**: Basic form inputs

### Molecules  
- **Badges**: Primary, Success, Error, Warning with dot indicators
- **Labels**: With required indicator, helper text, error messages
- **Radio Groups**: Horizontal/vertical options

### Organisms
- **Card**: With header, body, footer sections
- **Select**: Native dropdown with placeholder
- **Header**: Logo, navigation, actions layout
- **Footer**: Copyright, links sections

## Architecture

All components follow the strict Atomos Prime pattern:

```typescript
// External constants (compiled once)
const defaultConfig = new ComponentConfigBuilder('primary').build()
const defaultStyling = new ComponentStylingBuilder().base('...').build()

// Component function
export const Component = ({
  config = defaultConfig,
  styling = defaultStyling,
  ...props
}) =>
  config.loading ?
    <Skeleton /> :
    <element className={cn(styling.base, config.className)} />
```

### Key Principles
- ✅ External constants for defaults
- ✅ No inline logic in className
- ✅ Ternary operators in return statements
- ✅ ComponentConfigBuilder for configuration
- ✅ ComponentStylingBuilder for styling
- ✅ Skeleton components for loading states
- ✅ Type safety with Pulsar.HtmlExtends

## Future Enhancements

To fully enable Storybook:
1. Resolve pnpm workspace module resolution
2. Update Vite compatibility or use Vite 6
3. Add more story variants
4. Create interactive controls for all component props

## Quick Start

```bash
# Build the component library
pnpm --filter=@atomos/prime build

# View the showcase (open in browser)
open packages/atomos-prime.dev/showcase.html

# Or use a local server
cd packages/atomos-prime.dev
python -m http.server 8000
# Visit http://localhost:8000/showcase.html
```

## Component Documentation

See `IMPLEMENTATION_PATTERN.md` for detailed architectural guidelines and the Input component as the canonical reference implementation.
