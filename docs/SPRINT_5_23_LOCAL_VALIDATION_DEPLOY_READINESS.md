# Sprint 5.23 — Local Validation & Deploy Readiness

## Purpose

Prepare the Hub for local validation after the visual conversion sprints.

## Added

- `scripts/check-523.mjs`
- `docs/GITHUB_ACTIONS_VALIDATE_WORKFLOW.md`

## Local sequence

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

## Deploy rule

Do not deploy until `npm run build` passes locally.

## Next sprint

Sprint 5.24 should focus on local build fixes only. No new UX should be added until build status is confirmed.
