# DAOVOS Site — Agent Instructions

## Memory Protocol (MANDATORY)

This project uses an Obsidian vault as persistent agent memory. It survives API bugs and new chats because it lives on disk.

**Vault location:** `C:\Users\sunny\OneDrive\Documents\daovos site\vault\daovos`

### At session start
1. Read `vault/daovos/00 Dashboard.md` for current state.
2. Read the 2–3 newest notes in `vault/daovos/Sessions/` to understand recent work and decisions.
3. Read `vault/daovos/Projects/DAOVOS Site.md` for stack, structure, and brand facts.
4. For any copywriting/client-facing content, read `vault/daovos/Business/DAOVOS Company Profile.md`; for all visual decisions, read `vault/daovos/Design System/DAOVOS Design System.md`.

### After finishing ANY meaningful work (same session)
1. Create a session note: `vault/daovos/Sessions/YYYY-MM-DD — <short title>.md`
   - Use Obsidian markdown with frontmatter properties:
     ```yaml
     ---
     date: YYYY-MM-DD
     type: session
     status: done | reverted | wip
     tags: [session]
     ---
     ```
   - Include: what changed (files + paths), key decisions AND why, backups created, current state, next steps if any.
2. Update `vault/daovos/00 Dashboard.md`: add the new session link at the top of the log, update "Current State" if it changed.
3. If a precious asset was modified (e.g. hand-tuned 3D code), create a backup copy in the project's `backups/` folder FIRST and record its path in the session note.

### Rules
- Never store memory only in conversation — write it to the vault before the session ends.
- Newest sessions go at the TOP of lists.
- If Obsidian CLI is enabled (`obsidian help` works), you may use CLI commands; otherwise edit files directly. Both are fine.
- The obsidian-markdown / obsidian-bases / obsidian-cli skills are installed globally — follow their conventions when writing vault notes.

## Project Facts

- Stack: React 19 + Vite 6, plain JavaScript (jsx), Three.js r185 (no react-three-fiber).
- Entry: `src/main.jsx` → `src/App.jsx`. Design tokens in `src/tokens/`.
- Hero: `src/components/hero/DaovosHero.jsx` composes hero layers; the 3D emblem is `src/components/hero/Logo3DCanvas.jsx`.
- **The 3D logo is 100% procedural code** (ExtrudeGeometry + custom GLSL shader) — there is NO model file. That file IS the model; back it up before touching it.
- Brand: Bone White #EDE6DF on graphite/obsidian. Fonts in `public/fonts/` (Aktura, Britney, Calentha, CaskoLuxuryDemo, Satoshi, Styro, Tanker).
- Deploys via Vercel (see `.vercel/`). Build check: `npm run build`.
