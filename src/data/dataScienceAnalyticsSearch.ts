import { dataScienceAnalyticsLessons } from './dataScienceAnalyticsStudy'

export const dataScienceAnalyticsSearchEntries = dataScienceAnalyticsLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Study Lesson' as const,
  area: 'Data Science & Analytics',
  category: lesson.level,
  summary: lesson.studyObjective,
  tags: [lesson.evidenceStatus, ...lesson.sourceMaterials, ...lesson.coreConcepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.businessDecisions, ...lesson.practicePrompts, ...lesson.connections],
  targetView: 'data-science-analytics-study' as const
}))
