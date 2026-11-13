# box-sync: Lumen Launcher build source

This branch adds the build source that was on the shared Grok Bot box (`/workspace/lumen-launcher`) but not in the published GitHub Pages tree.

Imported on 14 November 2026 (Australia/Brisbane). Original box folders were copied, not moved.

Added:

- `build.js`, `make_assets.py`, `patch.py` — build tools
- `template.html`, `template.v1.html` — templates
- `test.js`, `test2.js` — tests
- `shots/` — screenshots of the published launcher

Not added:

- `shots/lumen-launcher-backup-2026-11-05.json` — a launcher backup export (includes bundled program HTML). Left out of this public PR on review; the file remains on the box at `/workspace/lumen-launcher/shots/` and was not modified.

- `lumen-launcher.html` — byte-identical to the existing `index.html` on `main`
- `lumen-launcher.zip` and `lumen-launcher-v2.zip` — archives of the same files
- No changes to the published Pages files on this branch were intended; this is source and screenshots only.

This repository is public. Only files that already belong to the public Lumen Launcher were included.
