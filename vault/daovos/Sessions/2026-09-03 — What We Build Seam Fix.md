---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# What We Build Seam Fix

## What changed

- Updated `src/components/sections/who.css` to extend the `WHAT WE / BUILD?` card's full-height left black block 2px beyond its percentage-based grid boundary.
- Applied the same overlap at the mobile breakpoint.

## Decision and reason

- The adjacent left block and `BUILD?` slab were meeting at a fractional pixel while being composited as independently animated layers. The tiny overlap keeps both shapes aligned to the existing grid while covering the bone-colored sub-pixel seam throughout the scale animation.

## Backups

- None. No precious assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- No browser screenshot was taken, per the user's request.

## Current state

The left black rail and the horizontal `BUILD?` slab now read as one uninterrupted black plane.

