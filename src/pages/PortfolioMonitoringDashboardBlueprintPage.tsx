import { useMemo, useState } from 'react'
import { portfolioMonitoringSummary, portfolioMonitoringWidgets } from '../data/portfolioMonitoringDashboard'
import type { PortfolioDashboardSeverity, PortfolioDashboardWidgetStatus, PortfolioMonitoringWidget } from '../types/portfolioMonitoringDashboard'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

interface Props { focusId?: string | null }
const allValue = 'All'
const statusOptions = [allValue, ...Array.from(new Set(portfolioMonitoringWidgets.map((x) => x.status))).sort()]
const severityOptions = [allValue, ...Array.from(new Set(portfolioMonitoringWidgets.map((x) => x.severity))).sort()]

export function PortfolioMonitoringDashboardBlueprintPage({ focusId }: Props) {
  const [status, setStatus] = useState<string>(allValue)
  const [severity, setSeverity] = useState<string>(allValue)
  const [query, setQuery] = useState('')
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return portfolioMonitoringWidgets
      .filter((item) => status === allValue || item.status === status)
      .filter((item) => severity === allValue || item.severity === severity)
      .filter((item) => !q || [item.widget, item.status, item.severity, item.cadence, item.purpose, item.output, item.nextAction, ...item.coreMetrics, ...item.requiredData, ...item.visualDesign, ...item.interpretationRules, ...item.alertLogic, ...item.businessActions, ...item.ownerQuestions].join(' ').toLowerCase().includes(q))
      .sort((a, b) => (a.id === focusId ? -1 : b.id === focusId ? 1 : a.status.localeCompare(b.status) || a.widget.localeCompare(b.widget)))
  }, [focusId, query, severity, status])

  return (
    <section className="page-stack">
      {focusId && <div className="deep-link-banner">Opened from Search · focused portfolio monitoring widget</div>}
      <div className="hero-panel portfolio-monitoring-hero">
        <div>
          <span className="eyebrow">Sprint 5.12 · Portfolio Monitoring Dashboard Blueprint</span>
          <h1>Turn model monitoring into portfolio risk decisions.</h1>
          <p>This dashboard blueprint connects model card monitoring outputs to score distribution, bad-rate, delinquency, PSI, calibration, vintage analysis, approval policy and alert ownership.</p>
        </div>
        <div className="portfolio-monitoring-score-card">
          <span className="eyebrow">Dashboard Widgets</span>
          <strong>{portfolioMonitoringSummary.totalWidgets}</strong>
          <p>{portfolioMonitoringSummary.readyWidgets} ready · {portfolioMonitoringSummary.governanceWidgets} governance review</p>
          <div className="inventory-mini-stats"><span>{portfolioMonitoringSummary.baselineWidgets} baseline</span><span>{portfolioMonitoringSummary.waitingWidgets} waiting</span><span>{portfolioMonitoringSummary.highSeverityWidgets} high severity</span></div>
        </div>
      </div>

      <section className="manual-panel warning">
        <span className="eyebrow">Monitoring dashboard rule</span>
        <h2>No monitoring signal is useful until it produces an owner, interpretation and business action.</h2>
        <p>The dashboard is not decoration. It must convert PSI, score drift, bad-rate movement and threshold changes into clear review actions.</p>
      </section>

      <section className="manual-panel result-impact">
        <span className="eyebrow">Portfolio Monitoring Flow</span>
        <h2>Model card output → monitoring widgets → alerts → owner action → policy decision</h2>
        <KnowledgeChain nodes={['Model Monitoring Output', 'Portfolio Health', 'Score Distribution', 'Risk Outcomes', 'Policy Tracking', 'PSI & Drift', 'Calibration Stability', 'Vintage Review', 'Alert Triage', 'Risk Decision']} />
      </section>

      <section className="manual-panel inventory-filter-panel">
        <div className="library-filter-header">
          <div><span className="eyebrow">Dashboard Filters</span><h2>{visible.length} of {portfolioMonitoringWidgets.length} widgets visible</h2></div>
          <button className="text-button" onClick={() => { setStatus(allValue); setSeverity(allValue); setQuery('') }} type="button">Clear filters</button>
        </div>
        <input className="library-search-input" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search PSI, bad-rate, score bands, vintage, approval rate, calibration, alerts, overrides..." />
        <div className="library-filter-grid">
          <Select label="Status" value={status} values={statusOptions} onChange={setStatus} />
          <Select label="Severity" value={severity} values={severityOptions} onChange={setSeverity} />
        </div>
      </section>

      <section className="portfolio-monitoring-grid">
        {visible.map((item) => <DashboardWidget key={item.id} item={item} focused={item.id === focusId} />)}
      </section>
    </section>
  )
}

function DashboardWidget({ item, focused }: { item: PortfolioMonitoringWidget; focused: boolean }) {
  const statusCls = item.status.toLowerCase().replaceAll(' ', '-').replaceAll('/', '-')
  const severityCls = item.severity.toLowerCase()
  return (
    <article className={`portfolio-monitoring-widget ${focused ? 'focused-result-card' : ''}`}>
      <div className="portfolio-monitoring-widget-top"><span className="eyebrow">{item.cadence}</span><span className={`portfolio-monitoring-status ${statusCls}`}>{item.status as PortfolioDashboardWidgetStatus}</span></div>
      <h3>{item.widget}</h3>
      <span className={`portfolio-monitoring-severity ${severityCls}`}>{item.severity as PortfolioDashboardSeverity} severity</span>
      <p>{item.purpose}</p>
      <h4>Core metrics</h4><BadgeList items={item.coreMetrics} tone="purple" />
      <h4>Required data</h4><BadgeList items={item.requiredData} tone="blue" />
      <h4>Visual design</h4><BadgeList items={item.visualDesign} tone="green" />
      <h4>Interpretation rules</h4><BadgeList items={item.interpretationRules} tone="amber" />
      <h4>Alert logic</h4><BadgeList items={item.alertLogic} tone="red" />
      <h4>Business actions</h4><BadgeList items={item.businessActions} tone="purple" />
      <h4>Owner questions</h4><BadgeList items={item.ownerQuestions} tone="blue" />
      <div className="mini-result"><strong>Dashboard output:</strong> {item.output}</div>
      <h4>Next action</h4><KnowledgeChain nodes={[item.nextAction]} />
    </article>
  )
}

function Select({ label, value, values, onChange }: { label: string; value: string; values: string[]; onChange: (value: string) => void }) {
  return <label className="library-select"><span>{label}</span><select value={value} onChange={(event) => onChange(event.target.value)}>{values.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
}
