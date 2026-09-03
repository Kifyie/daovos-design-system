---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Kinetic Instrument SVG Origin Fix

## What changed

- Updated `src/components/sections/WhoWeAreSection.jsx` to assign the twelve-point star rotor and lower orbital rotor an explicit GSAP `svgOrigin` of `100 100`.
- Updated `src/components/sections/who.css` to remove the competing CSS `transform-box` and `transform-origin` rules from both SVG groups.

## Root cause

- The star polygon was rotating around its computed fill box while its dashed registration ring was centered in the SVG viewBox. The mismatched coordinate systems displaced the rotor from the ring during rotation.

## Decision and reason

- Both instruments now use the shared global SVG coordinate center. This keeps the rotor, hub, and registration geometry perfectly concentric at every angle.

## Backups

- None. No precious assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- `git diff --check` passed for both changed files.
- No browser screenshot was taken, per the user's request.

## Current state

The twelve-point star rotates in place inside its dashed ring, and the lower orbit register remains centered during its counter-rotation.

