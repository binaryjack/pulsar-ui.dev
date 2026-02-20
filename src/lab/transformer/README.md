# Transformer Lab — Test Fixtures

Each subfolder is an isolated test fixture for the Pulsar Babel transformer (`packages/pulsar-transformer`). The `.psr` files are **input sources** that the compiler processes — verifying the transformer correctly lowers Pulsar-specific syntax to plain JS/TS that browsers can execute.

---

## File Naming Convention

```
YYYY-MM-DD-HH-MM-<topic>.psr
```

Folders with two files (e.g. `14:20` + `15:00`) contain a baseline and a revised version produced during the same session to fix a transform regression.

---

## Folders

### Control Flow

| Folder                     | Transform tested                                                        |
| -------------------------- | ----------------------------------------------------------------------- |
| `for-iteration`            | `{list().map(cb)}` sugar → `ForRegistry({ each, children })`            |
| `for-iteration-components` | `<For each={signal}>` JSX tag → `ForRegistry`                           |
| `show-components`          | `{cond() && <X/>}` → `ShowRegistry({ when, children, fallback: null })` |
| `show-when-components`     | `{cond() ? <A/> : <B/>}` ternary → `ShowRegistry` with fallback         |

### Reactivity Primitives

| Folder                       | Transform tested                                              |
| ---------------------------- | ------------------------------------------------------------- |
| `create-effect-side-effects` | `createEffect(() => ...)` reactive subscription wiring        |
| `memo-optimization`          | `createMemo()` derived signal memoization                     |
| `render-effect-timing`       | `createRenderEffect` — fires synchronously before paint       |
| `batch-updates`              | Batched signal writes coalesced into a single re-render tick  |
| `untrack-isolation`          | `untrack(() => ...)` — reads signal value without subscribing |

### Resources

| Folder                         | Transform tested                                           |
| ------------------------------ | ---------------------------------------------------------- |
| `create-resource`              | `createResource(fetcher)` async primitive                  |
| `resource-loading-states`      | `isLoading` / `isSuccess` / `isError` tri-state shape      |
| `resource-state-handling`      | Transitions between loading → data → error states          |
| `resource-dependency-tracking` | Re-fetch triggered by reactive key signal change           |
| `resource-parallel-fetching`   | Multiple concurrent `createResource` calls                 |
| `resource-mutations`           | `resource.mutate()` optimistic update pattern              |
| `resource-refetch-patterns`    | Manual `resource.refetch()` trigger                        |
| `resource-pre-resolution`      | Pre-loaded data injected into resource before first render |

### Components & Lifecycle

| Folder                 | Transform tested                                            |
| ---------------------- | ----------------------------------------------------------- |
| `on-mount-lifecycle`   | `onMount()` hook deferred until after DOM insertion         |
| `on-cleanup-patterns`  | `onCleanup()` hook registration and disposal                |
| `dynamic-components`   | `<Dynamic component={expr}>` → runtime component resolution |
| `async-lazy-loading`   | `lazy(() => import(...))` async component wrapping          |
| `concurrent-rendering` | Scheduler priority hints in render paths                    |

### Context

| Folder                     | Transform tested                                         |
| -------------------------- | -------------------------------------------------------- |
| `create-context-providers` | `createContext` + `<Provider value={...}>` JSX transform |

### Portals

| Folder                  | Transform tested                                       |
| ----------------------- | ------------------------------------------------------ |
| `portal-transformation` | `<Portal>` / `<PortalSlot>` → mount-point registration |

### Error Handling

| Folder                   | Transform tested                                         |
| ------------------------ | -------------------------------------------------------- |
| `catcher-error-handlers` | `<Catcher>` → `CatcherRegistry` component transform      |
| `tryer-error-boundaries` | `<Tryer>` try/catch boundary → `TryerRegistry` transform |

### Suspense

| Folder             | Transform tested                             |
| ------------------ | -------------------------------------------- |
| `waiting-suspense` | `<Waiting>` coordination → `WaitingRegistry` |

### JSX & Type System

| Folder                    | Transform tested                                    |
| ------------------------- | --------------------------------------------------- |
| `complex-jsx-expressions` | Nested / computed JSX expressions                   |
| `template-literals`       | Tagged and dynamic template literals inside JSX     |
| `generic-type-arguments`  | `<Component<T>>` generic type param stripping       |
| `type-inference-system`   | Type narrowing preserved through transform pipeline |

### Rendering

| Folder                  | Transform tested                                           |
| ----------------------- | ---------------------------------------------------------- |
| `server-side-rendering` | SSR serialization markers and hydration boundary insertion |

---

## Running the Transformer

From the workspace root:

```bash
pnpm --filter pulsar-transformer test
```

To test a specific fixture manually:

```bash
node analyze-full-pipeline.mjs packages/pulsar-ui.dev/src/lab/transformer/<folder>/<file>.psr
```
