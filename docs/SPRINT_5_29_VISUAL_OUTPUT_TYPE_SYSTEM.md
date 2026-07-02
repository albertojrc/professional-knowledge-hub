# Sprint 5.29 — Visual Output Type System

## Purpose

Create a visual output system so each knowledge asset shows the right kind of visual instead of forcing unrelated charts.

## Added

### VisualOutputType

`KnowledgeAsset` now supports an optional `visualOutputType` field.

Supported types:

- chart
- formula-card
- matrix
- checklist
- process-flow
- decision-table
- case-card
- fallback

### KnowledgeAssetVisualOutput

Added `src/components/knowledge/KnowledgeAssetVisualOutput.tsx`.

This component decides which visual to render using:

1. explicit `asset.visualOutputType`
2. available chart type
3. formula presence
4. asset type
5. CFA/category context
6. risk/governance context
7. outputs and metrics density
8. fallback

## Updated detail page

`KnowledgeAssetDetailPage` now uses `KnowledgeAssetVisualOutput` in the right-side Output View panel.

This means CFA topics can show checklist/process visuals, formulas can show formula cards, risk topics can show decision tables and ML topics can still show charts when appropriate.

## Styling

Added `src/styles/assetVisualOutputOS.css` and imported it in `main.tsx`.

## Design rule

Never show a chart just because a visual is needed.

If no graph is appropriate, use a more meaningful visual:

- checklist for CFA/study topics
- formula card for formulas
- process flow for frameworks
- decision table for risk/governance topics
- matrix for output/metric-heavy topics
- fallback for general concepts

## Validation

Run:

```bash
node scripts/check-529.mjs
```
