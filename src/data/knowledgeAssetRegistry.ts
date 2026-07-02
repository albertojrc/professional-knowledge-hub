import { knowledgeAssets as coreKnowledgeAssets } from './knowledgeAssets'
import { sprint16KnowledgeAssets } from './knowledgeAssetsSprint16'
import { sprint14KnowledgeAssets } from './knowledgeAssetsSprint14'
import { sprint24KnowledgeAssets } from './knowledgeAssetsSprint24'
import { cfaFoundationAssets } from './knowledgeAssetsCfa'

export const knowledgeAssetRegistry = [...coreKnowledgeAssets, ...sprint16KnowledgeAssets, ...sprint14KnowledgeAssets, ...sprint24KnowledgeAssets, ...cfaFoundationAssets]
