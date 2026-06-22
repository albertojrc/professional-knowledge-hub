const approved = [
  'React/Vite architecture created as a real app, not a static HTML file.',
  'Dashboard, course module, Output Atlas and business case experiences are separated.',
  'Main theory is visible; details and red flags are secondary.',
  'Initial data layer is typed and extensible.',
  'Credit Risk module is implemented as the first professional course experience.'
]

const gaps = [
  'Expand all Data Science modules: statistics, SQL, Python, ML, time series, MLOps and GenAI.',
  'Add full Finance, Economics, Marketing, Operations and Management modules.',
  'Add deep Output Atlas entries for ROC, PR curve, SHAP, PSI, ARIMA, SARIMA, GARCH, WACC, A/B tests and dashboards.',
  'Connect source coverage to individual course documents from Drive.',
  'Add search scoring and concept graph relations.'
]

export function QualityReviewPage() {
  return (
    <section className="page-stack">
      <div className="page-header-panel">
        <span className="eyebrow">Quality Review</span>
        <h1>Coverage, gaps and build discipline</h1>
        <p>This page keeps the project honest: what is implemented, what is missing and what must not be faked.</p>
      </div>

      <div className="two-column">
        <article className="manual-section result-good">
          <h2>Approved foundation</h2>
          <ul>
            {approved.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="manual-section result-bad">
          <h2>Known gaps</h2>
          <ul>
            {gaps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
