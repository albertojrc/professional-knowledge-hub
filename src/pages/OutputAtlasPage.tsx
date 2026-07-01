import { outputAtlas } from '../data/knowledge'
import { extraOutputAtlas } from '../data/phase3Knowledge'
import { sprint25Outputs } from '../data/referenceExpansionSprint25'
import { phase4OutputAtlas } from '../data/outputAtlasPhase4'
import { VisualReferenceStudio, type VisualReferenceItem } from '../components/reference/VisualReferenceStudio'

const allOutputAtlas = [...outputAtlas, ...extraOutputAtlas, ...sprint25Outputs, ...phase4OutputAtlas]
interface OutputAtlasPageProps { focusId?: string | null }

export function OutputAtlasPage({ focusId }: OutputAtlasPageProps) {
  const items: VisualReferenceItem[] = allOutputAtlas.map((output) => ({ id: output.id, title: output.title, eyebrow: output.category, summary: output.whatItIs, primary: output.exampleOutput, secondary: output.howToRead.join(' '), good: output.goodResult, bad: output.badResult, decision: output.businessImpact, tags: [...output.usedIn, ...output.relatedConcepts, ...output.relatedCases], code: output.exampleOutput, sections: [{ title: 'How to read it', items: output.howToRead }, { title: 'Red flags', items: output.redFlags }, { title: 'How to improve it', items: output.howToImprove }, { title: 'Related concepts', items: output.relatedConcepts }, { title: 'Related cases', items: output.relatedCases }] }))
  return <VisualReferenceStudio title="Output Atlas" eyebrow="Deep Reference" icon="OA" description="A visual studio for interpreting dashboards, model outputs, statistical results, financial outputs and business decision artifacts." items={items} focusId={focusId} />
}
