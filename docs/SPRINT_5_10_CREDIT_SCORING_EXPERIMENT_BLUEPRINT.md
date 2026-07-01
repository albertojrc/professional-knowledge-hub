# Sprint 5.10 — Credit Scoring Experiment Blueprint

Adds a controlled experiment design layer after the Model-Ready Feature Set.

## New files

- `src/types/creditScoringExperiment.ts`
- `src/data/creditScoringExperiment.ts`
- `src/pages/CreditScoringExperimentBlueprintPage.tsx`
- `src/styles/creditScoringExperimentOS.css`

## Updated files

- `src/app/App.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/styles/studyModuleHubOS.css`
- `src/data/professionalGraph.ts`
- `package.json`
- `README.md`

## Experiment stages

- Business objective and decision use
- Population, grain and cutoff design
- Target and performance window
- Feature matrix construction
- Baseline interpretable model
- Challenger models and comparison
- Validation metrics and interpretation
- Monitoring and portfolio handoff

## Principle

No model training before target, cutoff, feature matrix and leakage checks are approved.

## User-facing effect

A new Evidence & QA page appears: `Credit Scoring Experiment Blueprint`. It bridges the model-ready feature set and the future model card / monitoring layer.
