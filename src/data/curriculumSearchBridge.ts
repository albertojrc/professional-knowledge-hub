import type { ViewId } from '../types/knowledge'
import { dataScienceCurriculum, bankingCurriculum, cfaCurriculum, type ModuleCurriculum } from './moduleCurriculum'
import type { SearchResultItem } from './searchIndex'

export interface CurriculumMatch {
  moduleId: ModuleCurriculum['id']
  moduleTitle: string
  moduleView: ViewId
  submoduleId: string
  submoduleTitle: string
  learningPosition: number
  openMode: 'exact-topic' | 'focused-submodule'
}

const curriculumViewMap: Record<ModuleCurriculum['id'], ViewId> = {
  'data-science': 'data-science-analytics-study',
  'banking-finance': 'banking-credit-risk-study',
  'cfa-certifications': 'professional-certifications'
}

const curriculums = [dataScienceCurriculum, bankingCurriculum, cfaCurriculum]

export function getCurriculumMatchForAsset(assetId?: string): CurriculumMatch | null {
  if (!assetId) return null
  for (const curriculum of curriculums) {
    const submoduleIndex = curriculum.submodules.findIndex((submodule) => submodule.assetIds.includes(assetId))
    if (submoduleIndex >= 0) {
      const submodule = curriculum.submodules[submoduleIndex]
      return { moduleId: curriculum.id, moduleTitle: curriculum.title, moduleView: curriculumViewMap[curriculum.id], submoduleId: submodule.id, submoduleTitle: submodule.title, learningPosition: submodule.assetIds.indexOf(assetId) + 1, openMode: 'exact-topic' }
    }
  }
  return null
}

export function getCurriculumMatchForSearchItem(item: SearchResultItem): CurriculumMatch | null {
  const assetMatch = getCurriculumMatchForAsset(item.assetId)
  if (assetMatch) return assetMatch
  for (const curriculum of curriculums) {
    const submodule = curriculum.submodules.find((entry) => entry.id === item.id || item.tags.includes(entry.id) || item.title.includes(entry.title.replace(/^\d+\.\s*/, '')))
    if (submodule) return { moduleId: curriculum.id, moduleTitle: curriculum.title, moduleView: curriculumViewMap[curriculum.id], submoduleId: submodule.id, submoduleTitle: submodule.title, learningPosition: 0, openMode: 'focused-submodule' }
  }
  return null
}

export function getCurriculumOpenLabel(item: SearchResultItem): string {
  const match = getCurriculumMatchForSearchItem(item)
  if (!match) return item.assetId ? 'Open exact topic' : 'Open exact view'
  return match.openMode === 'exact-topic' ? 'Open topic detail' : 'Open focused submodule'
}
