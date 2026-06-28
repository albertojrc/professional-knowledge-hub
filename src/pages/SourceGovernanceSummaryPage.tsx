import { sourceGovernanceSummary } from '../data/sourceGovernanceSummary'
import type { GovernanceHealth, GovernanceMetric, GovernanceWorkstream } from '../types/sourceGovernance'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function SourceGovernanceSummaryPage() {
  return <section className="page-stack"><div className="hero-panel source-governance-hero"><div><span className="eyebrow">Sprint 2.15 · Source Governance Summary</span><h1>Executive source governance overview.</h1><p>This page consolidates intake, evidence, coverage, execution and decision status into one source-backed maturity view.</p></div><div className="source-governance-score-card"><span className="eyebrow">Maturity Score</span><strong>{sourceGovernanceSummary.maturityScore}%</strong><p>{sourceGovernanceSummary.maturityLabel}</p></div></div><section className="manual-panel result-bad"><span className="eyebrow">Executive Decision</span><h2>{sourceGovernanceSummary.executiveDecision}</h2><KnowledgeChain nodes={['Missing Files', 'Evidence Review', 'Coverage QA', 'Decision Board', 'Source-backed Upgrade']} /></section><section className="manual-panel"><span className="eyebrow">Governance Metrics</span><h2>Source-backed readiness dashboard</h2><div className="source-governance-metric-grid">{sourceGovernanceSummary.metrics.map((metric) => <MetricCard key={metric.id} metric={metric} />)}</div></section><section className="manual-panel"><span className="eyebrow">Workstreams</span><h2>What is strong, blocked or missing evidence?</h2><div className="source-governance-workstream-grid">{sourceGovernanceSummary.workstreams.map((workstream) => <WorkstreamCard key={workstream.id} workstream={workstream} />)}</div></section></section>
}

function MetricCard({ metric }: { metric: GovernanceMetric }) {
  return <article className="source-governance-metric-card"><div className="source-governance-card-top"><span className="eyebrow">{metric.label}</span><HealthPill health={metric.health} /></div><strong>{metric.value}</strong><p>{metric.detail}</p></article>
}

function WorkstreamCard({ workstream }: { workstream: GovernanceWorkstream }) {
  return <article className="source-governance-workstream-card"><div className="source-governance-card-top"><span className="eyebrow">{workstream.title}</span><HealthPill health={workstream.status} /></div><h3>{workstream.summary}</h3><h4>Signals</h4><BadgeList items={workstream.signals} tone="green" /><h4>Risks</h4><BadgeList items={workstream.risks} tone="amber" /><h4>Next actions</h4><ul>{workstream.nextActions.map((action) => <li key={action}>{action}</li>)}</ul></article>
}

function HealthPill({ health }: { health: GovernanceHealth }) {
  return <span className={`governance-health-pill health-${health.toLowerCase().replaceAll(' ', '-')}`}>{health}</span>
}
