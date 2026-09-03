---
date: 2026-08-29
type: session
status: done
tags: [session]
---

# Centered Split Wordmark Restored

## What changed

- Updated `src/components/sections/ServiceJourney.jsx` to identify the finale's canonical `DaovosWordmark` as a split-color mark.
- Updated `src/components/sections/service-journey.css` so one intact SVG spans the finale's black/bone center seam:
  - `DAO` is bone white over the black half.
  - `VOS` is near black over the bone-white half.
  - The mark is positioned from its actual SVG geometry so the seam lands in the whitespace between the first `O` and `V` instead of cutting either glyph.
- Preserved the existing GSAP finale reveal: the wordmark still expands outward from the center seam with `scaleX` and `autoAlpha` inside the scoped `useGSAP` lifecycle.
- Added a mobile-specific fill override. Because the mobile finale stacks vertically instead of splitting left/right, the complete wordmark remains bone white on the black upper panel.

## Key decisions

- Used one canonical SVG with path-level colors instead of two clipped copies. This keeps the O and V intact and prevents the masking/clipping regressions seen in earlier versions.
- Left `src/components/brand/DaovosWordmark.jsx` untouched. The authoritative wordmark remains reusable and unchanged; the split treatment is scoped only to the finale.
- Kept the existing finale layout and copy unchanged. This session restores only the centered two-color brand moment requested by the user.

## Backup

- `backups/service-journey-pre-centered-splitmark-2026-08-29/ServiceJourney.jsx`
- `backups/service-journey-pre-centered-splitmark-2026-08-29/service-journey.css`

## Verification

- `npm run build` passes. The existing Vite bundle-size warning remains unchanged.
- Visual QA passed at 1904×1016, 1024×768, and 390×844.
- Desktop and tablet show the centered two-color split with a clean O/V gap at the seam.
- Mobile shows the full wordmark on the stacked black half.
- No horizontal overflow and no browser console errors; the two existing Three.js warnings remain unchanged.

## Current state

The inverse split project-intake finale once again has its centered two-color DAOVOS wordmark, implemented as one unclipped SVG and revealed entirely through the existing GSAP timeline.

