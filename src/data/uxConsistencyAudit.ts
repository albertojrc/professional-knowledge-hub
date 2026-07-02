export type UXAuditArea = 'spacing' | 'cards' | 'typography' | 'navigation' | 'side-panel' | 'empty-state' | 'responsive' | 'accessibility'

export interface UXConsistencyRule {
  id: string
  area: UXAuditArea
  rule: string
  appliesTo: string[]
  expectedResult: string
}

export const uxConsistencyRules: UXConsistencyRule[] = [
  { id: 'ux-spacing-01', area: 'spacing', rule: 'Major study sections should have enough breathing room between panels.', appliesTo: ['concept-learning-page', 'manual-panel', 'lesson-block'], expectedResult: 'Pages feel scannable instead of dense.' },
  { id: 'ux-cards-01', area: 'cards', rule: 'Interactive cards should share hover, border and shadow behavior.', appliesTo: ['curriculum-topic-card', 'curriculum-submodule-card', 'visual-search-card', 'visual-map-node'], expectedResult: 'Users recognize clickable learning objects quickly.' },
  { id: 'ux-typography-01', area: 'typography', rule: 'Long explanatory text should use readable line height and controlled width.', appliesTo: ['lesson-block p', 'output-panel-card p', 'curriculum-topic-card p'], expectedResult: 'Deep explanations are easier to read.' },
  { id: 'ux-navigation-01', area: 'navigation', rule: 'The core learning flow should be visible where users choose modules, submodules or map pathways.', appliesTo: ['sidebar', 'module curriculum', 'knowledge map'], expectedResult: 'Users understand where they are in the learning hierarchy.' },
  { id: 'ux-side-panel-01', area: 'side-panel', rule: 'Right-side panels should remain useful summaries, not duplicate the entire page.', appliesTo: ['concept-output-panel', 'visual-search-side', 'visual-map-side'], expectedResult: 'Side panels support interpretation and next action.' },
  { id: 'ux-empty-01', area: 'empty-state', rule: 'Empty states should explain what happened and what the user can do next.', appliesTo: ['module-capsule-empty', 'fallback-visual'], expectedResult: 'No screen feels broken when content is missing.' },
  { id: 'ux-responsive-01', area: 'responsive', rule: 'Two-pane layouts must collapse into a single readable column on smaller screens.', appliesTo: ['concept-two-pane', 'curriculum-grid', 'visual-map-grid', 'visual-search-grid'], expectedResult: 'The Hub remains usable on laptops and tablets.' },
  { id: 'ux-accessibility-01', area: 'accessibility', rule: 'Buttons, cards and inputs should have visible focus states.', appliesTo: ['button', 'input', 'select'], expectedResult: 'Keyboard navigation is visible and professional.' }
]

export const uxConsistencySummary = {
  sprint: '5.34',
  focus: 'visual consistency, reading flow, cards, panels, empty states and responsive behavior',
  totalRules: uxConsistencyRules.length,
  corePattern: 'Module → Submodule → Topic → Deep Detail View'
}
