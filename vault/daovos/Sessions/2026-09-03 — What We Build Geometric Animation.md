---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# What We Build Geometric Animation

## What changed

- Updated `src/components/sections/WhoWeAreSection.jsx` so the `WHAT WE / BUILD?` title plane constructs during the existing horizontal WHO-to-atlas handoff.
- Vertical grid lines now draw on the Y axis from alternating top and bottom origins.
- Horizontal grid lines now draw on the X axis from alternating left and right origins.
- The full-height left block builds vertically and the top-right block builds horizontally.
- `WHAT WE` wipes in from the left; `BUILD?` and its black slab wipe in from the right.
- Updated `src/components/sections/who.css` with targeted `will-change` hints for the animated transforms and clip paths.

## Decisions

- Kept every reveal strictly on the X or Y axis so the motion follows the card's rectangular geometry.
- Embedded the construction inside the parent scrubbed ScrollTrigger timeline instead of creating an independent entrance trigger. This keeps the animation synchronized with the incoming plane and prevents pop-in behavior.
- Reused the named `precision` ease and the deliberately slow WHO-to-atlas scroll range for a controlled editorial feel.
- Staggered the grid from edges and center while alternating transform origins, giving the field activity without adding floating, diagonal, or decorative motion.

## Backups

- None. No precious procedural or 3D assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- No browser screenshots were taken, per the user's request to handle visual checking themselves.

## Current state

The transition title card now visibly assembles as it enters: grid first, structural black blocks next, then the two opposing title wipes before the plane expands and holds.

