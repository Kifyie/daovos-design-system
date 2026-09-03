---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Lateral Handoff Title Plane Redesign

## What changed

- Replaced the miniature service-atlas preview inside `src/components/sections/WhoWeAreSection.jsx` with the actual `WHAT WE / BUILD?` title plane.
- Rebuilt the title plane in `src/components/sections/who.css` as a two-line composition: `WHAT WE` on bone and `BUILD?` reversed out of a wide black slab, with additional black edge and corner blocks.
- Changed the exposed transfer field from four pale columns to alternating black and bone columns with rotated canonical DAOVOS wordmarks.
- Removed the small transfer-field labels and index from the transition.

## Motion changes

- Increased the WHO pin range from `+=560%` to `+=700%`.
- Increased scrub smoothing from `0.75` to `1.05`.
- Lengthened pullback, outgoing travel, incoming travel, and incoming expansion durations.
- The title card is visible inside the incoming plane from the moment it travels in from the left and remains at full size for a 2.1-unit hold before the live atlas begins.

## Key decisions

- The incoming plane now communicates the chapter directly instead of pretending to be a miniature webpage.
- Black is structural: alternating transfer planes, a full-height left block, a top-right block, and the main `BUILD?` slab provide contrast without adding illustrative clutter.
- The final title is split across two lines so it fills the viewport without cutting off the question mark.

## Backups

- The pre-handoff backups remain available: `backups/WhoWeAreSection_PRE-LATERAL-HANDOFF_2026-09-03.jsx` and `backups/who_PRE-LATERAL-HANDOFF_2026-09-03.css`.

## Verification

- `npm run build` passes. The existing large-chunk advisory remains non-blocking.
- No browser screenshot was taken, following the user's request.

## Current state

- WHO exits right into a slower black-and-bone transfer field while the `WHAT WE / BUILD?` title plane enters from the left, expands, and holds before the service atlas.

