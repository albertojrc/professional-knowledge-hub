# Sprint 5.6 — ABT Design Blueprint

Adds a controlled analytical base table blueprint for the lending dataset workflow.

## New files

- `src/types/abtBlueprint.ts`
- `src/data/abtBlueprint.ts`
- `src/pages/ABTBlueprintPage.tsx`
- `src/styles/abtBlueprintOS.css`

## Blueprint blocks

- Entity grain
- Observation window
- Performance window
- Feature groups
- Train/test split design
- ABT schema

## Each block includes

- purpose
- design rules
- inputs
- outputs
- checks
- risks
- linked field groups
- target lessons
- next action

## Principle

This is a blueprint, not final evidence. Fields and timing rules become source-backed only after LCDataDictionary sheet references are reviewed.

## User-facing effect

A new backstage page appears under Evidence & QA: `ABT Blueprint`. It connects field mapping to a professional table design workflow before modeling credit risk.
