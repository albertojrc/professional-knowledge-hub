# Sprint 5.7 — ABT Schema Template

Adds a concrete schema template for the lending analytical base table.

## New files

- `src/types/abtSchemaTemplate.ts`
- `src/data/abtSchemaTemplate.ts`
- `src/pages/ABTSchemaTemplatePage.tsx`
- `src/styles/abtSchemaTemplateOS.css`

## Schema sections

- Keys
- Dates
- Target
- Features
- Excluded fields
- Quality checks
- Review metadata

## Column metadata

Each schema column includes:

- name
- section
- status
- purpose
- example values
- source rule
- quality rule
- linked blueprint block
- next action

## Principle

This is a template, not a final approved table. Columns become reviewed only after source references and field review status are completed.

## User-facing effect

A new backstage page appears under Evidence & QA: `ABT Schema Template`. It converts the ABT Blueprint into a concrete, review-controlled table schema.
