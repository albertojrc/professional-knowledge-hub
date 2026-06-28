import type { RouteQACheck, RouteQASummary } from '../types/routeQA'

export const routeQAChecks: RouteQACheck[] = [
  {
    id: 'route-source-command-center',
    viewId: 'source-command-center',
    title: 'Source Command Center',
    group: 'Source Governance',
    status: 'Connected',
    requiredSignals: ['ViewId union', 'App route', 'Sidebar source group', 'Global Search entry', 'CSS import'],
    routeFiles: ['src/pages/SourceCommandCenterPage.tsx', 'src/data/sourceCommandCenter.ts', 'src/styles/sourceCommandCenterOS.css'],
    qaChecks: ['source-command-center appears in App', 'source-command-center appears in Sidebar', 'source-command-center appears in searchIndex'],
    risk: 'High if missing because it is the executive control entry point.',
    nextAction: 'Keep as first Source navigation item.'
  },
  {
    id: 'route-review-result-registry',
    viewId: 'review-result-registry',
    title: 'Review Result Registry',
    group: 'Source Governance',
    status: 'Connected',
    requiredSignals: ['Review results data', 'App route', 'Search entry', 'CSS import'],
    routeFiles: ['src/pages/ReviewResultRegistryPage.tsx', 'src/data/reviewResultRegistry.ts', 'src/styles/reviewResultOS.css'],
    qaChecks: ['review-result-registry appears in App', 'review-result-registry appears in searchIndex'],
    risk: 'Medium if missing because review evidence would be harder to trace.',
    nextAction: 'Keep linked to Promotion Queue and Decision Board.'
  },
  {
    id: 'route-promotion-queue',
    viewId: 'promotion-queue',
    title: 'Promotion Queue',
    group: 'Source Governance',
    status: 'Connected',
    requiredSignals: ['Promotion data', 'App route', 'Search entry', 'CSS import'],
    routeFiles: ['src/pages/PromotionQueuePage.tsx', 'src/data/promotionQueue.ts', 'src/styles/promotionQueueOS.css'],
    qaChecks: ['promotion-queue appears in App', 'promotion-queue appears in searchIndex'],
    risk: 'High if missing because evidence-to-asset updates lose control.',
    nextAction: 'Keep every promotion blocked unless Decision Board approves.'
  },
  {
    id: 'route-controlled-update-log',
    viewId: 'controlled-update-log',
    title: 'Controlled Update Log',
    group: 'Source Governance',
    status: 'Connected',
    requiredSignals: ['Update log data', 'App route', 'Search entry', 'CSS import'],
    routeFiles: ['src/pages/ControlledUpdateLogPage.tsx', 'src/data/controlledUpdateLog.ts', 'src/styles/controlledUpdateLogOS.css'],
    qaChecks: ['controlled-update-log appears in App', 'controlled-update-log appears in searchIndex'],
    risk: 'High if missing because audit trail becomes incomplete.',
    nextAction: 'Keep as audit log for every promotion decision.'
  },
  {
    id: 'route-source-decision-board',
    viewId: 'source-decision-board',
    title: 'Source Decision Board',
    group: 'Source Governance',
    status: 'Connected',
    requiredSignals: ['Decision board data', 'App route', 'Sidebar item'],
    routeFiles: ['src/pages/SourceDecisionBoardPage.tsx', 'src/data/sourceDecisionBoard.ts', 'src/styles/sourceDecisionOS.css'],
    qaChecks: ['source-decision-board appears in App', 'source-decision-board appears in Sidebar'],
    risk: 'Critical if missing because source-backed status cannot be governed.',
    nextAction: 'Use as final approval gate.'
  },
  {
    id: 'route-quality-review',
    viewId: 'quality-review',
    title: 'Quality Review',
    group: 'Source System',
    status: 'Connected',
    requiredSignals: ['Legacy QA page', 'Sidebar item', 'App route'],
    routeFiles: ['src/pages/QualityReviewPage.tsx'],
    qaChecks: ['quality-review appears in App', 'quality-review appears in Sidebar'],
    risk: 'Medium if missing because final QA checklist is less visible.',
    nextAction: 'Keep in Source group as final checkpoint.'
  }
]

export const routeQASummary: RouteQASummary = {
  total: routeQAChecks.length,
  connected: routeQAChecks.filter((item) => item.status === 'Connected').length,
  needsReview: routeQAChecks.filter((item) => item.status === 'Needs review').length,
  blocked: routeQAChecks.filter((item) => item.status === 'Blocked').length
}
