import { managementLessons } from './managementStudy'

export const managementSearchEntries = managementLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Study Lesson' as const,
  area: 'Management & Strategy',
  category: lesson.level,
  summary: lesson.objective,
  tags: [lesson.status, ...lesson.materials, ...lesson.concepts, ...lesson.workflow, ...lesson.frameworks, ...lesson.outputs, ...lesson.interpretation, ...lesson.decisions, ...lesson.practice, ...lesson.connections],
  targetView: 'management-strategy-study' as const
}))
