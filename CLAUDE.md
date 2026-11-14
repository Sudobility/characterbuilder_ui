# CLAUDE.md — characterbuilder_ui

`@sudobility/characterbuilder_ui` — the reusable CharacterBuilder UI library,
extracted from `characterbuilder_app`. Consumed the way `sudojo_app` consumes
`@sudobility/sudojo_ui`. Package manager is **bun**.

## What lives here

The characterbuilder-specific presentational layer only:

- `src/components/FaceSpecForm.tsx` — `FaceSpecForm` / `FaceSpecGroupCard`
  (renders `FEATURE_GROUPS` from `characterbuilder_lib` generically).
- `src/components/trait-icons/**` — bespoke SVG line-art for every FaceSpec
  option; `index.tsx` exposes `TraitIcon` / `TraitOption` / `hasTraitIcon`;
  `_head.tsx` is the shared head-outline helper.
- `src/components/{ImageTile,FullBodyPanel,VariationPanel}.tsx` — portrait /
  generation panels (use `characterbuilder_client` + react-query).
- `src/components/AncestryPicker.tsx` — ancestry combobox.
- `src/components/layout/{LocalizedLink,LinkWrapper}.tsx`,
  `src/components/routing/LocalizedNavigate.tsx`, `src/hooks/useLocalizedNavigate.ts`
  — localized (`/:lang`) routing helpers over `@sudobility/components`.
- `src/hooks/useBreadcrumbs.ts` + `src/utils/BreadcrumbBuilder.ts` — URL-derived breadcrumbs.
- `src/components/shell/ErrorBoundary.tsx`, `src/config/languages.ts`, `src/lib/{image,download}.ts`.
- `src/ui.ts` — **internal** barrel over `@sudobility/components` (the app keeps its own copy).

Generic app-shell/auth components (the page shell `AppShell`, the topbar
auth-action adapter, the `RequireSignIn` gate, and the page-config context) live
in `@sudobility/building_blocks`, **not here**.

## Commands

- `bun run build` — `tsc -p tsconfig.build.json` → `dist/`, then
  `node scripts/fix-esm-imports.mjs` (rewrites relative ESM specifiers to
  fully-qualified Node paths; `tsc` under `moduleResolution: bundler` emits
  extensionless imports Node's loader rejects).
- `bun run typecheck` — `tsc --noEmit`.
- No test suite, no lint script.

## Conventions

- Everything is exported from `src/index.ts` as named exports (+ types),
  mirroring `sudojo_ui`.
- Keep the `src/` subdirectory layout stable: the moved components rely on
  relative imports (`../ui`, `../config/languages`, `../hooks/...`) that resolve
  by position.
- Peer deps (not bundled): `react`, `react-dom`, `react-router-dom`,
  `@tanstack/react-query`, `@sudobility/components`, `@sudobility/building_blocks`,
  `@sudobility/characterbuilder_{types,client,lib}`.

## Install gotchas

- `.npmrc` scopes `@sudobility` to GitHub Packages; `bun install` needs a GitHub
  token with `read:packages` (`~/.npmrc` / `NODE_AUTH_TOKEN`).
- CI/CD (`.github/workflows/ci-cd.yml`) delegates to
  `johnqh/workflows/.github/workflows/unified-cicd.yml@main` with
  `publish-target: github`; published public (`publishConfig.access: public`).
