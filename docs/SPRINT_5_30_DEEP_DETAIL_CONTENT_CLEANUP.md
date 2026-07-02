# Sprint 5.30 — Deep Detail Content Cleanup

## Purpose

Make the deep topic detail page more concrete and less generic.

This page is the final destination for every topic in Data Science, Banking and CFA, so it must explain the topic with useful blocks instead of filler text.

## Added

### Concrete study path

Added `KnowledgeAssetStudyGuide`.

It builds the study guide from the actual asset content:

- definition
- first use case
- first application step
- first interpretation rule
- first output

### Decision brief

Added `KnowledgeAssetDecisionBrief`.

It summarizes:

- what decision the concept supports
- primary output
- metric to check
- assumption to challenge

## Updated detail page

`KnowledgeAssetDetailPage` now uses:

- `KnowledgeAssetStudyGuide`
- `KnowledgeAssetDecisionBrief`
- clearer section tabs: Define, Use, Apply, Interpret, Output, Decision
- more concrete output block copy
- more specific interpretation checklist

## Styling

Added `src/styles/deepDetailCleanupOS.css`.

## Design rule

Every detail page must answer:

```text
What is it?
When is it used?
How is it used?
How is it interpreted?
What output does it create?
What decision does it support?
```

## Validation

Run:

```bash
node scripts/check-530.mjs
```
