---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Center-Out Atlas Finale Wipe

## What changed

- Updated `src/components/sections/KineticServiceJourney.jsx` so the project-intake finale is mounted inside the pinned service-atlas stage instead of after it in normal vertical document flow.
- Replaced the independent atlas and finale ScrollTriggers with one master pinned timeline.
- Added a center-out split wipe: the black left half and bone right half reveal outward from the center seam over the final atlas frame.
- Sequenced the seam, split DAOVOS wordmark, headers, title lines, notes, footers, and project action behind the wipe.
- Updated `src/components/sections/service-journey.css` so the finale is a full-stage overlay during motion and returns to normal document flow for reduced motion.

## Decisions

- Kept the final atlas frame pinned while the ending is revealed, eliminating the visual impression of the finale scrolling upward from below.
- Used opposing horizontal clip-path masks instead of translating or scaling the finale panels. This preserves the typography's proportions while producing a true wipe.
- The wipe opens from the center seam because the finale is already structured as two complementary input/output planes; the motion now expresses that geometry directly.
- Added dedicated scroll distance after the atlas traversal so the transition has time to resolve and hold without rushing.

## Backups

- None. No precious procedural or 3D assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- `git diff --check` passed for the two changed source files.
- No browser screenshot was taken, per the user's request.

## Current state

At the end of `WHAT WE BUILD`, the horizontal atlas stops on its final frame. A split black/bone wipe opens from the center and reveals the full project-intake ending in place; the old vertical section-to-section entrance is gone.

