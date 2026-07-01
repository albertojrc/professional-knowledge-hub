# Professional Knowledge Hub

A React + Vite + TypeScript platform for Data Science, Banking, Finance, Economics, Management, Analytics and AI Governance.

## Vision

The Hub is designed as a professional second brain. It explains what a concept is, when to use it, how to use it, where it appears in a project, what output it produces, what decision it supports and what should be monitored afterward.

## Current sprint status

The project has advanced through Sprint 5.11.

Sprint 5.11 adds the `Model Card & Monitoring Handoff`, a controlled Evidence & QA layer that turns credit scoring experiment outputs into model documentation, monitoring controls, alert rules, ownership questions and limitation tracking.

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
- Banking analytics: ABT blueprint, ABT schema template, field review matrix, model-ready feature set, credit scoring experiment blueprint and model card monitoring handoff are now connected.
- UX/UI: functional learning platform with backstage governance pages.
- Search: global search now includes the credit scoring governance pages for feature readiness, experiment design and model card monitoring.
- Technical QA: sprint checks, lint, build and validate scripts configured through Sprint 5.11.
- Next phase: Sprint 5.12 should define the portfolio monitoring dashboard blueprint from the model card monitoring outputs.
