import type { NavItem, ViewId } from '../../types/knowledge'
import { navItems } from '../../data/knowledge'

interface SidebarProps { activeView: ViewId; onChangeView: (view: ViewId) => void }

const globalSearchItem: NavItem = { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search across the Hub.', icon: 'SE' }
const materialInventoryItem: NavItem = { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Source System', description: 'Inventory class materials.', icon: 'MI' }
const courseAreaMapItem: NavItem = { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Source Mapping', description: 'Map sources to areas.', icon: 'CM' }
const evidenceExpansionItem: NavItem = { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Asset Queue', description: 'Candidate assets.', icon: 'EV' }
const sourceCoverageItem: NavItem = { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Evidence Audit', description: 'Coverage audit.', icon: 'QA' }
const sourceReviewItem: NavItem = { id: 'source-review-prep', label: 'Source Review Prep', eyebrow: 'File Review', description: 'Review prep.', icon: 'SR' }
const sourceExecutionItem: NavItem = { id: 'source-review-execution', label: 'Source Review Execution', eyebrow: 'Evidence Results', description: 'First source review results.', icon: 'EX' }
const courseEvidenceItem: NavItem = { id: 'course-evidence', label: 'Course Evidence', eyebrow: 'Extraction', description: 'Extracted signals and missing course proof.', icon: 'CE' }
const sourceIntakeItem: NavItem = { id: 'source-intake', label: 'Source Intake', eyebrow: 'Missing Files', description: 'Prioritized list of missing course files.', icon: 'IN' }
const intakeCoverageItem: NavItem = { id: 'intake-coverage-map', label: 'Intake Coverage Map', eyebrow: 'Traceability', description: 'Map missing files to coverage, evidence and graph updates.', icon: 'IC' }
const sourceDecisionItem: NavItem = { id: 'source-decision-board', label: 'Source Decision Board', eyebrow: 'Upgrade Control', description: 'Approve or reject source-backed status changes.', icon: 'SD' }
const sourceGovernanceItem: NavItem = { id: 'source-governance-summary', label: 'Source Governance', eyebrow: 'Executive Summary', description: 'Consolidated source-backed maturity and readiness.', icon: 'SG' }
const knowledgeLibraryItem: NavItem = { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Second Brain', description: 'Asset library.', icon: 'KB' }
const studyPathsItem: NavItem = { id: 'study-paths', label: 'Study Paths', eyebrow: 'Learning Tracks', description: 'Study paths.', icon: 'SP' }
const learningSessionItem: NavItem = { id: 'learning-session', label: 'Learning Session', eyebrow: 'Focus Mode', description: 'Focus mode.', icon: 'LS' }
const knowledgeFactoryItem: NavItem = { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Expansion System', description: 'Backlog and QA.', icon: 'KF' }
const businessOsItem: NavItem = { id: 'business-os', label: 'Business OS', eyebrow: 'Core Area', description: 'Business OS.', icon: 'BS' }
const professionalScenariosItem: NavItem = { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'Scenarios.', icon: 'SC' }
const decisionPlaybooksItem: NavItem = { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Playbooks.', icon: 'DP' }
const mlModelsItem: NavItem = { id: 'ml-models', label: 'ML Models', eyebrow: 'Machine Learning', description: 'ML models.', icon: 'ML' }
const mlGraphAtlasItem: NavItem = { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Interpret', description: 'ML charts.', icon: 'CH' }

const navCatalog: NavItem[] = [...navItems, globalSearchItem, materialInventoryItem, courseAreaMapItem, evidenceExpansionItem, sourceCoverageItem, sourceReviewItem, sourceExecutionItem, courseEvidenceItem, sourceIntakeItem, intakeCoverageItem, sourceDecisionItem, sourceGovernanceItem, knowledgeLibraryItem, studyPathsItem, learningSessionItem, knowledgeFactoryItem, businessOsItem, professionalScenariosItem, decisionPlaybooksItem, mlModelsItem, mlGraphAtlasItem]
const groups = [
  { title: 'Source', ids: ['source-governance-summary', 'material-inventory', 'course-area-map', 'evidence-expansion', 'source-coverage-qa', 'source-review-prep', 'source-review-execution', 'course-evidence', 'source-intake', 'intake-coverage-map', 'source-decision-board', 'knowledge-factory', 'quality-review'] as ViewId[] },
  { title: 'Study', ids: ['dashboard', 'global-search', 'knowledge-library', 'study-paths', 'learning-session', 'data-science', 'business-os', 'banking-finance', 'credit-risk'] as ViewId[] },
  { title: 'Machine Learning', ids: ['ml-models', 'ml-graph-atlas'] as ViewId[] },
  { title: 'Reference', ids: ['output-atlas', 'formula-library', 'model-library'] as ViewId[] },
  { title: 'Application', ids: ['professional-scenarios', 'decision-playbooks', 'business-cases', 'knowledge-map'] as ViewId[] }
]

export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return <aside className="sidebar"><div className="brand-panel"><span className="eyebrow">PKOS v2.15</span><h1>Professional Knowledge Hub</h1><p>Data Science + Banking + Finance + Business as a professional second brain.</p></div>{groups.map((group) => <nav className="nav-group" key={group.title} aria-label={group.title}><div className="nav-title">{group.title}</div>{group.ids.map((id) => { const item = navCatalog.find((navItem) => navItem.id === id); if (!item) return null; return <button className={`nav-item ${activeView === id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button"><span className="nav-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.eyebrow}</small></span></button> })}</nav>)}</aside>
}
