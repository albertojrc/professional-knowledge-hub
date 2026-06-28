import type { NavItem, ViewId } from '../../types/knowledge'
import { navItems } from '../../data/knowledge'
interface SidebarProps { activeView: ViewId; onChangeView: (view: ViewId) => void }
const sourceNav: NavItem[] = [
  { id: 'source-command-center', label: 'Source Command Center', eyebrow: 'Control', description: 'Control.', icon: 'CC' },
  { id: 'academic-review-workspace', label: 'Academic Review', eyebrow: 'Phase 3', description: 'Review.', icon: 'AR' },
  { id: 'academic-file-registry', label: 'Academic Files', eyebrow: 'Files', description: 'Files.', icon: 'AF' },
  { id: 'phase-2-handoff', label: 'Phase 2 Handoff', eyebrow: 'Closure', description: 'Closure.', icon: 'PH' },
  { id: 'route-qa', label: 'Route QA', eyebrow: 'QA', description: 'Routes.', icon: 'RQ' },
  { id: 'source-governance-summary', label: 'Source Governance', eyebrow: 'Summary', description: 'Summary.', icon: 'SG' },
  { id: 'source-pack-guide', label: 'Source Pack Guide', eyebrow: 'Pack', description: 'Packs.', icon: 'PK' },
  { id: 'source-batch-planner', label: 'Source Batch Planner', eyebrow: 'Batch', description: 'Batches.', icon: 'BP' },
  { id: 'review-form-template', label: 'Review Form Template', eyebrow: 'Form', description: 'Form.', icon: 'RF' },
  { id: 'review-result-registry', label: 'Review Result Registry', eyebrow: 'Records', description: 'Records.', icon: 'RR' },
  { id: 'promotion-queue', label: 'Promotion Queue', eyebrow: 'Queue', description: 'Queue.', icon: 'PQ' },
  { id: 'controlled-update-log', label: 'Controlled Update Log', eyebrow: 'Audit', description: 'Audit.', icon: 'UL' },
  { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Inventory', description: 'Inventory.', icon: 'MI' },
  { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Map', description: 'Map.', icon: 'CM' },
  { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Queue', description: 'Queue.', icon: 'EV' },
  { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Coverage', description: 'Coverage.', icon: 'QA' },
  { id: 'source-review-prep', label: 'Source Review Prep', eyebrow: 'Prep', description: 'Prep.', icon: 'SR' },
  { id: 'source-review-execution', label: 'Source Review Execution', eyebrow: 'Run', description: 'Run.', icon: 'EX' },
  { id: 'course-evidence', label: 'Course Evidence', eyebrow: 'Evidence', description: 'Evidence.', icon: 'CE' },
  { id: 'source-intake', label: 'Source Intake', eyebrow: 'Intake', description: 'Intake.', icon: 'IN' },
  { id: 'intake-coverage-map', label: 'Intake Coverage Map', eyebrow: 'Trace', description: 'Trace.', icon: 'IC' },
  { id: 'source-decision-board', label: 'Source Decision Board', eyebrow: 'Decision', description: 'Decision.', icon: 'SD' },
  { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Factory', description: 'Factory.', icon: 'KF' }
]
const studyNav: NavItem[] = [
  { id: 'global-search', label: 'Global Search', eyebrow: 'Search', description: 'Search.', icon: 'SE' },
  { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Library', description: 'Library.', icon: 'KB' },
  { id: 'study-paths', label: 'Study Paths', eyebrow: 'Paths', description: 'Paths.', icon: 'SP' },
  { id: 'learning-session', label: 'Learning Session', eyebrow: 'Focus', description: 'Focus.', icon: 'LS' },
  { id: 'business-os', label: 'Business OS', eyebrow: 'Core', description: 'Core.', icon: 'BS' },
  { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'Apply.', icon: 'SC' },
  { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Decide.', icon: 'DP' },
  { id: 'ml-models', label: 'ML Models', eyebrow: 'ML', description: 'ML.', icon: 'ML' },
  { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Charts', description: 'Charts.', icon: 'CH' }
]
const navCatalog: NavItem[] = [...navItems, ...sourceNav, ...studyNav]
const groups = [
  { title: 'Source', ids: ['source-command-center', 'academic-review-workspace', 'academic-file-registry', 'phase-2-handoff', 'route-qa', 'source-governance-summary', 'source-pack-guide', 'source-batch-planner', 'review-form-template', 'review-result-registry', 'promotion-queue', 'controlled-update-log', 'material-inventory', 'course-area-map', 'evidence-expansion', 'source-coverage-qa', 'source-review-prep', 'source-review-execution', 'course-evidence', 'source-intake', 'intake-coverage-map', 'source-decision-board', 'knowledge-factory', 'quality-review'] as ViewId[] },
  { title: 'Study', ids: ['dashboard', 'global-search', 'knowledge-library', 'study-paths', 'learning-session', 'data-science', 'business-os', 'banking-finance', 'credit-risk'] as ViewId[] },
  { title: 'Machine Learning', ids: ['ml-models', 'ml-graph-atlas'] as ViewId[] },
  { title: 'Reference', ids: ['output-atlas', 'formula-library', 'model-library'] as ViewId[] },
  { title: 'Application', ids: ['professional-scenarios', 'decision-playbooks', 'business-cases', 'knowledge-map'] as ViewId[] }
]
export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return <aside className="sidebar"><div className="brand-panel"><span className="eyebrow">PKOS v3.2</span><h1>Professional Knowledge Hub</h1><p>Data Science + Banking + Finance + Business as a professional second brain.</p></div>{groups.map((group) => <nav className="nav-group" key={group.title} aria-label={group.title}><div className="nav-title">{group.title}</div>{group.ids.map((id) => { const item = navCatalog.find((navItem) => navItem.id === id); if (!item) return null; return <button className={`nav-item ${activeView === id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button"><span className="nav-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.eyebrow}</small></span></button> })}</nav>)}</aside>
}
