---
date: 2026-08-28
type: session
status: done
tags: [session]
---

# Atlas Headline State Fix

## What changed

- Fixed missing headline states in `src/components/sections/FabricationAtlas.jsx` for Commerce, Interface, Care + Optimization, and the other dock handoffs.
- Reordered the GSAP dock choreography so each outgoing headline remains visible until the pattern plate closes.
- Pattern, scene, and counter now switch atomically at the closed-datum moment.
- Inactive Atlas headlines remain in their readable resting position while their complete scenes are hidden. This prevents scrub seeking or reverse scrolling from exposing supporting copy while the title is still below its mask.
- Fixed the equivalent missing `YOU BRING / THE IDEA.` state in `src/components/sections/DaovosFinale.jsx`.
- The finale headline is now resolved before the seal becomes visible; the invitation still reveals afterward through GSAP.

## Key decision and why

- Visibility is now owned by each complete scene rather than independently overlapping headline/body timelines. This creates a hard invariant: if supporting copy is visible, its headline is visible too.

## Backups

- No hero, procedural 3D logo, or Hermes WHO source was modified.
- Existing pre-fabrication backups remain unchanged in `backups/`.

## Verification

- Desktop screenshots confirm complete headings for Commerce, Interface, Care + Optimization, and the DAOVOS finale.
- Browser QA passes at 1440×900, 1024×768, 390×844, and reduced motion.
- No console/page errors or horizontal overflow were detected.
- `npm run build` passes; only the existing bundle-size warning remains.

## Current state

The Atlas and finale no longer contain partial scrub states where secondary copy appears without its main title.

