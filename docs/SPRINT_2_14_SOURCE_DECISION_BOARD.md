# Sprint 2.14 — Source Upgrade Decision Board

Sprint 2.14 adds a formal decision board for source-backed status changes.

## Objective

Create a controlled review layer for deciding whether a Hub object can be upgraded to source-backed, kept as candidate, kept as complement or rejected.

## New files

- `src/types/sourceDecision.ts`
- `src/data/sourceDecisionBoard.ts`
- `src/pages/SourceDecisionBoardPage.tsx`
- `src/styles/sourceDecisionOS.css`

## New page

```text
Source Decision Board
```

## Decision options

- Ready for review
- Needs evidence
- Approved source-backed
- Keep candidate
- Keep complement
- Rejected claim

## Initial decision items

- Data Quality Report
- Analytical Base Table
- SQL Joins
- Financial Ratios
- Cash Flow Analysis
- AML/KYC Analytics

## Current decision

No academic source-backed upgrades are approved yet.

## Next sprint

Sprint 2.15 should add a Source Governance Summary to consolidate intake, coverage, execution, evidence and decision status into one executive overview.
