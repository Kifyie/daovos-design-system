---
date: 2026-08-29
type: session
status: done
tags: [session]
---

# Editorial Service Journey and Split Finale

## What changed

- Rebuilt `src/components/sections/ServiceJourney.jsx` around five full-bleed editorial photographs instead of schematic SVG diagrams or generated patterns.
- Reworked `src/components/sections/service-journey.css` for monochrome image treatment, responsive crops, uncluttered framing, and a responsive inverse split finale.
- Added five locally stored image assets under `public/images/service-journey/`:
  - `custom-websites.jpg`
  - `landing-experiences.jpg`
  - `commerce-systems.jpg`
  - `interface-systems.jpg`
  - `care-optimization.jpg`
- Kept the horizontal Service Journey and gave each of its four page handoffs a different GSAP spatial transition.
- Replaced the old static ending with a near-black/bone project-intake split: “YOU BRING THE IDEA” / “WE BUILD THE EXPERIENCE.”
- Moved the complete canonical DAOVOS wordmark fully onto the dark plane. This avoids clipping the O or V while preserving the kinetic seam reveal.

## Key decisions

- Real photography replaced diagrams because the schematic language repeatedly felt generic and mechanical. Each photo now communicates the service by association while the surrounding type carries the precise offer.
- Photos are downloaded locally instead of hotlinked so production does not depend on an external image request.
- All five sources are normalized with one restrained grayscale/bone treatment. This makes different photographs read as a single DAOVOS editorial collection.
- GSAP owns every meaningful motion: scroll pinning, horizontal travel, Z-depth, four distinct chapter handoffs, photographic crop reveals, slow inner-image drift, finale panels, seam, wordmark, and copy masks.
- The hero, procedural 3D logo, and Hermes WHO WE ARE component were not edited during this work.

## Image sources

All selected images were marked free to use under the Unsplash License when downloaded.

- Custom Websites — [Marco Cavallera, brutalist facade](https://unsplash.com/photos/large-brutalist-building-with-sunset-light-on-facade-BliKEO1iUAo)
- Landing Experiences — [Pedro Farto, stage spotlights](https://unsplash.com/photos/spotlights-illuminate-a-silhouetted-person-on-a-dark-stage-rD0ghUeQvok)
- Commerce Systems — [Ela De Pure, minimalist retail shelves](https://unsplash.com/photos/a-minimalist-shop-with-shelves-and-products-nzisN6dYiV8)
- Interface Systems — [Logan Voss, abstract computer surface](https://unsplash.com/photos/a-computer-screen-with-an-abstract-pattern-on-it-LDcXZ9OBgAY)
- Care + Optimization — [server infrastructure](https://unsplash.com/photos/a-close-up-of-a-server-room-3Nwt6w-KU3E)

## Motion system

1. Architecture collapses into a horizontal scan while the spotlight plane opens from the right.
2. The spotlight lifts and tilts while the commerce image arrives from Z-depth.
3. Commerce compresses to a datum strip while the interface plane unfolds vertically.
4. The interface plane peels away while the infrastructure image expands and resolves.
5. The final chapter rises out as two inverse panels close into the project-intake page.

## Backup

- `backups/service-journey-pre-diagram-finale-redesign-2026-08-29/ServiceJourney.jsx`
- `backups/service-journey-pre-diagram-finale-redesign-2026-08-29/service-journey.css`

## Verification

- `npm run build` passes; the existing bundle-size warning remains.
- Browser QA passed at 1440×900, 1024×768, and 390×844.
- Checked all five settled chapters, all four intermediate handoffs, finale entry/final state, lazy-loaded local images, and zero horizontal overflow.
- `prefers-reduced-motion` shows five vertical static chapters plus a static finale with no pinning or scrubbed animation.
- Fresh-page console: zero errors; only the two pre-existing Three.js warnings remain.

## Current state

The page order remains Hero → hero-card/wordmark transition → Hermes WHO WE ARE → horizontal Service Journey → kinetic split project-intake finale. The Service Journey now uses real editorial photography and distinct transitions rather than schematic diagrams or procedural patterns.

