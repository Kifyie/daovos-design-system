---
date: 2026-08-26
type: session
status: done
tags: [session]
---

# Hero Card Exchange + Wordmark Field

## What changed

- Replaced the empty dual-plane interstitial with `src/components/sections/HeroPlaneTransition.jsx` and `src/components/sections/hero-plane-transition.css`.
- Updated `src/App.jsx` so the real `<DaovosHero />` is wrapped by `<HeroPlaneTransition>` and remains the outgoing plane.
- Updated `src/components/sections/index.js` to export `HeroPlaneTransition`.
- Removed the superseded `PlaneShiftTransition.jsx` and `plane-shift.css` after backing them up.
- Left `src/components/sections/WhoWeAreSection.jsx`, `src/components/sections/who.css`, and all hero/3D source files unchanged during this revision.

## Key decisions

- The transition is now a literal page-plane exchange: the live hero scales down, exits upward, a WHO preview rises at the same reduced scale, then expands to fill the viewport.
- The empty transfer space is filled by five horizontally moving rows of the canonical `DaovosWordmark` SVG. Adjacent rows move in opposite directions.
- All transition motion is GSAP: the pinned scroll timeline, hero scale/lift, incoming plane rise/zoom, metadata fades, preview handoff, and perpetual wordmark rows. CSS contains no transitions or keyframes for this component.
- The preview recreates only the first WHO frame as a lightweight visual bridge. The actual Hermes WHO component remains the sole live destination and owns its original LiquidEther and manifesto ScrollTrigger timelines.
- The transition stage is hidden by GSAP exactly after its trigger leaves, preventing it from covering the first live WHO frame.
- Reduced motion removes the pin, plane exchange, and marquees, leaving the normal hero followed directly by the readable static WHO fallback.

## Backups

- `backups/PlaneShiftTransition_PRE-EXCHANGE_2026-08-26.jsx`
- `backups/plane-shift_PRE-EXCHANGE_2026-08-26.css`
- Earlier WHO boundary backups remain at `backups/WhoWeAreSection_PRE-DOSSIER_2026-08-26.jsx` and `backups/LiquidSplash_PRE-DOSSIER_2026-08-26.jsx`.

## Verification

- `npm run build` passes. The only build notice is the existing bundle-size warning.
- Browser audit passed at 1440×900 and 390×844 across pullback, exchange, incoming-plane hold, zoom, handoff, and live WHO states.
- Reduced-motion audit confirmed a one-viewport unpinned hero wrapper, no incoming preview, and no horizontal overflow.
- Browser console: zero errors. Existing Three.js warnings remain unrelated.
- Visual evidence is in `output/playwright/exchange-desktop-*-v3.png`, `exchange-desktop-who-final.png`, and `exchange-mobile-*.png`.

## Current state

The website sequence is now `HeroPlaneTransition(DaovosHero) → WhoWeAreSection`. The transition has populated motion between two visibly separate planes while preserving Hermes' WHO WE ARE section unchanged.

