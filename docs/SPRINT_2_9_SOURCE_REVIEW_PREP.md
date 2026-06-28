# Sprint 2.9 — Source Review Prep

Sprint 2.9 adds the preparation layer for reviewing configured study materials.

## Objective

Create a queue that defines what should be reviewed first, which metadata should be captured and which Hub objects can be updated after review.

## New files

- `src/types/sourceReview.ts`
- `src/data/sourceReviewPrep.ts`
- `src/pages/SourceReviewPrepPage.tsx`
- `src/styles/sourcePrepOS.css`

## Updated files

- `src/types/knowledge.ts`
- `src/components/layout/Sidebar.tsx`
- `src/app/App.tsx`
- `src/pages/DashboardPage.tsx`
- `src/data/searchIndex.ts`
- `src/main.tsx`
- `scripts/qa-audit.mjs`

## New page

```text
Source Review Prep
```

## Initial review items

- degree_references / index.html
- degree_references / README.md
- Dual Degree MIM + MBD'S
- Banking and Risk Analytics Materials
- Finance and Economics Materials

## Review workflow

1. Capture file metadata
2. Extract topics
3. Map to Hub objects
4. Update coverage status

## Next sprint

Sprint 2.10 should execute the first real source review pass and update coverage records accordingly.
