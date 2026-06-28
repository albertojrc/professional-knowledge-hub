import type { NavItem, ViewId } from '../../types/knowledge'
import { navItems } from '../../data/knowledge'

interface SidebarProps { activeView: ViewId; onChangeView: (view: ViewId) => void }

const sourceNav: NavItem[] = [
  { id: 'source-command-center', label: 'Source Command Center', eyebrow: 'Executive Control', description: 'Governance command center.', icon: 'CC' },
  { id: 'phase-2-handoff', label: 'Phase 2 Handoff', eyebrow: 'Phase Closure', description: 'Governance handoff.', icon: 'PH' },
  { id: 'route-qa', label: 'Route QA', eyebrow: 'Build Hardening', description: 'Route and build readiness.', icon: 'RQ' },
  { id: 'source-governance-summary', label: 'Source Governance', eyebrow: 'Executive Summary', description: 'Source maturity.', icon: 'SG' },
  { id: 'source-pack-guide', label: 'Source Pack Guide', eyebrow: 'Pack Plan', description: 'High-value source packs.', icon: 'PK' },
  { id: 'source-batch-planner', label: 'Source Batch Planner', eyebrow: 'Review Plan', description: 'Review batches.', icon: 'BP' },
  { id: 'review-form-template', label: 'Review Form Template', eyebrow: 'Review Form', description: 'Standard evidence form.', icon: 'RF' },
  { id: 'review-result-registry', label: 'Review Result Registry', eyebrow: 'Review Records', description: 'Review outcomes.', icon: 'RR' },
  { id: 'promotion-queue', label: 'Promotion Queue', eyebrow: 'Promotion Control', description: 'Controlled update proposals.', icon: 'PQ' },
  { id: 'controlled-update-log', label: 'Controlled Update Log', eyebrow: 'Audit Trail', description: 'Update decisions.', icon: 'UL' },
  { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Source System', description: 'Inventory class materials.', icon: 'MI' },
  { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Source Mapping', description: 'Map sources to areas.', icon: 'CM' },
  { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Asset Queue', description: 'Candidate assets.', icon: 'EV' },
  { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Evidence Audit', description: 'Coverage audit.', icon: 'QA' },
  { id: 'source-review-prep', label: 'Source Review Prep', eyebrow: 'File Review', description: 'Review prep.', icon: 'SR' },
  { id: 'source-review-execution', label: 'Source Review Execution', eyebrow: 'Evidence Results', description: 'Review results.', icon: 'EX' },
  { id: 'course-evidence', label: 'Course Evidence', eyebrow: 'Extraction', description: 'Course proof.', icon: 'CE' },
  { id: 'source-intake', label: 'Source Intake', eyebrow: 'Missing Files', description: 'Missing course files.', icon: 'IN' },
  { id: 'intake-coverage-map', label: 'Intake Coverage Map', eyebrow: 'Traceability', description: 'Coverage map.', icon: 'IC' },
  { id: 'source-decision-board', label: 'Source Decision Board', eyebrow: 'Upgrade Control', description: 'Upgrade decisions.', icon: 'SD' },
  { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Expansion System', description: 'Backlog and QA.', icon: 'KF' }
]
const studyNav: NavItem[] = [
  { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search across the Hub.', icon: 'SE' },
  { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Asset library.', icon: 'KB' },
  { id: 'study-paths', label: 'Study Paths', eyebrow: 'Learning Tracks', description: 'Study paths.', icon: 'SP' },
  { id: 'learning-session', label: 'Learning Session', eyebrow: 'Focus Mode', description: 'Focus mode.', icon: 'LS' },
  { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Business OS.', icon: 'BS' },
  { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'Scenarios.', icon: 'SC' },
  { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Playbooks.', icon: 'DP' },
  { id: 'ml-models', label: 'ML Models', eyebrow: 'Machine Learning', description: 'ML models.', icon: 'ML' },
  { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Interpret', description: 'ML charts.', icon: 'CH' }
]

const navCatalog: NavItem[] = [...navItems, ...sourceNav, ...studyNav]
const groups = [
  { title: 'Source', ids: ['source-command-center', 'phase-2-handoff', 'route-qa', 'source-governance-summary', 'source-pack-guide', 'source-batch-planner', 'review-form-template', 'review-result-registry', 'promotion-queue', 'controlled-update-log', 'material-inventory', 'course-area-map', 'evidence-expansion', 'source-coverage-qa', 'source-review-prep', 'source-review-execution', 'course-evidence', 'source-intake', 'intake-coverage-map', 'source-decision-board', 'knowledge-factory', 'quality-review'] as ViewId[] },
  { title: 'Study', ids: ['dashboard', 'global-search', 'knowledge-library', 'study-paths', 'learning-session', 'data-science', 'business-os', 'banking-finance', 'credit-risk'] as ViewId[] },
  { title: 'Machine Learning', ids: ['ml-models', 'ml-graph-atlas'] as ViewId[] },
  { title: 'Reference', ids: ['output-atlas', 'formula-library', 'model-library'] as ViewId[] },
  { title: 'Application', ids: ['professional-scenarios', 'decision-playbooks', 'business-cases', 'knowledge-map'] as ViewId[] }
]

export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return <aside className="sidebar"><div className="brand-panel"><span className="eyebrow">PKOS v2.25</span><h1>Professional Knowledge Hub</h1><p>Data Science + Banking + Finance + Business as a professional second brain.</p></div>{groups.map((group) => <nav className="nav-group" key={group.title} aria-label={group.title}><div className="nav-title">{group.title}</div>{group.ids.map((id) => { const item = navCatalog.find((navItem) => navItem.id === id); if (!item) return null; return <button className={`nav-item ${activeView === id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button"><span className="nav-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.eyebrow}</small></span></button> })}</nav>)}</aside>
}
