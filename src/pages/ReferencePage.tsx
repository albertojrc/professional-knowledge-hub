import { formulas, models } from '../data/knowledge'
import { extraModels } from '../data/phase3Knowledge'
import { sprint25Formulas } from '../data/referenceExpansionSprint25'
import { phase4Formulas } from '../data/formulasPhase4'
import { phase4Models } from '../data/modelsPhase4'
import { VisualReferenceStudio, type VisualReferenceItem } from '../components/reference/VisualReferenceStudio'

interface ReferencePageProps { type: 'formulas' | 'models'; query: string; focusId?: string | null }

export function ReferencePage({ type, query, focusId }: ReferencePageProps) {
  if (type === 'formulas') {
    const allFormulas = [...formulas, ...sprint25Formulas, ...phase4Formulas]
    const items: VisualReferenceItem[] = allFormulas.filter((formula) => !query.trim() || `${formula.title} ${formula.area} ${formula.formula} ${formula.interpretation} ${formula.professionalUse} ${formula.relatedItems.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())).map((formula) => ({ id: formula.id, title: formula.title, eyebrow: formula.area, summary: formula.interpretation, primary: formula.formula, secondary: formula.professionalUse, tags: formula.relatedItems, code: formula.formula, sections: [{ title: 'Variables', items: [formula.variables] }, { title: 'Related items', items: formula.relatedItems }] }))
    return <VisualReferenceStudio title="Formula Library" eyebrow="Deep Reference" icon="ƒx" description="A visual studio for finance, risk, economics, statistics, valuation and portfolio formulas. Each formula is treated as a decision tool, not just a calculation." items={items} focusId={focusId} />
  }
  const allModels = [...models, ...extraModels, ...phase4Models]
  const items: VisualReferenceItem[] = allModels.filter((model) => !query.trim() || `${model.title} ${model.family} ${model.objective} ${model.inputs} ${model.outputs} ${model.interpretation} ${model.goodResult} ${model.badResult} ${model.applications.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())).map((model) => ({ id: model.id, title: model.title, eyebrow: model.family, summary: model.objective, primary: model.inputs, secondary: model.outputs, good: model.goodResult, bad: model.badResult, decision: model.interpretation, tags: model.applications, sections: [{ title: 'Professional applications', items: model.applications }] }))
  return <VisualReferenceStudio title="Model Library" eyebrow="Deep Reference" icon="ML" description="A visual studio for models with objectives, inputs, outputs, interpretation, quality signals and professional applications." items={items} focusId={focusId} />
}
