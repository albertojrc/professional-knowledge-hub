# Sprint 5.31 — Route Registry Refactor

## Purpose

Start reducing `App.tsx` complexity by moving route metadata out of the app shell.

The render conditions remain in `App.tsx` for now to avoid a risky full routing rewrite, but route metadata and grouping now live in a dedicated registry.

## Added

### `src/routes/routeRegistry.ts`

This file contains:

- `RouteGroup`
- `RouteRegistryEntry`
- `governanceRouteItems`
- `routeRegistry`
- `navCatalog`
- `routeGroups`
- `titleFromView`
- `getRouteNavItem`

## Updated

### `src/app/App.tsx`

`App.tsx` now imports `getRouteNavItem` and uses it for the active top bar item.

Removed the inline `navCatalog` and `titleFromView` metadata from `App.tsx`.

## Route groups

Routes are now grouped into:

- primary
- curriculum
- reference
- governance
- source
- study
- legacy

## Design rule

Do not move all route rendering at once.

Route rendering should be refactored incrementally so we do not break existing deep links, search routes, asset detail views or internal governance tools.

## Validation

Run:

```bash
node scripts/check-531.mjs
npm run validate
npm run lint
npm run build
```

## Next sprint

Sprint 5.32 should align Global Search and module search capsules with the curriculum model:

```text
Search result → exact topic detail or focused submodule
```
