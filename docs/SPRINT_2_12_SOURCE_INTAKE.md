# Sprint 2.12 — Missing Course Files Intake

Sprint 2.12 adds an intake layer for missing academic files.

## Objective

Define which course files are needed to upgrade candidate or pending records into source-backed knowledge.

## New files

- `src/types/sourceIntake.ts`
- `src/data/sourceIntake.ts`
- `src/pages/SourceIntakePage.tsx`
- `src/styles/sourceIntakeOS.css`

## New page

```text
Source Intake
```

## Intake groups

- Data Science / Analytics slides or PDFs
- SQL / Database notebooks or exercises
- Finance / Valuation materials
- Banking / Credit Risk cases
- Management / Strategy materials
- Datasets and graded assignments

## Why it matters

The Hub cannot mark academic assets as source-backed until actual class materials are reviewed. This sprint defines the missing file queue and what each file group can unlock.

## Next sprint

Sprint 2.13 should focus on intake-to-coverage mapping so each received file can automatically point to coverage records, evidence records and graph links to update.
