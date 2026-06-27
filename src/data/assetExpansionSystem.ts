import type { ExpansionBacklogItem, ExpansionLane, QualityGate, SourceTier } from '../types/assetExpansion'

export const expansionLanes: ExpansionLane[] = [
  { id: 'data-science', area: 'Data Science', purpose: 'Core statistical, analytical and modeling concepts used across professional projects.', targetAssets: 80, currentAssets: 2, nextMilestone: 'Complete supervised learning foundation assets.' },
  { id: 'machine-learning', area: 'Machine Learning', purpose: 'Models, evaluation graphs, diagnostics and deployment logic.', targetAssets: 70, currentAssets: 8, nextMilestone: 'Add model families and graph interpretation assets.' },
  { id: 'banking', area: 'Banking', purpose: 'Risk, credit, fraud, AML, payments, lending and regulatory concepts.', targetAssets: 70, currentAssets: 1, nextMilestone: 'Build credit risk and fraud foundations.' },
  { id: 'finance', area: 'Finance', purpose: 'Corporate finance, valuation, banking analysis and investment decision concepts.', targetAssets: 55, currentAssets: 1, nextMilestone: 'Expand valuation and cost of capital assets.' },
  { id: 'management', area: 'Management', purpose: 'Strategy, operations, marketing, leadership and business frameworks.', targetAssets: 65, currentAssets: 1, nextMilestone: 'Build strategy and marketing framework foundation.' }
]

export const sourceTiers: SourceTier[] = [
  { tier: 'Tier 1', label: 'Master Material', useFor: 'Primary source for concepts explicitly covered in the MIM and Data Science masters.', examples: ['Class slides', 'Professor notes', 'Cases', 'Assignments', 'Official readings'] },
  { tier: 'Tier 2', label: 'Canonical References', useFor: 'Fill conceptual gaps with high-quality classic references.', examples: ['Textbooks', 'Official documentation', 'Recognized academic material', 'Standards'] },
  { tier: 'Tier 3', label: 'Industry Practice', useFor: 'Translate concepts into professional workflows and business applications.', examples: ['Banking use cases', 'Consulting frameworks', 'Model governance practices', 'Analytics playbooks'] },
  { tier: 'Tier 4', label: 'Generated Synthesis', useFor: 'Create structured summaries, examples, bridges and learning paths from validated knowledge.', examples: ['Concept maps', 'Decision playbooks', 'Project checklists', 'Interview prompts'] }
]

export const assetQualityGates: QualityGate[] = [
  { id: 'definition', title: 'Clear Definition', description: 'The asset explains what the concept is in professional language.', required: true },
  { id: 'use-moment', title: 'Exact Use Moment', description: 'The asset explains when it is used inside a project, analysis or business decision.', required: true },
  { id: 'workflow', title: 'Workflow', description: 'The asset explains how to apply it step by step.', required: true },
  { id: 'interpretation', title: 'Interpretation', description: 'The asset explains how to interpret metrics, outputs, assumptions or results.', required: true },
  { id: 'business', title: 'Business Application', description: 'The asset connects the concept to business, banking or management decisions.', required: true },
  { id: 'mistakes', title: 'Common Mistakes', description: 'The asset warns about misuse, weak assumptions or misleading interpretations.', required: true },
  { id: 'relationships', title: 'Related Assets', description: 'The asset is connected to other concepts, outputs, models or frameworks.', required: true },
  { id: 'source-strategy', title: 'Source Strategy', description: 'The asset states whether it comes from master material, references, industry practice or synthesis.', required: true }
]

export const expansionBacklog: ExpansionBacklogItem[] = [
  { id: 'decision-trees', title: 'Decision Trees', area: 'Machine Learning', category: 'Supervised Learning', type: 'Model', priority: 'P0', status: 'Backlog', whyItMatters: 'Core bridge between explainable rules and advanced ensemble models.', sourcePlan: ['Master ML material', 'scikit-learn documentation', 'model interpretation references'], relatedAssets: ['linear-regression', 'logistic-regression', 'random-forest'] },
  { id: 'random-forest', title: 'Random Forest', area: 'Machine Learning', category: 'Ensemble Models', type: 'Model', priority: 'P0', status: 'Backlog', whyItMatters: 'Important baseline for non-linear tabular prediction in business and banking.', sourcePlan: ['Master ML material', 'tree ensemble references', 'industry examples'], relatedAssets: ['decision-trees', 'feature-importance', 'credit-risk-scoring'] },
  { id: 'xgboost', title: 'XGBoost / Gradient Boosting', area: 'Machine Learning', category: 'Ensemble Models', type: 'Model', priority: 'P0', status: 'Backlog', whyItMatters: 'Professional-grade tabular model widely used for risk, fraud and propensity scoring.', sourcePlan: ['Master ML material', 'official docs', 'banking analytics examples'], relatedAssets: ['random-forest', 'shap-summary', 'calibration-plot'] },
  { id: 'confusion-matrix', title: 'Confusion Matrix', area: 'Data Science', category: 'Model Evaluation', type: 'Output', priority: 'P0', status: 'Backlog', whyItMatters: 'Turns classification outputs into operational error trade-offs.', sourcePlan: ['ML evaluation material', 'business cost examples'], relatedAssets: ['logistic-regression', 'precision', 'recall'] },
  { id: 'roc-curve', title: 'ROC Curve', area: 'Data Science', category: 'Model Evaluation', type: 'Output', priority: 'P0', status: 'Backlog', whyItMatters: 'Core model discrimination graph used before threshold decisions.', sourcePlan: ['ML evaluation material', 'classification references'], relatedAssets: ['auc', 'logistic-regression', 'credit-risk-scoring'] },
  { id: 'calibration-plot', title: 'Calibration Plot', area: 'Banking', category: 'Risk Modeling', type: 'Output', priority: 'P0', status: 'Backlog', whyItMatters: 'Essential for probability-based decisions such as PD, pricing and credit policy.', sourcePlan: ['Credit scoring material', 'risk model validation practice'], relatedAssets: ['logistic-regression', 'credit-risk-scoring', 'expected-loss'] },
  { id: 'expected-loss', title: 'Expected Loss', area: 'Banking', category: 'Credit Risk', type: 'Formula', priority: 'P0', status: 'Backlog', whyItMatters: 'Connects PD, LGD and EAD to financial risk and provisioning.', sourcePlan: ['Banking master material', 'credit risk references'], relatedAssets: ['credit-risk-scoring', 'pd', 'lgd', 'ead'] },
  { id: 'capm', title: 'CAPM', area: 'Finance', category: 'Cost of Equity', type: 'Formula', priority: 'P0', status: 'Backlog', whyItMatters: 'Core method for estimating cost of equity and valuation discount rates.', sourcePlan: ['Finance master material', 'corporate finance textbooks'], relatedAssets: ['wacc', 'beta', 'cost-of-equity'] },
  { id: 'npv', title: 'Net Present Value', area: 'Finance', category: 'Investment Decisions', type: 'Formula', priority: 'P0', status: 'Backlog', whyItMatters: 'Central rule for deciding whether a project creates value.', sourcePlan: ['Finance master material', 'valuation references'], relatedAssets: ['wacc', 'discount-rate', 'free-cash-flow'] },
  { id: 'swot', title: 'SWOT Analysis', area: 'Management', category: 'Strategy', type: 'Framework', priority: 'P1', status: 'Backlog', whyItMatters: 'Basic strategy tool for internal/external diagnosis.', sourcePlan: ['MIM strategy material', 'consulting practice'], relatedAssets: ['porter-five-forces', 'pestel', 'competitive-advantage'] },
  { id: 'pestel', title: 'PESTEL Analysis', area: 'Management', category: 'Strategy', type: 'Framework', priority: 'P1', status: 'Backlog', whyItMatters: 'Connects macro environment to strategy and risk.', sourcePlan: ['MIM strategy material', 'macro/business references'], relatedAssets: ['porter-five-forces', 'swot', 'macro-risk'] },
  { id: 'eda', title: 'Exploratory Data Analysis', area: 'Data Science', category: 'Project Workflow', type: 'Concept', priority: 'P0', status: 'Backlog', whyItMatters: 'The first serious diagnosis before modeling or dashboarding.', sourcePlan: ['Data science master material', 'analytics best practices'], relatedAssets: ['data-quality', 'feature-engineering', 'visualization'] },
  { id: 'feature-engineering', title: 'Feature Engineering', area: 'Data Science', category: 'Project Workflow', type: 'Concept', priority: 'P0', status: 'Backlog', whyItMatters: 'Often determines whether a model is useful or weak.', sourcePlan: ['Data science master material', 'industry ML practice'], relatedAssets: ['eda', 'model-selection', 'data-leakage'] },
  { id: 'ifrs9', title: 'IFRS 9 Expected Credit Loss', area: 'Banking', category: 'Regulation and Risk', type: 'Concept', priority: 'P1', status: 'Backlog', whyItMatters: 'Connects accounting, credit risk and forward-looking expected loss.', sourcePlan: ['Banking material', 'regulatory references', 'risk practice'], relatedAssets: ['expected-loss', 'pd', 'lgd', 'ead'] },
  { id: 'marketing-roi', title: 'Marketing ROI', area: 'Management', category: 'Marketing Analytics', type: 'Formula', priority: 'P1', status: 'Backlog', whyItMatters: 'Links marketing action to measurable business impact.', sourcePlan: ['Marketing master material', 'analytics practice'], relatedAssets: ['ab-testing', 'campaign-analytics', 'customer-segmentation'] }
]

export const assetTemplateSections = [
  'id, title, type, area, category, difficulty',
  'summary and learning goals',
  'what it is and why it matters',
  'when to use and how to use',
  'interpretation, outputs, graphs and metrics',
  'assumptions, mistakes and professional tip',
  'business applications and banking applications',
  'formula, example, Python or SQL when useful',
  'related assets and source strategy'
]
