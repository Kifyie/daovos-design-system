---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Signal Panel Image Collage

## What changed

- Replaced the procedural wave/ring/vertical-bar diagram in `src/components/sections/ServiceAtlasVisuals.jsx` with an image-led editorial collage.
- Reused `public/images/service-journey/interface-systems.jpg` in two deliberately different crops, set against the existing black field.
- Added a restrained black rectangular aperture and a small `INPUT 01 / OUTPUT 03` register to preserve the atlas's geometric language without imitating a data diagram.
- Updated `src/components/sections/service-journey.css` with the new crop geometry, high-contrast monochrome treatment, and register styling.
- Added the register to the wipe-target selector in `src/components/sections/KineticServiceJourney.jsx`, so every new piece participates in the existing X/Y-only reveal system.

## Key decisions

- The panel is photographic rather than illustrative because the rejected diagram felt ornamental and incomplete. Repeating one source through two exact crops creates depth while keeping the composition coherent.
- The title and caption remain unchanged so the content hierarchy and campaign narrative survive the visual replacement.
- The current wipe implementation and timing were not otherwise changed, avoiding regressions in the recently stabilized reveal system.

## Backups

- None required. No precious procedural 3D asset was modified.

## Verification

- `npm run build` passes with Vite. The existing large-chunk advisory remains non-blocking.
- Per the user's request, no browser screenshot or visual self-check was taken.

## Current state

- The `SIGNAL / INTO ACTION` interlude is now a dense monochrome image collage instead of a wavy schematic diagram.

