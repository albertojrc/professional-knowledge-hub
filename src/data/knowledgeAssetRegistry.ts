import { knowledgeAssets as coreKnowledgeAssets } from './knowledgeAssets'
import { sprint16KnowledgeAssets } from './knowledgeAssetsSprint16'
import { sprint14KnowledgeAssets } from './knowledgeAssetsSprint14'

export const knowledgeAssetRegistry = [...coreKnowledgeAssets, ...sprint16KnowledgeAssets, ...sprint14KnowledgeAssets]
