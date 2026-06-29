# Sprint 5.0 — Academic Source Upgrade Pass

Adds a controlled academic upgrade queue that maps real master documents to Study-first modules without prematurely claiming source-backed status.

## New files

- `src/types/academicUpgrade.ts`
- `src/data/academicUpgradePass.ts`
- `src/data/academicUpgradeSearch.ts`
- `src/pages/AcademicUpgradePassPage.tsx`
- `src/styles/academicUpgradePassOS.css`

## Files mapped

- `RetailCreditScoring.pdf`
- `Session_10_Variance_and_KS_Testing_with_Solutions.pdf`
- `LCDataDictionary.xlsx`
- `LECTURE #10.3_ GRAPH ALGORITHMS.pdf`
- `LECTURE #10.1_ SPARK GRAPH CONCEPTS.pdf`
- `05-IMB467.pdf`
- `Risk and Fraud Analytics Syllabus - Manoel Gadi.pdf`
- `05 - IE_MBD_FA_s1_CreditScoring&BestPracticesInBanking_v6_selection.pdf`

## Principle

Academic files become source-backed only after reviewed extraction. Until then, they remain candidate, extraction-needed, promotion-candidate or blocked items.

## Note

The central search index update was avoided after connector safety blocking. The upgrade queue is exposed through the Evidence & QA navigation and governance search entries, while direct Global Search integration can be retried after local validation.
