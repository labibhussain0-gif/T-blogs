# Mobile Optimization Fixes Spec

## Overview
The T-blogs Next.js application has several mobile layout issues resulting in horizontal scrolling, overlapping elements, and layout breakages on narrow screens. This spec outlines the targeted fixes to make the site fully responsive.

## Core Issues Addressed

1. **Global Horizontal Overflow:** The `body` element lacks horizontal overflow constraints, allowing custom padding or off-canvas elements to trigger a horizontal scrollbar.
2. **Hero Section Flexibility:** The homepage Hero section (`HomeClient.tsx`) uses strict flex layouts without wrapping, causing the category tabs ("Popular in AI", "Trending", etc.) to push off-screen.
3. **Section Headers (`HomeClient.tsx`):** Headers like "Must Read" and "Weekly Highlights" use strict `justify-between` that breaks when the viewport is too narrow for both the title and the right-side controls/links.
4. **Horizontal Carousel (`HomeClient.tsx`):** The "Weekly Highlights" horizontal scrolling section may not have enough right padding for the last item, and the fixed `minWidth: '300px'` of its cards might be too aggressive for very small screens like the iPhone SE (375px width, leaving only 75px for padding and margins).

## Proposed Implementation

### 1. Global Viewport Fix
- **File:** `src/app/layout.tsx`
- **Change:** Add `overflow-x-hidden` to the `<body className="...">` element to ensure no child component can trigger a horizontal scroll on mobile devices.

### 2. Homepage Hero Header Wraps
- **File:** `src/app/HomeClient.tsx`
- **Change:** In the Hero section header (the one with the large "Tech." text), change the container from a strict row to allow wrapping, or change the `display: 'flex'` container for the tabs to allow `flexWrap: 'wrap'` and adjust the `marginLeft: 'auto'` behavior on small screens.
- **Implementation:** Update the inline style `display: 'flex', gap: '8px', marginLeft: 'auto'` to use Tailwind classes `flex flex-wrap gap-2 md:ml-auto mt-4 md:mt-0` so it drops below the "Tech." title on mobile but aligns right on desktop.

### 3. Homepage Section Headers
- **File:** `src/app/HomeClient.tsx`
- **Change:** For the "Must Read" and "Weekly Highlights" section headers, ensure the flex container can wrap or stack if needed.
- **Implementation:** Change `className="flex items-center justify-between"` to `className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"` (similar to what is already done for "Latest Articles").

### 4. Weekly Highlights Carousel Layout
- **File:** `src/app/HomeClient.tsx`
- **Change:** Adjust the fixed width of the carousel cards to ensure they fit gracefully on tiny screens without completely filling the viewport.
- **Implementation:** Change `minWidth: '300px'` to `minWidth: '280px'` (or use responsive clamp) and ensure the carousel container has `paddingRight: '24px'` so the last card doesn't bleed completely off-screen.

## Review Checks
- [ ] No placeholders remain.
- [ ] Architecture aligns with the Next.js/Tailwind SSG stack already in place.
- [ ] Changes are scoped exclusively to styling/layout—no server components or data fetching impacted.