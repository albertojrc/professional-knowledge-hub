# Sprint 5.12 — Portfolio Monitoring Dashboard Blueprint

Adds a portfolio-level monitoring dashboard blueprint after the Model Card & Monitoring Handoff.

## New files

- `src/types/portfolioMonitoringDashboard.ts`
- `src/data/portfolioMonitoringDashboard.ts`
- `src/pages/PortfolioMonitoringDashboardBlueprintPage.tsx`
- `src/styles/portfolioMonitoringDashboardOS.css`

## Updated files

- `src/app/App.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/styles/studyModuleHubOS.css`
- `src/data/professionalGraph.ts`
- `src/data/searchIndex.ts`
- `src/types/knowledge.ts`
- `package.json`
- `README.md`

## Dashboard widgets

- Executive portfolio health summary
- Score distribution and score band migration
- Bad-rate, delinquency and default tracking
- Approval, reject and manual review policy tracking
- Population and feature drift dashboard
- Model ranking and calibration stability
- Vintage, product and segment monitoring
- Alert triage and action register

## Principle

No monitoring signal is useful until it produces an owner, interpretation and business action.

## User-facing effect

A new Evidence & QA page appears: `Portfolio Monitoring Dashboard Blueprint`. It bridges model card monitoring outputs and professional portfolio risk decisions.
