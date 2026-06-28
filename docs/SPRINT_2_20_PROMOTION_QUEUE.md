# Sprint 2.20 — Evidence-to-Asset Promotion Queue

Sprint 2.20 adds a controlled queue for turning reviewed evidence into proposed Hub updates.

## Objective

Connect review results to proposed updates for Knowledge Assets, Output Atlas, Formula Library, Business Cases, Knowledge Graph and Coverage QA.

## New files

- `src/types/promotionQueue.ts`
- `src/data/promotionQueue.ts`
- `src/pages/PromotionQueuePage.tsx`
- `src/styles/promotionQueueOS.css`

## New page

```text
Promotion Queue
```

## Governance rule

Promotion proposals do not apply automatically. Every high-impact update still requires Decision Board approval.

## Initial queue

- Governance evidence to Quality Review update
- Index shell to metadata update
- Data Quality Report promotion blocked
- SQL and ABT promotion blocked
- Finance formulas promotion blocked
- Business case library promotion blocked

## Next sprint

Sprint 2.21 should create a Controlled Update Log to record which promotions were applied, rejected or deferred after decision review.
