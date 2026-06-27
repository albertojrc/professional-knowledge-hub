import { knowledgeAssets as coreKnowledgeAssets } from './knowledgeAssets'
import { sprint16KnowledgeAssets } from './knowledgeAssetsSprint16'

export const knowledgeAssetRegistry = [...coreKnowledgeAssets, ...sprint16KnowledgeAssets]
