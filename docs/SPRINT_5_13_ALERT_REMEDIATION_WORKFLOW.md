# Sprint 5.13 — Alert Playbook & Remediation Workflow

Adds an alert playbook and remediation workflow after the Portfolio Monitoring Dashboard Blueprint.

## New files

- `src/types/alertRemediationWorkflow.ts`
- `src/data/alertRemediationWorkflow.ts`
- `src/pages/AlertRemediationWorkflowPage.tsx`
- `src/styles/alertRemediationWorkflowOS.css`

## Updated files

- `src/app/App.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/styles/studyModuleHubOS.css`
- `src/data/professionalGraph.ts`
- `src/data/searchIndex.ts`
- `src/types/knowledge.ts`
- `package.json`
- `README.md`

## Alert playbooks

- PSI and feature drift breach
- Score band migration anomaly
- Bad-rate or delinquency deterioration
- Model ranking or calibration decay
- Approval, override or manual review anomaly
- Scoring data quality or schema break
- Vintage, product or segment concentration issue
- Alert ownership or SLA breach

## Principle

An alert is not closed when it is seen. It is closed when the root cause, owner, action and evidence are documented.

## User-facing effect

A new Evidence & QA page appears: `Alert Playbook & Remediation Workflow`. It bridges portfolio monitoring dashboard outputs and controlled business remediation decisions.
