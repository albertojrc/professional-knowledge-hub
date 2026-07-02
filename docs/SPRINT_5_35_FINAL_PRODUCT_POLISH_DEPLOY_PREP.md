# Sprint 5.35 — Final Product Polish & Deploy Prep

## Purpose

Close the UX architecture sprint series and prepare the Professional Knowledge Hub for final local validation and deploy review.

This sprint does not add major new product surfaces. It consolidates readiness criteria and deployment rules.

## Updated

### `docs/DEPLOY_READINESS_CHECKLIST.md`

The deploy checklist now includes the full validation sequence for the current sprint architecture:

- validate
- standalone checks 516–535
- lint
- build
- product smoke test
- curriculum smoke test
- search smoke test
- Knowledge Map smoke test
- UX smoke test
- deploy rule

## Added

### `src/data/finalProductReadiness.ts`

Defines final readiness areas:

- clean navigation
- curriculum structure
- deep topic detail
- search alignment
- Knowledge Map sync
- UX consistency
- technical validation

### `scripts/check-535.mjs`

Validates the final deploy checklist and readiness manifest.

## Product readiness rule

The Hub is deploy-ready only when the user has run locally:

```bash
npm run validate
node scripts/check-516.mjs
node scripts/check-517.mjs
node scripts/check-520.mjs
node scripts/check-521.mjs
node scripts/check-522.mjs
node scripts/check-523.mjs
node scripts/check-524.mjs
node scripts/check-525.mjs
node scripts/check-526.mjs
node scripts/check-527.mjs
node scripts/check-528.mjs
node scripts/check-529.mjs
node scripts/check-530.mjs
node scripts/check-531.mjs
node scripts/check-532.mjs
node scripts/check-533.mjs
node scripts/check-534.mjs
node scripts/check-535.mjs
npm run lint
npm run build
```

## Visual smoke test rule

Before deploy, manually review:

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map
- Global Search
- one Data Science topic detail
- one Banking topic detail
- one CFA topic detail

## Design rule

Do not add new features after this sprint until local validation is green.

If errors appear, fix only the failing files and rerun the validation sequence.
