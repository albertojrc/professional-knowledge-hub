import type { ViewId } from '../types/knowledge'
import { bankingFinanceSummary, bankingFinanceTracks } from '../data/moduleCommandCenters'
import { modelRefreshChallengerTrack } from '../data/modelRefreshCommandTrack'
import { VisualModuleStudio } from '../components/learning/VisualModuleStudio'

interface BankingCreditRiskStudyPageProps { focusId?: string | null; onNavigate?: (view: ViewId, focusId?: string | null) => void; onOpenAsset?: (assetId: string) => void }

const bankingStudioTracks = [...bankingFinanceTracks, modelRefreshChallengerTrack]
const bankingStudioSummary = { ...bankingFinanceSummary, totalTracks: bankingStudioTracks.length, professionalTracks: bankingFinanceSummary.professionalTracks + 1, outputs: bankingFinanceSummary.outputs + modelRefreshChallengerTrack.primaryOutputs.length }

export function BankingCreditRiskStudyPage({ focusId, onNavigate, onOpenAsset }: BankingCreditRiskStudyPageProps) {
  return <VisualModuleStudio moduleTitle="Banking & Finance" moduleEyebrow="Command Center" icon="BF" description="A visual study studio for credit risk, banking analytics, corporate finance, valuation, monitoring and governance." summary={bankingStudioSummary} tracks={bankingStudioTracks} focusId={focusId} searchTitle="Banking & Finance Search Capsules" searchDescription="Knowledge assets, outputs, formulas, models, cases, lessons and review pages related to banking, credit risk, finance and valuation." areaHints={['Banking', 'Finance', 'Credit']} targetViews={['banking-credit-risk-study', 'finance-valuation-study', 'output-atlas', 'formula-library', 'model-library', 'business-cases', 'knowledge-library', 'model-ready-feature-set', 'credit-scoring-experiment-blueprint', 'model-card-monitoring-handoff', 'portfolio-monitoring-dashboard-blueprint', 'alert-remediation-workflow']} keywords={['banking', 'finance', 'credit', 'risk', 'pd', 'expected loss', 'wacc', 'capm', 'valuation', 'cash flow', 'portfolio monitoring', 'model card', 'model refresh', 'champion challenger']} onNavigate={onNavigate} onOpenAsset={onOpenAsset} />
}
