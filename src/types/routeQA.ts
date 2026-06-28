export type RouteQAStatus = 'Connected' | 'Needs review' | 'Blocked'
export type RouteQAGroup = 'Source Governance' | 'Source System' | 'Study' | 'Reference' | 'Application'

export interface RouteQACheck {
  id: string
  viewId: string
  title: string
  group: RouteQAGroup
  status: RouteQAStatus
  requiredSignals: string[]
  routeFiles: string[]
  qaChecks: string[]
  risk: string
  nextAction: string
}

export interface RouteQASummary {
  total: number
  connected: number
  needsReview: number
  blocked: number
}
