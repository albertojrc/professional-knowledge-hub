# Sprint 5.3 — Credit Scoring Promotion Queue

Adds a controlled promotion queue for the credit scoring review pass.

## New files

- `src/types/creditPromotion.ts`
- `src/data/creditPromotionQueue.ts`
- `src/pages/CreditPromotionQueuePage.tsx`
- `src/styles/creditPromotionQueueOS.css`

## Decisions covered

- Promote credit scoring workflow into Banking Study after refs
- Hold target definition until refs are captured
- Promote validation output structure into Output Atlas after refs
- Hold score bands and cutoffs pending policy evidence
- Keep ABT bridge as professional complement until dataset mapping
- Promote model defense prompt into Interview Prep after refs
- Reject full source-backed promotion for now

## Principle

Promotion is conditional. A reviewed idea can move only after page references, evidence limits and review decisions are recorded.

## Technical note

`ViewId` was relaxed to `string` so the Hub can keep expanding without large brittle route unions blocking future sprints.
