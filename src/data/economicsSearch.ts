import { economicsLessons } from './economicsStudy'

export const economicsSearchEntries = economicsLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Study Lesson' as const,
  area: 'Economics & Markets',
  category: lesson.level,
  summary: lesson.objective,
  tags: [lesson.status, ...lesson.materials, ...lesson.concepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.decisions, ...lesson.practice, ...lesson.connections],
  targetView: 'economics-markets-study' as const
}))
