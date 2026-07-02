import type { NavItem, ViewId } from '../types/knowledge'
import { navItems } from '../data/knowledge'

export type RouteGroup = 'primary' | 'curriculum' | 'reference' | 'governance' | 'source' | 'legacy' | 'study'

export interface RouteRegistryEntry {
  id: ViewId
  group: RouteGroup
  label: string
  eyebrow: string
  description: string
  icon: string
}

export const governanceRouteItems: NavItem[] = [
  { id: 'model-ready-feature-set', label: 'Model-Ready Feature Set', eyebrow: 'Evidence & QA', description: 'Leakage-safe feature promotion for credit scoring.', icon: 'MF' },
  { id: 'credit-scoring-experiment-blueprint', label: 'Credit Scoring Experiment Blueprint', eyebrow: 'Evidence & QA', description: 'Experiment design for credit scoring models.', icon: 'CE' },
  { id: 'model-card-monitoring-handoff', label: 'Model Card & Monitoring Handoff', eyebrow: 'Evidence & QA', description: 'Model card, monitoring controls and ownership handoff.', icon: 'MC' },
  { id: 'portfolio-monitoring-dashboard-blueprint', label: 'Portfolio Monitoring Dashboard Blueprint', eyebrow: 'Evidence & QA', description: 'Portfolio risk monitoring dashboard for scores, drift and alerts.', icon: 'PM' },
  { id: 'alert-remediation-workflow', label: 'Alert Playbook & Remediation Workflow', eyebrow: 'Evidence & QA', description: 'Alert triage, owner actions, escalation and closure workflow.', icon: 'AR' }
]

export const routeRegistry: RouteRegistryEntry[] = [
  ...navItems.map((item) => ({ ...item, group: 'primary' as RouteGroup })),
  ...governanceRouteItems.map((item) => ({ ...item, group: 'governance' as RouteGroup }))
]

export const navCatalog: NavItem[] = routeRegistry.map((entry) => ({ id: entry.id, label: entry.label, eyebrow: entry.eyebrow, description: entry.description, icon: entry.icon }))

export const routeGroups: Record<RouteGroup, ViewId[]> = {
  primary: ['dashboard', 'global-search', 'knowledge-map'],
  curriculum: ['data-science-analytics-study', 'banking-credit-risk-study', 'professional-certifications'],
  reference: ['knowledge-library', 'output-atlas', 'formula-library', 'model-library', 'business-cases'],
  governance: governanceRouteItems.map((item) => item.id),
  source: ['source-command-center', 'source-governance-summary', 'source-pack-guide', 'source-batch-planner', 'review-form-template', 'review-result-registry', 'promotion-queue', 'controlled-update-log', 'source-coverage-qa', 'source-review-prep', 'source-review-execution', 'course-evidence', 'source-intake', 'intake-coverage-map', 'source-decision-board'],
  study: ['study-paths', 'learning-session', 'knowledge-factory', 'practice-engine', 'capstone-projects', 'portfolio-builder', 'interview-prep', 'role-readiness'],
  legacy: ['study-modules', 'finance-valuation-study', 'economics-markets-study', 'management-strategy-study', 'tools-platforms-study', 'academic-upgrade-pass', 'academic-notes', 'credit-scoring-review', 'credit-promotion-queue', 'lc-field-mapping', 'abt-blueprint', 'abt-schema-template', 'abt-field-review-matrix', 'academic-review-workspace', 'academic-file-registry', 'hub-qa-polish', 'phase-2-handoff', 'route-qa', 'material-inventory', 'course-area-map', 'evidence-expansion', 'data-science', 'business-os', 'ml-models', 'ml-graph-atlas', 'professional-scenarios', 'decision-playbooks', 'banking-finance', 'credit-risk', 'quality-review']
}

export function titleFromView(id: ViewId): string {
  return id.split('-').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
}

export function getRouteNavItem(id: ViewId): NavItem {
  return navCatalog.find((item) => item.id === id) ?? { id, label: titleFromView(id), eyebrow: 'Hub', description: 'Professional Knowledge Hub.', icon: 'PK' }
}
