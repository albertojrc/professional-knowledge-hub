export interface VisualSystemEntry {
  id: string
  label: string
  route: string
  layer: 'primary' | 'hidden-command' | 'deep-reference' | 'governance' | 'pending'
  component: string
  status: 'active' | 'prepared' | 'blocked'
  notes: string
}

export const visualSystemRegistry: VisualSystemEntry[] = [
  { id: 'home', label: 'Home Visual Dashboard', route: 'dashboard', layer: 'primary', component: 'DashboardPage', status: 'active', notes: 'Main launchpad for the five-module learning experience.' },
  { id: 'global-search', label: 'Global Search Visual Studio', route: 'global-search', layer: 'hidden-command', component: 'VisualSearchStudio', status: 'active', notes: 'Hidden command layer with capsule preview and exact route action.' },
  { id: 'data-science', label: 'Data Science Visual Studio', route: 'data-science-analytics-study', layer: 'primary', component: 'VisualModuleStudio', status: 'active', notes: 'Main module visual studio with restored search capsules.' },
  { id: 'banking-finance', label: 'Banking & Finance Visual Studio', route: 'banking-credit-risk-study', layer: 'primary', component: 'VisualModuleStudio', status: 'active', notes: 'Main banking module with model lifecycle and governance paths.' },
  { id: 'cfa-certifications', label: 'CFA & Certifications Visual Studio', route: 'professional-certifications', layer: 'primary', component: 'VisualModuleStudio', status: 'active', notes: 'CFA-first visual learning studio.' },
  { id: 'knowledge-map', label: 'Knowledge Map Visual Studio', route: 'knowledge-map', layer: 'primary', component: 'VisualKnowledgeMapStudio', status: 'active', notes: 'Connected map of concepts, outputs, decisions and relationships.' },
  { id: 'output-atlas', label: 'Output Atlas Reference Studio', route: 'output-atlas', layer: 'deep-reference', component: 'VisualReferenceStudio', status: 'active', notes: 'Visual interpretation layer for outputs.' },
  { id: 'formula-library', label: 'Formula Library Reference Studio', route: 'formula-library', layer: 'deep-reference', component: 'VisualReferenceStudio', status: 'active', notes: 'Formulas as decision tools.' },
  { id: 'model-library', label: 'Model Library Reference Studio', route: 'model-library', layer: 'deep-reference', component: 'VisualReferenceStudio', status: 'active', notes: 'Models with inputs, outputs, signals and applications.' },
  { id: 'business-cases', label: 'Business Case Reference Studio', route: 'business-cases', layer: 'deep-reference', component: 'VisualReferenceStudio', status: 'active', notes: 'Cases connected to workflow, governance and decision impact.' },
  { id: 'abt-blueprint', label: 'ABT Design Blueprint Governance Studio', route: 'abt-blueprint', layer: 'governance', component: 'ABTGovernanceVisual', status: 'active', notes: 'Compact governance visual wrapper active.' },
  { id: 'model-ready-feature-set', label: 'Model-Ready Feature Set Governance Studio', route: 'model-ready-feature-set', layer: 'governance', component: 'VisualGovernanceStudio', status: 'active', notes: 'Feature groups as governance capsules.' },
  { id: 'model-card-monitoring', label: 'Model Card & Monitoring Handoff Governance Studio', route: 'model-card-monitoring-handoff', layer: 'governance', component: 'ModelHandoffVisual', status: 'active', notes: 'Compact governance visual wrapper active.' },
  { id: 'portfolio-monitoring', label: 'Portfolio Monitoring Governance Studio', route: 'portfolio-monitoring-dashboard-blueprint', layer: 'governance', component: 'PortfolioMonitoringVisual', status: 'active', notes: 'Dashboard widgets as governance capsules.' },
  { id: 'alert-remediation', label: 'Alert Playbook & Remediation Governance Studio', route: 'alert-remediation-workflow', layer: 'governance', component: 'ActionWorkflowVisual', status: 'active', notes: 'Compact governance visual wrapper active.' },
  { id: 'credit-scoring-experiment', label: 'Credit Scoring Experiment Blueprint', route: 'credit-scoring-experiment-blueprint', layer: 'pending', component: 'CreditScoringExperimentBlueprintPage', status: 'blocked', notes: 'Conversion attempted again in Sprint 5.21 but connector controls blocked wrapper creation.' }
]
