# Sprint 5.14 — Model Refresh & Challenger Review

## Purpose

Sprint 5.14 adds a visual governance workflow for deciding when a credit model should remain monitored, be recalibrated, be refreshed, be challenged or move through controlled deployment.

## Visual rule

This sprint follows the new Visual Learning Studio direction. Content should feel like a professional study page with:

- hero card
- learning workflow
- stage chips
- output cards
- side output panel
- interpretation checklist
- Global Search capsule integration

## Added content

- `refreshStages`: trigger, diagnosis, challenger build, governance review and controlled deployment
- `challengerCriteria`: performance, calibration, stability and explainability criteria
- `refreshOutputs`: trigger memo, champion/challenger table, segment grid and decision log
- `refreshScenarios`: macro shift, channel mix and feature decay examples
- `refreshChecklist`: promotion and governance checklist

## Integration

The sprint is integrated into Banking & Finance as the path `Model Refresh & Challenger Review` through `modelRefreshChallengerTrack`. It is also searchable through Global Search as `bf-model-refresh-challenger-review`, pointing back to the Banking & Finance Visual Studio.

## Why this matters

This sprint connects the previous governance chain:

1. Model-Ready Feature Set
2. Credit Scoring Experiment Blueprint
3. Model Card & Monitoring Handoff
4. Portfolio Monitoring Dashboard Blueprint
5. Alert Playbook & Remediation Workflow
6. Model Refresh & Challenger Review

The result is a stronger professional model lifecycle: build, validate, document, monitor, remediate and refresh.

## Validation

Run:

```bash
npm run qa:sprint514
```

or full validation:

```bash
npm run validate
```
