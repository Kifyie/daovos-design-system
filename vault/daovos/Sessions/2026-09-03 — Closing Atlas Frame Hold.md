---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Closing Atlas Frame Hold

## What changed

- Updated `src/components/sections/KineticServiceJourney.jsx` to add a dedicated dwell between the end of the horizontal service-atlas traversal and the center-out finale wipe.
- Added `closingHoldUnits` to the master GSAP timeline and a matching viewport-relative `holdDistance` to the ScrollTrigger range.

## Decision and reason

- The `DESIGN. BUILD. Keep moving.` composition is the atlas's closing statement and needs enough stationary time to be read as a complete frame. The additional time is isolated to that frame, so the earlier horizontal journey retains its existing pace.
- Desktop/tablet receive a 1.35-unit timeline dwell; mobile receives a slightly shorter 1.1-unit dwell to avoid excessive touch scrolling.

## Backups

- None. No precious assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- `git diff --check` passed for the changed component.
- No browser screenshot was taken, per the user's request.

## Current state

The final service-atlas composition now remains pinned and readable for an additional beat before the ending wipe starts.

