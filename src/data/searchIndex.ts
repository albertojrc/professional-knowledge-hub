import { knowledgeAssetRegistry } from './knowledgeAssetRegistry'
import { outputAtlas, formulas, models, businessCases } from './knowledge'
import { extraOutputAtlas, extraModels } from './phase3Knowledge'
import { expansionBacklog } from './assetExpansionSystem'
import { studyPaths } from './studyPaths'
import { materialRecords } from './materialInventory'
import { courseAreaMapRecords, topicClusters } from './courseAreaMapping'

export type SearchResultKind = 'Knowledge Asset' | 'Material' | 'Course Area' | 'Topic Cluster' | 'Output' | 'Formula' | 'Model' | 'Business Case' | 'Backlog Item' | 'Study Path'

export interface SearchResultItem {
  id: string
  title: string
  kind: SearchResultKind
  area: string
  category: string
  summary: string
  tags: string[]
  targetView: 'knowledge-library' | 'material-inventory' | 'course-area-map' | 'study-paths' | 'output-atlas' | 'formula-library' | 'model-library' | 'business-cases' | 'knowledge-factory'
  assetId?: string
}

const allOutputs = [...outputAtlas, ...extraOutputAtlas]
const allModels = [...models, ...extraModels]

export const globalSearchIndex: SearchResultItem[] = [
  ...knowledgeAssetRegistry.map((asset) => ({
    id: asset.id,
    title: asset.title,
    kind: 'Knowledge Asset' as const,
    area: asset.area,
    category: asset.category,
    summary: asset.summary,
    tags: [asset.type, asset.difficulty, ...asset.metrics, ...asset.outputs, ...asset.graphs, ...asset.businessApplications, ...asset.bankingApplications, ...asset.relatedAssets],
    targetView: 'knowledge-library' as const,
    assetId: asset.id
  })),
  ...materialRecords.map((material) => ({
    id: material.id,
    title: material.title,
    kind: 'Material' as const,
    area: material.area,
    category: material.status,
    summary: material.description,
    tags: [material.program, material.materialType, material.locationLabel, material.priority, ...material.knownTopics, ...material.targetAssets, ...material.gapsToCheck],
    targetView: 'material-inventory' as const
  })),
  ...courseAreaMapRecords.map((record) => ({
    id: record.id,
    title: record.title,
    kind: 'Course Area' as const,
    area: record.area,
    category: record.currentCoverage,
    summary: record.professionalPurpose,
    tags: [record.bankingRelevance, record.dataRelevance, record.targetCoverage, ...record.programs, ...record.sourceModuleIds, ...record.keyTopics, ...record.existingAssets, ...record.recommendedAssets, ...record.sourceGaps],
    targetView: 'course-area-map' as const
  })),
  ...topicClusters.map((cluster) => ({
    id: cluster.id,
    title: cluster.title,
    kind: 'Topic Cluster' as const,
    area: cluster.area,
    category: 'Topic Cluster',
    summary: cluster.description,
    tags: [...cluster.topics, ...cluster.connectedAssets, ...cluster.professionalOutputs, ...cluster.businessDecisions],
    targetView: 'course-area-map' as const
  })),
  ...studyPaths.map((path) => ({
    id: path.id,
    title: path.title,
    kind: 'Study Path' as const,
    area: 'Learning Path',
    category: path.level,
    summary: path.professionalOutcome,
    tags: [path.subtitle, path.targetRole, path.duration, ...path.assetIds, ...path.milestones.flatMap((milestone) => [milestone.title, milestone.description, ...milestone.assetIds])],
    targetView: 'study-paths' as const
  })),
  ...allOutputs.map((output) => ({
    id: output.id,
    title: output.title,
    kind: 'Output' as const,
    area: 'Data Science',
    category: output.category,
    summary: output.whatItIs,
    tags: [...output.usedIn, ...output.relatedConcepts, ...output.relatedCases],
    targetView: 'output-atlas' as const
  })),
  ...formulas.map((formula) => ({
    id: formula.id,
    title: formula.title,
    kind: 'Formula' as const,
    area: formula.area,
    category: 'Formula Library',
    summary: formula.interpretation,
    tags: [formula.formula, formula.variables, formula.professionalUse, ...formula.relatedItems],
    targetView: 'formula-library' as const
  })),
  ...allModels.map((model) => ({
    id: model.id,
    title: model.title,
    kind: 'Model' as const,
    area: 'Data Science',
    category: model.family,
    summary: model.objective,
    tags: [model.inputs, model.outputs, model.interpretation, ...model.applications],
    targetView: 'model-library' as const
  })),
  ...businessCases.map((businessCase) => ({
    id: businessCase.id,
    title: businessCase.title,
    kind: 'Business Case' as const,
    area: businessCase.area,
    category: 'Business Case',
    summary: businessCase.businessQuestion,
    tags: [...businessCase.dataRequired, ...businessCase.workflow, ...businessCase.tools, ...businessCase.outputs, businessCase.decision],
    targetView: 'business-cases' as const
  })),
  ...expansionBacklog.map((item) => ({
    id: item.id,
    title: item.title,
    kind: 'Backlog Item' as const,
    area: item.area,
    category: item.category,
    summary: item.whyItMatters,
    tags: [item.type, item.priority, item.status, ...item.sourcePlan, ...item.relatedAssets],
    targetView: 'knowledge-factory' as const
  }))
]

export function searchKnowledge(query: string, filters: { kind?: string; area?: string; category?: string } = {}) {
  const normalizedQuery = query.trim().toLowerCase()

  return globalSearchIndex
    .filter((item) => {
      const matchesKind = !filters.kind || filters.kind === 'All' || item.kind === filters.kind
      const matchesArea = !filters.area || filters.area === 'All' || item.area === filters.area
      const matchesCategory = !filters.category || filters.category === 'All' || item.category === filters.category
      if (!matchesKind || !matchesArea || !matchesCategory) return false
      if (!normalizedQuery) return true
      const haystack = `${item.title} ${item.kind} ${item.area} ${item.category} ${item.summary} ${item.tags.join(' ')}`.toLowerCase()
      return haystack.includes(normalizedQuery)
    })
    .sort((a, b) => {
      if (!normalizedQuery) return a.title.localeCompare(b.title)
      const aTitle = a.title.toLowerCase().includes(normalizedQuery) ? 0 : 1
      const bTitle = b.title.toLowerCase().includes(normalizedQuery) ? 0 : 1
      return aTitle - bTitle || a.title.localeCompare(b.title)
    })
}

export const searchKinds = ['All', ...Array.from(new Set(globalSearchIndex.map((item) => item.kind)))]
export const searchAreas = ['All', ...Array.from(new Set(globalSearchIndex.map((item) => item.area)))]
export const searchCategories = ['All', ...Array.from(new Set(globalSearchIndex.map((item) => item.category)))]
