import type { CourseAreaMapRecord, CoverageMatrixRow, TopicClusterRecord } from '../types/courseAreaMapping'

export const courseAreaMapRecords: CourseAreaMapRecord[] = [
  {
    id: 'area-data-science',
    area: 'Data Science',
    title: 'Data Science Workflow',
    professionalPurpose: 'Translate business questions into data, features, models, outputs and decisions.',
    bankingRelevance: 'Core',
    dataRelevance: 'Core',
    currentCoverage: 'Medium',
    targetCoverage: 'High',
    programs: ['Master in Big Data / Data Science'],
    sourceModuleIds: ['mbd-data-science'],
    keyTopics: ['EDA', 'Feature Engineering', 'Train/Test Split', 'Cross Validation', 'Data Leakage', 'Model Evaluation'],
    existingAssets: ['eda', 'feature-engineering', 'train-test-split', 'cross-validation', 'data-leakage'],
    recommendedAssets: ['data-quality', 'analytical-base-table', 'data-dictionary', 'target-definition'],
    sourceGaps: ['Confirm notebooks and assignments', 'Identify course-specific project workflow', 'Map all evaluation outputs']
  },
  {
    id: 'area-machine-learning',
    area: 'Machine Learning',
    title: 'Machine Learning Models & Interpretation',
    professionalPurpose: 'Understand model families, outputs, validation, explainability and monitoring.',
    bankingRelevance: 'Core',
    dataRelevance: 'Core',
    currentCoverage: 'Medium',
    targetCoverage: 'High',
    programs: ['Master in Big Data / Data Science'],
    sourceModuleIds: ['mbd-data-science'],
    keyTopics: ['Logistic Regression', 'Decision Trees', 'Random Forest', 'XGBoost', 'Calibration', 'MLOps Monitoring'],
    existingAssets: ['logistic-regression', 'decision-tree', 'random-forest', 'xgboost', 'calibration-plot', 'mlops-monitoring'],
    recommendedAssets: ['knn', 'svm', 'naive-bayes', 'model-explainability', 'model-risk-management'],
    sourceGaps: ['Confirm algorithms covered in class', 'Map model outputs from assignments', 'Add governance notes if covered']
  },
  {
    id: 'area-sql-databases',
    area: 'SQL / Databases',
    title: 'SQL, Databases & Analytical Base Tables',
    professionalPurpose: 'Build the data foundation for analytics projects, dashboards and model-ready datasets.',
    bankingRelevance: 'Core',
    dataRelevance: 'Core',
    currentCoverage: 'Low',
    targetCoverage: 'High',
    programs: ['Master in Big Data / Data Science'],
    sourceModuleIds: ['mbd-data-engineering-bi'],
    keyTopics: ['SQL Joins', 'Aggregations', 'Window Functions', 'Data Quality', 'Analytical Base Table', 'MongoDB'],
    existingAssets: ['data-leakage', 'eda'],
    recommendedAssets: ['sql-joins', 'sql-window-functions', 'analytical-base-table', 'mongodb-query-output', 'data-quality-report'],
    sourceGaps: ['List SQL files and exercises', 'Extract query patterns', 'Map database outputs to Output Atlas']
  },
  {
    id: 'area-banking',
    area: 'Banking',
    title: 'Banking & Risk Analytics',
    professionalPurpose: 'Connect credit risk, fraud, AML, portfolio monitoring and banking decisions.',
    bankingRelevance: 'Core',
    dataRelevance: 'Core',
    currentCoverage: 'Medium',
    targetCoverage: 'High',
    programs: ['Cross-Program', 'Master in Big Data / Data Science'],
    sourceModuleIds: ['banking-analytics', 'mbd-data-science'],
    keyTopics: ['Credit Scoring', 'PD', 'LGD', 'EAD', 'Expected Loss', 'Fraud Detection', 'AML/KYC'],
    existingAssets: ['credit-risk-scoring', 'pd', 'lgd', 'ead', 'expected-loss', 'ks-statistic'],
    recommendedAssets: ['fraud-detection', 'aml-kyc', 'ifrs9', 'scorecard-monitoring', 'risk-appetite'],
    sourceGaps: ['Confirm banking cases in materials', 'Extract risk formulas from class notes', 'Map all banking cases into business playbooks']
  },
  {
    id: 'area-finance',
    area: 'Finance',
    title: 'Finance, Valuation & Corporate Decisions',
    professionalPurpose: 'Use financial formulas and valuation logic to support investment, credit and strategy decisions.',
    bankingRelevance: 'Core',
    dataRelevance: 'Important',
    currentCoverage: 'Medium',
    targetCoverage: 'High',
    programs: ['Master in Management'],
    sourceModuleIds: ['mim-finance-economics'],
    keyTopics: ['WACC', 'CAPM', 'NPV', 'Cash Flow', 'Financial Ratios', 'Valuation'],
    existingAssets: ['wacc', 'capm', 'npv'],
    recommendedAssets: ['financial-ratios', 'cash-flow-analysis', 'dcf-valuation', 'interest-coverage', 'working-capital'],
    sourceGaps: ['Extract finance exercises', 'Map formulas to Formula Library', 'Add interpretation of financial tables']
  },
  {
    id: 'area-economics',
    area: 'Economics',
    title: 'Economics & Macro Context',
    professionalPurpose: 'Translate macroeconomic indicators and economic logic into business and banking implications.',
    bankingRelevance: 'Important',
    dataRelevance: 'Supporting',
    currentCoverage: 'Low',
    targetCoverage: 'Medium',
    programs: ['Master in Management'],
    sourceModuleIds: ['mim-finance-economics'],
    keyTopics: ['GDP', 'Inflation', 'Interest Rates', 'Exchange Rates', 'Business Cycle', 'Monetary Policy'],
    existingAssets: [],
    recommendedAssets: ['macro-scenario-analysis', 'interest-rate-risk', 'inflation-impact', 'business-cycle', 'gdp-components'],
    sourceGaps: ['Identify economics slides', 'Extract formulas and graphs', 'Connect macro topics to credit and banking decisions']
  },
  {
    id: 'area-management-strategy',
    area: 'Strategy',
    title: 'Management, Strategy & Business Models',
    professionalPurpose: 'Structure business diagnosis using strategy frameworks and translate findings into decisions.',
    bankingRelevance: 'Important',
    dataRelevance: 'Supporting',
    currentCoverage: 'Medium',
    targetCoverage: 'High',
    programs: ['Master in Management'],
    sourceModuleIds: ['mim-strategy-management'],
    keyTopics: ['SWOT', 'PESTEL', 'Porter Five Forces', 'Business Model Canvas', 'Competitive Advantage'],
    existingAssets: ['swot', 'pestel', 'porter-five-forces', 'business-model-canvas'],
    recommendedAssets: ['competitive-advantage', 'value-chain', 'balanced-scorecard', 'okrs'],
    sourceGaps: ['Map case studies', 'Extract frameworks from slides', 'Connect strategy outputs to business case library']
  },
  {
    id: 'area-marketing',
    area: 'Marketing',
    title: 'Marketing Analytics & Experimentation',
    professionalPurpose: 'Connect campaigns, segmentation, conversion and experiments to measurable business impact.',
    bankingRelevance: 'Important',
    dataRelevance: 'Important',
    currentCoverage: 'Low',
    targetCoverage: 'Medium',
    programs: ['Master in Management', 'Master in Big Data / Data Science'],
    sourceModuleIds: ['mim-strategy-management', 'mbd-data-science'],
    keyTopics: ['Segmentation', 'A/B Testing', 'Marketing ROI', 'Conversion Rate', 'Customer Lifetime Value'],
    existingAssets: ['ab-testing'],
    recommendedAssets: ['marketing-roi', 'customer-segmentation', 'clv', 'campaign-attribution', 'uplift-modeling'],
    sourceGaps: ['Identify marketing materials', 'Extract analytics cases', 'Map campaign outputs']
  },
  {
    id: 'area-operations',
    area: 'Operations',
    title: 'Operations & Performance Management',
    professionalPurpose: 'Analyze process performance, capacity, efficiency and operational improvement opportunities.',
    bankingRelevance: 'Supporting',
    dataRelevance: 'Important',
    currentCoverage: 'Low',
    targetCoverage: 'Medium',
    programs: ['Master in Management'],
    sourceModuleIds: ['mim-strategy-management'],
    keyTopics: ['Capacity', 'Bottlenecks', 'Process KPIs', 'Operational Efficiency', 'Service Level'],
    existingAssets: [],
    recommendedAssets: ['capacity-utilization', 'process-bottleneck', 'service-level', 'operations-dashboard'],
    sourceGaps: ['Confirm operations course materials', 'Extract process cases', 'Map operations outputs to dashboard cards']
  }
]

export const topicClusters: TopicClusterRecord[] = [
  {
    id: 'cluster-risk-model-validation',
    title: 'Risk Model Validation',
    area: 'Banking',
    description: 'Model evaluation topics used to validate credit, fraud and banking risk models.',
    topics: ['ROC', 'Precision-Recall', 'Calibration', 'KS', 'Lift', 'Expected Loss'],
    connectedAssets: ['roc-curve', 'precision-recall-curve', 'calibration-plot', 'ks-statistic', 'lift-curve', 'expected-loss'],
    professionalOutputs: ['Validation report', 'Score band table', 'Calibration table', 'Risk policy recommendation'],
    businessDecisions: ['Approve model', 'Adjust cutoff', 'Recalibrate probabilities', 'Monitor portfolio drift']
  },
  {
    id: 'cluster-data-preparation',
    title: 'Data Preparation & Feature Logic',
    area: 'Data Science',
    description: 'Topics that transform raw data into model-ready and decision-ready datasets.',
    topics: ['Data Quality', 'EDA', 'Feature Engineering', 'Data Leakage', 'Train/Test Split'],
    connectedAssets: ['eda', 'feature-engineering', 'data-leakage', 'train-test-split'],
    professionalOutputs: ['Data quality report', 'Feature list', 'ABT', 'Leakage review'],
    businessDecisions: ['Trust data', 'Exclude variables', 'Proceed to modeling', 'Redesign data pipeline']
  },
  {
    id: 'cluster-finance-strategy',
    title: 'Finance & Strategy Decision Logic',
    area: 'Finance',
    description: 'Topics connecting valuation, capital cost and strategy diagnosis.',
    topics: ['WACC', 'CAPM', 'NPV', 'SWOT', 'PESTEL', 'Business Model Canvas'],
    connectedAssets: ['wacc', 'capm', 'npv', 'swot', 'pestel', 'business-model-canvas'],
    professionalOutputs: ['Valuation table', 'Investment recommendation', 'Strategic diagnosis', 'Scenario memo'],
    businessDecisions: ['Invest', 'Reject', 'Reprice', 'Restructure strategy', 'Prioritize initiative']
  }
]

export const coverageMatrixRows: CoverageMatrixRow[] = [
  {
    id: 'coverage-mbd-data-science',
    moduleId: 'mbd-data-science',
    moduleTitle: 'Data Science & Machine Learning',
    area: 'Data Science',
    program: 'Master in Big Data / Data Science',
    mappingStatus: 'Inventory pending',
    sourceEvidence: ['Expected slides', 'Expected notebooks', 'Expected assignments'],
    nextAction: 'Inspect source files and map exact algorithms, outputs and assignments.'
  },
  {
    id: 'coverage-mbd-sql-bi',
    moduleId: 'mbd-data-engineering-bi',
    moduleTitle: 'SQL, Big Data & BI',
    area: 'SQL / Databases',
    program: 'Master in Big Data / Data Science',
    mappingStatus: 'Inventory pending',
    sourceEvidence: ['Expected SQL scripts', 'Expected dashboards', 'Expected database notes'],
    nextAction: 'Extract SQL topics, query outputs and BI dashboard examples.'
  },
  {
    id: 'coverage-mim-finance',
    moduleId: 'mim-finance-economics',
    moduleTitle: 'Finance & Economics',
    area: 'Finance',
    program: 'Master in Management',
    mappingStatus: 'Inventory pending',
    sourceEvidence: ['Expected finance slides', 'Expected exercises', 'Expected cases'],
    nextAction: 'Map formulas, financial tables, macro topics and valuation cases.'
  },
  {
    id: 'coverage-mim-strategy',
    moduleId: 'mim-strategy-management',
    moduleTitle: 'Strategy & Management',
    area: 'Strategy',
    program: 'Master in Management',
    mappingStatus: 'Inventory pending',
    sourceEvidence: ['Expected strategy slides', 'Expected case studies', 'Expected management frameworks'],
    nextAction: 'Map frameworks and business cases to Knowledge Assets and Business Case Library.'
  },
  {
    id: 'coverage-banking-risk',
    moduleId: 'banking-analytics',
    moduleTitle: 'Banking & Risk Analytics',
    area: 'Banking',
    program: 'Cross-Program',
    mappingStatus: 'Inventory pending',
    sourceEvidence: ['Expected banking cases', 'Expected risk formulas', 'Expected analytics projects'],
    nextAction: 'Map credit risk, fraud, AML/KYC and expected loss workflows.'
  }
]
