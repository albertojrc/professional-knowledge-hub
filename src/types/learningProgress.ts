export type AssetProgressStatus = 'Not started' | 'Studying' | 'Reviewed' | 'Mastered'

export interface AssetProgressRecord {
  assetId: string
  status: AssetProgressStatus
  updatedAt: string
}

export type AssetProgressMap = Record<string, AssetProgressRecord>

export const assetProgressStatuses: AssetProgressStatus[] = ['Not started', 'Studying', 'Reviewed', 'Mastered']

export const assetProgressWeight: Record<AssetProgressStatus, number> = {
  'Not started': 0,
  Studying: 35,
  Reviewed: 70,
  Mastered: 100
}
