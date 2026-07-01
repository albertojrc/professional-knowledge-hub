# Sprint 5.8 — ABT Field Review Matrix

Adds a field-level review matrix for the lending ABT schema.

## New files

- `src/types/abtFieldReview.ts`
- `src/data/abtFieldReview.ts`
- `src/pages/ABTFieldReviewMatrixPage.tsx`
- `src/styles/abtFieldReviewMatrixOS.css`

## Review dimensions

- decision
- risk level
- review question
- evidence needed
- quality checks
- allowed use
- blocked use
- linked schema column
- linked study update
- next action

## Decisions

- Accept candidate
- Hold for evidence
- Block from features
- Needs owner review

## Principle

No field becomes model-ready without evidence and allowed-use review. The matrix keeps candidate fields separate from reviewed fields and blocked uses.

## User-facing effect

A new backstage page appears under Evidence & QA: `ABT Field Review Matrix`. It gives the Hub a review layer between schema template and model-ready feature set.
