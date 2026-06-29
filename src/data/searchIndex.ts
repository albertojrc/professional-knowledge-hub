import { knowledgeAssetRegistry } from './knowledgeAssetRegistry'
import { outputAtlas, formulas, models, businessCases } from './knowledge'
import { extraOutputAtlas, extraModels } from './phase3Knowledge'
import { sprint25Outputs, sprint25Formulas } from './referenceExpansionSprint25'
import { phase4Formulas } from './formulasPhase4'
import { phase4OutputAtlas } from './outputAtlasPhase4'
import { sprint26BusinessCases } from './businessCasesSprint26'
import { phase4BusinessCases } from './businessCasesPhase4'
import { phase4Models } from './modelsPhase4'
import { expansionBacklog } from './assetExpansionSystem'
import { studyPaths } from './studyPaths'
import { materialRecords } from './materialInventory'
import { courseAreaMapRecords, topicClusters } from './courseAreaMapping'
import { evidenceExpansionCandidates } from './evidenceExpansion'
import { sourceCoverageRecords } from './sourceCoverageQA'
import { sourceReviewItems } from './sourceReviewPrep'
import { sourceExecutionRecords } from './sourceReviewExecution'
import { sourceGovernanceSearchEntries } from './sourceGovernanceSearch'
import { studyModuleSearchEntries } from './studyModuleSearch'
import { certificationSearchEntries } from './certificationSearch'
import { cfaFoundationsSearchEntries } from './cfaFoundationsSearch'
import { cfaInvestmentSearchEntries } from './cfaInvestmentSearch'
import { bloombergSearchEntries } from './bloombergSearch'
import { studyDrillSearchEntries } from './studyDrillSearch'
import { capstoneSearchEntries } from './capstoneSearch'
import { portfolioSearchEntries } from './portfolioSearch'
import { interviewSearchEntries } from './interviewSearch'
import { roleReadinessSearchEntries } from './roleReadinessSearch'
import { bankingCreditRiskSearchEntries } from './bankingCreditRiskSearch'
import { dataScienceAnalyticsSearchEntries } from './dataScienceAnalyticsSearch'
import { financeValuationSearchEntries } from './financeValuationSearch'
import { economicsSearchEntries } from './economicsSearch'
import { managementSearchEntries } from './managementSearch'
import { toolsSearchEntries } from './toolsSearch'
export type SearchResultKind = 'Knowledge Asset' | 'Study Module' | 'Study Lesson' | 'Certification Track' | 'Certification Lesson' | 'Practice Drill' | 'Capstone Project' | 'Portfolio Item' | 'Interview Prompt' | 'Career Role' | 'Material' | 'Course Area' | 'Topic Cluster' | 'Evidence Candidate' | 'Source Coverage' | 'Source Review' | 'Source Execution' | 'Governance Page' | 'Output' | 'Formula' | 'Model' | 'Business Case' | 'Backlog Item' | 'Study Path'
export interface SearchResultItem { id: string; title: string; kind: SearchResultKind; area: string; category: string; summary: string; tags: string[]; targetView: 'study-modules' | 'data-science-analytics-study' | 'finance-valuation-study' | 'economics-markets-study' | 'management-strategy-study' | 'tools-platforms-study' | 'practice-engine' | 'capstone-projects' | 'portfolio-builder' | 'interview-prep' | 'role-readiness' | 'banking-credit-risk-study' | 'professional-certifications' | 'knowledge-library' | 'material-inventory' | 'course-area-map' | 'evidence-expansion' | 'source-coverage-qa' | 'source-review-prep' | 'source-review-execution' | 'source-command-center' | 'academic-review-workspace' | 'academic-file-registry' | 'phase-2-handoff' | 'route-qa' | 'source-governance-summary' | 'source-pack-guide' | 'source-batch-planner' | 'review-form-template' | 'review-result-registry' | 'promotion-queue' | 'controlled-update-log' | 'study-paths' | 'output-atlas' | 'formula-library' | 'model-library' | 'business-cases' | 'knowledge-factory'; assetId?: string }
const allOutputs = [...outputAtlas, ...extraOutputAtlas, ...sprint25Outputs, ...phase4OutputAtlas]
const allFormulas = [...formulas, ...sprint25Formulas, ...phase4Formulas]
const allModels = [...models, ...extraModels, ...phase4Models]
const allBusinessCases = [...businessCases, ...sprint26BusinessCases, ...phase4BusinessCases]
export const globalSearchIndex: SearchResultItem[] = [
  ...studyModuleSearchEntries,
  ...dataScienceAnalyticsSearchEntries,
  ...financeValuationSearchEntries,
  ...economicsSearchEntries,
  ...managementSearchEntries,
  ...toolsSearchEntries,
  ...bankingCreditRiskSearchEntries,
  ...certificationSearchEntries,
  ...cfaFoundationsSearchEntries,
  ...cfaInvestmentSearchEntries,
  ...bloombergSearchEntries,
  ...studyDrillSearchEntries,
  ...capstoneSearchEntries,
  ...portfolioSearchEntries,
  ...interviewSearchEntries,
  ...roleReadinessSearchEntries,
  ...sourceGovernanceSearchEntries,
  ...knowledgeAssetRegistry.map((asset) => ({ id: asset.id, title: asset.title, kind: 'Knowledge Asset' as const, area: asset.area, category: asset.category, summary: asset.summary, tags: [asset.type, asset.difficulty, ...asset.metrics, ...asset.outputs, ...asset.graphs, ...asset.businessApplications, ...asset.bankingApplications, ...asset.relatedAssets], targetView: 'knowledge-library' as const, assetId: asset.id })),
  ...materialRecords.map((material) => ({ id: material.id, title: material.title, kind: 'Material' as const, area: material.area, category: material.status, summary: material.description, tags: [material.program, material.materialType, material.locationLabel, material.priority, ...material.knownTopics, ...material.targetAssets, ...material.gapsToCheck], targetView: 'material-inventory' as const })),
  ...courseAreaMapRecords.map((record) => ({ id: record.id, title: record.title, kind: 'Course Area' as const, area: record.area, category: record.currentCoverage, summary: record.professionalPurpose, tags: [record.bankingRelevance, record.dataRelevance, record.targetCoverage, ...record.programs, ...record.sourceModuleIds, ...record.keyTopics, ...record.existingAssets, ...record.recommendedAssets, ...record.sourceGaps], targetView: 'course-area-map' as const })),
  ...topicClusters.map((cluster) => ({ id: cluster.id, title: cluster.title, kind: 'Topic Cluster' as const, area: cluster.area, category: 'Topic Cluster', summary: cluster.description, tags: [...cluster.topics, ...cluster.connectedAssets, ...cluster.professionalOutputs, ...cluster.businessDecisions], targetView: 'course-area-map' as const })),
  ...evidenceExpansionCandidates.map((candidate) => ({ id: candidate.id, title: candidate.title, kind: 'Evidence Candidate' as const, area: candidate.area, category: candidate.status, summary: candidate.whyItMatters, tags: [candidate.assetId, candidate.program, ...candidate.linkedModuleIds, ...candidate.linkedMaterialIds, ...candidate.expectedEvidence, ...candidate.validationQuestions, candidate.nextAction], targetView: 'evidence-expansion' as const })),
  ...sourceCoverageRecords.map((record) => ({ id: record.id, title: record.title, kind: 'Source Coverage' as const, area: record.area, category: record.status, summary: record.nextAction, tags: [record.objectType, record.risk, ...record.linkedMaterials, ...record.linkedModules, ...record.linkedObjects, ...record.evidenceAvailable, ...record.gaps], targetView: 'source-coverage-qa' as const })),
  ...sourceReviewItems.map((item) => ({ id: item.id, title: item.title, kind: 'Source Review' as const, area: item.targetAreas[0] ?? 'Source', category: item.priority, summary: item.nextAction, tags: [item.sourceType, item.status, item.sourceLocation, ...item.expectedPrograms, ...item.expectedModules, ...item.targetAreas, ...item.targetAssets, ...item.targetOutputs, ...item.targetCases, ...item.reviewQuestions], targetView: 'source-review-prep' as const })),
  ...sourceExecutionRecords.map((record) => ({ id: record.id, title: record.title, kind: 'Source Execution' as const, area: 'Source QA', category: record.status, summary: record.coverageUpdate, tags: [record.reviewedSource, record.decision, ...record.evidenceFound, ...record.evidenceLimits, ...record.affectedHubObjects, record.nextAction], targetView: 'source-review-execution' as const })),
  ...studyPaths.map((path) => ({ id: path.id, title: path.title, kind: 'Study Path' as const, area: 'Learning Path', category: path.level, summary: path.professionalOutcome, tags: [path.subtitle, path.targetRole, path.duration, ...path.assetIds, ...(path.moduleSequence ?? []).flatMap((step) => [step.title, step.viewId, step.whyItMatters]), ...(path.outputPortfolio ?? []), ...(path.practiceAgenda ?? []), ...(path.successCriteria ?? []), ...path.milestones.flatMap((milestone) => [milestone.title, milestone.description, ...milestone.assetIds])], targetView: 'study-paths' as const })),
  ...allOutputs.map((output) => ({ id: output.id, title: output.title, kind: 'Output' as const, area: output.category === 'Finance' ? 'Finance' : 'Data Science', category: output.category, summary: output.whatItIs, tags: [...output.usedIn, ...output.relatedConcepts, ...output.relatedCases], targetView: 'output-atlas' as const })),
  ...allFormulas.map((formula) => ({ id: formula.id, title: formula.title, kind: 'Formula' as const, area: formula.area, category: 'Formula Library', summary: formula.interpretation, tags: [formula.formula, formula.variables, formula.professionalUse, ...formula.relatedItems], targetView: 'formula-library' as const })),
  ...allModels.map((model) => ({ id: model.id, title: model.title, kind: 'Model' as const, area: 'Data Science', category: model.family, summary: model.objective, tags: [model.inputs, model.outputs, model.interpretation, model.goodResult, model.badResult, ...model.applications], targetView: 'model-library' as const })),
  ...allBusinessCases.map((businessCase) => ({ id: businessCase.id, title: businessCase.title, kind: 'Business Case' as const, area: businessCase.area, category: 'Business Case', summary: businessCase.businessQuestion, tags: [...businessCase.dataRequired, ...businessCase.workflow, ...businessCase.tools, ...businessCase.outputs, businessCase.decision, ...businessCase.relatedModules], targetView: 'business-cases' as const })),
  ...expansionBacklog.map((item) => ({ id: item.id, title: item.title, kind: 'Backlog Item' as const, area: item.area, category: item.category, summary: item.whyItMatters, tags: [item.type, item.priority, item.status, ...item.sourcePlan, ...item.relatedAssets], targetView: 'knowledge-factory' as const }))
]
export function searchKnowledge(query: string, filters: { kind?: string; area?: string; category?: string } = {}) { const normalizedQuery = query.trim().toLowerCase(); return globalSearchIndex.filter((item) => { const matchesKind = !filters.kind || filters.kind === 'All' || item.kind === filters.kind; const matchesArea = !filters.area || filters.area === 'All' || item.area === filters.area; const matchesCategory = !filters.category || filters.category === 'All' || item.category === filters.category; if (!matchesKind || !matchesArea || !matchesCategory) return false; if (!normalizedQuery) return true; const haystack = `${item.title} ${item.kind} ${item.area} ${item.category} ${item.summary} ${item.tags.join(' ')}`.toLowerCase(); return haystack.includes(normalizedQuery) }).sort((a, b) => { if (!normalizedQuery) return a.title.localeCompare(b.title); const aTitle = a.title.toLowerCase().includes(normalizedQuery) ? 0 : 1; const bTitle = b.title.toLowerCase().includes(normalizedQuery) ? 0 : 1; return aTitle - bTitle || a.title.localeCompare(b.title) }) }
export const searchKinds = ['All', ...Array.from(new Set(globalSearchIndex.map((item) => item.kind)))]
export const searchAreas = ['All', ...Array.from(new Set(globalSearchIndex.map((item) => item.area)))]
export const searchCategories = ['All', ...Array.from(new Set(globalSearchIndex.map((item) => item.category)))]
