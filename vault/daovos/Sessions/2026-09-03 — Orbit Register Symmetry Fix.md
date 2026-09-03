---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Orbit Register Symmetry Fix

## What changed

- Updated the lower `WHAT WE / BUILD?` kinetic register in `src/components/sections/WhoWeAreSection.jsx`.
- Replaced the rotating ellipse with a second concentric circle.
- Replaced the two unequal orbit nodes with four identical nodes positioned at the exact cardinal points.
- Added a distinct dash treatment for the inner circle in `src/components/sections/who.css`.

## Decision and reason

- A rotating ellipse creates an intentionally tilted silhouette, which made the register look crooked against the rigid architectural grid. Concentric circles preserve balance at every rotation angle while the moving nodes still make the motion readable.

## Backups

- None. No precious assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- `git diff --check` passed for both changed files.
- No browser screenshot was taken, per the user's request.

## Current state

The lower kinetic register is now radially balanced: two centered dashed tracks, four evenly spaced nodes, static crosshair axes, and a centered hub.

