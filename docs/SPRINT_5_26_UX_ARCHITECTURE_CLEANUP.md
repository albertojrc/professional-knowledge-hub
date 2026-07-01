# Sprint 5.26 — UX Architecture Cleanup

## Purpose

Start the UX architecture cleanup requested after local validation.

The platform should now follow this rule:

```text
Module → Submodule → Topic → Deep Detail View
```

## Completed

### Module curriculum cleanup

`ModuleCurriculumStudio` was refactored into clearer internal sections:

- module header
- submodule navigation
- selected submodule overview
- ordered topics
- side panel with theory, outputs and learning rule

### Sidebar copy update

The sidebar now describes the real learning flow instead of the older command-center-only language.

### UX QA update

`check-ux-reorg.mjs` was updated to validate the new curriculum architecture:

- `moduleCurriculum.ts`
- `ModuleCurriculumStudio`
- Data Science using `ModuleCurriculumStudio`
- Banking & Finance using `ModuleCurriculumStudio`
- CFA & Certifications using `ModuleCurriculumStudio`

## Design rule

Avoid generic workflows and unnecessary descriptions. Module pages should show concrete structure:

- submodule
- theory
- ordered topics
- expected outputs
- detail-view rule

## Next sprint

Sprint 5.27 should polish the visual layout of submodule navigation and topic cards.
