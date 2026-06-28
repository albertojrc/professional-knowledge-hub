import { routeQAChecks, routeQASummary } from '../data/routeQA'
import type { RouteQACheck } from '../types/routeQA'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function RouteQAPage() {
  return <section className="page-stack"><div className="hero-panel route-qa-hero"><div><span className="eyebrow">Sprint 2.24 · Build Hardening & Route QA</span><h1>Route and build readiness checkpoint.</h1><p>This page audits critical views, route signals, sidebar visibility, search discoverability and QA coverage before closing Phase 2.</p></div><div className="route-qa-score-card"><span className="eyebrow">Route QA</span><strong>{routeQASummary.connected}/{routeQASummary.total}</strong><p>critical routes connected</p><div className="inventory-mini-stats"><span>{routeQASummary.needsReview} review</span><span>{routeQASummary.blocked} blocked</span></div></div></div><section className="manual-panel result-impact"><span className="eyebrow">Hardening Flow</span><h2>Every critical page needs the same connection chain</h2><KnowledgeChain nodes={['ViewId', 'Page Component', 'App Route', 'Sidebar', 'Global Search', 'QA Check']} /></section><section className="manual-panel"><span className="eyebrow">Critical Route Checks</span><h2>Governance route readiness</h2><div className="route-qa-grid">{routeQAChecks.map((check) => <RouteCard key={check.id} check={check} />)}</div></section></section>
}

function RouteCard({ check }: { check: RouteQACheck }) {
  return <article className="route-qa-card"><div className="route-qa-card-top"><span className="eyebrow">{check.group} · {check.viewId}</span><span className={`route-qa-status status-${check.status.toLowerCase().replaceAll(' ', '-')}`}>{check.status}</span></div><h3>{check.title}</h3><h4>Required signals</h4><BadgeList items={check.requiredSignals} tone="blue" /><h4>Route files</h4><BadgeList items={check.routeFiles} tone="purple" /><h4>QA checks</h4><ul>{check.qaChecks.map((item) => <li key={item}>{item}</li>)}</ul><div className="mini-result warning">Risk: {check.risk}</div><div className="mini-result good">Next action: {check.nextAction}</div></article>
}
