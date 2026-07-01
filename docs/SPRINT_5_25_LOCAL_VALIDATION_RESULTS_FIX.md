# Sprint 5.25 — Local Validation Results Fix

## Trigger

Local validation showed this outdated QA failure:

```text
QA FAIL: src/pages/KnowledgeMapPage.tsx does not contain required text: professionalGraphNodes
```

## Cause

`KnowledgeMapPage` was converted in Sprint 5.17 into a wrapper around `VisualKnowledgeMapStudio`.

The graph data now lives in:

```text
src/components/knowledge/VisualKnowledgeMapStudio.tsx
```

But `scripts/qa-audit.mjs` still expected `professionalGraphNodes` directly inside:

```text
src/pages/KnowledgeMapPage.tsx
```

## Fix

Updated `scripts/qa-audit.mjs` so it now checks:

- `KnowledgeMapPage.tsx` contains `VisualKnowledgeMapStudio`
- `VisualKnowledgeMapStudio.tsx` contains `professionalGraphNodes`

## Next local command

Run:

```bash
npm run validate
```

Then run the standalone checks again if needed.
