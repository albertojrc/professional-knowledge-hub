import { toolsLessons } from './toolsStudy'

export const toolsSearchEntries = toolsLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Study Lesson' as const,
  area: 'Tools & Platforms',
  category: lesson.level,
  summary: lesson.objective,
  tags: [lesson.status, ...lesson.materials, ...lesson.concepts, ...lesson.workflow, ...lesson.tools, ...lesson.outputs, ...lesson.interpretation, ...lesson.decisions, ...lesson.practice, ...lesson.connections],
  targetView: 'tools-platforms-study' as const
}))
