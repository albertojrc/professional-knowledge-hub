# Sprint 5.27 — Module Detail UX Polish

## Purpose

Improve the module curriculum experience after the architecture cleanup.

The modules should feel smoother and more intentional when moving from submodule navigation to ordered topic cards.

## Completed

### Curriculum sequence

Added a horizontal sequence rail that shows the learning order of the submodules and highlights the selected one.

### Submodule cards

Submodule cards now show:

- sequence number
- topic count
- output count
- objective
- clear selected state

### Topic cards

Topic cards now show:

- topic order
- type and difficulty
- title
- summary
- category
- open detail action

### CSS polish

Added `src/styles/moduleCurriculumOS.css` for curriculum-specific styling.

The CSS handles:

- curriculum hero rule pill
- sequence rail
- selected submodule cards
- topic cards
- theory/output context blocks
- responsive layout

## Design rule

Submodule pages should not feel like generic card grids. They should show learning order, topic hierarchy and the direct path into the deep detail view.

## Validation

Run:

```bash
node scripts/check-527.mjs
```
