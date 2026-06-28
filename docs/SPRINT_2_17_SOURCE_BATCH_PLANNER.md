# Sprint 2.17 — Source Review Batch Planner

Sprint 2.17 converts source packs into concrete review batches.

## Objective

Define review batches that connect source packs to evidence records, coverage records, decision board items and upgrade candidates.

## New files

- `src/types/sourceBatch.ts`
- `src/data/sourceReviewBatches.ts`
- `src/pages/SourceBatchPlannerPage.tsx`
- `src/styles/sourceBatchOS.css`

## New page

```text
Source Batch Planner
```

## Batch chain

```text
Source Pack → Review Batch → Evidence Targets → Coverage Targets → Decision Targets → Upgrade Queue
```

## Batches

- Batch 1 · Data Science Core Review
- Batch 2 · SQL and ABT Review
- Batch 3 · Finance and Valuation Review
- Batch 4 · Banking Risk Review
- Batch 5 · Management Strategy Review
- Batch 6 · Assignments and Datasets Review

## Next sprint

Sprint 2.18 should create a Source Evidence Capture Template so every review batch captures the same metadata, excerpts, outputs, formulas and decision notes.
