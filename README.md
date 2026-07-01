# Professional Knowledge Hub

A React + Vite + TypeScript platform for Data Science, Banking, Finance, Economics, Management, Analytics and AI Governance.

## Vision

The Hub is designed as a professional second brain. It explains what a concept is, when to use it, how to use it, where it appears in a project, what output it produces, what decision it supports and what should be monitored afterward.

## Current sprint status

The project has advanced through Sprint 5.13.

Sprint 5.13 adds the `Alert Playbook & Remediation Workflow`, a controlled Evidence & QA layer that turns portfolio monitoring alerts into trigger triage, owner assignment, root-cause diagnosis, remediation actions, escalation paths, evidence packs and closure criteria.

## Current modules

- Dashboard
- Global Search
- Knowledge Library
- Knowledge Asset Detail
- Smart Tooltips
- Knowledge Factory
- Study Paths
- Learning Session Mode
- Data Science Operating System
- Business Operating System
- Banking & Finance
- Credit Risk Analytics
- Professional Scenarios
- Decision Playbooks
- Output Atlas
- Formula Library
- Model Library
- Business Cases
- Knowledge Map
- Quality Review
- Study Modules
- Professional Certifications
- Banking & Credit Risk Study
- Academic Upgrade Pass
- ABT Blueprint
- ABT Schema Template
- ABT Field Review Matrix
- Model-Ready Feature Set
- Credit Scoring Experiment Blueprint
- Model Card & Monitoring Handoff
- Portfolio Monitoring Dashboard Blueprint
- Alert Playbook & Remediation Workflow

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
```

## Design principles

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
- UX/UI: functional learning platform with backstage governance pages.
- Search: global search now includes the credit scoring governance pages for feature readiness, experiment design, model card monitoring, portfolio dashboard monitoring and alert remediation.
- Technical QA: sprint checks, lint, build and validate scripts configured through Sprint 5.13.
- Next phase: Sprint 5.14 should define the model refresh and challenger review workflow from remediation outcomes.
