# Sprint 1 QA & Build Hardening

This document defines the minimum validation process before expanding the Professional Knowledge Hub with more content.

## Goal

Sprint 1 created the foundation of the Professional Knowledge Operating System:

- Dashboard
- Global Search
- Knowledge Library
- Knowledge Asset Detail
- Knowledge Factory
- Study Paths
- Learning Session Mode
- Progress Tracking
- Path Preferences
- Deep Linking
- Tooltips

Sprint 1.13 hardens that foundation before large-scale content expansion.

## Local validation commands

Run these commands before considering a sprint stable:

```bash
npm install
npm run qa:audit
npm run lint
npm run build
```

Or run the full validation command:

```bash
npm run validate
```

## What qa:audit checks

The audit script validates that key architecture files exist and that the main routing, styles and registries are connected.

It checks:

- Required pages exist
- Required hooks exist
- Required style modules are imported
- Required ViewId values exist
- App contains core routes
- Search index uses the asset registry and study paths
- Dashboard uses the current path panel
- Learning Session contains the session checklist

## Manual QA checklist

### Navigation

- Dashboard opens correctly.
- Global Search opens correctly.
- Knowledge Library opens correctly.
- Study Paths opens correctly.
- Learning Session opens correctly.
- Knowledge Factory opens correctly.
- Sidebar active states work.

### Knowledge Library

- Search works inside the library.
- Filters work by area, type, difficulty, category and progress.
- Asset cards open detail pages.
- Learning status can be changed from asset cards.

### Knowledge Asset Detail

- Asset detail pages open from library and search.
- Smart badges show tooltip explanations.
- Study Tracker updates local progress.
- Related assets open correctly when available.

### Study Paths

- Study paths render correctly.
- A path can be set as Current Path.
- A path can be pinned.
- Path progress reflects asset progress.
- Asset sequence opens concept pages.

### Learning Session

- Learning Session uses the active path when available.
- It falls back to the first path when no active path exists.
- Current asset is selected from Studying or Not Started assets.
- Progress actions update the same local asset progress.
- Up Next list excludes reviewed/mastered assets.

### Dashboard

- Completion rate reflects reviewed/mastered assets.
- Current Path panel appears when a path is active.
- Start Learning Session opens the session page.
- Continue Studying shows assets marked as Studying.
- Recommended Next shows unstarted assets.

## Known limitation

The project currently stores progress and path preferences in browser localStorage. This is good for local study, but future versions may need export/import, cloud sync or account-based persistence.

## Next hardening ideas

- Add unit tests for progress helpers.
- Add route registry to reduce duplicated nav metadata.
- Add content coverage scoring per asset.
- Add source coverage flags from actual class materials.
- Add import/export of local progress.
