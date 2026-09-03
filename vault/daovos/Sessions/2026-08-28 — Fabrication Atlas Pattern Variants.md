---
date: 2026-08-28
type: session
status: done
tags: [session]
---

# Fabrication Atlas Pattern Variants

## What changed

- Rebalanced the Commerce Systems dock in `src/components/sections/FabricationAtlas.jsx`.
  - The material field now sits on the left as a broad landscape plate.
  - Commerce copy sits in a dedicated right-hand column instead of competing with a tall center panel and leaving a dead right margin.
  - Added tablet-specific title sizing in `src/components/sections/fabrication-atlas.css` so Commerce remains fully visible at 1024px.
- Expanded `src/components/sections/DaovosDitherField.jsx` from one recurring noise treatment into five distinct procedural systems:
  - `01` Topographic Relief
  - `02` Directed Signal Bands
  - `03` Modular Cell Matrix
  - `04` Radial Logic Network
  - `05` Diagnostic Weave
- Added live pattern names to the material-field readout.
- Reworked the GSAP dock transition:
  - The active plate mechanically collapses to a narrow datum line.
  - The pattern and dock coordinates swap while the plate is closed.
  - The new plate expands from the line with its own pattern and proportions.
  - This prevents the sequence from reading as the same liquid image repeatedly morphing.
- Updated `scripts/qa-fabrication.mjs` capture positions to match the revised timeline holds.
- The DAOVOS finale now inherits the Diagnostic Weave pattern, maintaining continuity from the final fabrication dock.

## Key decisions and why

- The patterns share one monochrome shader and one GSAP clock for performance, but their underlying equations are deliberately different. This preserves system unity without visual repetition.
- Commerce uses the reversed split because its long heading needs a quieter dedicated column and its cell matrix benefits from a broad, unobstructed field.
- Pattern changes happen behind a closed datum line rather than crossfading or fluidly blending, matching DAOVOS' mechanical/architectural motion language.

## Backups

- No hero, procedural 3D logo, or Hermes WHO source was modified.
- Existing pre-fabrication backups remain unchanged in `backups/`.

## Verification

- `npm run build` passes; only the existing bundle-size warning remains.
- Browser QA passed at 1440×900, 1024×768, and 390×844.
- All five pattern families render without WebGL or console errors.
- No horizontal overflow at tested widths.
- Reduced-motion still exposes all five readable output scenes and the static resolved finale.

## Current state

The Fabrication Atlas now uses five visually distinct procedural plates. Commerce has a reversed split placement across desktop/tablet and a stacked mobile interpretation. The surrounding WHO WE ARE and hero systems remain untouched.

