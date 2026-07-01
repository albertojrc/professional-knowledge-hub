# Deploy Readiness Checklist

Use this checklist before publishing the Professional Knowledge Hub.

## 1. Install and validate

```bash
npm install
npm run validate
```

## 2. Run standalone visual checks

```bash
node scripts/check-516.mjs
node scripts/check-517.mjs
node scripts/check-520.mjs
node scripts/check-521.mjs
node scripts/check-522.mjs
```

## 3. Run technical checks

```bash
npm run lint
npm run build
```

## 4. Visual smoke test

Open the app and review:

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map
- Global Search
- Output Atlas
- Formula Library
- Model Library
- Business Cases
- ABT Design Blueprint
- Model-Ready Feature Set
- Credit Scoring Experiment Blueprint
- Model Card & Monitoring Handoff
- Portfolio Monitoring Dashboard Blueprint
- Alert Playbook & Remediation Workflow

## 5. Deploy rule

Only deploy after `npm run build` passes.
