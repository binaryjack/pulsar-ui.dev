# Pulsar Comprehensive Reactivity Test Suite

## Overview

This test suite provides comprehensive coverage of all Pulsar framework reactivity features, ensuring they work correctly and render as expected.

## Features Tested

### 1. **Signals** - Basic Reactive State
- ✓ Primitive value updates (numbers, strings, booleans)
- ✓ Immediate DOM updates on signal changes
- ✓ Multiple signal interactions
- ✓ Signal getters and setters

**What to test:**
- Increment/decrement counters
- Text input reactivity
- Boolean toggle states

---

### 2. **Effects** - Side Effects from Signal Changes
- ✓ Automatic effect execution on dependency changes
- ✓ Effect tracking and logging
- ✓ Effect cleanup and reset
- ✓ Multiple effects with different dependencies

**What to test:**
- Type in input → see effect log update
- Effect count increments automatically
- Clear log functionality

---

### 3. **Memos** - Computed/Derived Values
- ✓ Cached computed values
- ✓ Recomputation only when dependencies change
- ✓ Chain of derived computations
- ✓ Complex computations (aggregations, transformations)

**What to test:**
- Full name computed from first/last name
- Initials derived from names
- Sum and average of arrays
- Memo efficiency (no unnecessary recomputations)

---

### 4. **Context API** - Component Tree State Sharing
- ✓ Context provider/consumer pattern
- ✓ Multiple context values
- ✓ Deep component tree propagation
- ✓ Context updates trigger re-renders

**What to test:**
- Theme switching (light/dark)
- Font size slider
- Context values visible in nested components
- No prop drilling required

---

### 5. **Portals** - Rendering Outside Parent Hierarchy
- ✓ Render content in different DOM location
- ✓ PortalSlot target system
- ✓ Modal/overlay patterns
- ✓ Multiple portals
- ✓ Portal cleanup

**What to test:**
- Open/close modal
- Modal renders outside parent container
- Backdrop click to close
- Portal count tracking

---

### 6. **Control Flow** - Conditional Rendering & Lists
- ✓ `ForRegistry` - Efficient list rendering
- ✓ `ShowRegistry` - Conditional rendering with fallback
- ✓ Dynamic list operations (add, remove, update)
- ✓ Filtering and sorting
- ✓ Key-based reconciliation

**What to test:**
- Add/remove todo items
- Toggle completion status
- Filter by status (completed/active)
- Filter by priority
- Delete individual items

---

### 7. **Animations** - CSS Transitions & Transforms
- ✓ Signal-driven CSS properties
- ✓ Smooth transitions
- ✓ Transform animations (rotate, scale, translate)
- ✓ Color transitions
- ✓ Expand/collapse animations

**What to test:**
- Expand/collapse panel
- Rotate box
- Pulse (scale) animation
- Random movement
- Color changes
- Reset to initial state

---

### 8. **Drag & Drop** - Interactive Dragging
- ✓ Mouse event handling
- ✓ Real-time position updates
- ✓ Drag constraints (boundaries)
- ✓ Multiple draggable items
- ✓ Visual feedback (cursor, shadows)

**What to test:**
- Drag items around container
- Position updates in real-time
- Items stay within bounds
- Drop count tracking
- Add new draggable items

---

### 9. **List Reordering** - Dynamic List Manipulation
- ✓ Move items up/down
- ✓ Move to top/bottom
- ✓ Shuffle and reverse
- ✓ Add/remove items
- ✓ Preserved item state during reorder
- ✓ Smooth transitions

**What to test:**
- Move items up/down one position
- Move to top/bottom
- Shuffle list randomly
- Reverse list order
- Remove items
- Reorder count tracking

---

### 10. **Resizable Borders** - Interactive Resize
- ✓ Horizontal split pane resize
- ✓ Vertical split pane resize
- ✓ Percentage-based sizing
- ✓ Visual divider feedback
- ✓ Constraints (min/max sizes)

**What to test:**
- Drag vertical divider (horizontal split)
- Drag horizontal divider (vertical split)
- Percentage updates in real-time
- Resize count tracking
- Visual feedback on active resize

---

### 11. **Live Text Mirroring** - Input → Display Reactivity
- ✓ Single source, multiple displays
- ✓ Different transformations (uppercase, lowercase, reversed)
- ✓ Character and word count
- ✓ Update tracking
- ✓ Real-time synchronization

**What to test:**
- Type in textarea → see all mirrors update
- Uppercase transformation
- Lowercase transformation
- Reverse transformation
- Character/word count accuracy
- Update count tracking

---

## Running the Tests

### Development Server

```bash
cd packages/pulsar-ui.dev
pnpm dev
```

Then navigate to:
- **Main Page**: `http://localhost:3000`
- **Comprehensive Tests**: `http://localhost:3000/test-comprehensive-reactivity.html`

### Playwright E2E Tests

Run all automated tests:

```bash
pnpm test:e2e
```

Run specific test suite:

```bash
npx playwright test comprehensive-reactivity
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

Run tests with headed browser:

```bash
npx playwright test --headed
```

---

## Test Coverage

### Manual Testing Checklist

For each feature, verify:

- [x] **Visual Rendering** - Component displays correctly
- [x] **Interaction** - User interactions work as expected
- [x] **Reactivity** - State changes update UI immediately
- [x] **Performance** - No lag or stuttering
- [x] **Error Handling** - Graceful error handling
- [x] **Edge Cases** - Boundary conditions handled

### Automated Testing

The Playwright test suite (`e2e/comprehensive-reactivity.spec.ts`) covers:

- ✓ All 11 feature categories
- ✓ User interactions (clicks, typing, dragging)
- ✓ State updates and DOM changes
- ✓ Visual feedback and animations
- ✓ Navigation and filtering

**Test Statistics:**
- Total test suites: 12
- Total tests: 40+
- Coverage: All core reactivity features

---

## Test Architecture

### File Structure

```
packages/pulsar-ui.dev/
├── src/
│   └── test-comprehensive-reactivity.psr  # Main test component
├── test-comprehensive-reactivity.html      # HTML entry point
└── README-TESTS.md                         # This file

e2e/
└── comprehensive-reactivity.spec.ts        # Playwright tests
```

### Component Architecture

```typescript
ComprehensiveReactivityTestSuite
├── SignalTest                  // Test 1
├── EffectTest                  // Test 2
├── MemoTest                    // Test 3
├── ContextTest                 // Test 4
│   └── ThemedComponent         // Nested component
├── PortalTest                  // Test 5
├── ControlFlowTest             // Test 6
├── AnimationTest               // Test 7
├── DragDropTest                // Test 8
├── ListReorderingTest          // Test 9
├── ResizableTest               // Test 10
└── TextMirroringTest           // Test 11
```

---

## Expected Behavior

### Performance Targets

- **Signal updates**: < 1ms
- **Effect execution**: < 5ms
- **Memo computation**: < 2ms
- **List rendering (100 items)**: < 50ms
- **Animation frame rate**: 60fps
- **Drag responsiveness**: < 16ms (60fps)

### Visual Feedback

All tests include:
- ✓ Status indicators
- ✓ Update counters
- ✓ Visual transitions
- ✓ State displays
- ✓ Interactive controls

---

## Troubleshooting

### Common Issues

**Issue**: Tests don't load
**Solution**: Ensure Vite dev server is running on port 3000

**Issue**: Signals not updating
**Solution**: Check browser console for errors, verify Pulsar transformer is working

**Issue**: Drag & drop not working
**Solution**: Verify mouse events are not blocked by other elements

**Issue**: Animations stuttering
**Solution**: Check browser performance, close other tabs

**Issue**: Portal not rendering
**Solution**: Verify PortalSlot exists in DOM before Portal renders

---

## Adding New Tests

To add a new reactivity test:

1. **Create test component** in `test-comprehensive-reactivity.psr`:
   ```typescript
   const MyNewTest = (): HTMLElement => {
     const [state, setState] = createSignal(initialValue);
     
     return (
       <div class="test-section">
         <h3>12. My New Test</h3>
         {/* Test content */}
       </div>
     );
   };
   ```

2. **Add to main component**:
   ```typescript
   const tests = [
     // ... existing tests
     { id: 'my-test', name: '12. My New Test', component: MyNewTest },
   ];
   ```

3. **Add Playwright test** in `e2e/comprehensive-reactivity.spec.ts`:
   ```typescript
   test.describe('12. My New Test', () => {
     test('should do something', async ({ page }) => {
       await page.getByRole('button', { name: '12. My New Test' }).click();
       // Test assertions
     });
   });
   ```

---

## Best Practices

### Signal Usage
- Use signals for all reactive state
- Keep signals focused (single responsibility)
- Avoid deeply nested signal values

### Effect Usage
- Only use effects for side effects (logging, API calls, DOM manipulation)
- Clean up effects when components unmount
- Avoid creating signals inside effects

### Memo Usage
- Use memos for expensive computations
- Memos should be pure functions
- Don't create side effects in memos

### Context Usage
- Keep context values minimal
- Create separate contexts for different concerns
- Provide default values

### Portal Usage
- Always clean up portals
- Use unique IDs for PortalSlots
- Handle portal target not found scenarios

---

## Success Criteria

All tests pass when:

✅ Visual rendering is correct
✅ All interactions work smoothly
✅ State updates propagate immediately
✅ No console errors
✅ Animations are smooth (60fps)
✅ Memory usage is stable
✅ No memory leaks
✅ Playwright tests all pass
✅ Performance targets met

---

## Maintenance

### Regular Checks

- Run tests after any Pulsar core changes
- Update tests when adding new features
- Keep Playwright tests in sync with UI
- Monitor performance metrics
- Update documentation

### Version Compatibility

These tests are compatible with:
- Pulsar Framework: v0.7.0+
- Vite: v7.3.1+
- Playwright: Latest

---

## Contributing

When adding new reactivity features to Pulsar:

1. Add test case to `test-comprehensive-reactivity.psr`
2. Add Playwright test to `comprehensive-reactivity.spec.ts`
3. Update this README
4. Verify all tests pass
5. Document expected behavior

---

## Support

For issues or questions:
- Check browser console for errors
- Review Pulsar documentation
- Check existing tests for patterns
- Open GitHub issue if needed

---

**Last Updated**: February 6, 2026
**Version**: 1.0.0
**Status**: ✅ All tests passing
