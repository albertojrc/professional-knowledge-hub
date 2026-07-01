# Sprint 5.19 — Governance Deep Pages Visual Polish

## Purpose

Sprint 5.19 starts converting specialized governance pages into the same visual learning platform language used by Home, Global Search, Knowledge Map, Visual Studios and Deep Reference Studios.

## New shared pattern

The sprint introduces `VisualGovernanceStudio`, a reusable governance layout for controlled banking/model lifecycle pages.

The pattern includes:

- lesson-style toolbar
- breadcrumb
- hero card
- governance rule
- workflow chain
- searchable governance capsules
- right-side selected governance item panel
- decision impact
- next action
- interpretation checklist
- evidence / controls / outputs sections

## Converted pages

### Model-Ready Feature Set

`ModelReadyFeatureSetPage` now delegates to `VisualGovernanceStudio`.

It converts feature groups into governance capsules with candidate fields, evidence, transformations, allowed use, blocked use and linked review items.

### Portfolio Monitoring Dashboard Blueprint

`PortfolioMonitoringDashboardBlueprintPage` now delegates to `PortfolioMonitoringVisual`, which uses `VisualGovernanceStudio`.

It converts dashboard widgets into governance capsules with core metrics, required data, visual design and business actions.

## Prepared but blocked by connector

The following conversions were attempted but blocked by connector safety controls during file creation or replacement:

- ABT Design Blueprint
- Credit Scoring Experiment Blueprint
- Model Card & Monitoring Handoff
- Alert Playbook & Remediation Workflow

These pages are still candidates for the same `VisualGovernanceStudio` pattern in the next pass.

## Design rule

Governance pages should not read like static documentation. Each page should make clear:

1. What decision gate it controls.
2. What evidence is required.
3. Who owns the action.
4. What output is produced.
5. What should happen next.

## Validation

Manual validation checklist:

- `src/components/governance/VisualGovernanceStudio.tsx` exists.
- `src/pages/ModelReadyFeatureSetPage.tsx` renders `VisualGovernanceStudio`.
- `src/components/governance/PortfolioMonitoringVisual.tsx` exists.
- `src/pages/PortfolioMonitoringDashboardBlueprintPage.tsx` renders `PortfolioMonitoringVisual`.

A package QA script was not registered because repeated large `package.json` rewrites were previously blocked by the connector.
