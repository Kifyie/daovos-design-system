---
date: 2026-08-31
type: session
status: done
tags: [session]
---

# Atlas Text Reveal Choreography

## What changed

- Expanded `src/components/sections/KineticServiceJourney.jsx` with a scoped GSAP text-reveal system for the complete post-WHO atlas and its project-intake finale.
- Added SplitText character reveals for chapter metadata and a controlled word-fold reveal for the editorial quote.
- Added six distinct headline treatments: opposing blades, vertical stack, ledger expansion, z-axis hinge, center aperture, and converging continuation.
- Added separate reveal families for body copy, vertical spines, serial numbers, artwork titles, artwork captions, the atlas header, and finale text.
- Updated `src/components/sections/service-journey.css` with explicit headline-line wrappers, split-character/word compositor hints, and a temporary pre-initialization visibility gate.

## Key decisions

- Each text role uses a different motion grammar, but all motion derives from the atlas geometry: horizontal scans, vertical datums, center splits, mechanical expansion, and shallow z-axis folds.
- Reveals complete in the right-edge entry zone before a text column reaches the main reading field. This preserves legibility and prevents half-built words from cluttering the composition.
- The quote initially used scattered word motion; browser QA showed it was too chaotic, so it was replaced with one calm z-axis fold staggered from the center.
- A `service-journey--motion-pending` gate keeps all animated text hidden until fonts are ready, ScrollTrigger has refreshed, and GSAP start states are rendered. This removes the flash where final text appeared before its reveal.
- Reduced-motion mode bypasses SplitText and exposes final text immediately.

## Verification

- `npm run build` passes.
- Browser QA covered early, focus, commerce, interface, care, finale, mobile, and reduced-motion states.
- Fresh-load QA confirms the motion-pending gate is removed only after initialization.
- No application console errors were introduced; only the existing Three.js `Clock` deprecation warnings remain.

## Current state

The service atlas now has role-specific GSAP text choreography without first-frame flashes or mid-viewport crossed text. The hero and Hermes WHO WE ARE section remain untouched.
