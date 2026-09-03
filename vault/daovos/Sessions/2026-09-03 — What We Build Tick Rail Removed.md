---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# What We Build Tick Rail Removed

## What changed

- Removed the twelve-mark activity rail from the `WHAT WE / BUILD?` title plane.
- Removed its JSX, responsive CSS, entrance wipe, initial GSAP state, and repeating ambient tween from `src/components/sections/WhoWeAreSection.jsx` and `src/components/sections/who.css`.

## Decision and reason

- The rail read as a generic equalizer and did not carry enough DAOVOS-specific meaning to justify the visual weight. The composition now relies on the stronger twelve-point star rotor and concentric orbital register.

## Backups

- None. No precious assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- `git diff --check` passed for both changed files.
- Confirmed no tick-rail selectors or constants remain.
- No browser screenshot was taken, per the user's request.

## Current state

The title card retains two purposeful kinetic instruments and no longer includes the horizontal tick rail.

