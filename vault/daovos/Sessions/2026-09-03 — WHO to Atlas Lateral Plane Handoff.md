---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# WHO to Atlas Lateral Plane Handoff

## What changed

- Extended `src/components/sections/WhoWeAreSection.jsx` so the existing pinned WHO timeline now ends with a horizontal plane exchange into the service atlas.
- Wrapped the live WHO composition as the outgoing plane and added a bone-white atlas preview as the incoming plane.
- Added the transfer field, atlas preview grid, typographic preview, image crop, plane edges, responsive rules, and reduced-motion fallback in `src/components/sections/who.css`.
- Increased the WHO ScrollTrigger range from `+=340%` to `+=500%` so the new handoff has its own calm scroll distance instead of compressing the four existing manifesto slides.

## Motion decision

- The established hero → WHO handoff was rotated onto the horizontal axis: the WHO plane pulls back, exits to the right, and the atlas plane travels from the left to center before expanding to fill the viewport.
- Only `scale` and `xPercent` are animated. There is no Y-axis or diagonal travel.
- The incoming preview fades to the shared bone surface immediately before the live `ServiceJourney` takes over, preserving a clean handoff into its existing axis-wipe system.

## Backups

- `backups/WhoWeAreSection_PRE-LATERAL-HANDOFF_2026-09-03.jsx`
- `backups/who_PRE-LATERAL-HANDOFF_2026-09-03.css`

## Verification

- `npm run build` passes. The existing large-chunk advisory remains non-blocking.
- No browser screenshot was taken, following the user's request to verify the visual result themselves.

## Current state

- The site now has two related spatial handoffs: Hero → WHO moves vertically; WHO → service atlas moves horizontally from left to right.

