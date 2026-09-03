---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Service Atlas Microcopy Declutter

## What changed

- Removed the two tiny header labels from the live service atlas in `src/components/sections/KineticServiceJourney.jsx` while retaining its horizontal structural rule.
- Removed the six small index/eyebrow labels above the service headings: digital homes, decisive route, discovery to purchase, organized for use, system stays live, and DAOVOS system.
- Removed the matching tiny header and service-index labels from the atlas preview in `src/components/sections/WhoWeAreSection.jsx`.

## Key decision

- Retained the large headings, body copy, vertical service lanes, grid rules, image captions, and artwork metadata. The pass removes only the repeated micro labels shown in the user's reference, preserving useful hierarchy without the extra visual noise.

## Backups

- The existing handoff backups remain available: `backups/WhoWeAreSection_PRE-LATERAL-HANDOFF_2026-09-03.jsx` and `backups/who_PRE-LATERAL-HANDOFF_2026-09-03.css`.

## Verification

- `npm run build` passes. The existing large-chunk advisory remains non-blocking.
- No browser screenshot was taken, following the user's request.

## Current state

- The service atlas and its incoming preview now use quieter top rules and begin directly with their primary headings.

