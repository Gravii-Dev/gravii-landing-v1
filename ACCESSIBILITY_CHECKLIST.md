# Gravii Accessibility & UX Checklist

Quick reference for maintaining accessibility standards in the Gravii project.

---

## 1. KEYBOARD NAVIGATION

### Every Interactive Element Must:
- [ ] Be reachable via `Tab` key
- [ ] Have visible focus indicator (`focus-visible:ring-2`)
- [ ] Support `Enter` and `Space` activation (buttons)
- [ ] Support `Escape` to close (modals, dropdowns)

### Example:
```tsx
<button
  className="focus-visible:ring-2 focus-visible:ring-acid-400"
  onClick={handleClick}
>
  Click Me
</button>
```

---

## 2. FORM INPUTS

### Required Attributes:
```tsx
<Input
  id="email"                           // ✅ Unique ID
  type="email"                         // ✅ Correct type
  aria-label="Email address"           // ✅ ARIA label
  aria-invalid={!!error}               // ✅ Error state
  aria-describedby="email-error"       // ✅ Link to error message
  required                             // ✅ Required attribute
/>
{error && (
  <p id="email-error" role="alert">   // ✅ Error message
    {error}
  </p>
)}
```

### Validation Rules:
1. Show error messages immediately (on blur or submit)
2. Use `role="alert"` for dynamic error messages
3. Disable submit button while loading
4. Show loading state with `aria-live="polite"`

---

## 3. IMAGES

### Always Include Alt Text:
```tsx
// Decorative images
<img src="..." alt="" aria-hidden="true" />

// Meaningful images
<img src="..." alt="Pro Trader persona card" />

// Complex images
<img src="..." alt="Spending analytics chart" aria-describedby="chart-desc" />
<div id="chart-desc" className="sr-only">
  Detailed description...
</div>
```

---

## 4. LOADING & ERROR STATES

### Loading State:
```tsx
{isLoading && (
  <div role="status" aria-live="polite">
    <svg className="animate-spin" aria-hidden="true" />
    <span>Loading...</span>
  </div>
)}
```

### Error State:
```tsx
{error && (
  <div role="alert">
    <svg aria-hidden="true" />
    <p>{error}</p>
  </div>
)}
```

### Success State:
```tsx
{success && (
  <div role="status" aria-live="polite">
    <p>You're in!</p>
  </div>
)}
```

---

## 5. SEMANTIC HTML

### Use Correct Elements:
```tsx
// ❌ Bad
<div onClick={handleClick}>Click</div>

// ✅ Good
<button onClick={handleClick}>Click</button>
```

### Document Structure:
```tsx
<main id="main-content">
  <section aria-labelledby="features-heading">
    <header>
      <h2 id="features-heading">Features</h2>
    </header>
    <article>
      ...
    </article>
  </section>
</main>
```

---

## 6. RESPONSIVE DESIGN

### Mobile-First Breakpoints:
```tsx
// Start with mobile, scale up
className="
  text-base        // Mobile (default)
  sm:text-lg       // 640px+
  md:text-xl       // 768px+
  lg:text-2xl      // 1024px+
"
```

### Touch Targets:
- **Minimum**: 44x44px
- Use `px-8 py-3` for buttons
- Add spacing between clickable elements

### Test On:
- iPhone SE (375px)
- iPad (768px)
- Desktop (1920px)

---

## 7. ANIMATIONS

### Respect User Preferences:
```tsx
// CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Best Practices:
- Avoid auto-playing animations longer than 5 seconds
- Provide pause/stop controls for auto-rotation
- Use `aria-live="polite"` for content changes

---

## 8. COLOR CONTRAST

### Minimum Ratios (WCAG AA):
- **Normal text**: 4.5:1
- **Large text** (18pt+): 3:1
- **UI components**: 3:1

### Gravii Colors (Already Compliant):
- `text-white` on `bg-black`: 21:1 ✅
- `text-acid-400` on `bg-black`: 12:1 ✅
- `text-zinc-500` on `bg-black`: 7:1 ✅

### Tool:
Check contrast: [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

---

## 9. SCREEN READER UTILITIES

### Hide Decorative Content:
```tsx
<svg aria-hidden="true">...</svg>
```

### Screen Reader Only Text:
```tsx
<span className="sr-only">Hidden from visual users</span>
```

### Live Regions:
```tsx
// Polite (most cases)
<div aria-live="polite">Content updated</div>

// Assertive (urgent)
<div aria-live="assertive">Error occurred!</div>
```

---

## 10. TESTING TOOLS

### Browser Extensions:
1. **axe DevTools** - Automated accessibility testing
2. **WAVE** - Visual feedback
3. **Lighthouse** - Performance + A11y audit

### Screen Readers:
- **macOS/iOS**: VoiceOver (Cmd+F5)
- **Windows**: NVDA (free) or JAWS
- **Android**: TalkBack

### Manual Tests:
```bash
# Keyboard only
- Unplug mouse, navigate entire site with Tab/Enter/Space

# Screen reader
- Turn on VoiceOver, close your eyes, navigate site

# Mobile
- Test on actual device, not just DevTools
```

---

## QUICK FIX TEMPLATES

### Add Focus State to Button:
```tsx
className="... focus-visible:ring-2 focus-visible:ring-acid-400"
```

### Add Loading State:
```tsx
const [isLoading, setIsLoading] = useState(false)

{isLoading ? (
  <><svg className="animate-spin" /> Loading...</>
) : (
  'Submit'
)}
```

### Add Error Handling:
```tsx
const [error, setError] = useState('')

{error && (
  <p role="alert" className="text-red-400">
    {error}
  </p>
)}
```

### Add Skip Link:
```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:fixed focus:top-4"
>
  Skip to main content
</a>
```

---

## RESOURCES

- **WCAG Quick Reference**: [https://www.w3.org/WAI/WCAG21/quickref/](https://www.w3.org/WAI/WCAG21/quickref/)
- **ARIA Patterns**: [https://www.w3.org/WAI/ARIA/apg/patterns/](https://www.w3.org/WAI/ARIA/apg/patterns/)
- **WebAIM Articles**: [https://webaim.org/articles/](https://webaim.org/articles/)
- **A11y Project**: [https://www.a11yproject.com/](https://www.a11yproject.com/)

---

## COMMIT CHECKLIST

Before every commit, verify:
- [ ] All buttons have focus states
- [ ] All inputs have labels
- [ ] All images have alt text
- [ ] Forms have error handling
- [ ] Loading states are present
- [ ] Responsive on mobile (375px+)
- [ ] No console errors
- [ ] Tab navigation works

---

**Last Updated**: February 1, 2026
**Maintained by**: Gravii UI/UX Team
