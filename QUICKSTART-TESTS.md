# 🚀 Quick Start: Pulsar Reactivity Tests

## Run Tests Immediately

### 1. Start the Development Server

```bash
cd packages/pulsar-ui.dev
pnpm dev
```

### 2. Open Tests in Browser

Open your browser to:

```
http://localhost:3000/test-comprehensive-reactivity.html
```

**That's it!** You should now see the comprehensive test suite.

---

## What You'll See

The test page includes **11 interactive test sections**:

1. **Signals** - Click buttons, type text, toggle states
2. **Effects** - Type to trigger automatic effects
3. **Memos** - See computed values update
4. **Context API** - Change theme and font size
5. **Portals** - Open/close modals via portals
6. **Control Flow** - Add/remove/filter todo items
7. **Animations** - Rotate, scale, and move elements
8. **Drag & Drop** - Drag items around the screen
9. **List Reordering** - Reorder list items with buttons
10. **Resizable Borders** - Drag dividers to resize panels
11. **Text Mirroring** - Type and see text mirrored in multiple ways

---

## Quick Test Checklist

### ✅ Basic Reactivity (30 seconds)

1. **Signals**: Click "Increment Count" → Count should increase instantly
2. **Effects**: Type in input → Log entries should appear
3. **Memos**: Change first name → Full name updates automatically

### ✅ Advanced Features (2 minutes)

4. **Context**: Toggle theme → Background color changes
5. **Portals**: Click "Open Portal Modal" → Modal appears
6. **Control Flow**: Add a todo → List updates

### ✅ Interactive Features (3 minutes)

7. **Animations**: Click "Rotate" → Box rotates smoothly
8. **Drag & Drop**: Drag an item → Position updates in real-time
9. **Reordering**: Click up/down arrows → Items reorder
10. **Resizable**: Drag dividers → Panels resize
11. **Mirroring**: Type text → Multiple displays update

---

## Run Automated Tests

### E2E Tests with Playwright

```bash
# From project root
pnpm test:e2e

# Or specifically
npx playwright test comprehensive-reactivity
```

### Test Modes

```bash
# UI Mode (interactive)
npx playwright test --ui

# Headed Mode (watch tests run)
npx playwright test --headed

# Specific browser
npx playwright test --project=chromium
```

---

## Keyboard Shortcuts (when dev server is running)

| Key      | Action          |
| -------- | --------------- |
| `Ctrl+C` | Stop dev server |
| `r`      | Restart server  |
| `o`      | Open in browser |
| `q`      | Quit            |

---

## Expected Results

### ✅ All Working Correctly

- No console errors
- All counters increment
- Smooth animations (60fps)
- Instant reactivity (no lag)
- Clean UI with proper styling

### ❌ Something Wrong?

**Problem**: Tests don't load

- **Fix**: Ensure dev server is running on port 3000
- **Check**: `http://localhost:3000` works

**Problem**: No interactivity

- **Fix**: Check browser console for errors
- **Check**: Pulsar transformer is loaded

**Problem**: Lag or stuttering

- **Fix**: Close unnecessary tabs
- **Check**: Browser performance settings

---

## Development Tips

### Live Reload

The dev server has hot module replacement (HMR). When you edit:

- `test-comprehensive-reactivity.psr` → Page reloads automatically
- `styles.css` → Styles update without reload

### Browser DevTools

Open DevTools (`F12`) to:

- See console logs from effects
- Inspect signal values
- Monitor performance
- Debug issues

### Test Navigation

Use the navigation buttons at the top to:

- "Show All Tests" → See all 11 test sections
- "1. Signals", "2. Effects", etc. → Focus on one test

---

## Performance Monitoring

While testing, watch for:

- **Signal updates**: Should be instant (< 1ms)
- **List rendering**: Smooth even with many items
- **Animations**: 60fps, no stuttering
- **Drag operations**: Responsive, no lag
- **Memory**: Stable, no leaks

---

## Next Steps

1. ✅ Run tests manually → Verify all features work
2. ✅ Run Playwright tests → Ensure automation passes
3. ✅ Review README-TESTS.md → Understand test architecture
4. ✅ Add your own tests → Extend the suite

---

## Help & Support

**Documentation**: See `README-TESTS.md` for detailed test documentation

**Issues**: Check browser console for error messages

**Questions**: Review Pulsar framework documentation

---

**Happy Testing! 🎉**

All 11 core reactivity features should work perfectly out of the box.
