import type { StudyModuleCard, StudyModuleHubSummary } from '../types/studyModule'

export const studyModuleCards: StudyModuleCard[] = [
  {
    id: 'module-data-science-analytics',
    title: 'Data Science & Analytics',
    priority: 'Core',
    status: 'Ready for source review',
    description: 'Core analytics workflow: data quality, ABT, feature engineering, model validation and graph analytics.',
    studyGoal: 'Build a professional analytics workflow from raw data to decision-ready insight.',
    sourceMaterials: ['Variance and KS Testing', 'LC Data Dictionary', 'Graph Algorithms', 'Spark Graph Concepts'],
    learningObjects: ['data-quality-foundations', 'analytical-base-table-workflow', 'feature-engineering-for-risk', 'model-validation-ks-variance', 'graph-analytics-foundations'],
    formulas: ['missing-rate', 'join-match-rate', 'ks-statistic', 'variance-test'],
    outputs: ['data quality report', 'ABT schema', 'feature dictionary', 'KS curve', 'network graph'],
    cases: ['credit-scoring-abt', 'sql-customer-360-case', 'fraud-detection'],
    practice: ['interpret model validation outputs', 'map variables into an ABT', 'explain data quality risks', 'describe graph analytics use cases'],
    linkedViews: ['data-science-analytics-study', 'data-science', 'academic-file-registry', 'output-atlas', 'formula-library']
  },
  {
    id: 'module-banking-credit-risk',
    title: 'Banking & Credit Risk',
    priority: 'Core',
    status: 'Ready for source review',
    description: 'Credit scoring, PD/LGD/EAD, expected loss, banking decisions and credit risk model interpretation.',
    studyGoal: 'Understand how banks use data and models to approve, reject, price and monitor credit risk.',
    sourceMaterials: ['RetailCreditScoring', 'Credit Scoring and Best Practices in Banking', 'Risk and Fraud Analytics Syllabus'],
    learningObjects: ['credit-scoring-foundations', 'pd-lgd-ead-expected-loss', 'credit-model-validation', 'lending-data-abt', 'credit-decision-policy'],
    formulas: ['expected-loss', 'pd', 'lgd', 'ead', 'ks-statistic'],
    outputs: ['calibration-plot', 'classification-report', 'lift-curve', 'ks-statistic', 'score band table'],
    cases: ['credit-risk-data-quality-review', 'credit-scoring-abt', 'cash-flow-credit-approval'],
    practice: ['explain a credit scoring decision', 'interpret model ranking', 'design a score-band policy'],
    linkedViews: ['banking-credit-risk-study', 'credit-risk', 'academic-file-registry', 'business-cases']
  },
  {
    id: 'module-finance-valuation',
    title: 'Finance & Valuation',
    priority: 'Core',
    status: 'Needs content expansion',
    description: 'Financial statements, ratios, cash flow, valuation, WACC, CAPM, NPV and business decision analysis.',
    studyGoal: 'Turn financial data into investment, lending and valuation decisions.',
    sourceMaterials: ['Finance slides and Excel models pending review'],
    learningObjects: ['financial-ratios', 'cash-flow-analysis', 'free-cash-flow', 'wacc', 'capm', 'npv'],
    formulas: ['free-cash-flow', 'current-ratio', 'wacc', 'capm', 'npv'],
    outputs: ['financial-ratio-table-output', 'cash-flow-bridge-output'],
    cases: ['sme-financial-ratio-review', 'cash-flow-credit-approval'],
    practice: ['interpret financial ratios', 'connect cash flow to credit approval', 'explain valuation assumptions'],
    linkedViews: ['formula-library', 'business-cases', 'output-atlas']
  },
  {
    id: 'module-economics-markets',
    title: 'Economics & Markets',
    priority: 'Core',
    status: 'Needs content expansion',
    description: 'Macroeconomic indicators, market cycles, monetary policy, inflation, rates and business implications.',
    studyGoal: 'Connect economic context to banking, finance, strategy and analytics decisions.',
    sourceMaterials: ['Economics and macro materials pending review'],
    learningObjects: ['macro-scenario-analysis', 'interest-rates', 'inflation', 'gdp', 'monetary-policy'],
    formulas: ['real-rate', 'growth-rate'],
    outputs: ['macro-scenario-table', 'economic-indicator-dashboard'],
    cases: ['macro-scenario-analysis'],
    practice: ['interpret macro scenarios', 'explain rate impacts', 'connect GDP/inflation to business risk'],
    linkedViews: ['business-os', 'business-cases', 'knowledge-map']
  },
  {
    id: 'module-management-strategy',
    title: 'Management & Strategy',
    priority: 'Core',
    status: 'Needs content expansion',
    description: 'Strategy frameworks, business models, operations, marketing, leadership and management decisions.',
    studyGoal: 'Translate business problems into structured strategic decisions.',
    sourceMaterials: ['MIM strategy and management materials pending review'],
    learningObjects: ['swot', 'pestel', 'business-model-canvas', 'porter-five-forces'],
    formulas: [],
    outputs: ['strategy-map', 'business-model-canvas-output'],
    cases: ['management-strategy-case'],
    practice: ['build SWOT', 'compare strategy options', 'connect analytics to management action'],
    linkedViews: ['business-os', 'professional-scenarios', 'decision-playbooks']
  },
  {
    id: 'module-tools-platforms',
    title: 'Tools & Platforms',
    priority: 'Reference',
    status: 'Active',
    description: 'SQL, Excel, Power BI, Python, Tableau, Bloomberg, dashboards and analytics workflows.',
    studyGoal: 'Develop practical tool fluency for analytics, banking and finance work.',
    sourceMaterials: ['SQL notebooks, dashboards and platform materials pending review'],
    learningObjects: ['sql-joins', 'excel-modeling', 'power-bi-dashboard', 'python-notebooks', 'bloomberg-terminal'],
    formulas: [],
    outputs: ['operations-dashboard', 'financial-dashboard', 'model-monitoring-dashboard'],
    cases: ['sql-customer-360-case', 'operations-dashboard'],
    practice: ['build a query', 'interpret a dashboard', 'document a workflow'],
    linkedViews: ['knowledge-library', 'output-atlas', 'academic-file-registry']
  },
  {
    id: 'module-professional-certifications',
    title: 'Professional Certifications',
    priority: 'Certification',
    status: 'Planned',
    description: 'Certification-oriented learning tracks such as CFA, Bloomberg Market Concepts and Bloomberg Finance Fundamentals.',
    studyGoal: 'Separate exam/certificate preparation from academic course modules while connecting overlapping concepts.',
    sourceMaterials: ['CFA, BMC and BFF curriculum references to be reviewed'],
    learningObjects: ['ethics', 'markets', 'fixed-income', 'equity', 'portfolio-management', 'bloomberg-functions'],
    formulas: ['time-value-of-money', 'bond-yield', 'portfolio-return'],
    outputs: ['market-monitor', 'economic-calendar', 'security-analysis-screen'],
    cases: ['investment-analysis-case', 'market-news-analysis'],
    practice: ['certificate-style quizzes', 'terminal workflows', 'market interpretation drills'],
    linkedViews: ['professional-certifications', 'study-paths', 'formula-library', 'model-library']
  }
]

export const studyModuleHubSummary: StudyModuleHubSummary = {
  total: studyModuleCards.length,
  core: studyModuleCards.filter((module) => module.priority === 'Core').length,
  readyForReview: studyModuleCards.filter((module) => module.status === 'Ready for source review').length,
  active: studyModuleCards.filter((module) => module.status === 'Active').length,
  planned: studyModuleCards.filter((module) => module.status === 'Planned').length
}
