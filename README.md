# @sudobility/characterbuilder_ui

Reusable CharacterBuilder UI, extracted from `characterbuilder_app` and consumed
the same way `sudojo_app` consumes `@sudobility/sudojo_ui`.

It holds the **characterbuilder-specific** presentational layer:

- **FaceSpec editor** — `FaceSpecForm`, `FaceSpecGroupCard` (renders the trait
  feature groups generically).
- **Trait-icon art** — the bespoke SVG line-art set for every FaceSpec option
  (`TraitIcon`, `TraitOption`, `hasTraitIcon`).
- **Portrait / generation panels** — `ImageTile` (authed image bytes → object
  URL), `FullBodyPanel`, `VariationPanel`.
- **Ancestry** — `AncestryPicker` (+ `pathLabel`, `pathForAncestry`).
- **Localized routing helpers** — `LocalizedLink`, `LinkWrapper`,
  `LocalizedNavigate`, `useLocalizedNavigate`, plus the language config
  (`SUPPORTED_LANGUAGES`, `DEFAULT_LANGUAGE`, `LANGUAGE_CONFIGS`, …).
- **Breadcrumbs** — `useBreadcrumbs`, `BreadcrumbBuilder` (URL-derived).
- **Misc** — `ErrorBoundary`, image helpers (`downloadImage`,
  `fileToDownscaledDataUrl`, `blobToDownscaledDataUrl`).

Generic app-shell/auth pieces (the page shell, the topbar auth-action adapter,
and the sign-in gate) live in `@sudobility/building_blocks`, not here.

## Install

The `@sudobility` scope is published to GitHub Packages, so installing needs a
GitHub token with `read:packages` (see `.npmrc` / `NODE_AUTH_TOKEN`).

```sh
bun install
```

## Build

```sh
bun run build      # tsc -p tsconfig.build.json → dist/, then fix ESM import specifiers
bun run typecheck  # tsc --noEmit
```

The build compiles with `tsc` and then runs `scripts/fix-esm-imports.mjs`, which
rewrites the emitted relative import specifiers to fully-qualified Node-ESM paths.

## Local development against `characterbuilder_app`

`characterbuilder_app`'s `vite.config.ts` aliases this package to `../characterbuilder_ui/src/index.ts`
when the sibling repo exists, so the dev server picks up source live. For the
app's production build (which resolves `node_modules`), rebuild + link:

```sh
cd characterbuilder_ui && bun run build && bun link
cd ../characterbuilder_app && bun link @sudobility/characterbuilder_ui
```

## Peer dependencies

`react`, `react-dom`, `react-router-dom`, `@tanstack/react-query`,
`@sudobility/components`, `@sudobility/building_blocks`, and
`@sudobility/characterbuilder_{types,client,lib}`.

## License

BUSL-1.1
