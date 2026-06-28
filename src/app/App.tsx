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
const extraNav: NavItem[] = [
  { id: 'global-search', label: 'Global Search', eyebrow: 'Command Center', description: 'Search the Hub.', icon: 'SE' },
  { id: 'study-modules', label: 'Study Modules', eyebrow: 'Study', description: 'Main learning modules.', icon: 'SM' },
  { id: 'data-science-analytics-study', label: 'Data Science & Analytics Study', eyebrow: 'Study', description: 'Analytics study module.', icon: 'DA' },
  { id: 'finance-valuation-study', label: 'Finance & Valuation Study', eyebrow: 'Study', description: 'Finance and valuation module.', icon: 'FV' },
  { id: 'economics-markets-study', label: 'Economics & Markets Study', eyebrow: 'Study', description: 'Economics and market interpretation.', icon: 'EM' },
  { id: 'management-strategy-study', label: 'Management & Strategy Study', eyebrow: 'Study', description: 'Strategy and execution module.', icon: 'MS' },
  { id: 'professional-certifications', label: 'Professional Certifications', eyebrow: 'Study', description: 'CFA, BMC, BFF and Bloomberg workflows.', icon: 'PC' },
  { id: 'banking-credit-risk-study', label: 'Banking & Credit Risk Study', eyebrow: 'Study', description: 'Credit scoring study module.', icon: 'BR' },
  { id: 'source-command-center', label: 'Source Command Center', eyebrow: 'Evidence & QA', description: 'Executive source control.', icon: 'CC' },
  { id: 'academic-review-workspace', label: 'Academic Review Workspace', eyebrow: 'Evidence & QA', description: 'Phase 3 academic review.', icon: 'AR' },
  { id: 'academic-file-registry', label: 'Academic File Registry', eyebrow: 'Evidence & QA', description: 'Discovered academic files.', icon: 'AF' },
  { id: 'phase-2-handoff', label: 'Phase 2 Handoff', eyebrow: 'Evidence & QA', description: 'Governance closure and next phase.', icon: 'PH' },
  { id: 'route-qa', label: 'Route QA', eyebrow: 'Evidence & QA', description: 'Route and build readiness.', icon: 'RQ' },
  { id: 'source-governance-summary', label: 'Source Governance', eyebrow: 'Evidence & QA', description: 'Executive governance summary.', icon: 'SG' },
  { id: 'source-pack-guide', label: 'Source Pack Guide', eyebrow: 'Evidence & QA', description: 'Pack plan.', icon: 'PK' },
  { id: 'source-batch-planner', label: 'Source Batch Planner', eyebrow: 'Evidence & QA', description: 'Review batches.', icon: 'BP' },
  { id: 'review-form-template', label: 'Review Form Template', eyebrow: 'Evidence & QA', description: 'Standard review form.', icon: 'RF' },
  { id: 'review-result-registry', label: 'Review Result Registry', eyebrow: 'Evidence & QA', description: 'Review records.', icon: 'RR' },
  { id: 'promotion-queue', label: 'Promotion Queue', eyebrow: 'Evidence & QA', description: 'Controlled update proposals.', icon: 'PQ' },
  { id: 'controlled-update-log', label: 'Controlled Update Log', eyebrow: 'Evidence & QA', description: 'Update audit trail.', icon: 'UL' },
  { id: 'material-inventory', label: 'Material Inventory', eyebrow: 'Evidence & QA', description: 'Source inventory.', icon: 'MI' },
  { id: 'course-area-map', label: 'Course Area Map', eyebrow: 'Evidence & QA', description: 'Area mapping.', icon: 'CM' },
  { id: 'evidence-expansion', label: 'Evidence Expansion', eyebrow: 'Evidence & QA', description: 'Candidate queue.', icon: 'EV' },
  { id: 'source-coverage-qa', label: 'Source Coverage QA', eyebrow: 'Evidence & QA', description: 'Coverage audit.', icon: 'QA' },
  { id: 'source-review-prep', label: 'Source Review Prep', eyebrow: 'Evidence & QA', description: 'Review queue.', icon: 'SR' },
  { id: 'source-review-execution', label: 'Source Review Execution', eyebrow: 'Evidence & QA', description: 'Review results.', icon: 'EX' },
  { id: 'course-evidence', label: 'Course Evidence', eyebrow: 'Evidence & QA', description: 'Evidence extraction.', icon: 'CE' },
  { id: 'source-intake', label: 'Source Intake', eyebrow: 'Evidence & QA', description: 'Missing groups.', icon: 'IN' },
  { id: 'intake-coverage-map', label: 'Intake Coverage Map', eyebrow: 'Evidence & QA', description: 'Traceability map.', icon: 'IC' },
  { id: 'source-decision-board', label: 'Source Decision Board', eyebrow: 'Evidence & QA', description: 'Upgrade decisions.', icon: 'SD' },
  { id: 'knowledge-library', label: 'Knowledge Library', eyebrow: 'Study', description: 'Asset library.', icon: 'KB' },
  { id: 'study-paths', label: 'Study Paths', eyebrow: 'Study', description: 'Learning paths.', icon: 'SP' },
  { id: 'learning-session', label: 'Learning Session', eyebrow: 'Study', description: 'Focus mode.', icon: 'LS' },
  { id: 'knowledge-factory', label: 'Knowledge Factory', eyebrow: 'Evidence & QA', description: 'Expansion system.', icon: 'KF' },
  { id: 'business-os', label: 'Business OS', eyebrow: 'Core', description: 'Business operating system.', icon: 'BS' },
  { id: 'professional-scenarios', label: 'Professional Scenarios', eyebrow: 'Apply', description: 'Scenarios.', icon: 'SC' },
  { id: 'decision-playbooks', label: 'Decision Playbooks', eyebrow: 'Apply', description: 'Decision playbooks.', icon: 'DP' },
  { id: 'ml-models', label: 'ML Models', eyebrow: 'ML', description: 'Model library.', icon: 'ML' },
  { id: 'ml-graph-atlas', label: 'ML Graph Atlas', eyebrow: 'ML', description: 'Graph atlas.', icon: 'GA' }
]
const navCatalog: NavItem[] = [...navItems, ...extraNav]
export function App() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard')
  const [query, setQuery] = useState('')
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const [focusId, setFocusId] = useState<string | null>(null)
  const assetProgress = useAssetProgress()
  const pathPrefs = usePathPrefs()
  const activeItem = useMemo(() => navCatalog.find((item) => item.id === activeView) ?? navCatalog[0], [activeView])
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
    {activeView === 'professional-certifications' && <ProfessionalCertificationsPage focusId={focusId} />}
    {activeView === 'banking-credit-risk-study' && <BankingCreditRiskStudyPage focusId={focusId} />}
    {activeView === 'source-command-center' && <SourceCommandCenterPage />}
    {activeView === 'academic-review-workspace' && <AcademicReviewWorkspacePage focusId={focusId} />}
    {activeView === 'academic-file-registry' && <AcademicSourceRegistryPage focusId={focusId} />}
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
