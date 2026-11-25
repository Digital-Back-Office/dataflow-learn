# CLAUDE.md

Public user docs at https://docs.dataflow.zone. Astro 4 + Starlight 0.23, npm (`package-lock.json`),
Node 20 in CI.

## Commands

```bash
npm ci
npm run dev        # astro dev
npm run build      # astro check && astro build -> dist/
npm run preview
```

There are no lint, format or test scripts.

## Architecture

- `src/content/docs/`: pages in `get-started/`, `workspace/{studio,admin,admin/runtime-settings,runtime}/`
  and `reference/`. The URL is the file path.
- `astro.config.mjs`: `site`, the `/` → `/get-started/introduction-to-dataflow/` redirect, and the sidebar,
  maintained by hand.
- `src/assets/`: images, in folders that mirror the docs path. `src/styles/custom.css`: the theme.
- `src/content/config.ts`: the stock Starlight `docsSchema()`.
- `.github/workflows/astro.yml`: deploys to GitHub Pages on push to `main`.

## Conventions

- Plain `.md` (no MDX), kebab-case file names. Frontmatter is `title` + `lastUpdated: YYYY-MM-DD`.
- Every new page needs a `{ label, link }` entry in the `astro.config.mjs` sidebar, or it won't appear in the nav.
- Internal links are absolute with a trailing slash (`/workspace/studio/foo/`).
- Images go in `src/assets/<docs path>/`, referenced by relative path (the number of `../` depends on depth).
  Images that don't exist yet are left as HTML comments.
- Callouts: `:::note`, `:::tip[Title]`, `:::caution[Title]`.

## Gotchas / Do not

- CI runs `astro build` directly, so `astro check` type errors only show up in a local `npm run build`.
- Never edit `combined_docs.md`. It concatenates every page and nothing in the build uses it.
- `workspace/admin/manage-spark..md` (double dot) builds fine as `/workspace/admin/manage-spark/`.
- `workspace/admin/runtime-settings.md` duplicates `runtime-settings/introduction.md` and isn't in the sidebar.
- The "Reference" sidebar group mixes `items` with `autogenerate`.

## Testing

Run `npm run build` before pushing to `main`: it is the only check, and the deploy skips half of it.
