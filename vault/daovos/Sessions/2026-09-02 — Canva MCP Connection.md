---
date: 2026-09-02
type: session
status: done
tags: [session]
---

# Canva MCP Connection

## What changed

- Added a global Codex MCP server named `Canva` to `C:\Users\sunny\.codex\config.toml`.
- Configured the server as a local STDIO bridge using `npx -y mcp-remote@latest https://mcp.canva.com/mcp`.
- Corrected the supplied snippet by removing the stray backslash before `@latest` and converting the Markdown-formatted endpoint into the plain Canva MCP URL.

## Key decisions

- Used the global Codex configuration so the Canva MCP is shared by the desktop app, CLI, and IDE extension on this host.
- Used Codex's MCP CLI instead of editing TOML by hand so the entry follows the installed client's supported schema.

## Verification

- `codex mcp get Canva` reports the server as enabled with STDIO transport.
- `codex mcp list` shows `Canva` with the expected command and arguments.
- Node.js and `npx` are available on the host.

## Backups

- None. No DAOVOS site source or precious procedural assets were modified.

## Current state

The Canva MCP is registered and enabled globally. A Codex app restart is required for the current tool inventory to refresh; Canva may open its OAuth flow when first used.

