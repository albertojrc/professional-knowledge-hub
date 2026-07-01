import type { ViewId } from '../types/knowledge'
import { dataScienceSummary, dataScienceTracks } from '../data/moduleCommandCenters'
import { VisualModuleStudio } from '../components/learning/VisualModuleStudio'

interface DataScienceAnalyticsStudyPageProps { focusId?: string | null; onNavigate?: (view: ViewId, focusId?: string | null) => void; onOpenAsset?: (assetId: string) => void }

export function DataScienceAnalyticsStudyPage({ focusId, onNavigate, onOpenAsset }: DataScienceAnalyticsStudyPageProps) {
  return <VisualModuleStudio moduleTitle="Data Science" moduleEyebrow="Command Center" icon="DS" description="A professional study studio for data workflow, SQL, EDA, machine learning, dashboards, governance and decision-making." summary={dataScienceSummary} tracks={dataScienceTracks} focusId={focusId} searchTitle="Data Science Search Capsules" searchDescription="Knowledge assets, outputs, formulas, models, business cases, lessons and review pages related to data and analytics." areaHints={['Data Science', 'Analytics']} targetViews={['data-science-analytics-study', 'output-atlas', 'formula-library', 'model-library', 'business-cases', 'knowledge-library', 'abt-blueprint', 'abt-schema-template', 'abt-field-review-matrix', 'model-ready-feature-set', 'credit-scoring-experiment-blueprint', 'model-card-monitoring-handoff']} keywords={['data science', 'analytics', 'sql', 'python', 'machine learning', 'model', 'eda', 'abt', 'feature', 'dashboard', 'shap', 'calibration']} onNavigate={onNavigate} onOpenAsset={onOpenAsset} />
}
