import { financeValuationLessons } from './financeValuationStudy'

export const financeValuationSearchEntries = financeValuationLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Study Lesson' as const,
  area: 'Finance & Valuation',
  category: lesson.level,
  summary: lesson.studyObjective,
  tags: [lesson.evidenceStatus, ...lesson.sourceMaterials, ...lesson.coreConcepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.businessDecisions, ...lesson.practicePrompts, ...lesson.connections],
  targetView: 'finance-valuation-study' as const
}))
