# Sprint 2.1 — Source Inventory System

Sprint 2.1 starts the source-based phase of the Professional Knowledge Hub.

The purpose is to create a structured inventory layer so real class materials can be mapped into professional knowledge assets without losing source traceability.

## Objective

Create the first system that connects:

- Programs
- Courses
- Folders
- Files
- Topics
- Concepts
- Assets
- Gaps
- Professional applications

## New app section

A new app page was added:

```text
Material Inventory
```

This page is the entry point for mapping class materials into the Hub.

## New files

- `src/types/materialInventory.ts`
- `src/data/materialInventory.ts`
- `src/pages/MaterialInventoryPage.tsx`
- `src/styles/materialInventoryOS.css`

## Existing configured materials registered

The initial inventory includes the configured project materials:

- `degree_references / index.html`
- `degree_references / README.md`
- `Dual Degree MIM + MBD'S`

These are intentionally marked as pending/not inventoried until their contents are inspected and mapped.

## Course module registry

The first course module registry includes:

- Strategy & Management
- Finance & Economics
- Data Science & Machine Learning
- SQL, Big Data & BI
- Banking & Risk Analytics

## Mapping workflow

Each material should go through this process:

1. Identify material
2. Extract topics
3. Classify coverage
4. Map to assets
5. Connect professional use
6. QA source coverage

## Coverage rules

Sprint 2 must follow these rules:

- Do not claim class coverage unless the material supports it.
- Mark missing items as recommended gaps.
- Separate source-backed content from complementary synthesis.
- Consolidate duplicated concepts across courses.
- Prioritize banking and data analytics relevance.

## Platform integrations

Material Inventory is connected to:

- Sidebar navigation
- Dashboard shortcut
- Global Search
- App router
- Source group in sidebar
- Styling system

## Next Sprint

Sprint 2.2 should build the Course Area Mapping layer.

It should map materials and modules into the main professional areas:

- Data Science
- Machine Learning
- Statistics
- SQL / Databases
- Big Data
- Banking
- Finance
- Economics
- Management
- Marketing
- Operations
- Analytics / BI
