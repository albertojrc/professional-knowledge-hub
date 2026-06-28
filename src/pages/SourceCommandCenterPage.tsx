import { sourceCommandCenter } from '../data/sourceCommandCenter'
import type { CommandCenterAction, CommandCenterSignal } from '../types/sourceCommandCenter'
import { BadgeList } from '../components/ui/BadgeList'
import { KnowledgeChain } from '../components/knowledge/KnowledgeChain'

export function SourceCommandCenterPage() {
  return <section className="page-stack"><div className="hero-panel source-command-hero"><div><span className="eyebrow">Sprint 2.22 · Source Governance Command Center</span><h1>{sourceCommandCenter.title}</h1><p>{sourceCommandCenter.executiveStatus}</p></div><div className="source-command-score-card"><span className="eyebrow">Command Status</span><strong>{sourceCommandCenter.signals.length}</strong><p>governance signals monitored</p></div></div><section className="manual-panel result-bad"><span className="eyebrow">Executive Warning</span><h2>{sourceCommandCenter.executiveWarning}</h2><KnowledgeChain nodes={sourceCommandCenter.governanceFlow} /></section><section className="manual-panel"><span className="eyebrow">Live Governance Signals</span><h2>Readiness, blockers and decision pressure</h2><div className="source-command-signal-grid">{sourceCommandCenter.signals.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div></section><section className="manual-panel"><span className="eyebrow">Command Actions</span><h2>What to do next</h2><div className="source-command-action-grid">{sourceCommandCenter.actions.map((action) => <ActionCard key={action.id} action={action} />)}</div></section></section>
}

function SignalCard({ signal }: { signal: CommandCenterSignal }) {
  return <article className="source-command-signal-card"><div className="source-command-card-top"><span className="eyebrow">{signal.label}</span><span className={`source-command-status status-${signal.status.toLowerCase().replaceAll(' ', '-')}`}>{signal.status}</span></div><strong>{signal.value}</strong><p>{signal.detail}</p></article>
}

function ActionCard({ action }: { action: CommandCenterAction }) {
  return <article className="source-command-action-card"><div className="source-command-card-top"><span className="eyebrow">{action.owner}</span><span className={`source-command-priority priority-${action.priority.toLowerCase()}`}>{action.priority}</span></div><h3>{action.title}</h3><p>{action.reason}</p><h4>Linked views</h4><BadgeList items={action.linkedViews} tone="purple" /><div className="mini-result good">Next step: {action.nextStep}</div></article>
}
