# Professional Knowledge Hub

A React + Vite + TypeScript platform for Data Science, Banking, Finance, Economics, Management, Analytics and AI Governance.

## Vision

The Hub is designed as a professional second brain. It explains what a concept is, when to use it, how to use it, where it appears in a project, what output it produces, what decision it supports and what should be monitored afterward.

## Current sprint status

The project has advanced through Sprint 5.13 and UX Reorg 2.

UX Reorg 2 sets the visible sidebar to exactly five modules and converts Data Science, Banking & Finance and CFA & Certifications into command centers. Each module now uses search-style capsules with detailed panels that show workflow, outputs, concepts, formulas/tools, practice moves and connected views.

## Visible navigation modules

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map

## Current command centers

- Data Science Command Center
  - Data Workflow Foundations
  - SQL, ABT & Analytics Engineering
  - EDA, Statistics & Interpretation
  - Machine Learning Lifecycle
  - BI, Dashboards & Decision Storytelling
  - Governance, Monitoring & Responsible AI
- Banking & Finance Command Center
  - Credit Risk Core
  - Credit Scoring & Model Lifecycle
  - Corporate Finance & Valuation
  - Portfolio Monitoring & Governance
- CFA & Certifications Command Center
  - CFA Level I Roadmap
  - Finance Foundations for CFA
  - Investments & Portfolio Management
  - Bloomberg as Support Tool

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
docs/UX_REORG_1_CLEAN_NAVIGATION_COMMAND_CENTERS.md
```

## Design principles

- The sidebar should stay fixed at five visible modules.
- Data Science, Banking & Finance and CFA & Certifications should behave like command centers.
- Each module capsule should open a detail panel with at least Global Search-level clarity.
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
- Data Science: command center now organizes workflow foundations, SQL/ABT, EDA/statistics, ML lifecycle, BI/storytelling and governance/monitoring.
- Banking analytics: ABT blueprint, ABT schema template, field review matrix, model-ready feature set, credit scoring experiment blueprint, model card monitoring handoff, portfolio monitoring dashboard blueprint and alert remediation workflow are now connected.
- UX/UI: cleaner five-module navigation with command centers for Data Science, Banking & Finance and CFA & Certifications.
- Search: specific terms and deep pages remain accessible through search and focused routes, without crowding the sidebar.
- Technical QA: sprint checks, lint, build and validate scripts configured through Sprint 5.13 plus UX Reorg 2.
- Next phase: refine the Home dashboard so it matches the same five-module command-center navigation model before adding Sprint 5.14 content.
