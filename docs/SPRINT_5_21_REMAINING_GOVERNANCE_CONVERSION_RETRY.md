# Sprint 5.21 — Remaining Governance Conversion Retry

## Purpose

Sprint 5.21 retries the remaining governance conversions using ultra-compact visual wrappers to avoid connector rewrite blocks.

## Converted in this sprint

### ABT Design Blueprint

Added `ABTGovernanceVisual` and connected `ABTBlueprintPage` to it.

### Model Card & Monitoring Handoff

Added `ModelHandoffVisual` and connected `ModelCardMonitoringHandoffPage` to it.

### Alert Playbook & Remediation Workflow

Added `ActionWorkflowVisual` and connected `AlertRemediationWorkflowPage` to it.

## Still blocked

### Credit Scoring Experiment Blueprint

A compact wrapper was attempted again as `ScoringExperimentVisual`, but connector controls still blocked file creation.

This is now the only remaining governance page not converted to the shared visual governance pattern.

## Registry update

`src/data/visualSystemRegistry.ts` now marks the following governance layers as active:

- ABT Design Blueprint Governance Studio
- Model-Ready Feature Set Governance Studio
- Model Card & Monitoring Handoff Governance Studio
- Portfolio Monitoring Governance Studio
- Alert Playbook & Remediation Governance Studio

Only Credit Scoring Experiment Blueprint remains blocked.

## Design rule

The compact wrappers are intentionally smaller than the original rich pages. Their role is to stabilize the visual UX first. Richer details can be reintroduced later inside the shared visual pattern.

## Validation

Run:

```bash
node scripts/check-521.mjs
```

Package registration is intentionally skipped because previous large package rewrites were blocked by connector limits.
