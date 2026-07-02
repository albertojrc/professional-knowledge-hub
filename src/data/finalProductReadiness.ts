export interface FinalProductReadinessArea {
  id: string
  title: string
  status: 'ready-for-local-validation' | 'needs-local-review'
  checks: string[]
}

export const finalProductReadiness: FinalProductReadinessArea[] = [
  { id: 'navigation', title: 'Clean navigation', status: 'ready-for-local-validation', checks: ['Five visible modules remain: Home, Data Science, Banking & Finance, CFA & Certifications, Knowledge Map.', 'Internal tools remain reachable through search or internal routes.', 'Sidebar communicates the module → submodule → topic detail flow.'] },
  { id: 'curriculum', title: 'Curriculum structure', status: 'ready-for-local-validation', checks: ['Data Science uses submodule navigation.', 'Banking & Finance uses submodule navigation.', 'CFA & Certifications uses certification-path navigation.', 'Each topic card opens a deep detail view.'] },
  { id: 'deep-detail', title: 'Deep topic detail', status: 'ready-for-local-validation', checks: ['Detail pages show concrete study path.', 'Detail pages show decision brief.', 'Outputs, metrics and assumptions are visible.', 'Visual Output Type System prevents unrelated charts.'] },
  { id: 'search', title: 'Search alignment', status: 'ready-for-local-validation', checks: ['Global Search is curriculum-aware.', 'Module search capsules are curriculum-aware.', 'Search results distinguish exact topic detail from focused submodule.'] },
  { id: 'knowledge-map', title: 'Knowledge Map sync', status: 'ready-for-local-validation', checks: ['Knowledge Map shows curriculum map panel.', 'Knowledge Map explains Module → Submodule → Topic → Output → Decision.', 'Professional graph still renders nodes, pathways and links.'] },
  { id: 'ux', title: 'UX consistency', status: 'ready-for-local-validation', checks: ['Responsive collapse works for two-pane layouts.', 'Focus states are visible.', 'Empty states are helpful.', 'Long text is readable.'] },
  { id: 'technical', title: 'Technical validation', status: 'needs-local-review', checks: ['npm run validate passes locally.', 'All standalone checks 516–535 pass locally.', 'npm run lint passes locally.', 'npm run build passes locally.'] }
]

export const finalProductReadinessSummary = {
  sprint: '5.35',
  productName: 'Professional Knowledge Hub',
  deployRule: 'Deploy only after validate, lint and build pass locally.',
  coreLearningPattern: 'Module → Submodule → Topic → Deep Detail View'
}
