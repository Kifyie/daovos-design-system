---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# What We Build Kinetic Instruments

## What changed

- Updated `src/components/sections/WhoWeAreSection.jsx` with three purpose-built kinetic instruments on the `WHAT WE / BUILD?` title plane:
  - a twelve-point star rotor inside the top-right black block;
  - a counter-rotating orbital register in the lower bone field;
  - a twelve-mark activity rail with a restrained breathing rhythm.
- Added independent X/Y clip reveals for the three instruments within the existing scrubbed handoff timeline.
- Added a scoped ambient GSAP timeline for star rotation, reverse orbital rotation, and tick movement.
- Updated `src/components/sections/who.css` with responsive monochrome SVG styling, technical hairlines, and transform-only performance hints.

## Decisions

- Treated the new elements as one mechanical measurement system rather than unrelated decoration. The twelve divisions echo the site's column logic and DAOVOS's modular visual language.
- Reserved the strongest element—the twelve-point rotor—for the black corner, leaving the typography dominant.
- Used only flat bone/black geometry, hairlines, dashes, and nodes; no gradients, shadows, or rounded interface styling were introduced.
- Ambient motion uses only rotation and scale transforms, pauses when the WHO pin leaves view, and is skipped entirely under reduced-motion preferences.

## Backups

- None. No precious procedural or 3D assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- `git diff --check` passed for the changed source files.
- No browser screenshot was taken, per the user's request.

## Current state

The title plane now feels populated while it holds: the star turns slowly, the orbit register counter-rotates, and the lower rail pulses without competing with `WHAT WE / BUILD?`.

