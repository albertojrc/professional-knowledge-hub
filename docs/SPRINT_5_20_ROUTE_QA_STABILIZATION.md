# Sprint 5.20 — Route & QA Stabilization

## Purpose

Sprint 5.20 stabilizes the visual platform after the major UX conversion work from Sprints 5.15 to 5.19.

The goal is not to add more pages. The goal is to know exactly which visual layers are active, which routes are stable, which pages still need conversion and where connector limitations blocked work.

## Stabilization actions

### Visual System Registry

Added `src/data/visualSystemRegistry.ts` as the control registry for the current visual architecture.

It tracks:

- page / studio name
- route id
- visual layer
- component used
- status: active, prepared or blocked
- stabilization notes

## Active visual layers

- Home Visual Dashboard
- Global Search Visual Studio
- Data Science Visual Studio
- Banking & Finance Visual Studio
- CFA & Certifications Visual Studio
- Knowledge Map Visual Studio
- Output Atlas Reference Studio
- Formula Library Reference Studio
- Model Library Reference Studio
- Business Case Reference Studio
- Model-Ready Feature Set Governance Studio
- Portfolio Monitoring Governance Studio

## Blocked / pending conversions

The following pages remain pending because connector safety controls blocked file replacements or wrapper creation during Sprint 5.19:

- ABT Design Blueprint
- Credit Scoring Experiment Blueprint
- Model Card & Monitoring Handoff
- Alert Playbook & Remediation Workflow

These pages should still follow `VisualGovernanceStudio` in a future pass.

## QA strategy going forward

Because package rewrites were blocked by connector limits, not every sprint check can be registered in `package.json` yet. Until that is fixed, stabilization should rely on:

1. Existing `npm run validate` for registered checks.
2. Manual execution of standalone checks where available.
3. The visual registry as the source of truth for active vs pending visual layers.
4. Local TypeScript/build validation before final deploy.

## Product rule

From this sprint onward, new pages should not be added unless they satisfy at least one of these purposes:

- improve visual consistency
- improve route stability
- improve learning flow
- improve source/governance traceability
- improve deploy readiness

## Next recommended sprint

Sprint 5.21 should focus on finalizing the remaining governance conversions only if the connector allows small wrapper-based updates. If not, it should move to local build stabilization and deploy preparation.
