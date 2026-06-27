import { getKnowledgeTooltip, knowledgeTooltips, type KnowledgeTooltip } from './knowledgeTooltips'
import { sprint16KnowledgeTooltips } from './knowledgeTooltipsSprint16'

const tooltipRegistry: Record<string, KnowledgeTooltip> = {
  ...knowledgeTooltips,
  ...sprint16KnowledgeTooltips
}

export function getTooltipDefinition(label: string): KnowledgeTooltip | undefined {
  return tooltipRegistry[label.trim().toLowerCase()] ?? getKnowledgeTooltip(label)
}
