# Sprint 2.22 — Source Governance Command Center

Sprint 2.22 adds an executive control panel for source governance.

## Objective

Combine Source Governance, Review Result Registry, Promotion Queue, Controlled Update Log and Decision Board signals into one command center.

## New files

- `src/types/sourceCommandCenter.ts`
- `src/data/sourceCommandCenter.ts`
- `src/pages/SourceCommandCenterPage.tsx`
- `src/styles/sourceCommandCenterOS.css`

## New page

```text
Source Command Center
```

## Command chain

```text
Review Result Registry → Promotion Queue → Decision Board → Controlled Update Log → Knowledge Hub Update
```

## Governance rule

No academic source-backed upgrade is allowed without reviewed course evidence and Decision Board approval.

## Next sprint

Sprint 2.23 should focus on navigation cleanup so all governance pages are available from the sidebar and searchable from Global Search.
