# UX Reorg 3 — Visual Learning Studio

This pass uses the Knowledge Asset Detail page as the visual reference for the main modules.

## Why

The hub should feel like a professional learning platform. The target experience is a lesson-style page with a large hero card, breadcrumb, reading guide, tabs, output panel, checklist and clear study blocks.

## Visible sidebar modules

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map

## Visual studio pattern

The main study modules now use `VisualModuleStudio`:

- lesson-style toolbar and breadcrumb
- large visual hero card
- section tabs
- selectable learning path chips
- reading guide
- numbered learning blocks
- workflow chain
- outputs, concepts and tools cards
- practice block
- search capsules from `globalSearchIndex`
- right-side study tracker, output preview, checklist and connected views

## Search parity

The visual redesign does not remove the search depth. Each module keeps a real search-capsule layer powered by `globalSearchIndex`. A capsule shows title, kind, area, category, summary, tags, route context and an `Open exact view` action.

## Data Science

`DataScienceAnalyticsStudyPage` now delegates to `VisualModuleStudio` with Data Science tracks and Data Science search capsules.

## Banking & Finance

`BankingCreditRiskStudyPage` now delegates to `VisualModuleStudio` with Banking & Finance tracks and Banking & Finance search capsules.

## CFA & Certifications

`ProfessionalCertificationsPage` now delegates to `VisualModuleStudio` with CFA-first tracks and CFA & Certifications search capsules.

## User-facing flow

1. Open one of the five main modules.
2. Choose a visual learning path chip.
3. Study the path through the hero, reading guide, workflow and output panel.
4. Browse restored search capsules inside the module.
5. Open the focused route for an exact asset, formula, output, model, case or governance page.
