# Local Validation Guide

Use this guide when validating the Professional Knowledge Hub locally.

## Standard validation

```bash
npm install
npm run validate
```

## Additional visual checks not yet registered in package.json

Some recent checks are intentionally standalone because connector limits blocked large `package.json` rewrites.

Run:

```bash
node scripts/check-516.mjs
node scripts/check-517.mjs
node scripts/check-520.mjs
```

## Manual checks for Sprint 5.18 and 5.19

Sprint 5.18 and Sprint 5.19 include manual QA documentation because the connector blocked some check-file creation or package updates.

Review:

```text
docs/SPRINT_5_18_DEEP_PAGES_VISUAL_CONVERSION.md
docs/SPRINT_5_19_GOVERNANCE_DEEP_PAGES_VISUAL_POLISH.md
docs/SPRINT_5_20_ROUTE_QA_STABILIZATION.md
```

## Visual smoke test

Open the app locally and check these routes from the UI:

1. Home
2. Data Science
3. Banking & Finance
4. CFA & Certifications
5. Knowledge Map
6. Global Search from Home
7. Output Atlas from Search
8. Formula Library from Search
9. Model Library from Search
10. Business Cases from Search
11. Model-Ready Feature Set from Search
12. Portfolio Monitoring Dashboard Blueprint from Search

## Build check

```bash
npm run lint
npm run build
```

## Deployment rule

Do not deploy until `npm run build` passes locally.
