export type GovernanceHealth = 'Strong structure' | 'Evidence missing' | 'Ready to upgrade' | 'Blocked'

export interface GovernanceMetric {
  id: string
  label: string
  value: number
  detail: string
  health: GovernanceHealth
}

export interface GovernanceWorkstream {
  id: string
  title: string
  status: GovernanceHealth
  summary: string
  signals: string[]
  risks: string[]
  nextActions: string[]
}

export interface GovernanceSummary {
  maturityScore: number
  maturityLabel: string
  executiveDecision: string
  metrics: GovernanceMetric[]
  workstreams: GovernanceWorkstream[]
}
