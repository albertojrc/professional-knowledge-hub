import { knowledgeAssetRegistry } from './knowledgeAssetRegistry'
import type { AssetProgressStatus } from '../types/learningProgress'

interface ProgressReader {
  getAssetStatus: (assetId: string) => AssetProgressStatus
}

export function getStudyDashboardData(progress: ProgressReader) {
  const enrichedAssets = knowledgeAssetRegistry.map((asset) => ({
    ...asset,
    status: progress.getAssetStatus(asset.id)
  }))

  const notStarted = enrichedAssets.filter((asset) => asset.status === 'Not started')
  const studying = enrichedAssets.filter((asset) => asset.status === 'Studying')
  const reviewed = enrichedAssets.filter((asset) => asset.status === 'Reviewed')
  const mastered = enrichedAssets.filter((asset) => asset.status === 'Mastered')

  const recommendedNext = [
    ...notStarted.filter((asset) => ['Foundation', 'Intermediate'].includes(asset.difficulty)).slice(0, 4),
    ...notStarted.filter((asset) => asset.difficulty === 'Advanced').slice(0, 2)
  ].slice(0, 5)

  const continueStudying = studying.slice(0, 5)
  const recentlyReviewed = [...reviewed, ...mastered].slice(0, 5)

  const areaBreakdown = Array.from(new Set(knowledgeAssetRegistry.map((asset) => asset.area))).map((area) => {
    const assets = enrichedAssets.filter((asset) => asset.area === area)
    const done = assets.filter((asset) => ['Reviewed', 'Mastered'].includes(asset.status)).length
    return {
      area,
      total: assets.length,
      done,
      progress: assets.length ? Math.round((done / assets.length) * 100) : 0
    }
  })

  return {
    total: enrichedAssets.length,
    notStarted,
    studying,
    reviewed,
    mastered,
    recommendedNext,
    continueStudying,
    recentlyReviewed,
    areaBreakdown
  }
}
