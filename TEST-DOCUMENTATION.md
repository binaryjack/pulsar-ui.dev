# Test Documentation

## Overview
Comprehensive test suite for Pulsar Framework showcase pages covering unit, integration, and E2E testing.

## Test Structure

### Unit Tests (`src/showcase/pages/__tests__/`)
- Test individual page components in isolation
- Verify rendering, state updates, event handlers
- Mock dependencies and focus on component logic

### Integration Tests (`src/showcase/__tests__/integration/`)
- Test component interactions and data flow
- Verify signal propagation across components
- Test context provider-consumer relationships
- Validate navigation and routing

### E2E Tests (`e2e/showcase/`)
- Test complete user journeys
- Verify visual appearance and animations
- Test real browser interactions
- Include visual regression testing

## Running Tests

### Unit Tests
```bash
cd packages/pulsar-ui.dev
npm test                    # Run all unit tests
npm test -- home.test       # Run specific test file
npm test -- --coverage      # With coverage report
```

### Integration Tests
```bash
npm test integration
```

### E2E Tests
```bash
npm run test:e2e                    # All E2E tests
npm run test:e2e -- --headed       # With browser visible
npm run test:e2e -- --debug        # Debug mode
```

## Test Coverage Goals
- Unit Tests: 90%+ line coverage
- Integration Tests: Cover all major user flows
- E2E Tests: Cover critical paths with visual regression

## TDD Approach
Tests are written before implementation to:
1. Define expected behavior
2. Catch regressions early
3. Document component APIs
4. Enable confident refactoring
