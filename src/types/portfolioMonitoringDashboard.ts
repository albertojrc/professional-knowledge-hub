export type PortfolioDashboardWidgetStatus = 'Ready to design' | 'Needs baseline evidence' | 'Governance review' | 'Waiting for monitoring data'
export type PortfolioDashboardCadence = 'Daily' | 'Weekly' | 'Monthly' | 'Quarterly' | 'Event driven'
export type PortfolioDashboardSeverity = 'Low' | 'Medium' | 'High'

export interface PortfolioMonitoringWidget {
  id: string
  widget: string
  status: PortfolioDashboardWidgetStatus
  severity: PortfolioDashboardSeverity
  cadence: PortfolioDashboardCadence
  purpose: string
  coreMetrics: string[]
  requiredData: string[]
  visualDesign: string[]
  interpretationRules: string[]
  alertLogic: string[]
  businessActions: string[]
  ownerQuestions: string[]
  output: string
  nextAction: string
}

export interface PortfolioMonitoringSummary {
  totalWidgets: number
  readyWidgets: number
  baselineWidgets: number
  governanceWidgets: number
  waitingWidgets: number
  highSeverityWidgets: number
}
