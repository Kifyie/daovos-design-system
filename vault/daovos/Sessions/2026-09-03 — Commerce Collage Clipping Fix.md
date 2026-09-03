---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Commerce Collage Clipping Fix

## What changed

- Corrected the `FROM CART / TO CARE` commerce composition in `src/components/sections/service-journey.css`.
- Removed the visual's `118%` oversizing and negative translation so its right edge no longer extends into the parent module's clipped overflow.
- Added a commerce-specific title size and widened its internal grid lane so both lines remain fully visible.
- Shifted the caption one grid track left so the complete `DISCOVER → DECIDE → PURCHASE` label fits inside the panel.

## Key decision

- Kept the parent's clipping boundary because it protects the atlas geometry; corrected the oversized child instead of weakening the module boundary globally.

## Backups

- None required. No precious procedural asset was modified.

## Verification

- `npm run build` passes. The existing large-chunk advisory remains non-blocking.
- No browser screenshot was taken, following the user's request to perform visual checking themselves.

## Current state

- The commerce image, title, graphic, and caption now resolve within the same rectangular module without right-edge cropping.

