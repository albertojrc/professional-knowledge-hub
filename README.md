# Professional Knowledge Hub

A React + Vite + TypeScript platform for Data Science, Banking, Finance, Economics, Management, Analytics and AI Governance.

## Vision

The Hub is designed as a professional second brain. It explains what a concept is, when to use it, how to use it, where it appears in a project, what output it produces, what decision it supports and what should be monitored afterward.

## Current sprint status

The project has advanced through Sprint 5.13 and UX Reorg 1.

UX Reorg 1 simplifies the sidebar and converts Banking & Finance plus CFA & Certifications into command centers. The visible navigation is now intentionally small, while Global Search remains the main entry point for specific terms, outputs, formulas, models, governance pages and deep details.

## Visible navigation modules

- Home
- Global Search
- Banking & Finance
- CFA & Certifications
- Knowledge Map

## Current command centers

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

- The sidebar should stay small.
- Global Search is the preferred entry point for specific terms and deep pages.
- Main modules should behave like command centers, not long lists of internal pages.
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
- Banking analytics: ABT blueprint, ABT schema template, field review matrix, model-ready feature set, credit scoring experiment blueprint, model card monitoring handoff, portfolio monitoring dashboard blueprint and alert remediation workflow are now connected.
- UX/UI: cleaner navigation with command centers for Banking & Finance and CFA & Certifications.
- Search: global search remains the primary route into detailed concepts, outputs, formulas, models, business cases and governance pages.
- Technical QA: sprint checks, lint, build and validate scripts configured through Sprint 5.13 plus UX Reorg 1.
- Next phase: refine the Dashboard so it matches the same command-center navigation model before adding Sprint 5.14 content.
