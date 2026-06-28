import { studyModuleCards } from './studyModuleHub'

export const studyModuleSearchEntries = studyModuleCards.map((module) => ({
  id: `search-${module.id}`,
  title: module.title,
  kind: 'Study Module' as const,
  area: 'Study Modules',
  category: module.priority,
  summary: module.description,
  tags: [module.status, module.studyGoal, ...module.sourceMaterials, ...module.learningObjects, ...module.formulas, ...module.outputs, ...module.cases, ...module.practice, ...module.linkedViews],
  targetView: 'study-modules' as const
}))
