import type { NavItem, ViewId } from '../../types/knowledge'
import { navItems } from '../../data/knowledge'
interface SidebarProps { activeView: ViewId; onChangeView: (view: ViewId) => void }
const studyNav: NavItem[] = [
  { id: 'study-modules', label: 'Study Modules', eyebrow: 'Main Hub', description: 'Professional learning modules.', icon: 'SM' },
  { id: 'data-science-analytics-study', label: 'Data Science & Analytics Study', eyebrow: 'Analytics Workflow', description: 'Data science study module.', icon: 'DA' },
  { id: 'finance-valuation-study', label: 'Finance & Valuation Study', eyebrow: 'Valuation', description: 'Finance study module.', icon: 'FV' },
  { id: 'economics-markets-study', label: 'Economics & Markets Study', eyebrow: 'Macro & Markets', description: 'Economics study module.', icon: 'EM' },
  { id: 'management-strategy-study', label: 'Management & Strategy Study', eyebrow: 'Strategy', description: 'Management study module.', icon: 'MS' },
  { id: 'tools-platforms-study', label: 'Tools & Platforms Study', eyebrow: 'Tools', description: 'SQL, Excel, BI and Python.', icon: 'TP' },
  { id: 'banking-credit-risk-study', label: 'Banking & Credit Risk Study', eyebrow: 'Credit Scoring', description: 'Credit risk study module.', icon: 'BR' },
  { id: 'professional-certifications', label: 'Professional Certifications', eyebrow: 'CFA · BMC · BFF', description: 'Certification tracks.', icon: 'PC' },
  { id: 'global-search', label: 'Global Search', eyebrow: 'Search', description: 'Search across the Hub.', icon: 'SE' },
  { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Concepts', description: 'Asset library.', icon: 'KB' },
  { id: 'study-paths', label: 'Study Paths', eyebrow: 'Tracks', description: 'Learning paths.', icon: 'SP' },
  { id: 'learning-session', label: 'Learning Session', eyebrow: 'Focus', description: 'Study mode.', icon: 'LS' },
  { id: 'data-science', label: 'Data Science OS', eyebrow: 'Legacy Module', description: 'Analytics OS.', icon: 'DS' },
  { id: 'banking-finance', label: 'Banking & Finance', eyebrow: 'Legacy Module', description: 'Banking and finance.', icon: 'BF' },
  { id: 'credit-risk', label: 'Credit Risk Lab', eyebrow: 'Applied Lab', description: 'Credit risk case.', icon: 'CR' },
  { id: 'business-os', label: 'Management & Business', eyebrow: 'Core Module', description: 'Business OS.', icon: 'BS' }
]
const referenceNav: NavItem[] = [
  { id: 'formula-library', label: 'Formula Library', eyebrow: 'Reference', description: 'Formulas.', icon: 'FL' },
  { id: 'model-library', label: 'Model Library', eyebrow: 'Reference', description: 'Models.', icon: 'MO' },
  { id: 'output-atlas', label: 'Output Atlas', eyebrow: 'Interpretation', description: 'Outputs.', icon: 'OA' },
  { id: 'business-cases', label: 'Business Case Library', eyebrow: 'Application', description: 'Cases.', icon: 'BC' },
  { id: 'knowledge-map', label: 'Knowledge Map', eyebrow: 'Connections', description: 'Map.', icon: 'KM' }
]
const applicationNav: NavItem[] = [
  { id: 'practice-engine', label: 'Practice Engine', eyebrow: 'Practice', description: 'Quizzes, cases and drills.', icon: 'PE' },
  { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'Scenarios.', icon: 'SC' },
  { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Decide', description: 'Playbooks.', icon: 'DP' },
  { id: 'ml-models', label: 'ML Models', eyebrow: 'Machine Learning', description: 'ML models.', icon: 'ML' },
  { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'Charts', description: 'ML charts.', icon: 'CH' }
]
const evidenceNav: NavItem[] = [
  { id: 'source-command-center', label: 'Evidence Command Center', eyebrow: 'Backstage', description: 'Governance command center.', icon: 'CC' },
  { id: 'academic-review-workspace', label: 'Academic Review', eyebrow: 'Backstage', description: 'Academic source review.', icon: 'AR' },
  { id: 'academic-file-registry', label: 'Academic Files', eyebrow: 'Backstage', description: 'Discovered academic files.', icon: 'AF' },
  { id: 'source-decision-board', label: 'Decision Board', eyebrow: 'Backstage', description: 'Upgrade decisions.', icon: 'SD' },
  { id: 'promotion-queue', label: 'Promotion Queue', eyebrow: 'Backstage', description: 'Update proposals.', icon: 'PQ' },
  { id: 'controlled-update-log', label: 'Update Log', eyebrow: 'Backstage', description: 'Audit trail.', icon: 'UL' },
  { id: 'review-form-template', label: 'Review Form', eyebrow: 'Backstage', description: 'Evidence form.', icon: 'RF' },
  { id: 'review-result-registry', label: 'Review Results', eyebrow: 'Backstage', description: 'Review outcomes.', icon: 'RR' },
  { id: 'source-governance-summary', label: 'Source Governance', eyebrow: 'Backstage', description: 'Governance summary.', icon: 'SG' },
  { id: 'source-pack-guide', label: 'Source Pack Guide', eyebrow: 'Backstage', description: 'Pack plan.', icon: 'PK' },
  { id: 'source-batch-planner', label: 'Source Batch Planner', eyebrow: 'Backstage', description: 'Review batches.', icon: 'BP' },
  { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Backstage', description: 'Inventory.', icon: 'MI' },
  { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Backstage', description: 'Area map.', icon: 'CM' },
  { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Backstage', description: 'Candidate queue.', icon: 'EV' },
  { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Backstage', description: 'Coverage audit.', icon: 'QA' },
  { id: 'source-review-prep', label: 'Review Prep', eyebrow: 'Backstage', description: 'Review prep.', icon: 'SR' },
  { id: 'source-review-execution', label: 'Review Execution', eyebrow: 'Backstage', description: 'Review results.', icon: 'EX' },
  { id: 'course-evidence', label: 'Course Evidence', eyebrow: 'Backstage', description: 'Evidence extraction.', icon: 'CE' },
  { id: 'source-intake', label: 'Source Intake', eyebrow: 'Backstage', description: 'Missing files.', icon: 'IN' },
  { id: 'intake-coverage-map', label: 'Intake Coverage Map', eyebrow: 'Backstage', description: 'Traceability.', icon: 'IC' },
  { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Backstage', description: 'Expansion system.', icon: 'KF' },
  { id: 'route-qa', label: 'Route QA', eyebrow: 'Backstage', description: 'Route QA.', icon: 'RQ' },
  { id: 'phase-2-handoff', label: 'Phase 2 Handoff', eyebrow: 'Backstage', description: 'Closure.', icon: 'PH' }
]
const navCatalog: NavItem[] = [...navItems, ...studyNav, ...referenceNav, ...applicationNav, ...evidenceNav]
const groups = [
  { title: 'Study Modules', ids: ['dashboard', 'study-modules', 'data-science-analytics-study', 'finance-valuation-study', 'economics-markets-study', 'management-strategy-study', 'tools-platforms-study', 'banking-credit-risk-study', 'professional-certifications', 'global-search', 'knowledge-library', 'study-paths', 'learning-session', 'data-science', 'banking-finance', 'credit-risk', 'business-os'] as ViewId[] },
  { title: 'Reference & Cases', ids: ['formula-library', 'model-library', 'output-atlas', 'business-cases', 'knowledge-map'] as ViewId[] },
  { title: 'Practice & Application', ids: ['practice-engine', 'professional-scenarios', 'decision-playbooks', 'ml-models', 'ml-graph-atlas'] as ViewId[] },
  { title: 'Evidence & QA', ids: ['source-command-center', 'academic-review-workspace', 'academic-file-registry', 'source-decision-board', 'promotion-queue', 'controlled-update-log', 'review-form-template', 'review-result-registry', 'source-governance-summary', 'source-pack-guide', 'source-batch-planner', 'material-inventory', 'course-area-map', 'evidence-expansion', 'source-coverage-qa', 'source-review-prep', 'source-review-execution', 'course-evidence', 'source-intake', 'intake-coverage-map', 'knowledge-factory', 'route-qa', 'phase-2-handoff', 'quality-review'] as ViewId[] }
]
export function Sidebar({ activeView, onChangeView }: SidebarProps) {
  return <aside className="sidebar"><div className="brand-panel"><span className="eyebrow">PKOS v4.2</span><h1>Professional Knowledge Hub</h1><p>Study-first modules powered by formulas, output interpretation, academic evidence, certifications, role paths, practice and professional QA.</p></div>{groups.map((group) => <nav className="nav-group" key={group.title} aria-label={group.title}><div className="nav-title">{group.title}</div>{group.ids.map((id) => { const item = navCatalog.find((navItem) => navItem.id === id); if (!item) return null; return <button className={`nav-item ${activeView === id ? 'active' : ''}`} key={item.id} onClick={() => onChangeView(item.id)} type="button"><span className="nav-icon">{item.icon}</span><span><strong>{item.label}</strong><small>{item.eyebrow}</small></span></button> })}</nav>)}</aside>
}
