# Sprint 2.7 — Knowledge Graph Upgrade

Sprint 2.7 upgrades the Knowledge Map into a professional graph layer.

## Objective

Make the Hub trace knowledge across the full professional chain:

```text
Material → Module → Course Area → Evidence Candidate → Asset → Output → Formula → Business Case
```

## New files

- `src/types/professionalGraph.ts`
- `src/data/professionalGraph.ts`
- `src/styles/professionalGraphOS.css`

## Updated files

- `src/pages/KnowledgeMapPage.tsx`
- `src/main.tsx`
- `scripts/qa-audit.mjs`

## Graph objects

The graph now includes:

- Material nodes
- Module nodes
- Area nodes
- Evidence nodes
- Asset nodes
- Output nodes
- Formula nodes
- Business Case nodes

## Link types

Relationships include:

- contains
- maps to
- validates
- explains
- uses
- produces
- supports
- depends on

## Professional pathways

Initial pathways include:

- Credit Risk Data Readiness Pathway
- Credit Scoring ABT Pathway
- SME Finance Review Pathway
- Cash Flow Credit Approval Pathway

## Why this matters

The Hub can now show how a concept moves from source material to professional decision.

For example:

```text
Dual Degree Folder → Data Science Module → Evidence Candidate → Data Quality Report → Output → Formula → Credit Risk Data Quality Review
```

## Evidence rule

Some graph connections are marked as pending because actual course files still need inspection.

This preserves source honesty while still allowing the professional map to grow.

## Next sprint

Sprint 2.8 should focus on Source Coverage QA.

Recommended goals:

- audit which graph paths are source-backed
- mark which links remain pending
- create a coverage report
- prepare source ingestion from actual Drive materials
