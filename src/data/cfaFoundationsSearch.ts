import { cfaFoundationLessons } from './cfaFoundations'

export const cfaFoundationsSearchEntries = cfaFoundationLessons.map((lesson) => ({
  id: `search-${lesson.id}`,
  title: lesson.title,
  kind: 'Certification Lesson' as const,
  area: 'Professional Certifications',
  category: lesson.layer,
  summary: lesson.objective,
  tags: [lesson.status, lesson.level, ...lesson.officialAnchor, ...lesson.concepts, ...lesson.workflow, ...lesson.formulas, ...lesson.outputs, ...lesson.interpretation, ...lesson.practice, ...lesson.connectedModules],
  targetView: 'professional-certifications' as const
}))
