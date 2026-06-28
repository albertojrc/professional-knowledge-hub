import { bankingCreditRiskLessons } from './bankingCreditRiskStudy'

export const bankingCreditRiskSearchEntries = bankingCreditRiskLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Study Lesson' as const,
  area: 'Banking & Credit Risk',
  category: lesson.level,
  summary: lesson.studyObjective,
  tags: [lesson.evidenceStatus, ...lesson.sourceMaterials, ...lesson.coreConcepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.businessDecisions, ...lesson.practicePrompts, ...lesson.connections],
  targetView: 'banking-credit-risk-study' as const
}))
