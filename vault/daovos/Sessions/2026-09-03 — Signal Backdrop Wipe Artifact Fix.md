---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Signal Backdrop Wipe Artifact Fix

## What changed

- Updated the wipe-target selector in `src/components/sections/KineticServiceJourney.jsx` to exclude `.service-visual__artbox--signal`.
- The full black signal backdrop now remains solid while its title, image crops, aperture, register, and caption continue using the existing X/Y wipe reveals.

## Root cause

- The full-panel black backdrop and its foreground pieces were being clipped independently. During their stagger, the bone page showed through as a temporary square/notch above `SIGNAL / INTO ACTION`.

## Key decision

- Kept the content animations and removed animation only from the structural backdrop. Background planes should establish continuity rather than reveal as individual ornaments.

## Backups

- None required. No precious procedural asset was modified.

## Verification

- `npm run build` passes. The existing large-chunk advisory remains non-blocking.
- No browser screenshot was taken, following the user's request.

## Current state

- The signal panel retains a continuous black field throughout its reveal, eliminating the temporary bone square above the title.

