# UX Reorg 2 — Five Main Modules & Global Search Parity

This reorganization pauses content expansion and repairs how the hub is navigated.

## Why

The sidebar had become too crowded, but the fix must not remove the powerful Global Search experience. The visible menu should contain five modules, while each module must preserve access to the same searchable capsule layer.

## Navigation principle

The sidebar should show only the main modules. Specific assets, governance pages, formulas, outputs, search results and backstage workflows remain accessible through internal search, deep links and command-center capsules.

## Visible sidebar modules

- Home
- Data Science
- Banking & Finance
- CFA & Certifications
- Knowledge Map

## Interior module principle

Each module must behave like a command center and also expose a real search-capsule layer powered by `globalSearchIndex`. Selecting a capsule should provide at least the same level of clarity as a Global Search entry:

- title
- kind
- area
- category
- summary
- search signals / tags
- route context
- button to open the same focused route when routing handlers are available

## Data Science redesign

`DataScienceAnalyticsStudyPage` is a command center with orientation paths plus `Data Science Search Capsules` powered by the real search index. It organizes:

- Data Workflow Foundations
- SQL, ABT & Analytics Engineering
- EDA, Statistics & Interpretation
- Machine Learning Lifecycle
- BI, Dashboards & Decision Storytelling
- Governance, Monitoring & Responsible AI

## Banking & Finance redesign

`BankingCreditRiskStudyPage` is a command center with orientation paths plus `Banking & Finance Search Capsules` powered by the real search index. It organizes:

- Credit Risk Core
- Credit Scoring & Model Lifecycle
- Corporate Finance & Valuation
- Portfolio Monitoring & Governance

## CFA & Certifications redesign

`ProfessionalCertificationsPage` is a CFA-first command center with orientation paths plus `CFA & Certifications Search Capsules` powered by the real search index. It organizes:

- CFA Level I Roadmap
- Finance Foundations for CFA
- Investments & Portfolio Management
- Bloomberg as Support Tool

## User-facing effect

The user is no longer forced to browse dozens of sidebar items, and the modules no longer feel like summaries. The preferred experience is:

1. Open one of the five main modules.
2. Use the orientation flow to understand the learning structure.
3. Use the restored search capsules inside the module to browse real Global Search entries.
4. Open the focused route for an exact asset, formula, output, model, case or governance page.
