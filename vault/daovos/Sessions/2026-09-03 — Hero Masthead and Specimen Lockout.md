---
date: 2026-09-03
type: session
status: done
tags: [session]
---

# Hero Masthead and Specimen Lockout

## What changed

- Removed the complete interactive hero navbar from `src/components/hero/DaovosHero.jsx`.
- Deleted `src/components/hero/HeroNavbar.jsx` and removed its barrel export from `src/components/hero/index.js`.
- Removed both top registration crosshairs from `src/components/hero/HeroHud.jsx`; the bottom registration marks and scroll cue remain.
- Added `SPECIMEN_ACCESS_ENABLED = false` in `src/App.jsx`, removed the specimen callback from the hero, and hard-gated the render path to the public website.
- Added `src/components/hero/HeroTopRail.jsx`, a non-interactive masthead containing:
  - the canonical DAOVOS lockup;
  - a six-module technical datum;
  - independent-studio and capability metadata;
  - a restrained status pulse.
- Added responsive and reduced-motion masthead styling to `src/components/hero/hero.css`.

## Decisions

- The removed numbered navigation and specimen portal were replaced with information rather than new controls. The top of the hero now communicates identity and operating scope without suggesting unavailable navigation.
- The specimen workbench remains in source for internal development, but its public runtime branch is compile-time gated off and has no UI callback or portal component capable of opening it.
- The masthead uses only the established bone/graphite palette, canonical brand assets, mono technical type, hairlines, and square geometry.

## Backups

- None. The removed navbar was ordinary interface code; no precious procedural or 3D assets were modified.

## Verification

- `npm run build` passed with Vite 6.4.3.
- The build transformed 1,961 modules and emitted a smaller JavaScript bundle than before the specimen lockout.
- `git diff --check` passed for the changed files.
- Repository search confirms there are no remaining `setViewMode('specimen')`, `onSpecimenClick`, or `HeroNavbar` references.
- No browser screenshot was taken, per the user's request.

## Current state

The hero has a populated but non-interactive top masthead. The former numbered navigation, SPECIMEN button, and top corner targets are gone, and the specimen workbench is inaccessible from the public application.

