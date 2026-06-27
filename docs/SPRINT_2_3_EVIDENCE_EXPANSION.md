# Sprint 2.3 — Evidence-Based Asset Expansion Batch 1

Sprint 2.3 creates the first expansion queue for assets that should be validated against class materials before becoming official source-supported knowledge.

## Objective

Prepare the first batch of candidate assets while preserving source honesty.

The system separates:

- Class evidence candidates
- Recommended complements
- Needs review items

## Why this matters

The Hub should not claim that a topic was covered in class until the actual material is inspected.

This sprint creates a validation queue instead of prematurely adding unsupported class claims.

## New files

- `src/types/evidenceExpansion.ts`
- `src/data/evidenceExpansion.ts`
- `src/pages/EvidenceExpansionPage.tsx`
- `src/styles/evidenceExpansionOS.css`

## New app section

A new Source section page was added:

```text
Evidence Expansion
```

## Candidate assets in batch 1

- Data Quality Report
- Analytical Base Table
- SQL Joins
- Financial Ratios
- Cash Flow Analysis
- Macro Scenario Analysis
- Fraud Detection
- AML/KYC Analytics
- Customer Segmentation
- Operations Dashboard

## Candidate status meanings

### Class evidence candidate

Likely to be supported by class materials, but still requires inspection.

### Recommended complement

Professionally important and relevant, but may not be directly covered in class.

### Needs review

The area or material may exist, but evidence is too uncertain to classify confidently.

## Page capabilities

The Evidence Expansion page includes:

- Candidate asset queue
- Filters by status, area and program
- Search across evidence and validation questions
- Expected evidence lists
- Validation questions
- Next actions

## Platform integrations

Evidence Expansion is connected to:

- Sidebar navigation
- Dashboard shortcut
- App router
- Global Search
- Styling system
- QA audit

## Next sprint

Sprint 2.4 should start converting validated candidates or high-priority areas into actual source-aware Knowledge Assets.

Recommended focus:

- Data Quality Report
- Analytical Base Table
- SQL Joins
- Financial Ratios
- Cash Flow Analysis
