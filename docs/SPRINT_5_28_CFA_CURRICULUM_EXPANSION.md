# Sprint 5.28 — CFA Curriculum Expansion

## Purpose

Expand the CFA & Certifications module so it no longer depends mainly on generic finance assets.

The module should show certification paths first, then topic-level CFA content, and every topic should open the same deep detail view used across the Hub.

## Added CFA assets

Added `src/data/knowledgeAssetsCfa.ts` with 10 foundation assets:

- Ethics & Professional Standards
- Quantitative Methods
- Economics
- Financial Statement Analysis
- Corporate Issuers
- Equity Investments
- Fixed Income
- Derivatives
- Alternative Investments
- Portfolio Management

Each asset follows the `KnowledgeAsset` detail structure:

- what it is
- why it matters
- when to use
- how to use
- interpretation
- outputs
- assumptions
- applications
- common mistakes
- professional tip

## Registry update

`knowledgeAssetRegistry.ts` now includes `cfaFoundationAssets`.

## Curriculum update

`cfaCurriculum` now points to dedicated CFA assets:

- CFA Level I Foundations uses all 10 CFA foundation topics.
- Bloomberg Market Concepts uses economics, fixed income, equity and portfolio management.
- Bloomberg Finance Fundamentals uses FSA, corporate issuers, equity and fixed income.
- Bloomberg Terminal Workflows uses economics, equity, fixed income and portfolio management.

## Design rule

CFA should behave as:

```text
Certification → Topic → Deep Detail View
```

No unrelated chart should be forced. CFA topics rely on professional output blocks, formula cards or checklists unless a specific chart is appropriate.

## Validation

Run:

```bash
node scripts/check-528.mjs
```
