# Sprint 5.33 — Knowledge Map Curriculum Sync

## Purpose

Sync the Knowledge Map with the new master learning architecture:

```text
Module → Submodule → Topic → Output → Decision
```

The Knowledge Map should not only show abstract professional graph nodes. It should also show how the actual curriculum is structured.

## Added

### `src/data/curriculumKnowledgeMap.ts`

This file converts `moduleCurriculum` into a map-friendly structure:

- module
- submodule
- topic
- topic type
- category
- outputs

It also exports `curriculumMapSummary` with counts for modules, submodules, topics and outputs.

### `src/components/knowledge/CurriculumKnowledgeMapPanel.tsx`

This panel displays the curriculum map inside the Knowledge Map page.

It shows:

- module tabs
- submodule cards
- topic count
- expected outputs
- example topic chain

## Updated

### `VisualKnowledgeMapStudio`

The Knowledge Map hero and core flow now use the new master architecture:

```text
Module → Submodule → Topic → Output → Decision
```

The curriculum panel is rendered before the professional graph controls, so users first understand the learning structure, then explore graph relationships.

## Styling

Added `src/styles/curriculumKnowledgeMapOS.css` and imported it in `main.tsx`.

## Design rule

The Knowledge Map should explain learning dependency, not just show connected nodes.

Every important topic should eventually answer:

- which module owns it
- which submodule contains it
- what output it produces
- what professional decision it supports

## Validation

Run:

```bash
node scripts/check-533.mjs
npm run validate
npm run lint
npm run build
```

## Next sprint

Sprint 5.34 should audit visual consistency across the Hub: spacing, cards, typography, copy, side panels, empty states and responsive behavior.
