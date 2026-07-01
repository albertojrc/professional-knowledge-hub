# Sprint 5.17 — Knowledge Map Visual Studio

## Purpose

Sprint 5.17 rebuilds Knowledge Map so it matches the visual learning platform direction. The map should help the user understand how concepts, tools, formulas, models, outputs, cases and decisions connect.

## UX changes

Knowledge Map now uses `VisualKnowledgeMapStudio`, which includes:

- lesson-style toolbar and breadcrumb
- large visual hero card
- core learning flow
- map filters
- professional pathway selector
- visual node canvas
- relationship cards
- right-side selected node panel
- connected objects
- relationship notes
- original knowledge chains

## Design rule

Knowledge Map remains one of the five visible sidebar modules. It should not behave like a technical graph dump. It should explain dependency, learning order, output relevance and decision connection.

## Integration

- `KnowledgeMapPage` now delegates to `VisualKnowledgeMapStudio`.
- Visual styling is applied through the already imported `professionalGraphOS.css`.
- The page still uses the existing graph source of truth: `professionalGraphNodes`, `professionalGraphLinks` and `professionalGraphPathways`.

## Validation

Run:

```bash
node scripts/check-517.mjs
```

Package script registration is pending because previous full `package.json` rewrites were blocked by the connector.
