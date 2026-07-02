# Sprint 5.36 — Validation Fix Pass

## Purpose

Fix local validation and lint issues discovered after Sprint 5.35.

This sprint does not add product features. It updates stale QA checks and fixes lint warnings/errors caused by the architecture changes.

## Trigger

Local validation showed:

- Sprint 2.10 QA still expected `source-review-execution` in Sidebar and legacy route comments.
- Sprint 2.10 QA expected stale wording: `No academic asset`.
- Sprint 5.25 check still expected `GraphFallback` after the Visual Output Type System replaced it.
- Sprint 5.16 / UX reorg checks still expected `Open exact view` after curriculum-aware CTAs were introduced.
- Sprint 5.32 check used lowercase `curriculum-aware search` while the UI copy used `Curriculum-aware search`.
- ESLint reported `_group` as unused in `routeRegistry.ts`.
- React Refresh warned because `KnowledgeAssetVisualOutput.tsx` exported a non-component resolver function.

## Fixes

### Route registry lint

Updated `routeRegistry.ts` so `navCatalog` is built without the unused `_group` destructuring variable.

### Visual output resolver

Moved `resolveVisualOutputType` into:

```text
src/data/visualOutputTypeResolver.ts
```

`KnowledgeAssetVisualOutput.tsx` now exports only the component.

### QA updates

Updated:

- `scripts/qa-sprint-2-10.mjs`
- `scripts/check-516.mjs`
- `scripts/check-525.mjs`
- `scripts/check-529.mjs`
- `scripts/check-532.mjs`
- `scripts/check-ux-reorg.mjs`

### New check

Added:

```bash
node scripts/check-536.mjs
```

## Validation command

Run:

```bash
git pull
npm run validate
node scripts/check-525.mjs
node scripts/check-529.mjs
node scripts/check-532.mjs
node scripts/check-536.mjs
npm run lint
npm run build
```
