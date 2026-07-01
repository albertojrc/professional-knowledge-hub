import type { ViewId } from '../types/knowledge'
import { cfaCertificationSummary, cfaCertificationTracks } from '../data/moduleCommandCenters'
import { VisualModuleStudio } from '../components/learning/VisualModuleStudio'

interface ProfessionalCertificationsPageProps { focusId?: string | null; onNavigate?: (view: ViewId, focusId?: string | null) => void; onOpenAsset?: (assetId: string) => void }

export function ProfessionalCertificationsPage({ focusId, onNavigate, onOpenAsset }: ProfessionalCertificationsPageProps) {
  return <VisualModuleStudio moduleTitle="CFA & Certifications" moduleEyebrow="Command Center" icon="CFA" description="A CFA-first visual study studio for finance foundations, investment concepts, portfolio management and Bloomberg support workflows." summary={cfaCertificationSummary} tracks={cfaCertificationTracks} focusId={focusId} searchTitle="CFA & Certifications Search Capsules" searchDescription="Certification tracks, CFA lessons, investment concepts, formulas, finance outputs and Bloomberg workflow entries from the real search index." areaHints={['CFA', 'Certification', 'Finance']} targetViews={['professional-certifications', 'formula-library', 'output-atlas', 'model-library', 'business-cases', 'knowledge-library', 'finance-valuation-study', 'economics-markets-study', 'tools-platforms-study']} keywords={['cfa', 'certification', 'bloomberg', 'bmc', 'bff', 'ethics', 'fixed income', 'portfolio', 'equity', 'derivatives', 'finance', 'wacc']} onNavigate={onNavigate} onOpenAsset={onOpenAsset} />
}
