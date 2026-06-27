import type { CourseModuleRecord, MappingTemplateStep, MaterialRecord } from '../types/materialInventory'

export const materialRecords: MaterialRecord[] = [
  {
    id: 'degree-references-index',
    title: 'degree_references / index.html',
    program: 'Project Reference',
    area: 'Analytics / BI',
    materialType: 'HTML',
    locationLabel: 'Google Drive · degree_references',
    link: 'https://drive.google.com/file/d/1RAsgfGrbhFizl2xotOcEXQXfY3Z42hpg/view?usp=drivesdk',
    status: 'Inventory pending',
    priority: 'P0',
    description: 'Existing HTML reference file from the configured project folder. It should be inspected and mapped before being used as class-backed coverage.',
    knownTopics: ['Existing hub reference', 'HTML structure', 'Project baseline'],
    targetAssets: ['source-inventory-system', 'knowledge-hub-reference'],
    gapsToCheck: ['Confirm exact topics covered', 'Identify reusable sections', 'Detect duplicated content versus current React app']
  },
  {
    id: 'degree-references-readme',
    title: 'degree_references / README.md',
    program: 'Project Reference',
    area: 'Analytics / BI',
    materialType: 'Markdown',
    locationLabel: 'Google Drive · degree_references',
    link: 'https://drive.google.com/file/d/1Ei69P8E7tp9DT2elu5THBj25d25m9tJC/view?usp=drivesdk',
    status: 'Inventory pending',
    priority: 'P0',
    description: 'Reference README associated with the earlier project material. It should be used to confirm architecture assumptions and legacy content coverage.',
    knownTopics: ['Project notes', 'Architecture reference', 'Legacy documentation'],
    targetAssets: ['source-inventory-system', 'sprint-1-final-review'],
    gapsToCheck: ['Confirm whether it contains course content', 'Extract architecture notes only if relevant', 'Separate legacy instructions from class material']
  },
  {
    id: 'dual-degree-folder',
    title: "Dual Degree MIM + MBD'S",
    program: 'Cross-Program',
    area: 'Unknown',
    materialType: 'Folder',
    locationLabel: 'Google Drive · dual degree folder',
    link: 'https://drive.google.com/drive/folders/130z2MUtJcRKTNpCmNJw6TEOUz2gEdUIE',
    status: 'Not inventoried',
    priority: 'P0',
    description: 'Main folder expected to contain materials from the Master in Management and Master in Big Data / Data Science. This is the key source set for Sprint 2.',
    knownTopics: ['Management', 'Big Data', 'Data Science', 'Finance', 'Economics', 'Analytics'],
    targetAssets: ['course-area-map', 'source-based-knowledge-assets', 'knowledge-graph-upgrade'],
    gapsToCheck: ['List all files and subfolders', 'Separate MIM from MBD materials', 'Identify course names', 'Identify assignments, slides, notes and datasets']
  }
]

export const courseModules: CourseModuleRecord[] = [
  {
    id: 'mim-strategy-management',
    title: 'Strategy & Management',
    program: 'Master in Management',
    area: 'Strategy',
    purpose: 'Consolidate frameworks for business diagnosis, competitive analysis and management decisions.',
    expectedMaterials: ['Slides', 'Case studies', 'Class notes', 'Assignments'],
    expectedAssets: ['SWOT', 'PESTEL', 'Porter Five Forces', 'Business Model Canvas', 'Competitive Advantage'],
    mappingStatus: 'Inventory pending'
  },
  {
    id: 'mim-finance-economics',
    title: 'Finance & Economics',
    program: 'Master in Management',
    area: 'Finance',
    purpose: 'Map finance, valuation, macroeconomic and decision-making concepts into formulas, cases and interpretation guides.',
    expectedMaterials: ['Slides', 'Exercises', 'Financial models', 'Case studies'],
    expectedAssets: ['WACC', 'CAPM', 'NPV', 'Financial Ratios', 'Macroeconomic Scenarios'],
    mappingStatus: 'Inventory pending'
  },
  {
    id: 'mbd-data-science',
    title: 'Data Science & Machine Learning',
    program: 'Master in Big Data / Data Science',
    area: 'Data Science',
    purpose: 'Map analytics workflows, machine learning models, outputs, evaluation and professional deployment logic.',
    expectedMaterials: ['Slides', 'Notebooks', 'Assignments', 'Datasets', 'Project reports'],
    expectedAssets: ['EDA', 'Feature Engineering', 'Train/Test Split', 'Cross Validation', 'XGBoost', 'Model Evaluation'],
    mappingStatus: 'Inventory pending'
  },
  {
    id: 'mbd-data-engineering-bi',
    title: 'SQL, Big Data & BI',
    program: 'Master in Big Data / Data Science',
    area: 'SQL / Databases',
    purpose: 'Map data modeling, database querying, dashboards and analytical base table logic.',
    expectedMaterials: ['SQL scripts', 'Database notes', 'Dashboard files', 'BI assignments'],
    expectedAssets: ['SQL Joins', 'Analytical Base Table', 'Data Quality', 'Dashboard KPI Interpretation', 'MongoDB Query Output'],
    mappingStatus: 'Inventory pending'
  },
  {
    id: 'banking-analytics',
    title: 'Banking & Risk Analytics',
    program: 'Cross-Program',
    area: 'Banking',
    purpose: 'Connect banking, finance and data science into professional risk and decision workflows.',
    expectedMaterials: ['Banking cases', 'Risk exercises', 'Analytics projects', 'Finance notes'],
    expectedAssets: ['Credit Risk Scoring', 'PD', 'LGD', 'EAD', 'Expected Loss', 'Fraud Detection', 'AML/KYC'],
    mappingStatus: 'Inventory pending'
  }
]

export const mappingTemplateSteps: MappingTemplateStep[] = [
  {
    id: 'identify-material',
    title: 'Identify material',
    description: 'Record file name, program, course, type, location and likely professional area.',
    output: 'Material inventory row'
  },
  {
    id: 'extract-topics',
    title: 'Extract topics',
    description: 'List concepts, formulas, models, tools, outputs, cases and assignments present in the material.',
    output: 'Topic extraction list'
  },
  {
    id: 'classify-coverage',
    title: 'Classify coverage',
    description: 'Mark whether each topic is source-backed, duplicated, incomplete or recommended as complementary.',
    output: 'Coverage classification'
  },
  {
    id: 'map-assets',
    title: 'Map to assets',
    description: 'Connect topics to existing Knowledge Assets or create candidates for new assets.',
    output: 'Asset mapping table'
  },
  {
    id: 'connect-professional-use',
    title: 'Connect professional use',
    description: 'Link each topic to banking, finance, analytics, management or business decisions.',
    output: 'Professional relevance map'
  },
  {
    id: 'qa-source-coverage',
    title: 'QA source coverage',
    description: 'Confirm what is truly supported by class material and what remains a recommended gap.',
    output: 'Source coverage QA report'
  }
]
