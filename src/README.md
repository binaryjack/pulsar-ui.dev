# Synetics UI - Source Structure

## 📁 Clean Directory Structure

```
src/
├── main.ts                 # Entry point - bootstraps Synetics app
├── main.syn                # Main App component with basic feature tests
├── index.ts                # Module exports
├── types.ts                # Type definitions
├── components/             # Production UI components
├── showcase/               # Component showcase/documentation
├── design/                 # Design system files
├── styles/                 # CSS styles
├── types/                  # TypeScript type definitions
└── lab/                    # 🧪 Experimental & Test Files
    ├── feature-tests.syn   # Comprehensive feature test suite
    ├── test-*.syn          # Individual test files (35+ files)
    ├── main-*.ts/psr       # Alternative entry points
    ├── debug-tests/        # Debug test directory
    ├── tests/              # Test suite directory
    └── showcase-*/         # Experimental showcase variants
```

## 🎯 Current Status

### ✅ Working Features

- **Props passing**: Components correctly receive destructured props objects
- **createSignal()**: Basic reactivity working
- **Event handlers**: onClick events trigger correctly
- **Signal interpolation**: `{signal()}` syntax working (⚠️ `$(signal)` has issues, use function call)
- **Console logging**: Debug output functional

### ⚠️ Known Issues

- **$(signal) syntax**: Currently causes "signal is not defined" runtime error
  - **Workaround**: Use `{signal()}` instead of `$(signal)`
  - **Status**: Transformer bug - see `docs/bugs/signal-binding-syntax-issue.md`
  - **Impact**: Low - functional workaround exists

### 🧪 Feature Test Suite

Located in `lab/feature-tests.syn`, this file systematically tests:

1. **Basic Component Rendering** - Props and JSX
2. **createSignal** - Reactive state
3. **createEffect** - Side effects on signal changes
4. **createMemo** - Computed/derived values
5. **Event Handlers** - onClick, onMouseEnter, etc.
6. **Conditional Rendering** - Ternary expressions
7. **List Rendering** - Array.map() for dynamic lists
8. **Dynamic Styles** - Reactive style attributes
9. **Component Composition** - Parent-child relationships

## 🚀 Running Tests

### Basic Test (Current)

```bash
cd packages/synetics-ui.dev
pnpm dev
```

This runs `main.ts` → `main.syn` with basic signal functionality.

### Full Feature Suite

To test all features, update `main.ts`:

```typescript
import { FeatureTestSuite } from './lab/feature-tests.syn';
pulse(FeatureTestSuite(), { root: '#app' });
```

## 📝 Props Usage Pattern

**❌ Wrong:**

```typescript
pulse(MyComponent('stringValue'), { ... });
```

**✅ Correct:**

```typescript
pulse(MyComponent({ propName: 'stringValue' }), { ... });
```

**Component Definition:**

```typescript
interface IMyProps {
  propName: string;
}

component MyComponent({ propName }: IMyProps) {
  return <div>{propName}</div>;
}
```

## 🧹 Cleanup Summary

**Moved to `lab/` folder:**

- 35+ test files (`test-*.syn`)
- Alternative main files (`main-*.ts`, `main-*.syn`)
- Debug directories (`debug-tests/`, `tests/`)
- Experimental showcase variants
- Disabled test runners

**Kept in root:**

- Production components
- Main entry points (main.ts, main.syn)
- Type definitions
- Design system
- Showcase (stable version)

## 🎯 Next Steps

1. Test `createEffect` - verify side effects trigger correctly
2. Test `createMemo` - verify computed values update
3. Test conditional rendering - ternary expressions in JSX
4. Test list rendering - array.map() in JSX
5. Test component composition - nested components with props
6. Test form inputs - two-way binding with signals
7. Test async operations - data fetching patterns

## 📚 Documentation

> ⚠️ **REBRANDING & DEPRECATION NOTICE**  
> **Pulsar is now Synetics.** The original `pulsar-framework` packages have been officially deprecated. Please use the new `@synetics/*` namespace for all future development.


- Component API: `/docs`
- Architecture: `/docs/architecture`
- Transformer: `packages/synetics-transformer/README.md`
