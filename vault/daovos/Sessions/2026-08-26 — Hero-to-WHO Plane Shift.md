---
date: 2026-08-26
type: session
status: done
tags: [session, gsap, scrolltrigger, transition]
---

# 2026-08-26 — Hero-to-WHO Plane Shift

## What Changed

- Added `src/components/sections/PlaneShiftTransition.jsx` and `plane-shift.css`.
- Inserted the standalone transition between `DaovosHero` and `WhoWeAreSection` in `src/App.jsx`.
- Removed only the `LiquidSplash` import and render from `WhoWeAreSection.jsx`; the Hermes manifesto copy, layout, LiquidEther backdrop, and GSAP timelines remain unchanged.
- Removed the obsolete active `.liquid-splash` rules from `who.css`. The source component remains on disk but is no longer mounted.

## Key Decision

The first proposed bone-white dossier was rejected because it behaved like an inserted information page. The final direction is a **content-free spatial handoff**: the dark hero plane lifts into a brief bone-white datum field, then a separate dark plane rises and locks flush before WHO WE ARE begins. This communicates a change of page/plane without competing with the hero or Hermes section.

All transition movement is GSAP-driven with a scoped `useGSAP` timeline, ScrollTrigger scrub, `gsap.matchMedia()`, and compositor-friendly transforms/opacity. The stage is pinned without added spacing; the transition root defines the scroll distance so WHO WE ARE reaches the viewport exactly when the incoming plane locks.

## Backups

- `backups/WhoWeAreSection_PRE-DOSSIER_2026-08-26.jsx`
- `backups/LiquidSplash_PRE-DOSSIER_2026-08-26.jsx`

## Verification

- `npm run build` passes; only the existing large-chunk warning remains.
- Playwright desktop audit: transition begins directly after the hero, both planes animate through distinct 3D transforms, and WHO WE ARE reaches the viewport at the transition endpoint.
- Playwright mobile audit at 390px: no horizontal overflow and the shorter plane choreography remains active.
- Reduced-motion audit: no pin is created, the handoff collapses to a static 32px datum, and Hermes' existing `.who-static` fallback activates.
- Browser console: zero errors.

## Current State

Website flow is now: Hero → GSAP Plane Shift → WHO WE ARE v6 Manifesto Pin → dossier outro. The procedural 3D logo and all hero source files were untouched.

## Next Step

- User visual review of the new plane-shift timing and depth.

Related: [[DAOVOS Site]] · [[DAOVOS Design System]]
