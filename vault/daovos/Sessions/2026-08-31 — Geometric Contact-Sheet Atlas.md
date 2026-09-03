---
date: 2026-08-31
type: session
status: done
tags: [session]
---

# Geometric Contact-Sheet Atlas

## What changed

- Rebuilt `src/components/sections/ServiceAtlasVisuals.jsx` as a dense editorial contact sheet with six large visual scenes and six extra typographic beats. The composition now mixes image crops, Calentha hero typography, Satoshi, `nm`, vertical spines, serials, apertures, matrices, and large pattern fields.
- Reworked `src/components/sections/service-journey.css` around repeated internal 8×8 visual grids so apparently irregular placements still land on shared geometric datums.
- Updated `src/components/sections/KineticServiceJourney.jsx` with scoped GSAP motion for image parallax, shutters, title reveals, orbit/ray motion, signal drawing, matrix movement, and vortex rotation. The continuous 23-column horizontal pin remains the parent motion system.
- Removed the obsolete `src/components/sections/ServiceAtlasArt.jsx` implementation after preserving it in the backup.

## Corrections from visual QA

- Pulled the first `CUSTOM` chapter upward to remove the dead opening band.
- Moved `ATTENTION → ACTION` into a protected grid cell so it no longer clips beneath the adjacent black panel.
- Moved the editorial quote into its own opaque column so the spotlight image cannot cover it.
- Gave `001`, `002`, and `003` true cap-height room and visible overflow so the numerals do not crop.
- Reduced long vertical service spines to a viewport-safe size.
- Replaced the incomplete orbit, signal-wave, and commerce-bar diagrams with a full optical field, wave/aperture plate, and edge-to-edge transaction matrix.
- Removed the misplaced `LIVE / CURRENT / DEPENDABLE` caption from the final artwork.
- Added bone-white knockout backgrounds beneath body-copy blocks so shared grid rules never pass through readable text.

## Key decisions

- Density comes from a few large and medium aligned moments, not tiny decorative UI debris.
- Every apparent overlap must resolve to the same row/column geometry; asymmetry is allowed, accidental clipping is not.
- Runtime motion remains GSAP-only and transform/opacity-based for performance.
- The existing hero, Hermes WHO WE ARE section, and split finale wordmark were not changed.

## Backup

- `backups/service-atlas-pre-dense-contact-sheet-2026-08-30/`

## Verification

- `npm run build` passes.
- Desktop horizontal states, narrow viewport behavior, and reduced-motion stacking were inspected in a real browser.
- No application errors were found; the console only reports the existing Three.js `Clock` deprecation warning.

## Current state

The post-WHO sequence is one uninterrupted GSAP horizontal service field with eleven title beats, six distinct image/pattern scenes, shared geometric datums, and an unchanged split project-intake finale.
