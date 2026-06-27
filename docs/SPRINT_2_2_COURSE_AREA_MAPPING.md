# Sprint 2.2 — Course Area Mapping

Sprint 2.2 adds the Course Area Mapping layer.

This layer connects class materials, expected course modules and professional domains so the Hub can later convert source material into structured knowledge assets with source traceability.

## Objective

Map study material into professional areas:

- Data Science
- Machine Learning
- SQL / Databases
- Banking
- Finance
- Economics
- Strategy
- Marketing
- Operations

## New files

- `src/types/courseAreaMapping.ts`
- `src/data/courseAreaMapping.ts`
- `src/pages/CourseAreaMapPage.tsx`
- `src/styles/courseAreaMapOS.css`

## Main app integration

Course Area Map is connected to:

- Sidebar navigation
- Dashboard shortcut
- App router
- Global Search
- QA audit
- Source group

## New page

The `Course Area Map` page includes:

- Professional area cards
- Area filters
- Coverage filters
- Relevance filters
- Topic clusters
- Coverage matrix
- Existing assets
- Recommended assets
- Source gaps

## Topic clusters

Initial topic clusters include:

- Risk Model Validation
- Data Preparation & Feature Logic
- Finance & Strategy Decision Logic

## Coverage matrix

The first coverage matrix maps expected modules to areas and next actions:

- Data Science & Machine Learning
- SQL, Big Data & BI
- Finance & Economics
- Strategy & Management
- Banking & Risk Analytics

## Source coverage rule

This sprint does not claim that class material has already been fully analyzed. It creates the mapping structure and marks gaps that must be resolved by inspecting the actual files.

## Next Sprint

Sprint 2.3 should begin source-based asset expansion.

Recommended first action:

- inspect the configured materials
- extract actual topics
- map real evidence to existing assets
- create the first source-backed asset batch
