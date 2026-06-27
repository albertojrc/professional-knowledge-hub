# Sprint 2.4 — Source-Aware Knowledge Asset Creation

Sprint 2.4 converts the first evidence expansion candidates into formal Knowledge Assets while keeping evidence status visible and honest.

## Objective

Create the first batch of source-aware Knowledge Assets without claiming that class coverage has already been validated.

## New Knowledge Assets

The first source-aware asset batch includes:

- Data Quality Report
- Analytical Base Table
- SQL Joins
- Financial Ratios
- Cash Flow Analysis

## Evidence rule

Each asset is marked as:

```text
Class evidence candidate
```

This means the topic is likely to be supported by class materials, but the actual files still need inspection before it can be considered source-backed.

## New files

- `src/data/knowledgeAssetsSprint24.ts`
- `src/data/sourceAwareAssets.ts`
- `src/styles/sourceAwareOS.css`

## Updated files

- `src/data/knowledgeAssetRegistry.ts`
- `src/pages/KnowledgeAssetDetailPage.tsx`
- `src/data/studyPaths.ts`
- `src/main.tsx`
- `scripts/qa-audit.mjs`

## Platform impact

The new assets are now available in:

- Knowledge Library
- Global Search
- Study Paths
- Learning Session
- Dashboard progress
- Knowledge Asset Detail pages

## Evidence visibility

Knowledge Asset Detail pages now show:

- Evidence status
- Evidence explanation
- Linked modules
- Linked materials
- Source strategy

## Updated Study Paths

The new assets strengthen:

- Credit Risk Analyst Path
- Machine Learning for Banking Path
- Data Science Workflow Path
- Finance & Strategy Analyst Path
- Management Strategy Toolkit

## Next Sprint

Sprint 2.5 should expand the Output Atlas and Formula/Model libraries using source-aware logic.

Recommended focus:

- Data Quality Report output interpretation
- SQL Join output patterns
- Financial Ratio tables
- Cash Flow Bridge
- ABT documentation template
