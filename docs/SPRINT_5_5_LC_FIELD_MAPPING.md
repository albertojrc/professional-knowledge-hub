# Sprint 5.5 — LCDataDictionary Field Mapping

Adds a controlled mapping layer for `LCDataDictionary.xlsx`.

## New files

- `src/types/lcFieldMap.ts`
- `src/data/lcFieldMap.ts`
- `src/pages/LCFieldMappingPage.tsx`
- `src/styles/lcFieldMappingOS.css`

## Field groups

- Borrower profile fields
- Loan structure and pricing fields
- Credit history fields
- Target and performance fields
- Payment and post-loan behavior fields
- ABT control and split fields

## Each group includes

- candidate fields
- evidence needed
- data quality checks
- leakage risk notes
- feature use
- target lessons
- next action

## Principle

Field names are candidates until checked against `LCDataDictionary.xlsx`. The page organizes the mapping workflow without claiming final spreadsheet evidence.

## User-facing effect

A new backstage page appears under Evidence & QA: `LC Field Mapping`. It prepares the dataset review needed before stronger ABT and credit scoring updates can be promoted into Study Modules.
