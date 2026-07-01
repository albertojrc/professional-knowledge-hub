# Sprint 5.16 — Global Search Visual Studio

## Purpose

Sprint 5.16 rebuilds Global Search so it matches the visual learning platform direction. Search should no longer feel like a flat result list. It should behave like a visual search studio with filters, capsule previews and a right-side detail panel.

## UX changes

Global Search now uses `VisualSearchStudio`, which includes:

- lesson-style toolbar and breadcrumb
- large visual hero card
- global search input
- inventory stats
- quick filters
- kind / area / category filters
- selectable result capsules
- right-side selected capsule panel
- route context
- search signals / tags
- `Open exact view` action

## Design rule

Global Search remains a hidden command layer, not a visible sidebar module. It should be available from Home and internal routes, while the sidebar remains fixed at five modules.

## Integration

- `GlobalSearchPage` now delegates to `VisualSearchStudio`.
- `VisualSearchStudio` uses `globalSearchIndex`, `searchKnowledge`, `searchKinds`, `searchAreas` and `searchCategories`.
- Search result cards no longer immediately navigate on click; selecting a card previews it first, then the user can open the exact route.

## Validation

Run the dedicated check:

```bash
node scripts/check-516.mjs
```

`qa:sprint516` package registration is pending because the connector blocked a full `package.json` rewrite. The check file itself exists and is ready.
