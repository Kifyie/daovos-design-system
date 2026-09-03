---
date: 2026-08-29
type: session
status: done
tags: [session]
---

# Horizontal Service Journey

## Outcome

Replaced the rejected Fabrication Atlas / dither-dock experience and its separate DAOVOS Finale with one continuous post-Hermes signature sequence: a five-chapter horizontal service journey that resolves vertically into the final project invitation.

The production page order is now:

`HeroPlaneTransition → WhoWeAreSection → ServiceJourney`

The hero, procedural 3D logo, hero plane transition, and Hermes WHO WE ARE section were not modified.

## What changed

- Added `src/components/sections/ServiceJourney.jsx`.
  - One scoped `useGSAP()` architecture and one pinned `ScrollTrigger`.
  - Vertical input drives horizontal chapter travel.
  - Each incoming chapter is focused on its own Z-plane using transform depth, scale, and opacity; there are no 3D models.
  - The horizontal world exits upward while the final bone-white page rises vertically.
  - `gsap.matchMedia()` supplies desktop, tablet, mobile, and reduced-motion behavior.
  - Font-ready refresh, trigger cleanup, `invalidateOnRefresh`, and `refreshPriority` are included.
- Added `src/components/sections/service-journey.css`.
  - Spacious two-part composition: one large text block and one large illustration plane.
  - Five distinct flat SVG illustration systems:
    1. dither globe / custom websites
    2. focused route frames / landing experiences
    3. product flow lanes / commerce systems
    4. responsive interface assembly / interface systems
    5. continuity loop / care + optimization
  - No gradients, shadows, rounded cards, CSS keyframes, or CSS motion chains.
  - Reduced motion becomes a readable vertical stack with a static finale and no pin.
- Updated `src/App.jsx` to render `ServiceJourney` immediately after `WhoWeAreSection`.
- Updated `src/components/sections/index.js` to export `ServiceJourney`.
- Deleted obsolete source:
  - `src/components/sections/FabricationAtlas.jsx`
  - `src/components/sections/fabrication-atlas.css`
  - `src/components/sections/DaovosDitherField.jsx`
  - `src/components/sections/DaovosFinale.jsx`
  - `src/components/sections/daovos-finale.css`
  - rejected interim `SpatialBuildSequence.jsx` and `spatial-build-sequence.css`
  - obsolete `scripts/qa-fabrication.mjs`

## Key decisions and why

- **Horizontal passage is the core behavior.** The user clarified that horizontal scroll was mandatory. The section therefore uses real lateral chapter travel rather than repeated content swaps inside a fixed frame.
- **Z is used for planar focus only.** Panels approach and depart through depth to make the passage spatial without introducing 3D models or decorative object choreography.
- **Each chapter has a different illustration grammar.** This avoids the rejected repeated-morph feeling while keeping all imagery simple, flat, and legible.
- **Text and art never share the same visual job.** Copy stays spacious and stable; the illustration is the motion field. Redundant micro-indexes were removed after the first scrub review.
- **The ending is part of the same timeline.** It rises vertically from beneath the horizontal passage, producing directional and compositional resolution instead of beginning as another unrelated pinned module.

## Backups

- Original Fabrication Atlas / finale boundary: `backups/spatial-build-pre-rebuild-2026-08-29/`
- Rejected six-module Build Volume experiment: `backups/spatial-build-rejected-2026-08-29/`

## Verification

- `npm run build` passes.
- Existing Vite bundle-size warning remains; no new build error was introduced.
- Browser scrub audit completed at 1440×900, 1024×768, and 390×844.
- Audited stable states and intermediate handoffs for all five chapters plus the upward finale resolution.
- No horizontal overflow at tablet or mobile widths.
- `prefers-reduced-motion: reduce` verified with no pin and a valid vertical reading order.
- Browser console has no section errors. The two existing `THREE.Clock` deprecation warnings originate in the untouched hero.
- QA captures are in `output/playwright/journey-*.png`.

## Current state

The post-WHO experience is production-ready as the GSAP horizontal Service Journey. All meaningful motion is GSAP-driven. The WHO WE ARE choreography and hero remain intact.

