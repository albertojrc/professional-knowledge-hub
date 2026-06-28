# Sprint 2.13 — Intake-to-Coverage Mapping

Sprint 2.13 connects missing file intake with evidence, coverage and graph update targets.

## Objective

Map each missing file group to the Hub records it can update once real material is received and reviewed.

## New files

- `src/types/intakeCoverage.ts`
- `src/data/intakeCoverageMap.ts`
- `src/pages/IntakeCoverageMapPage.tsx`
- `src/styles/intakeCoverageOS.css`

## New page

```text
Intake Coverage Map
```

## Traceability chain

```text
Missing File → Intake Item → Course Evidence → Source Coverage → Knowledge Graph → Asset Upgrade Decision
```

## Mapped intake groups

- Data Science materials
- SQL notebooks
- Finance materials
- Banking risk cases
- Management strategy files
- Datasets and assignments

## Why it matters

When files arrive, the Hub now knows which coverage records, course evidence records, graph links and assets should be checked first.

## Next sprint

Sprint 2.14 should focus on a Source Upgrade Decision Board for approving or rejecting source-backed status changes.
