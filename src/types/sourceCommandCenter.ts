export type CommandCenterSignalStatus = 'Healthy' | 'Blocked' | 'Waiting' | 'Needs decision'
export type CommandCenterActionPriority = 'P0' | 'P1' | 'P2'

export interface CommandCenterSignal {
  id: string
  label: string
  value: number
  status: CommandCenterSignalStatus
  detail: string
}

export interface CommandCenterAction {
  id: string
  title: string
  priority: CommandCenterActionPriority
  owner: string
  reason: string
  linkedViews: string[]
  nextStep: string
}

export interface SourceCommandCenter {
  id: string
  title: string
  executiveStatus: string
  executiveWarning: string
  signals: CommandCenterSignal[]
  actions: CommandCenterAction[]
  governanceFlow: string[]
}
