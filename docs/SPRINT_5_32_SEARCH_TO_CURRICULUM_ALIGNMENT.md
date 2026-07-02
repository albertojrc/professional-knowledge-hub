# Sprint 5.32 — Search-to-Curriculum Alignment

## Purpose

Align Global Search and module search capsules with the new learning architecture:

```text
Module → Submodule → Topic → Deep Detail View
```

Search should not feel disconnected from the curriculum. Results should tell the user whether they are opening an exact topic or a focused submodule.

## Added

### `src/data/curriculumSearchBridge.ts`

This bridge maps knowledge assets and search results back to curriculum context.

It provides:

- `getCurriculumMatchForAsset`
- `getCurriculumMatchForSearchItem`
- `getCurriculumOpenLabel`

The bridge resolves:

- module title
- module view
- submodule id
- submodule title
- learning position
- open mode

## Updated

### Global Search

`VisualSearchStudio` now shows curriculum context in the detail panel when a result belongs to a curriculum.

The CTA now changes according to the result:

- `Open topic detail`
- `Open focused submodule`
- `Open exact view`

### Module Search Capsules

`ModuleSearchCapsules` now uses the same curriculum bridge.

Capsules show curriculum-aware labels and the detail panel can show the module/submodule where the item belongs.

## Design rule

Search should support learning flow, not bypass it blindly.

If the user searches for a concept, open the exact topic detail.

If the user searches for a learning section or submodule, open the focused submodule.

## Validation

Run:

```bash
node scripts/check-532.mjs
npm run validate
npm run lint
npm run build
```

## Next sprint

Sprint 5.33 should sync Knowledge Map with the same curriculum structure.
