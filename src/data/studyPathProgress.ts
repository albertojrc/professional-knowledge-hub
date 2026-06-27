import { knowledgeAssetRegistry } from './knowledgeAssetRegistry'
import type { KnowledgeAsset } from '../types/knowledgeAsset'
import type { StudyPath } from '../types/studyPath'
import type { AssetProgressStatus } from '../types/learningProgress'
import { assetProgressWeight } from '../types/learningProgress'

interface ProgressReader {
  getAssetStatus: (assetId: string) => AssetProgressStatus
}

function isKnowledgeAsset(asset: KnowledgeAsset | undefined): asset is KnowledgeAsset {
  return Boolean(asset)
}

export function getPathAssets(path: StudyPath): KnowledgeAsset[] {
  return path.assetIds
    .map((assetId) => knowledgeAssetRegistry.find((asset) => asset.id === assetId))
    .filter(isKnowledgeAsset)
}

export function getStudyPathProgress(path: StudyPath, progress: ProgressReader) {
  const assets = getPathAssets(path)
  const weighted = assets.reduce((sum, asset) => sum + assetProgressWeight[progress.getAssetStatus(asset.id)], 0)
  const percentage = assets.length ? Math.round(weighted / assets.length) : 0
  const nextAsset = assets.find((asset) => !['Reviewed', 'Mastered'].includes(progress.getAssetStatus(asset.id))) ?? assets[0]
  const mastered = assets.filter((asset) => progress.getAssetStatus(asset.id) === 'Mastered').length
  const reviewed = assets.filter((asset) => progress.getAssetStatus(asset.id) === 'Reviewed').length
  const studying = assets.filter((asset) => progress.getAssetStatus(asset.id) === 'Studying').length

  return { assets, percentage, nextAsset, mastered, reviewed, studying }
}
