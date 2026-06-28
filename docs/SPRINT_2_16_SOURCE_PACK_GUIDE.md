# Sprint 2.16 — Source Pack Upload Guide

Sprint 2.16 adds a practical guide for organizing course materials into high-value source packs.

## Objective

Help the user provide course materials in the order that unlocks the most Hub value.

## New files

- `src/types/sourcePack.ts`
- `src/data/sourcePackGuide.ts`
- `src/pages/SourcePackGuidePage.tsx`
- `src/styles/sourcePackOS.css`

## New page

```text
Source Pack Guide
```

## Source packs

- Pack 1 · Data Science Core
- Pack 2 · SQL and Analytical Base Tables
- Pack 3 · Finance and Valuation
- Pack 4 · Banking and Risk Analytics
- Pack 5 · Management and Strategy
- Pack 6 · Assignments and Datasets

## Upload logic

Prioritize P0 packs first, then P1 packs, then P2 packs.

## Expected outcome

Each pack defines recommended files, accepted formats, evidence checklist, unlocked Hub objects and review outcome.

## Note

The app route and page are connected. Sidebar navigation update was blocked by the connector and remains pending.

## Next sprint

Sprint 2.17 should create a Source Review Batch Planner to convert packs into review batches and source-backed upgrade queues.
