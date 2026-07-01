import type { ViewId } from '../types/knowledge'
import { cfaCurriculum } from '../data/moduleCurriculum'
import { ModuleCurriculumStudio } from '../components/learning/ModuleCurriculumStudio'

interface ProfessionalCertificationsPageProps { focusId?: string | null; onNavigate?: (view: ViewId, focusId?: string | null) => void; onOpenAsset?: (assetId: string) => void }

export function ProfessionalCertificationsPage({ focusId, onOpenAsset }: ProfessionalCertificationsPageProps) {
  return <ModuleCurriculumStudio curriculum={cfaCurriculum} focusId={focusId} onOpenAsset={onOpenAsset ?? (() => {})} />
}
