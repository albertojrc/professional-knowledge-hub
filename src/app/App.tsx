import { useMemo, useState } from 'react'
import type { NavItem, ViewId } from '../types/knowledge'
import { navItems } from '../data/knowledge'
import { useAssetProgress } from '../hooks/useAssetProgress'
import { usePathPrefs } from '../hooks/usePathPrefs'
import { Sidebar } from '../components/layout/Sidebar'
import { TopBar } from '../components/layout/TopBar'
import { DashboardPage } from '../pages/DashboardPage'
import { GlobalSearchPage } from '../pages/GlobalSearchPage'
import { StudyModuleHubPage } from '../pages/StudyModuleHubPage'
import { DataScienceAnalyticsStudyPage } from '../pages/DataScienceAnalyticsStudyPage'
import { FinanceValuationStudyPage } from '../pages/FinanceValuationStudyPage'
import { EconomicsMarketsStudyPage } from '../pages/EconomicsMarketsStudyPage'
import { ManagementStrategyStudyPage } from '../pages/ManagementStrategyStudyPage'
import { ToolsPlatformsStudyPage } from '../pages/ToolsPlatformsStudyPage'
import { PracticeEnginePage } from '../pages/PracticeEnginePage'
import { CapstoneProjectsPage } from '../pages/CapstoneProjectsPage'
import { PortfolioBuilderPage } from '../pages/PortfolioBuilderPage'
import { InterviewPrepPage } from '../pages/InterviewPrepPage'
import { RoleReadinessPage } from '../pages/RoleReadinessPage'
import { HubQAPolishPage } from '../pages/HubQAPolishPage'
import { AcademicUpgradePassPage } from '../pages/AcademicUpgradePassPage'
import { AcademicNotesPage } from '../pages/AcademicNotesPage'
import { CreditScoringReviewPage } from '../pages/CreditScoringReviewPage'
import { CreditPromotionQueuePage } from '../pages/CreditPromotionQueuePage'
import { LCFieldMappingPage } from '../pages/LCFieldMappingPage'
import { ABTBlueprintPage } from '../pages/ABTBlueprintPage'
import { ABTSchemaTemplatePage } from '../pages/ABTSchemaTemplatePage'
import { ABTFieldReviewMatrixPage } from '../pages/ABTFieldReviewMatrixPage'
import { ModelReadyFeatureSetPage } from '../pages/ModelReadyFeatureSetPage'
import { CreditScoringExperimentBlueprintPage } from '../pages/CreditScoringExperimentBlueprintPage'
import { ProfessionalCertificationsPage } from '../pages/ProfessionalCertificationsPage'
import { BankingCreditRiskStudyPage } from '../pages/BankingCreditRiskStudyPage'
import { AcademicReviewWorkspacePage } from '../pages/AcademicReviewWorkspacePage'
import { AcademicSourceRegistryPage } from '../pages/AcademicSourceRegistryPage'
import { RouteQAPage } from '../pages/RouteQAPage'
import { Phase2HandoffPage } from '../pages/Phase2HandoffPage'
import { MaterialInventoryPage } from '../pages/MaterialInventoryPage'
import { CourseAreaMapPage } from '../pages/CourseAreaMapPage'
import { EvidenceExpansionPage } from '../pages/EvidenceExpansionPage'
import { SourceCoverageQAPage } from '../pages/SourceCoverageQAPage'
import { SourceReviewPrepPage } from '../pages/SourceReviewPrepPage'
import { SourceReviewExecutionPage } from '../pages/SourceReviewExecutionPage'
import { CourseEvidencePage } from '../pages/CourseEvidencePage'
import { SourceIntakePage } from '../pages/SourceIntakePage'
import { IntakeCoverageMapPage } from '../pages/IntakeCoverageMapPage'
import { SourceDecisionBoardPage } from '../pages/SourceDecisionBoardPage'
import { SourceGovernanceSummaryPage } from '../pages/SourceGovernanceSummaryPage'
import { SourcePackGuidePage } from '../pages/SourcePackGuidePage'
import { SourceBatchPlannerPage } from '../pages/SourceBatchPlannerPage'
import { ReviewFormTemplatePage } from '../pages/ReviewFormTemplatePage'
import { ReviewResultRegistryPage } from '../pages/ReviewResultRegistryPage'
import { PromotionQueuePage } from '../pages/PromotionQueuePage'
import { ControlledUpdateLogPage } from '../pages/ControlledUpdateLogPage'
import { SourceCommandCenterPage } from '../pages/SourceCommandCenterPage'
import { KnowledgeLibraryPage } from '../pages/KnowledgeLibraryPage'
import { KnowledgeAssetDetailPage } from '../pages/KnowledgeAssetDetailPage'
import { StudyPathsPage } from '../pages/StudyPathsPage'
import { LearningSessionPage } from '../pages/LearningSessionPage'
import { KnowledgeFactoryPage } from '../pages/KnowledgeFactoryPage'
import { CoreAreaPage } from '../pages/CoreAreaPage'
import { DataScienceOperatingSystemPage } from '../pages/DataScienceOperatingSystemPage'
import { BusinessOperatingSystemPage } from '../pages/BusinessOperatingSystemPage'
import { ProfessionalScenariosPage } from '../pages/ProfessionalScenariosPage'
import { DecisionPlaybooksPage } from '../pages/DecisionPlaybooksPage'
import { MlModelsPage } from '../pages/MlModelsPage'
import { MlGraphAtlasPage } from '../pages/MlGraphAtlasPage'
import { CreditRiskPage } from '../pages/CreditRiskPage'
import { OutputAtlasPage } from '../pages/OutputAtlasPage'
import { ReferencePage } from '../pages/ReferencePage'
import { BusinessCasesPage } from '../pages/BusinessCasesPage'
import { KnowledgeMapPage } from '../pages/KnowledgeMapPage'
import { QualityReviewPage } from '../pages/QualityReviewPage'

const navCatalog: NavItem[] = [
  ...navItems,
  { id: 'model-ready-feature-set', label: 'Model-Ready Feature Set', eyebrow: 'Evidence & QA', description: 'Leakage-safe feature promotion for credit scoring.', icon: 'MF' },
  { id: 'credit-scoring-experiment-blueprint', label: 'Credit Scoring Experiment Blueprint', eyebrow: 'Evidence & QA', description: 'Experiment design for credit scoring models.', icon: 'CE' }
]
const titleFromView = (id: ViewId): string => id.split('-').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')

export function App() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard')
  const [query, setQuery] = useState('')
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const [focusId, setFocusId] = useState<string | null>(null)
  const assetProgress = useAssetProgress()
  const pathPrefs = usePathPrefs()
  const activeItem = useMemo<NavItem>(() => navCatalog.find((item) => item.id === activeView) ?? { id: activeView, label: titleFromView(activeView), eyebrow: 'Hub', description: 'Professional Knowledge Hub.', icon: 'PK' }, [activeView])
  const openAsset = (assetId: string) => { setFocusId(null); setActiveAssetId(assetId); setActiveView('knowledge-library') }
  const changeView = (view: ViewId, nextFocusId: string | null = null) => { setActiveAssetId(null); setFocusId(nextFocusId); setActiveView(view) }
  return (<div className="app-shell"><Sidebar activeView={activeView} onChangeView={changeView} /><div className="app-main"><TopBar activeItem={activeItem} query={query} onQueryChange={setQuery} /><main className="content-shell">
    {activeView === 'dashboard' && <DashboardPage onNavigate={changeView} onOpenAsset={openAsset} assetProgress={assetProgress} pathPrefs={pathPrefs} />}
    {activeView === 'global-search' && <GlobalSearchPage query={query} onQueryChange={setQuery} onNavigate={changeView} onOpenAsset={openAsset} />}
    {activeView === 'study-modules' && <StudyModuleHubPage focusId={focusId} />}
    {activeView === 'data-science-analytics-study' && <DataScienceAnalyticsStudyPage focusId={focusId} />}
    {activeView === 'finance-valuation-study' && <FinanceValuationStudyPage focusId={focusId} />}
    {activeView === 'economics-markets-study' && <EconomicsMarketsStudyPage focusId={focusId} />}
    {activeView === 'management-strategy-study' && <ManagementStrategyStudyPage focusId={focusId} />}
    {activeView === 'tools-platforms-study' && <ToolsPlatformsStudyPage focusId={focusId} />}
    {activeView === 'practice-engine' && <PracticeEnginePage focusId={focusId} />}
    {activeView === 'capstone-projects' && <CapstoneProjectsPage focusId={focusId} />}
    {activeView === 'portfolio-builder' && <PortfolioBuilderPage focusId={focusId} />}
    {activeView === 'interview-prep' && <InterviewPrepPage focusId={focusId} />}
    {activeView === 'role-readiness' && <RoleReadinessPage focusId={focusId} />}
    {activeView === 'professional-certifications' && <ProfessionalCertificationsPage focusId={focusId} />}
    {activeView === 'banking-credit-risk-study' && <BankingCreditRiskStudyPage focusId={focusId} />}
    {activeView === 'academic-upgrade-pass' && <AcademicUpgradePassPage focusId={focusId} />}
    {activeView === 'academic-notes' && <AcademicNotesPage focusId={focusId} />}
    {activeView === 'credit-scoring-review' && <CreditScoringReviewPage focusId={focusId} />}
    {activeView === 'credit-promotion-queue' && <CreditPromotionQueuePage focusId={focusId} />}
    {activeView === 'lc-field-mapping' && <LCFieldMappingPage focusId={focusId} />}
    {activeView === 'abt-blueprint' && <ABTBlueprintPage focusId={focusId} />}
    {activeView === 'abt-schema-template' && <ABTSchemaTemplatePage focusId={focusId} />}
    {activeView === 'abt-field-review-matrix' && <ABTFieldReviewMatrixPage focusId={focusId} />}
    {activeView === 'model-ready-feature-set' && <ModelReadyFeatureSetPage focusId={focusId} />}
    {activeView === 'credit-scoring-experiment-blueprint' && <CreditScoringExperimentBlueprintPage focusId={focusId} />}
    {activeView === 'source-command-center' && <SourceCommandCenterPage />}
    {activeView === 'academic-review-workspace' && <AcademicReviewWorkspacePage focusId={focusId} />}
    {activeView === 'academic-file-registry' && <AcademicSourceRegistryPage focusId={focusId} />}
    {activeView === 'hub-qa-polish' && <HubQAPolishPage focusId={focusId} />}
    {activeView === 'phase-2-handoff' && <Phase2HandoffPage />}
    {activeView === 'route-qa' && <RouteQAPage />}
    {activeView === 'source-governance-summary' && <SourceGovernanceSummaryPage />}
    {activeView === 'source-pack-guide' && <SourcePackGuidePage focusId={focusId} />}
    {activeView === 'source-batch-planner' && <SourceBatchPlannerPage focusId={focusId} />}
    {activeView === 'review-form-template' && <ReviewFormTemplatePage />}
    {activeView === 'review-result-registry' && <ReviewResultRegistryPage focusId={focusId} />}
    {activeView === 'promotion-queue' && <PromotionQueuePage focusId={focusId} />}
    {activeView === 'controlled-update-log' && <ControlledUpdateLogPage focusId={focusId} />}
    {activeView === 'material-inventory' && <MaterialInventoryPage focusId={focusId} />}
    {activeView === 'course-area-map' && <CourseAreaMapPage focusId={focusId} />}
    {activeView === 'evidence-expansion' && <EvidenceExpansionPage focusId={focusId} />}
    {activeView === 'source-coverage-qa' && <SourceCoverageQAPage focusId={focusId} />}
    {activeView === 'source-review-prep' && <SourceReviewPrepPage focusId={focusId} />}
    {activeView === 'source-review-execution' && <SourceReviewExecutionPage focusId={focusId} />}
    {activeView === 'course-evidence' && <CourseEvidencePage focusId={focusId} />}
    {activeView === 'source-intake' && <SourceIntakePage focusId={focusId} />}
    {activeView === 'intake-coverage-map' && <IntakeCoverageMapPage focusId={focusId} />}
    {activeView === 'source-decision-board' && <SourceDecisionBoardPage focusId={focusId} />}
    {activeView === 'knowledge-library' && !activeAssetId && <KnowledgeLibraryPage onOpenAsset={openAsset} assetProgress={assetProgress} />}
    {activeView === 'knowledge-library' && activeAssetId && <KnowledgeAssetDetailPage assetId={activeAssetId} onBack={() => setActiveAssetId(null)} onOpenAsset={openAsset} assetProgress={assetProgress} />}
    {activeView === 'study-paths' && <StudyPathsPage assetProgress={assetProgress} onOpenAsset={openAsset} pathPrefs={pathPrefs} />}
    {activeView === 'learning-session' && <LearningSessionPage assetProgress={assetProgress} pathPrefs={pathPrefs} onOpenAsset={openAsset} onNavigate={changeView} />}
    {activeView === 'knowledge-factory' && <KnowledgeFactoryPage focusId={focusId} />}
    {activeView === 'data-science' && <DataScienceOperatingSystemPage />}
    {activeView === 'business-os' && <BusinessOperatingSystemPage />}
    {activeView === 'ml-models' && <MlModelsPage />}
    {activeView === 'ml-graph-atlas' && <MlGraphAtlasPage />}
    {activeView === 'professional-scenarios' && <ProfessionalScenariosPage />}
    {activeView === 'decision-playbooks' && <DecisionPlaybooksPage />}
    {activeView === 'banking-finance' && <CoreAreaPage area="Banking & Finance" onNavigate={changeView} />}
    {activeView === 'credit-risk' && <CreditRiskPage />}
    {activeView === 'output-atlas' && <OutputAtlasPage focusId={focusId} />}
    {activeView === 'formula-library' && <ReferencePage type="formulas" query={query} focusId={focusId} />}
    {activeView === 'model-library' && <ReferencePage type="models" query={query} focusId={focusId} />}
    {activeView === 'business-cases' && <BusinessCasesPage focusId={focusId} />}
    {activeView === 'knowledge-map' && <KnowledgeMapPage />}
    {activeView === 'quality-review' && <QualityReviewPage />}
  </main></div></div>)
}
