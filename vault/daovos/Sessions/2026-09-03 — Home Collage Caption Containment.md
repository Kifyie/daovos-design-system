---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Home Collage Caption Containment

## What changed

- Corrected the `BUILT / TO BELONG` home collage in `src/components/sections/service-journey.css`.
- Removed the visual's `122%` width and negative X translation so its lower artwork no longer extends beneath the following vertical label lane.
- Expanded the caption from four to five internal grid tracks so `STRUCTURE / IDENTITY / SCALE` remains fully visible.

## Key decision

- Preserved the image/artwork overlap while containing the overall collage within its assigned module boundary.

## Backups

- None required. No precious procedural asset was modified.

## Verification

- `npm run build` passes. The existing large-chunk advisory remains non-blocking.
- No browser screenshot was taken, following the user's request.

## Current state

- The first service collage and its lower caption now end cleanly before the `DISTINCT BY DESIGN` vertical lane.

