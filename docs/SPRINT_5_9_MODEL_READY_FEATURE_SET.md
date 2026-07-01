# Sprint 5.9 — Model-Ready Feature Set

Adds a controlled layer that turns the ABT Field Review Matrix into a model-ready feature set for credit scoring.

## New files

- `src/types/modelReadyFeatureSet.ts`
- `src/data/modelReadyFeatureSet.ts`
- `src/pages/ModelReadyFeatureSetPage.tsx`
- `src/styles/modelReadyFeatureSetOS.css`

## Updated files

- `src/app/App.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/styles/studyModuleHubOS.css`
- `src/data/professionalGraph.ts`
- `package.json`

## Feature groups

- Technical controls and ABT keys
- Borrower affordability features
- Credit history and bureau-style features
- Loan request and product features
- Pricing, grade and lender decision fields
- Performance, payment and recovery fields
- Derived stability and model-prep features

## Review statuses

- Model-ready candidate
- Hold for evidence
- Blocked from modeling
- Governance control

## Principle

No credit scoring model starts from raw fields. The model matrix must be built from reviewed features, blocked-field rules, owner decisions and source references.

## User-facing effect

A new Evidence & QA page appears: `Model-Ready Feature Set`. It bridges the ABT Field Review Matrix and the future credit scoring experiment blueprint.
