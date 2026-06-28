# Sprint 2.8 — Source Coverage QA

Sprint 2.8 adds a formal quality-control layer for source coverage.

## Objective

Audit which records are source-backed, evidence candidates, recommended complements, pending inspection or needing review.

## New files

- `src/types/sourceCoverage.ts`
- `src/data/sourceCoverageQA.ts`
- `src/pages/SourceCoverageQAPage.tsx`
- `src/styles/sourceCoverageOS.css`

## Updated files

- `src/types/knowledge.ts`
- `src/components/layout/Sidebar.tsx`
- `src/app/App.tsx`
- `src/pages/DashboardPage.tsx`
- `src/data/searchIndex.ts`
- `src/main.tsx`
- `scripts/qa-audit.mjs`

## New app section

A new Source section page was added:

```text
Source Coverage QA
```

## Coverage statuses

- Source-backed
- Evidence candidate
- Recommended complement
- Pending inspection
- Needs review

## Coverage risk levels

- Low
- Medium
- High

## What the page audits

- Assets
- Outputs
- Formulas
- Business cases
- Graph links
- Professional pathways

## Initial records audited

- Data Quality Report
- Analytical Base Table
- SQL Joins
- Financial Ratios
- Cash Flow Analysis
- Fraud Detection
- AML/KYC Analytics
- Professional Graph Pending Links
- Professional Graph Pathways

## Graph link audit

The page separates:

- pending graph links that still require file inspection
- strong structural links already created inside the Hub

## QA rules

The page includes rules such as:

- no source claim without file evidence
- recommended complements must be explicit
- pending graph links must remain visible
- every gap needs a next action

## Why this matters

Sprint 2.8 protects the Hub from false confidence. It makes sure professional synthesis and class-backed material are not confused.

## Next sprint

Sprint 2.9 should prepare actual Drive material inspection and source ingestion.

Recommended focus:

- inspect configured project files
- extract file-level metadata
- map files to materials/modules
- begin upgrading evidence candidates to source-backed where evidence exists
