# Mobile Optimization Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix horizontal scrolling and layout breakage issues on narrow mobile viewports.

**Architecture:** We are updating four key components with responsive Tailwind CSS classes and React inline styles. We will add a global overflow constraint to the body, wrap the hero category tabs, wrap section headers, and adjust horizontal carousel padding/widths.

**Tech Stack:** Next.js, React, Tailwind CSS (via inline classes), CSS-in-JS (via `style` props).

---

### Task 1: Global Viewport Fix

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Write the implementation**
Modify `src/app/layout.tsx` to add `overflow-x-hidden` to the `<body>` tag.

```tsx
// Find this section:
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ background: "var(--bg-cream)", color: "var(--ink-primary)" }}
      >
        <Header />

// Change to:
      <body
        className="min-h-full flex flex-col antialiased overflow-x-hidden"
        style={{ background: "var(--bg-cream)", color: "var(--ink-primary)" }}
      >
        <Header />
```

- [ ] **Step 2: Run build to verify no errors**
Run: `npm run build`
Expected: Passes.

- [ ] **Step 3: Commit**
```bash
git add src/app/layout.tsx
git commit -m "fix(layout): add overflow-x-hidden to body to prevent mobile horizontal scroll"
```

---

### Task 2: Homepage Hero Header Wraps

**Files:**
- Modify: `src/app/HomeClient.tsx`

- [ ] **Step 1: Write the implementation**
Modify the flex container holding the "Popular in AI", "By Topic", and "Trending" tabs. It currently uses `style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}`. We will change it to use Tailwind for wrapping and responsive margin-left.

```tsx
// Find this section in src/app/HomeClient.tsx (~line 67):
          <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto' }}>
            {['Popular in AI', 'By Topic', 'Trending'].map((tab) => (

// Change to:
          <div className="flex flex-wrap gap-2 mt-4 sm:mt-0 sm:ml-auto">
            {['Popular in AI', 'By Topic', 'Trending'].map((tab) => (
```
*(Also change the parent container `display: 'flex', alignItems: 'center'` to use `flex-wrap` and allow stacking, otherwise `sm:ml-auto` won't behave nicely if the parent doesn't allow wrap.)*

```tsx
// Find (~line 46):
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-light)',
          }}
        >

// Change to:
        <div
          className="flex flex-wrap items-center gap-4 mb-8 pb-4 border-b border-[var(--border-light)]"
        >
```

- [ ] **Step 2: Run build to verify no errors**
Run: `npm run build`
Expected: Passes.

- [ ] **Step 3: Commit**
```bash
git add src/app/HomeClient.tsx
git commit -m "fix(home): allow hero section category tabs to wrap on mobile"
```

---

### Task 3: Homepage Section Headers

**Files:**
- Modify: `src/app/HomeClient.tsx`

- [ ] **Step 1: Write the implementation**
The headers for "Must Read" and "Weekly Highlights" currently use `className="flex items-center justify-between"`. We will change these to `className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"` to match the "Latest Articles" section.

```tsx
// Find "Must Read" section (~line 204):
          {/* Section Header */}
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: '40px' }}
          >

// Change to:
          {/* Section Header */}
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ marginBottom: '40px' }}
          >


// Find "Weekly Highlights" section (~line 319):
          {/* Section Header */}
          <div className="flex items-center justify-between" style={{ marginBottom: '40px' }}>

// Change to:
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ marginBottom: '40px' }}>
```

- [ ] **Step 2: Run build to verify no errors**
Run: `npm run build`
Expected: Passes.

- [ ] **Step 3: Commit**
```bash
git add src/app/HomeClient.tsx
git commit -m "fix(home): wrap 'Must Read' and 'Weekly Highlights' headers on small screens"
```

---

### Task 4: Weekly Highlights Carousel Layout

**Files:**
- Modify: `src/app/HomeClient.tsx`

- [ ] **Step 1: Write the implementation**
Adjust the strict `minWidth: '300px'` constraint to something fluid or slightly smaller to accommodate 375px screens (like iPhone SE) without bleeding off entirely. And add right padding to the scrolling container so the last item doesn't get cut off flush against the screen edge.

```tsx
// Find (~line 368):
            className="snap-scroll"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              paddingBottom: '8px',
            }}
          >

// Change to (add paddingRight):
            className="snap-scroll"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              paddingBottom: '8px',
              paddingRight: '24px',
            }}
          >


// Find (~line 379):
                style={{
                  minWidth: '300px',
                  maxWidth: '320px',
                  flexShrink: 0,
                }}

// Change to:
                style={{
                  minWidth: '280px',
                  maxWidth: '320px',
                  flexShrink: 0,
                }}
```

- [ ] **Step 2: Run build to verify no errors**
Run: `npm run build`
Expected: Passes.

- [ ] **Step 3: Commit**
```bash
git add src/app/HomeClient.tsx
git commit -m "fix(home): reduce carousel card minWidth and add right padding to scroll container"
```
