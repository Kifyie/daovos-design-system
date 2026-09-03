---
date: 2026-08-24
type: session
status: reverted
tags: [session, threejs, shader]
---

# 2026-08-24 — Moss Logo Experiment (Reverted)

## What Happened

User wanted the 3D logo "taken over by nature" — real leaves + moss (explicitly not voxels). Built the full effect, user reviewed it, decided it **didn't fit the brand theme**, and asked for a revert. Revert completed cleanly.

## What Was Built (now reverted)

1. **Moss shader layer** in `collisionFragmentShader` (`src/components/hero/Logo3DCanvas.jsx`):
   - fbm value-noise coverage field spreading from lower-left of the monolith
   - Moss albedo (layered forest greens + speckle tips) blended over graphite
   - `specKill` factor suppressed metallic speculars under moss; hover-reveal showed "clean crystal under overgrowth"
2. **Instanced foliage system**:
   ~580 curved/V-folded leaf blades (ShapeGeometry → bent vertices) via `THREE.InstancedMesh`, edge-weighted placement per block face, per-instance HSL greens, wind sway injected via `onBeforeCompile`
   - ~830 moss clumps (squashed flat-shaded icosahedrons)
   - Foliage parented to block meshes so hover/click waves carried it; dedicated HemisphereLight + 2 DirectionalLights for foliage only

## Why Reverted

Visual quality was good but the nature aesthetic clashed with the luxury-monolith brand direction. User decision — no technical fault.

## Backups & Recovery

- Pre-change backup: `backups/Logo3DCanvas_PRE-MOSS_2026-08-24_010747.jsx`
- Revert = byte-identical copy back to `src/components/hero/Logo3DCanvas.jsx` (verified: zero moss/leaf code remains)
- The moss version exists ONLY in that conversation's history — if we ever want it back, rebuild from the description above (~30 min work). Backup on disk is the CLEAN original.

## Key Decisions

- **Memory system adopted:** Obsidian vault as persistent agent memory ([[00 Dashboard]]) + mandatory protocol in project `AGENTS.md`. Reason: API bugs forced a new chat mid-task once already; memory must live on disk.
- Installed `kepano/obsidian-skills` globally (obsidian-markdown, obsidian-bases, obsidian-cli, json-canvas, defuddle).
- Obsidian CLI enabled by user in app settings; PATH may need terminal restart — fallback full path documented in [[00 Dashboard]].

## Current State

Clean slate. Logo file identical to pre-experiment. Build passing. Next session can start fresh with full context from this vault.

## Next Steps (ideas parked)

- None committed. Nature/moss look parked indefinitely.
