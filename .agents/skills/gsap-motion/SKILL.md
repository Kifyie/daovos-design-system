---
name: gsap-motion
description: "Use when animating React sites with GSAP ScrollTrigger."
version: 1.0.0
author: DAOVOS project
license: MIT
metadata:
  hermes:
    tags: [gsap, animation, react, scrolltrigger, motion]
---

# GSAP Motion (React + Vite)

## When to use
Animating React/Vite marketing or brand sites with GSAP — especially
ScrollTrigger pins, SplitText text reveals, ScrambleText, and `@gsap/react`'s
useGSAP hook.

## Setup facts (verified)
- Install: `npm i gsap @gsap/react`. As of 2026-08, latest = **gsap 3.15.0**,
  @gsap/react 2.1.2. Since GSAP 3.13 **all Club plugins are free** —
  SplitText, ScrollSmoother, ScrambleTextPlugin, DrawSVG, MorphSVG, Flip,
  GSDevTools ship in the public npm package.
- Register once at module top of each file that uses them:
  `gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin, CustomEase, useGSAP);`
- Named custom eases via `CustomEase.create('precision', '0.16,1,0.3,1')`.

## useGSAP rules (the big pitfall source)
- Always `{ scope: rootRef }` so selectors are scoped and cleanup automatic.
- useGSAP auto-reverts tweens/ScrollTriggers/Splits on unmount — do NOT also
  manually kill inside it unless you added non-GSAP listeners.
- `dependencies: [...]` option re-runs the effect when deps change; use it for
  view-mode switches instead of conditional hooks.
- SplitText.create(el, {type:'lines,chars', mask:'lines'}) — `autoSplit:true`
  re-splits on resize; without it, fonts loading late breaks line splits →
  create splits inside `document.fonts.ready.then(...)`, or call
  `ScrollTrigger.refresh()` after fonts load.

## ScrollTrigger pinning checklist
- Pin a wrapper div (`position:relative`), not the animated children.
- `anticipatePin: 1` prevents jump-flash when the pin starts below fold.
- scrub value 0.5–1 gives buttery catch-up; `scrub: true` is snappy/mechanical.
- After any layout-affecting change (fonts, images, accordion), call
  `ScrollTrigger.refresh()`.
- ScrollSmoother: create ONE instance globally, wrapper/content ids required,
  `paused: true` during intro overlays then unpause; skip entirely under
  prefers-reduced-motion.

## Reduced motion pattern
```jsx
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  root.classList.add('static-fallback');
  return; // skip all timelines; CSS class shows final state
}
```

## Debugging
- Playwright screenshot harness works well: launch chromium, scroll to pin
  offsets (`pinTop + total*frac`), waitForTimeout(1200) after instant scroll,
  screenshot per slide. Console/pageerror collectors catch shader/plugin errors.
- `ScrollTrigger.getAll()` / GSDevTools for live inspection.

## Project notes (DAOVOS site)
- Brand ease 'precision' = cubic-bezier(0.16,1,0.3,1); tokens in
  `src/tokens/motion.js`.
- WhoWeAreSection v6 pattern: pinned timeline `end:'+=340%'`, SEG=2.5 scroll
  units/slide, SplitText masked chars yPercent ±130, ghost words at 7% alpha,
  ledger rows scramble-in their labels.
