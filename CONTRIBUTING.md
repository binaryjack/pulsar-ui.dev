# Contributing to synetics-ui.dev

Thank you for your interest in contributing! Please see the [main contributing guide](../../CONTRIBUTING.md) for general guidelines.

## Package-Specific Information

### Development Setup

```bash
# Install dependencies from monorepo root
cd ../..
pnpm install

# Build this package
pnpm --filter @synetics/ui.dev build

# Run tests
pnpm --filter @synetics/ui.dev test

# Watch mode
pnpm --filter @synetics/ui.dev dev
```

### Architecture

This package is part of the Visual Schema Builder monorepo. For detailed architecture and design patterns, see the [package documentation](./docs/) and [monorepo documentation](../../docs/).

### Testing

Please ensure all tests pass before submitting a pull request:

```bash
pnpm --filter @synetics/ui.dev test
pnpm --filter @synetics/ui.dev typecheck
pnpm --filter @synetics/ui.dev lint
```

### Documentation

- Keep the README.md up-to-date with API changes
- Add JSDoc comments for public APIs
- Update examples when changing behavior
- Document breaking changes in CHANGELOG.md

## Questions?

See the [main README](../../README.md) or open a discussion in the repository.
