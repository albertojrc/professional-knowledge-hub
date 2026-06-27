const approved = [
  'React/Vite architecture created as a real app, not a static HTML file.',
  'Knowledge Library, Global Search, Study Paths and Learning Session are now separated experiences.',
  'Knowledge assets are loaded through a combined registry, which keeps expansion modular.',
  'Progress tracking and path preferences are stored locally and shared across Dashboard, Library and Study Paths.',
  'Sprint 1 QA audit script validates core files, routes, view ids, style imports and key integrations.'
]

const gaps = [
  'Run npm run validate locally after each sprint to confirm qa:audit, lint and build.',
  'Expand Data Science modules: statistics, SQL, Python, ML, time series, MLOps and GenAI.',
  'Add full Finance, Economics, Marketing, Operations and Management modules from class materials.',
  'Connect source coverage to individual course documents from Drive.',
  'Add export/import or cloud sync for local progress and path preferences.'
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
  'CI QA Audit'
]

export function QualityReviewPage() {
  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">Quality Review · Sprint 1.13</span>
        <h1>Coverage, gaps and build discipline</h1>
        <p>This page keeps the project honest: what is implemented, what is missing and what must be validated before expanding content.</p>
      </div>

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
          <h2>Known gaps</h2>
          <ul>{gaps.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>

      <section className="manual-panel">
        <span className="eyebrow">Validation Commands</span>
        <h2>Run before considering the sprint stable</h2>
        <pre className="code-block compact">{qaCommands.join('\n')}</pre>
      </section>
    </section>
  )
}
