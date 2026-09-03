---
date: 2026-08-24
type: design-system
status: canonical
tags: [design-system, brand, tokens, rules]
---

# DAOVOS Design System

> [!abstract] Source of truth
> This note documents the canonical Visual Operating System (VOS) as implemented in the specimen workbench (`src/App.jsx` chapters 01–12) and token files (`src/tokens/`). **Follow these rules for ALL new UI work.** Live interactive reference: run the site → click into SPECIMEN mode.

## 01 — Brand Character

DAOVOS synthesizes an **architectural practice + precision manufacturing + modern engineering company** into an editorial digital language.

Six brand qualities, in order: `STRUCTURE · PRECISION · MODULARITY · RELIABILITY · SCALE · PROGRESS`.

Brand artwork renders strictly from canonical SVGs (symbol, wordmark, lockup). Never approximate with fonts or CSS redraws. Emblem = 6-module geometry (see [[DAOVOS Site]]).

## 02 — Color System

**Dual-root discipline: Bone White & Near Black. ZERO rainbow accents.**

### Canonical palette (6 core)

| Name | Hex | HSL | Role |
| ---- | --- | --- | ---- |
| Bone White | `#F4EEE8` | 30°, 32%, 93% | Canonical light surface, primary bg foundation |
| Near Black | `#111112` | 240°, 3%, 7% | Dark surface, primary ink, high-impact borders |
| Warm Stone | `#ABA6A1` | 30°, 6%, 65% | Muted metadata, secondary borders |
| Graphite | `#5A5958` | 30°, 1%, 35% | Secondary body copy, technical labels |
| Soft Concrete | `#C1BBB6` | 27°, 9%, 74% | Hairlines, quiet metadata panels |
| Pure White | `#FFFFFF` | 0°, 0%, 100% | Peak highlights, ultra-high contrast |

> [!note] Hero exception
> The hero's smoked-titanium scene uses `#EDE6DF` as its bone-white tone and `#0a0a0c/#0a0a0d` backdrop — established hero constants, do not "fix" them to match the specimen palette without user direction.

### Interface neutrals (4)

Jet Black `#0A0A0A` (deepest backdrops) · Charcoal `#171717` (elevated dark surfaces) · Slate `#2B2B2E` (hover states, dark boundaries) · Steel `#6B6B6F` (dark-mode muted text).

### Semantic tokens (`data-theme` driven, light ⇄ dark)

Light: bg `#F4EEE8` / surface `#EDE6DF` / raised `#E5DFD8` / sunken `#E0DAD3` / inverse+text `#111112`; borders `rgba(17,17,18, .12 / .24 / 1)`.
Dark: bg `#111112` / surface `#171717` / raised `#2B2B2E` / sunken `#0A0A0A` / inverse+text `#F4EEE8`; borders `rgba(244,238,232, .12 / .24 / 1)`.

## 03 — Typography

Fluid clamp matrix. Display face: **nm / Neo-Grotesk Display** (`public/fonts/nm/nm-medium.otf`). Body: **Inter Grotesk**. Technical: **DM Mono**.

| Token | Family | Size | LH | LS | Weight | Role |
| ----- | ------ | ---- | -- | -- | ------ | ---- |
| `type-display-xl` | nm | `clamp(4rem, 2.5rem+4.5vw, 7.5rem)` (64–120px) | 0.95 | −0.04em | 600 | Monumental headers |
| `type-display-l` | nm | `clamp(2.75rem, 1.8rem+3vw, 5rem)` (44–80px) | 1.0 | −0.03em | 600 | Section anchors, chapter titles |
| `type-h1` | nm | `clamp(2.25rem, 1.6rem+1.8vw, 3.5rem)` (36–56px) | 1.1 | −0.025em | 600 | Module headings |
| `type-h2` | nm | `clamp(1.75rem, 1.3rem+1.1vw, 2.5rem)` (28–40px) | 1.2 | −0.02em | 500 | Panel titles |
| `type-h3` | nm | `clamp(1.25rem, 1.05rem+0.6vw, 1.75rem)` (20–28px) | 1.3 | −0.015em | 500 | Feature titles |
| `type-body-l` | Inter | 18px | 1.55 | −0.01em | 400 | Lead copy, longform |
| `type-body-m` | Inter | 16px | 1.6 | 0 | 400 | Standard interface body |
| `type-body-s` | Inter | 14px | 1.5 | +0.01em | 400 | Captions, footnotes |
| `type-label` | DM Mono | 12px | 1.4 | +0.14em | 600 | UPPERCASE indices, badges, buttons |
| `type-micro` | DM Mono | 10px | 1.3 | +0.20em | 600 | Coordinates, timestamps, engineering stamps |

Rules: labels/micro are uppercase mono with wide tracking; display type uses tight negative tracking; `text-wrap: balance` on display specimens.

## 04 — Spacing (X = 8px baseline)

**Zero arbitrary spacing values. Every margin/padding/gap derives from the 8px multiplier.**

`--space-1` 4px (.5x) · `--space-2` 8px (**base**) · `--space-3` 12px · `--space-4` 16px · `--space-6` 24px · `--space-8` 32px · `--space-12` 48px · `--space-16` 64px · `--space-20` 80px · `--space-24` 96px · `--space-32` 128px · `--space-40` 160px · `--space-48` 192px.

Section rhythm: xs 32 / sm 48 / md 80 / lg 128 / xl 192 px.

## 05 — Responsive Grid

Desktop **12 col / 24px gutter / 5% margin / max-width 1440px** · Tablet **8 col / 24px / 5%** (@1024px) · Mobile **4 col / 16px / 4%** (@640px).

**Disciplined asymmetry is a signature** — avoid centered generic SaaS layouts. Canonical formulas (via `<Grid asymmetric="…">`):

`5 : 7` Editorial Narrative · `7 : 5` Inverted Display · `4 : 8` Architectural Columnar · `3 : 9` Technical Index · `8 : 4` Primary Feature + Rail · `2 : 10` Wide Span Margin · `1 : 5 : 6` Triple Asymmetric.

## 06 — Structural Lines & Geometry

1px architectural hairlines everywhere; registration crosshairs + coordinate stamps as decoration language. Divider taxonomy: `subtle` (default) / `strong` (datum) / `dashed` (ledger) / `marker=crosshair` w/ index + coordinate text.

Radii ladder (restraint rule — **default 0px, never bubbly cards or pills**):

`--radius-none` 0px (structural/editorial default) · `subtle` 2px (micro badges) · `sm` 4px (code blocks, tags) · `md` 6px (inputs, selectors) · `interactive` 8px (primary buttons) · `lg` 12px (**strictly reserved for rare modals**).

## 07 — Imagery & Materials

Image treatments (via `<Media treatment>`): `raw` / `monochrome` / `muted` / `material` / `halftone`. Architecture/concrete subject matter, monochrome normalized, captioned as figures (`FIG. 01 // CORE`) with aspect ratios.

Procedural CSS texture classes (`src/styles/textures.css`): `texture-paper` (fine grain), `texture-concrete` (fractal noise), `texture-metal` (titanium lattice), `texture-micro-grid` (24px lattice).

Approved discovery sources, licensing checks, and asset-handling rules live in [[Abstract Asset Sources]].

## 08 — Iconography

Unified geometric line icons, 24×24 viewBox, custom set in `src/components/icons/GeometricIcons.jsx` (grid12, crosshair, module6, plumb, columns-asym, layers, terminal, ruler, arrow-up-right, sun, moon, eye, shield, sliders, activity…). Stroke range 1–2.5px, default 1.5. lucide-react only for utility chrome inside specimen tooling, not brand surfaces.

## 09 — Primitives & Controls

Buttons: `primary` (inverse fill) / `secondary` (hairline border) / `ghost` / `icon` / disabled. Inputs/selects/checkboxes/radios/switches share hairline borders, 6px radius, mono uppercase labels. All interactive states transition on `--motion-duration-micro` + Precision easing.

Utility CSS classes available: `flex-row`, `flex-col`, `justify-between`, `items-center/end`, `gap-*`, `surface-raised/sunken/inverse`, `radius-subtle/technical/structural`, `text-primary/secondary/muted/inverse`, `font-medium/semibold/bold`, `mono`.

## 10 — Editorial Modules

`DisplayHeading` (index + subhead + title, asymmetric option) · `MetadataTable` (label/value/note ledgers, uppercase mono) · `TechnicalLeaderboard` (big metric + sub-caption grid) · `SectionIndex` (numbered chapter headers `01–12` + tag).

Voice: technical, declarative, specification-like ("STRUCTURE PRECEDES DECORATION").

## 11 — Motion

Durations: `micro` 160ms (state changes) · `interface` 360ms (panels/dropdowns) · `editorial` 760ms (mask reveals, line draws) · `cinematic` 1200ms (monumental reveals).

Easings:
- **Precision** `cubic-bezier(0.16, 1, 0.3, 1)` — THE default
- Mechanical `cubic-bezier(0.25, 0, 0, 1)` — heavy settle
- Settle `cubic-bezier(0.65, 0, 0.35, 1)` — balanced damping
- Sharp `cubic-bezier(0.4, 0, 0.2, 1)` — tactile feedback

Reveals use **architectural masks** (`TextMaskReveal`, `LineReveal`) — no generic fade-ups, no bouncy springs. Respect `prefers-reduced-motion` + the specimen's manual reduced-motion toggle (`data-reduced-motion`). Targets 60fps hardware transforms only.

## 12 — Accessibility & Quality Bar

WCAG AAA contrast targets. Reduced-motion support mandatory. 60fps render target. Every spacing/color/type decision tokenized (specimen exports CSS / JSON / Tailwind formats).

## Non-Negotiables Summary

> [!important] Before shipping any component, check:
> 1. Only the 10 colors above — no new hues
> 2. Spacing only from the 8px scale — no magic numbers
> 3. Type only from the 10-step ladder — no ad-hoc sizes
> 4. Radii ≤ 8px except rare modals; structural blocks are 0px
> 5. Motion on Precision easing; durations from the 4-step scale
> 6. Asymmetric grids over centered symmetry
> 7. Hairlines + registration marks over decorative ornament
