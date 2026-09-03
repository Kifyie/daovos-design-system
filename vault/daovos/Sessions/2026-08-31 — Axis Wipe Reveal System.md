---
date: 2026-08-31
type: session
status: done
tags: [session]
---

# Axis Wipe Reveal System

## What changed

- Replaced the horizontal service atlas's mixed text and artwork entrances with one restrained GSAP wipe language in `src/components/sections/KineticServiceJourney.jsx`.
- Removed SplitText character/word reveals, 3D flips, rotations, skews, diagonal translations, module drift, artwork parallax, and reveal-time box rotation from the atlas.
- Every atlas text line, label, serial, quote, image frame, graphic box, title line, and caption now reveals with a straight clip wipe from left, right, top, or bottom.
- Wipes are triggered by one lightweight GSAP ticker checking the real viewport rectangles of unmasked parent modules. Earlier IntersectionObserver approaches were removed because masked targets could remain blank and transformed module intersections were inconsistent. Vertical labels use their matching unmasked grid-column tracks as triggers.
- Wipe masks are explicitly initialized before ScrollTrigger can fire, preventing the previous visible-first flash.
- Added separate `atlasWipeX` and `atlasWipeY` CustomEase curves and slowed each wipe to `1.35s`.
- Removed the two-keyframe clip handoff after it caused an 80% reveal snap; each wipe now runs as one continuous eased clip interpolation.
- The ticker guarantees every visible module starts its wipe regardless of ScrollTrigger refresh state, direct navigation, or horizontal transforms, then removes itself after all triggers have completed.
- Each finished wipe clears `clip-path` completely. Keeping `inset(0)` clipped Calentha's overhanging letterforms even at the final state.
- Direct `clip-path` string tweening was ultimately removed after runtime sampling proved Chrome held the value at `100%` throughout the tween and jumped only when cleanup ran. The mask now uses four registered numeric CSS percentage properties (`--atlas-wipe-top/right/bottom/left`), which GSAP interpolates continuously every frame.
- Runtime sampling confirmed a right-to-left wipe progresses through `98.85% → 84.80% → 16.10% → 0.78%`, then removes the mask class and ends at `clip-path: none`.
- Rebuilt every vertical service spine as one opaque, bordered, full-height rectangular lane with its rotated label centered in the lane. This hides the smaller background grid cells behind the spine.
- Preserved the horizontal scroll, geometric layout, subtle internal illustration motion, reduced-motion path, and the approved split project-intake finale.

## Key decisions

- **One motion grammar:** axis-aligned wipes were chosen because they support the grid instead of fighting it and cannot drag text through neighboring columns.
- **Time-based entrance:** wipes play as calm `1.35s` GSAP animations rather than being compressed into a narrow scroll scrub window.
- **Continuous curve:** one custom axis-specific ease runs from the fully masked state to the final state; there is no keyframe seam that can snap.
- **Reliable trigger:** a deterministic geometry check starts each wipe once, including after refreshes, restored scroll positions, and horizontal transforms.
- **No persistent crop:** clip-path exists only during the wipe and is removed at completion, preserving display-font overhangs.
- **Explicit initial mask:** `gsap.set()` establishes every hidden wipe state during initialization; this fixes the visible → hide → animate flash caused by deferred `fromTo()` rendering.
- **Protected label lanes:** opaque full-height spine rectangles make the vertical labels structural grid divisions instead of text floating over smaller cells.

## Files changed

- `src/components/sections/KineticServiceJourney.jsx`
- `src/components/sections/service-journey.css`
- `vault/daovos/00 Dashboard.md`
- `vault/daovos/Sessions/2026-08-31 — Axis Wipe Reveal System.md`

## Backups

- None. No precious hero or procedural 3D assets were touched.

## Verification

- `npm run build` passes with Vite.
- The existing large-chunk advisory remains unchanged and is non-blocking.
- Per user request, final visual judgment is left to the user rather than spending credits on additional screenshots.

## Current state

The service atlas now uses only continuous, relaxed X/Y wipe entrances. Its vertical labels sit inside uninterrupted full-height rectangular grid lanes. The earlier collision-safe placements remain intact, and the finale is unchanged.
