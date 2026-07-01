import { businessCases } from '../data/knowledge'
import { sprint26BusinessCases } from '../data/businessCasesSprint26'
import { phase4BusinessCases } from '../data/businessCasesPhase4'
import { VisualReferenceStudio, type VisualReferenceItem } from '../components/reference/VisualReferenceStudio'

interface BusinessCasesPageProps { focusId?: string | null }
const allBusinessCases = [...businessCases, ...sprint26BusinessCases, ...phase4BusinessCases]

export function BusinessCasesPage({ focusId }: BusinessCasesPageProps) {
  const items: VisualReferenceItem[] = allBusinessCases.map((item) => ({ id: item.id, title: item.title, eyebrow: item.area, summary: item.businessQuestion, primary: item.decision, secondary: item.governance, decision: item.decision, tags: [...item.dataRequired, ...item.tools, ...item.outputs, ...item.relatedModules], workflow: item.workflow, sections: [{ title: 'Data required', items: item.dataRequired }, { title: 'Tools', items: item.tools }, { title: 'Outputs', items: item.outputs }, { title: 'Related modules', items: item.relatedModules }] }))
  return <VisualReferenceStudio title="Business Case Library" eyebrow="Deep Reference" icon="BC" description="A visual studio for practical business workflows that connect data, formulas, models, outputs, governance and decisions." items={items} focusId={focusId} />
}
