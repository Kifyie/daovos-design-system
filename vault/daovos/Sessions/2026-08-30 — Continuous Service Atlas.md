---
date: 2026-08-30
type: session
status: done
tags: [session]
---

# Continuous Service Atlas

## Outcome

Rebuilt the post-WHO service journey around the supplied motion reference. The rejected sequence of separate viewport-sized service panels is gone. The replacement is one uninterrupted bone-white editorial atlas that moves horizontally as a single composition: mixed-width columns, multiple modules visible at once, large serials, vertical labels, open negative space, and illustrations placed across shared grid lines.

The hero and Hermes WHO WE ARE section were not changed.

## Files changed

- `src/components/sections/KineticServiceJourney.jsx`
  - Added one 23-column service atlas containing the Custom Websites, Landing Experiences, Commerce Systems, Interface Systems, and Care + Optimization stories.
  - Added six lightweight editorial illustrations: radial portal, focus target, browser glyph, commerce path, interface stack, and continuity rings.
  - Added one scoped `useGSAP` lifecycle for the atlas, module reveals, illustration parallax, ambient rotor movement, and the following project-intake finale.
- `src/components/sections/service-journey.css`
  - Replaced discrete screen styling with a continuous variable-width column system.
  - Preserved the graphite/bone palette, large type, structural rules, and spacious editorial hierarchy.
  - Added responsive horizontal widths and a reduced-motion vertical fallback.
- `src/components/sections/ServiceJourney.jsx`
  - Kept the public `ServiceJourney` interface stable by re-exporting the new implementation.

## Motion decisions

- A single GSAP `ScrollTrigger` pins the stage and translates the complete atlas from left to right with scrubbed progress.
- Reveal and parallax triggers use the horizontal tween as `containerAnimation`, so modules animate according to their actual position inside the same shared canvas.
- Ambient illustration movement is a GSAP timeline that pauses when the atlas is out of view.
- The finale retains its own GSAP handoff and the approved centered two-color DAOVOS wordmark across the black/bone seam.
- Reduced motion creates no pins or scrubbed movement; the atlas becomes a fully readable vertical sequence.

## Key decisions and why

- **One joined canvas instead of pages:** the reference depends on adjacent columns and graphics remaining visible together. Treating each service as a slide destroyed that editorial continuity.
- **Variable column widths:** narrow spines, medium graphic bays, and wide copy fields reproduce the reference's irregular but controlled rhythm.
- **Large modules over micro-HUD clutter:** oversized type and illustrations provide hierarchy while retaining deliberate empty space.
- **No 3D assets:** depth comes from horizontal translation, module parallax, overlap, and scale rather than models.

## Backups

- `backups/service-journey-pre-kinetic-editorial-rebuild-2026-08-30/`
- `backups/service-journey-discrete-panels-rejected-2026-08-30/`
- Earlier finale state remains in `backups/service-journey-pre-centered-splitmark-2026-08-29/`.

## Verification

- `npm run build` passes with the existing Vite chunk-size warning only.
- Browser QA passed at 1440×900, 1080×720, and 390×844.
- No console errors and no page-level horizontal overflow.
- Reduced-motion QA: `prefers-reduced-motion: reduce` produced zero `.pin-spacer` elements and a full-width vertical atlas.
- Visual captures are in `output/playwright/atlas-*.png`, including desktop progress states, the atlas-to-finale handoff, and the mobile finale.

## Current state

The live sequence is Hero → hero-card plane transition → Hermes WHO WE ARE → continuous GSAP service atlas → kinetic split project-intake finale. The current service atlas is the accepted implementation baseline; do not restore the rejected discrete service panels.

