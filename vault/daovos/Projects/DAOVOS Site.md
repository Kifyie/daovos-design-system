---
date: 2026-08-24
type: project
status: canonical
tags: [project, architecture, daovos]
---

# DAOVOS Site

Brand + design-system site for DAOVOS. Local repo: `C:\Users\sunny\OneDrive\Documents\daovos site`. Full visual rules: [[DAOVOS Design System]].

## Stack

- React 19 + Vite 6, plain JavaScript (jsx) — no TypeScript
- Three.js r185 raw WebGL — **no react-three-fiber**, no ogl for the logo (ogl is installed but unused there)
- lucide-react for utility icons; custom geometric icon set in `src/components/icons/GeometricIcons.jsx`
- Deploys via Vercel (`.vercel/`). Build check: `npm run build`
- Fonts are self-hosted in `public/fonts/` — Aktura, Britney-Variable, Calentha, CaskoLuxuryDemo, Satoshi, Styro, Tanker + `nm/nm-medium.otf` (the display face)

## How The Site Works

The public runtime is hard-gated to `website` mode in `src/App.jsx`. The internal specimen code remains available in source for development, but no public component, callback, navigation item, or state transition can open it.

### Public mode: `website`
Renders `<HeroPlaneTransition><DaovosHero /></HeroPlaneTransition>`, then `<WhoWeAreSection />` (v6 "The Manifesto Pin" — see [[2026-08-25 — WHO WE ARE Completed + GSAP Tooling]]), then `<ServiceJourney />`. All three live inside the GSAP ScrollSmoother wrapper (`#smooth-wrapper`/`#smooth-content`). The first GSAP transition scales and lifts the real hero, exchanges it for a populated WHO preview over alternating canonical wordmark rows, then expands the preview fullscreen before yielding to the live WHO section. At the end of the live WHO pin, a second exchange pulls the WHO plane back and sends it right while an atlas preview enters from the left, expands, and yields to the live service atlas; see [[2026-09-03 — WHO to Atlas Lateral Plane Handoff]]. The old liquid wave is no longer mounted. A click target in the navbar opens the specimen (`onSpecimenClick`).

Hero composition (`src/components/hero/DaovosHero.jsx`, ~321 lines), layered back-to-front:
1. `HeroIntroReveal` — fullscreen SVG-logo preloader → dual-blade shutter reveal
2. `HeroBlueprintReveal` — blueprint hairline grid traces (~1.05 s) then dissolves
3. `RippleDistortion` — concrete plate substrate w/ cursor ripples (opacity 0.16)
4. `LineWaves` — bone-white line field, blurred, masked from center (opacity 0.42)
5. Vignette + top/bottom feather gradients + `hero-floor-glow` + `HeroGrain` film plate
6. `HeroNavbar` (staggered entrance, z 50)
7. Visual core: Layer A `HeroBackdropText` ("DAOVOS" monument type) → Layer B `Logo3DCanvas` (**z 10, UNTOUCHED centerpiece**) → Layer C `HeroAccentOverlay` ("DIGITAL / SYSTEMS", z 8, tucked behind emblem)
8. Bottom row: `HeroBottomLeft` narrative + `HeroFeatureSlab` ("ACCEPTING NEW COMMISSIONS")
9. `HeroHud` — registration marks, rails, telemetry, scroll cue

Choreography: intro completes → `hasEntered` at +1050 ms → staggered entrances all on `cubic-bezier(0.16, 1, 0.3, 1)` (Precision easing). Mouse parallax lerps into `--par-x/--par-y` CSS vars consumed by depth layers; the 3D canvas has its own independent rotation rig and is NOT affected by parallax.

### Internal source-only mode: `specimen` (design system workbench)
The full spec: `src/App.jsx` (~1049 lines) renders 12 chapters — Brand & Geometry / Color / Typography / Spacing / Grid / Structural Lines / Imagery / Iconography / Primitives & Controls / Editorial / Motion Lab / Tokens & Export. Has sticky nav bar, chapter jump bar, grid overlay toggle (`src/specimen/GridOverlay.jsx`), theme toggle (bone-white ⇄ near-black via `data-theme` on root), reduced-motion toggle (`data-reduced-motion`). Also mounts `<Agentation />`.

## Critical Assets

> [!warning] The 3D logo is code, not a model
> `src/components/hero/Logo3DCanvas.jsx` builds the emblem procedurally: 6 rectangular blocks (`THREE.ExtrudeGeometry`, depth 34, bevel 3.8/2.8) + a custom GLSL ShaderMaterial (studio lighting rig, 3D voronoi glass lattice, hover spotlight mask, click shockwave physics). There is NO .glb/.gltf file. **Back up this file to `backups/` before modifying.**
>
> Canonical module coordinates (SVG space, datum 511.5/408): center-top (478.50, 240.80, 66.30×162.70), left-top (380.50, 322.50, 63.80×81.00), right-top (578.70, 322.50, 63.80×81.00), left-bottom (380.50, 419.20, 63.80×77.90), center-bottom (478.50, 419.20, 66.30×156.00), right-bottom (578.70, 419.20, 63.80×77.90).
> Same geometry powers `DaovosSymbol.jsx` (flat SVG, viewBox 512×512, scale 1.1).

## Component Map

| Folder | Contents |
| ------ | -------- |
| `hero/` | DaovosHero, Logo3DCanvas, HeroIntroReveal, HeroBlueprintReveal, RippleDistortion, LineWaves, LiquidEther, AnimatedShaderBackground, HeroGrain, HeroNavbar, HeroBackdropText, HeroAccentOverlay, HeroBottomLeft, HeroFeatureCard(slab), HeroHud |
| `sections/` | HeroPlaneTransition (hero-card exchange + GSAP wordmark field), WhoWeAreSection (v6 Manifesto Pin), dormant LiquidSplash recovery source, Beams, section CSS |
| `brand/` | DaovosSymbol, DaovosWordmark (bespoke SVG paths), DaovosLockup, Symbol6ModuleExplorer |
| `primitives/` | Container, Grid (+GridItem, asymmetric formulas), Stack, Divider, Surface, Label, Media |
| `controls/` | Button, Link, Input, Textarea, Select, Checkbox, Radio, Switch |
| `editorial/` | DisplayHeading, SectionIndex, MetadataTable, TechnicalLeaderboard |
| `motion/` | EasingCurvesVisualizer, TextMaskReveal, LineReveal, PageTransitionDemo |
| `icons/` | GeometricIcons.jsx — 24×24 line icon library (grid, crosshair, module6, plumb, layers…) |
| `specimen/` | GridOverlay (12-col debug overlay) |

## Tokens

Dual-source: `src/tokens/*.js` (data used by specimen UI) + `src/tokens/*.css` (custom properties used everywhere). See [[DAOVOS Design System]] for every value.

## Backups Index

| Date | File | Reason |
| ---- | ---- | ------ |
| 2026-08-26 | `backups/PlaneShiftTransition_PRE-EXCHANGE_2026-08-26.jsx` + `backups/plane-shift_PRE-EXCHANGE_2026-08-26.css` | Before replacing the empty spatial handoff with the hero-card exchange |
| 2026-08-25 | `backups/HeroIntroReveal_PRE-PORTAL_2026-08-25_015456.jsx` | Before portal-intro rework (unrecorded session) |
| 2026-08-25 | `backups/App_PRE-WHOWEARE_2026-08-24_140830.jsx` (timestamped 08-24) | Before WHO WE ARE integration |
| 2026-08-24 | `backups/Logo3DCanvas_PRE-MOSS_2026-08-24_010747.jsx` | Before moss-takeover experiment (reverted same day) |
