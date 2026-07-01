# Sprint 5.24 — Local Build Fix Triage

## Purpose

Sprint 5.24 performs static build-risk triage before local validation.

No new UX should be added in this sprint. The goal is to reduce the risk of TypeScript, route, import or wrapper errors before running the project locally.

## Static checks performed

### Home Visual Dashboard

Checked `studyDashboard` and confirmed that `areaBreakdown`, `continueStudying`, `recommendedNext`, `reviewed`, `mastered` and `total` are returned by `getStudyDashboardData`.

Checked `CurrentPathPanel` props and confirmed Home passes the required callbacks and status reader.

### Deep Reference Studios

Checked `ReferencePage` and confirmed formulas/models are mapped into `VisualReferenceStudio` with the expected fields.

Checked extended formula/model datasets and confirmed they conform to the base interfaces.

### Governance Studios

Checked the datasets used by compact governance wrappers:

- ABT Design Blueprint
- Model-Ready Feature Set
- Model Card & Monitoring Handoff
- Alert Playbook & Remediation Workflow

The wrapper fields exist in the source data.

### Route shell

Checked `App.tsx` and confirmed converted governance pages still export and render under their existing route ids.

### TypeScript strictness

Checked `tsconfig.app.json`. `strict` is enabled, but `noUnusedLocals` and `noUnusedParameters` are disabled. This reduces risk from old imports and wrapper simplifications.

## Remaining local validation sequence

Run locally:

```bash
npm install
npm run validate
node scripts/check-516.mjs
node scripts/check-517.mjs
node scripts/check-520.mjs
node scripts/check-521.mjs
node scripts/check-522.mjs
node scripts/check-523.mjs
npm run lint
npm run build
```

## If build fails

Fix in this order:

1. Type errors in wrappers.
2. Missing imports or moved files.
3. Dataset field mismatches.
4. CSS class/style issues only after TypeScript passes.
5. Lint warnings after build blockers are resolved.

## Deploy rule

Do not deploy until `npm run build` passes locally.
