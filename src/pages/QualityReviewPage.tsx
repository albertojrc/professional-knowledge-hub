const approved = [
  'React/Vite architecture created as a real app, not a static HTML file.',
  'Knowledge Library, Global Search, Study Paths and Learning Session are separated experiences.',
  'Knowledge assets are loaded through a combined registry, which keeps expansion modular.',
  'Progress tracking and path preferences are stored locally and shared across Dashboard, Library, Study Paths and Learning Session.',
  'Sprint 1 QA audit validates core files, routes, view ids, style imports, content batches and key integrations.',
  'Sprint 1 now has formal final review and Sprint 2 roadmap documentation.'
]

const gaps = [
  'Run npm run validate locally to confirm qa:audit, lint and build.',
  'Connect source coverage to individual class documents from Drive.',
  'Separate source-based content from recommended complementary content.',
  'Add export/import or cloud sync for local progress and path preferences.',
  'Add automated unit tests for progress, search and study path helpers.'
]

const qaCommands = [
  'npm install',
  'npm run qa:audit',
  'npm run lint',
  'npm run build',
  'npm run validate'
]

const sprint1Systems = [
  'Dashboard',
  'Global Search',
  'Knowledge Library',
  'Knowledge Asset Detail',
  'Smart Tooltips',
  'Knowledge Factory',
  'Study Paths',
  'Learning Session',
  'Progress Tracking',
  'Path Preferences',
  'Deep Linking',
  'Content Batches',
  'CI QA Audit',
  'Sprint 2 Roadmap'
]

const sprint2Roadmap = [
  'Source Inventory System',
  'Course Area Mapping',
  'Source-Based Asset Expansion',
  'Output Atlas Expansion',
  'Formula & Model Library Expansion',
  'Business Case Consolidation',
  'Knowledge Graph Upgrade',
  'Source Coverage QA'
]

export function QualityReviewPage() {
  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">Quality Review · Sprint 1.15</span>
        <h1>Sprint 1 closed. Sprint 2 ready for source-based expansion.</h1>
        <p>This page keeps the project honest: what is implemented, what is missing and what must be validated before ingesting real class material.</p>
      </div>

      <section className="manual-panel result-good">
        <span className="eyebrow">Sprint 1 Status</span>
        <h2>Foundation complete</h2>
        <p>The Hub now has the platform structure needed to scale into a source-based professional second brain.</p>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Sprint 1 Systems</span>
        <h2>Implemented platform layers</h2>
        <div className="badge-list">
          {sprint1Systems.map((item) => <span className="badge badge-blue" key={item}>{item}</span>)}
        </div>
      </section>

      <div className="two-column">
        <article className="manual-section result-good">
          <h2>Approved foundation</h2>
          <ul>{approved.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>

        <article className="manual-section result-bad">
          <h2>Known gaps before Sprint 2</h2>
          <ul>{gaps.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>

      <section className="manual-panel">
        <span className="eyebrow">Sprint 2 Roadmap</span>
        <h2>Next phase: source-based knowledge consolidation</h2>
        <div className="badge-list">
          {sprint2Roadmap.map((item) => <span className="badge badge-purple" key={item}>{item}</span>)}
        </div>
      </section>

      <section className="manual-panel">
        <span className="eyebrow">Validation Commands</span>
        <h2>Run before considering Sprint 1 stable</h2>
        <pre className="code-block compact">{qaCommands.join('\n')}</pre>
      </section>
    </section>
  )
}
