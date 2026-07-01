import type { ViewId } from '../types/knowledge'
import { bankingCurriculum } from '../data/moduleCurriculum'
import { ModuleCurriculumStudio } from '../components/learning/ModuleCurriculumStudio'

interface BankingCreditRiskStudyPageProps { focusId?: string | null; onNavigate?: (view: ViewId, focusId?: string | null) => void; onOpenAsset?: (assetId: string) => void }

export function BankingCreditRiskStudyPage({ focusId, onOpenAsset }: BankingCreditRiskStudyPageProps) {
  return <ModuleCurriculumStudio curriculum={bankingCurriculum} focusId={focusId} onOpenAsset={onOpenAsset ?? (() => {})} />
}
