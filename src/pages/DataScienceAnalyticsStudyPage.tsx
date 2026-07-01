import type { ViewId } from '../types/knowledge'
import { dataScienceCurriculum } from '../data/moduleCurriculum'
import { ModuleCurriculumStudio } from '../components/learning/ModuleCurriculumStudio'

interface DataScienceAnalyticsStudyPageProps { focusId?: string | null; onNavigate?: (view: ViewId, focusId?: string | null) => void; onOpenAsset?: (assetId: string) => void }

export function DataScienceAnalyticsStudyPage({ focusId, onOpenAsset }: DataScienceAnalyticsStudyPageProps) {
  return <ModuleCurriculumStudio curriculum={dataScienceCurriculum} focusId={focusId} onOpenAsset={onOpenAsset ?? (() => {})} />
}
