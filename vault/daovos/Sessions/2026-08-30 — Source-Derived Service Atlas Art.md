---
date: 2026-08-30
type: session
status: done
tags: [session]
---

# Source-Derived Service Atlas Art

## What changed

- Added `src/components/sections/ServiceAtlasArt.jsx` with six distinct, locally stored vector artworks:
  - Bklit-derived radar, scatter, Sankey, and sunburst geometry.
  - Fffuel-derived folded-perspective and vortex geometry.
- Updated `src/components/sections/KineticServiceJourney.jsx` to replace the six handmade diagrams while preserving the single continuous 23-column horizontal atlas and the existing split finale.
- Updated `src/components/sections/service-journey.css` for the new artwork and removed the bottom atlas loading/progress bar completely.
- Added [[Abstract Asset Sources]] with the user's approved discovery catalog and DAOVOS-specific source/licensing rules.
- Linked the asset catalog from [[DAOVOS Design System]].

## Key decisions

- Bklit is used as an open-source chart-geometry reference, not as a copied Bklit Studio graphic. This keeps the implementation within the repository's MIT chart-component surface.
- Fffuel exports were reduced to flat monochrome SVG geometry; gradients were removed to preserve the DAOVOS palette and flat architectural language.
- Every artwork has a separate visual grammar and GSAP motion signature so the atlas does not feel like one shape morphing repeatedly.
- All runtime motion remains GSAP-driven: flow-line drawing, pulsing data marks, opposing vortex rotation, folded-plane drift, and sunburst orbit.
- The existing hero, Hermes WHO WE ARE section, procedural 3D logo, horizontal scroll architecture, and split DAOVOS finale were not changed.

## Backup

- `backups/service-atlas-pre-bklit-fffuel-art-2026-08-30/KineticServiceJourney.jsx`
- `backups/service-atlas-pre-bklit-fffuel-art-2026-08-30/service-journey.css`

## Verification

- `npm run build` passes. The pre-existing bundle-size warning remains.
- Desktop browser QA at 1440×900 passes: no app console errors, no horizontal page overflow, no loading-bar DOM, and the atlas-to-finale handoff remains correct.
- Mobile browser QA at 390×844 passes: no horizontal page overflow and no loading-bar DOM.
- Reduced-motion browser QA passes: media query resolves, no pin spacers are created, and the atlas transform is `none`.
- Only the pre-existing Three.js `Clock` deprecation warnings appear; the hero code was not touched.

## Current state

The active post-WHO section is still one uninterrupted GSAP horizontal service atlas, now populated by six distinct source-derived artworks instead of handmade diagrams. The centered two-color DAOVOS split finale remains intact.
