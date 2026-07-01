# Sprint 5.18 — Deep Pages Visual Conversion

## Purpose

Sprint 5.18 converts the highest-value deep reference pages into the same visual learning platform language used by Home, Global Search, Knowledge Map and the main Visual Studios.

## Converted pages

- Output Atlas
- Formula Library
- Model Library
- Business Case Library

## Shared pattern

The new `VisualReferenceStudio` pattern includes:

- lesson-style toolbar
- breadcrumb
- hero card
- searchable reference capsules
- selected reference preview
- right-side professional detail panel
- interpretation checklist
- quality signals
- decision impact
- related sections

## Why this matters

These pages are the professional brain of the platform. Outputs, formulas, models and cases should not appear as static lists. They should help the user understand what each item means, when to use it, how to interpret it and what decision it supports.

## Integration

- `OutputAtlasPage` now delegates to `VisualReferenceStudio`.
- `ReferencePage` now delegates formulas and models to `VisualReferenceStudio`.
- `BusinessCasesPage` now delegates to `VisualReferenceStudio`.
- Visual styling was added to `knowledgeOS.css`, which is already globally imported.

## Validation

Manual validation checklist:

- `src/components/reference/VisualReferenceStudio.tsx` exists.
- `OutputAtlasPage.tsx` imports and renders `VisualReferenceStudio`.
- `ReferencePage.tsx` renders Formula Library and Model Library through `VisualReferenceStudio`.
- `BusinessCasesPage.tsx` renders Business Case Library through `VisualReferenceStudio`.
- `knowledgeOS.css` contains `visual-reference-card-grid` and `visual-reference-side` styles.

A dedicated script was attempted, but the connector blocked creating `check-518.mjs`.
