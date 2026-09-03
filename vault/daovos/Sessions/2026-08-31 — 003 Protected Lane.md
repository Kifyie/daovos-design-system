---
date: 2026-08-31
type: session
status: done
tags: [session]
---

# 003 Protected Lane

## What changed

- Updated `src/components/sections/service-journey.css` so the `003` serial occupies only atlas column 15.
- Reduced only the `003` type scale from the shared 15vw serial size to a dedicated 12vw scale and added a controlled right inset.

## Why

The previous `grid-column: 15 / span 2` assignment made `003` and the interface artwork share column 16. The black artwork therefore covered the final digit during the horizontal-scroll state. The correction gives the serial and artwork separate column ownership instead of hiding the collision with z-index.

## Verification

- Inspected the live GSAP-transformed state at 1440×900 in a real browser.
- `003` now ends before the interface artwork with a visible gutter.
- No application console errors were introduced.
- `npm run build` passes.

## Current state

The late-atlas serial and interface artwork no longer overlap. The atlas structure, motion, hero, WHO WE ARE section, and finale are unchanged.
