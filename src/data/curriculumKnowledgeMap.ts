import { knowledgeAssetRegistry } from './knowledgeAssetRegistry'
import { dataScienceCurriculum, bankingCurriculum, cfaCurriculum, type ModuleCurriculum } from './moduleCurriculum'

export interface CurriculumMapTopic {
  id: string
  title: string
  type: string
  category: string
  outputs: string[]
}

export interface CurriculumMapSubmodule {
  id: string
  title: string
  objective: string
  topics: CurriculumMapTopic[]
  outputs: string[]
}

export interface CurriculumMapModule {
  id: ModuleCurriculum['id']
  title: string
  description: string
  submodules: CurriculumMapSubmodule[]
}

const curriculums = [dataScienceCurriculum, bankingCurriculum, cfaCurriculum]

export const curriculumKnowledgeMap: CurriculumMapModule[] = curriculums.map((curriculum) => ({
  id: curriculum.id,
  title: curriculum.title,
  description: curriculum.description,
  submodules: curriculum.submodules.map((submodule) => ({
    id: submodule.id,
    title: submodule.title,
    objective: submodule.objective,
    outputs: submodule.outputs,
    topics: submodule.assetIds.map((assetId) => {
      const asset = knowledgeAssetRegistry.find((item) => item.id === assetId)
      return { id: assetId, title: asset?.title ?? assetId, type: asset?.type ?? 'Topic', category: asset?.category ?? 'Unregistered', outputs: asset?.outputs ?? [] }
    })
  }))
}))

export const curriculumMapSummary = {
  modules: curriculumKnowledgeMap.length,
  submodules: curriculumKnowledgeMap.reduce((total, module) => total + module.submodules.length, 0),
  topics: curriculumKnowledgeMap.reduce((total, module) => total + module.submodules.reduce((inner, submodule) => inner + submodule.topics.length, 0), 0),
  outputs: curriculumKnowledgeMap.reduce((total, module) => total + module.submodules.reduce((inner, submodule) => inner + submodule.outputs.length, 0), 0)
}
