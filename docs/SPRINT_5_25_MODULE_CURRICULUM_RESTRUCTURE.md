# Sprint 5.25 — Module Curriculum Restructure

## Purpose

Restructure Data Science, Banking & Finance and CFA & Certifications so each module starts with a clear submodule menu.

## New structure

```text
Module
→ Submodule navigation
→ Ordered content cards
→ Knowledge asset detail view
```

Each content card opens the same detailed concept page used by the A/B Testing example:

- what it is
- why it matters
- when it is used
- how it is used
- how it is interpreted
- outputs, metrics and assumptions
- applications
- mistakes
- professional tip

## Added

- `src/data/moduleCurriculum.ts`
- `src/components/learning/ModuleCurriculumStudio.tsx`
- `scripts/check-525.mjs`

## Updated modules

- Data Science now uses `ModuleCurriculumStudio`.
- Banking & Finance now uses `ModuleCurriculumStudio`.
- CFA & Certifications now uses `ModuleCurriculumStudio`.

## Graph rule fix

`KnowledgeAssetDetailPage` no longer defaults unknown graphs to ROC.

If a graph is not supported, the page shows a professional output fallback instead of displaying the wrong chart.

## Design rule

Keep module pages concrete:

- no generic workflows
- no long descriptive blocks
- no unrelated charts
- no duplicated chart just because a visual is needed
- every content item should open the full concept detail view
