import { cfaCurriculum } from '../data/moduleCurriculum'
import { ModuleCurriculumStudio } from '../components/learning/ModuleCurriculumStudio'

interface ProfessionalCertificationsPageProps { focusId?: string | null; onOpenAsset?: (assetId: string) => void }

export function ProfessionalCertificationsPage({ focusId, onOpenAsset }: ProfessionalCertificationsPageProps) {
  return <ModuleCurriculumStudio curriculum={cfaCurriculum} focusId={focusId} onOpenAsset={onOpenAsset ?? (() => {})} />
}
