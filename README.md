# Professional Knowledge Hub

A React + Vite + TypeScript platform for Data Science, Banking, Finance, Economics, Management, Analytics and AI Governance.

## Vision

The Hub is designed as a professional second brain and visual learning platform. It explains what a concept is, when to use it, how to use it, where it appears in a project, what output it produces, what decision it supports and what should be monitored afterward.

## Current sprint status

The project has advanced through Sprint 5.14 and UX Reorg 3.

UX Reorg 3 uses the Knowledge Asset Detail page as the visual reference for the main modules. Sprint 5.14 continues that direction by adding a visual model governance path for Model Refresh & Challenger Review inside Banking & Finance.

## Visible navigation modules

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map

## Current visual studios

- Data Science Visual Studio
  - Orientation flow: Data Workflow Foundations, SQL/ABT, EDA, ML Lifecycle, BI/Storytelling and Governance/Monitoring
  - Restored capsule layer: Data Science Search Capsules from `globalSearchIndex`
- Banking & Finance Visual Studio
  - Orientation flow: Credit Risk Core, Credit Scoring & Model Lifecycle, Corporate Finance & Valuation, Portfolio Monitoring & Governance, and Model Refresh & Challenger Review
  - Restored capsule layer: Banking & Finance Search Capsules from `globalSearchIndex`
- CFA & Certifications Visual Studio
  - Orientation flow: CFA Level I Roadmap, Finance Foundations for CFA, Investments & Portfolio Management and Bloomberg as Support Tool
  - Restored capsule layer: CFA & Certifications Search Capsules from `globalSearchIndex`

## Local setup

```bash
npm install
npm run dev
```

Open the local Vite URL, usually:

```text
http://localhost:5173
```

## Validation

Run the full validation process:

```bash
npm run validate
```

Or run each step manually:

```bash
npm run qa:audit
npm run qa:sprint58
npm run qa:sprint59
npm run qa:sprint510
npm run qa:sprint511
npm run qa:sprint512
npm run qa:sprint513
npm run qa:sprint514
npm run qa:ux-reorg
npm run lint
npm run build
```

See also:

```text
docs/QA_CHECKLIST.md
docs/SPRINT_1_QA_HARDENING.md
docs/SPRINT_1_FINAL_REVIEW.md
docs/SPRINT_2_ROADMAP.md
docs/SPRINT_5_8_ABT_FIELD_REVIEW_MATRIX.md
docs/SPRINT_5_9_MODEL_READY_FEATURE_SET.md
docs/SPRINT_5_10_CREDIT_SCORING_EXPERIMENT_BLUEPRINT.md
docs/SPRINT_5_11_MODEL_CARD_MONITORING_HANDOFF.md
docs/SPRINT_5_12_PORTFOLIO_MONITORING_DASHBOARD_BLUEPRINT.md
docs/SPRINT_5_13_ALERT_REMEDIATION_WORKFLOW.md
docs/SPRINT_5_14_MODEL_REFRESH_CHALLENGER_REVIEW.md
docs/UX_REORG_1_CLEAN_NAVIGATION_COMMAND_CENTERS.md
```

## Design principles

- The sidebar should stay fixed at five visible modules.
- The visual reference is the Knowledge Asset Detail page style.
- Data Science, Banking & Finance and CFA & Certifications should behave like visual learning studios.
- A module must not replace Global Search depth with summaries.
- Each module should include orientation paths and a real search-index capsule layer.
- Search capsules should show kind, area, category, summary, signals/tags and focused route context.
- Specific deep pages remain accessible through search, internal links and focused routes.
- Main theory must be visible.
- Every important topic should answer: what, when, how, project moment, output, decision and monitoring.
- Output Atlas teaches how to interpret outputs.
- Professional Scenarios show end-to-end workflows.
- Decision Playbooks translate outputs into professional decisions.
- Knowledge Map connects concepts, tools, formulas, models, outputs and cases.
- Source coverage must be explicit when real class materials are integrated.

## Current maturity

- Architecture: React/Vite/TypeScript Professional Knowledge Operating System.
- Content depth: study-first modules with controlled Evidence & QA expansion.
- Data Science: visual studio now organizes workflow foundations, SQL/ABT, EDA/statistics, ML lifecycle, BI/storytelling and governance/monitoring, with restored search-index capsules.
- Banking analytics: visual studio now connects ABT blueprint, feature readiness, experiment design, model card, monitoring handoff, portfolio monitoring, alert remediation and model refresh/challenger review.
- UX/UI: cleaner five-module navigation with visual learning studios and restored Global Search-style capsule layers.
- Search: specific terms and deep pages remain accessible through search and focused routes, without crowding the sidebar.
- Technical QA: sprint checks, lint, build and validate scripts configured through Sprint 5.14 plus UX Reorg 3.
- Next phase: bring Home into the same visual studio language and continue converting deeper pages to the concept-learning visual pattern.
