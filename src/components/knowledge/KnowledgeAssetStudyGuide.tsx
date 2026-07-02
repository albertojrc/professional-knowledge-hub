import type { KnowledgeAsset } from '../../types/knowledgeAsset'
import { ReadingGuide } from '../ui/ReadingGuide'

export function KnowledgeAssetStudyGuide({ asset }: { asset: KnowledgeAsset }) {
  const steps = [
    `Define: ${asset.whatItIs}`,
    `Use when: ${asset.whenToUse[0] ?? asset.category}`,
    `Apply by: ${asset.howToUse[0] ?? 'following the method step by step'}`,
    `Interpret through: ${asset.interpretation[0] ?? asset.outputs[0] ?? asset.summary}`,
    `Produce: ${asset.outputs[0] ?? 'a professional output'}`
  ]
  return <ReadingGuide title="Concrete study path" steps={steps} />
}
