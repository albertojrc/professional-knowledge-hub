import type { ProfessionalCertificationSummary, ProfessionalCertificationTrack } from '../types/professionalCertification'

export const professionalCertificationTracks: ProfessionalCertificationTrack[] = [
  {
    id: 'cert-cfa-core',
    title: 'CFA Foundations Track',
    track: 'CFA',
    status: 'Planned',
    purpose: 'Create a structured finance certification path that connects investment theory, ethics, valuation, markets and portfolio thinking.',
    studyOutcome: 'Explain investment concepts professionally and connect them to Finance, Economics, Banking and Formula Library modules.',
    topicBlocks: ['ethics', 'quantitative methods', 'economics', 'financial reporting', 'corporate issuers', 'equity', 'fixed income', 'derivatives', 'alternative investments', 'portfolio management'],
    connectedStudyModules: ['Finance & Valuation', 'Economics & Markets', 'Banking & Credit Risk', 'Formula Library'],
    formulas: ['time-value-of-money', 'discounted-cash-flow', 'bond-yield', 'portfolio-return', 'risk-return'],
    outputs: ['valuation summary', 'investment memo', 'portfolio view', 'market analysis note'],
    terminalWorkflows: ['market overview', 'security lookup', 'yield curve review'],
    practiceItems: ['concept cards', 'formula drills', 'mini investment cases', 'exam-style quizzes'],
    sourceStatus: 'Curriculum references pending review before source-backed status.',
    nextAction: 'Create a CFA curriculum review batch and map topics to existing Finance and Economics assets.'
  },
  {
    id: 'cert-bmc-core',
    title: 'Bloomberg Market Concepts - BMC Track',
    track: 'BMC',
    status: 'Planned',
    purpose: 'Build a market literacy track focused on macro, markets, indicators and Bloomberg-style interpretation.',
    studyOutcome: 'Read market context, connect indicators to decisions and practice Bloomberg-oriented workflows.',
    topicBlocks: ['economic indicators', 'currencies', 'fixed income', 'equities', 'market news interpretation'],
    connectedStudyModules: ['Economics & Markets', 'Finance & Valuation', 'Tools & Platforms'],
    formulas: ['growth-rate', 'real-rate', 'yield-spread', 'return'],
    outputs: ['market monitor', 'economic calendar interpretation', 'macro note', 'asset class dashboard'],
    terminalWorkflows: ['economic data lookup', 'market news scan', 'asset class overview'],
    practiceItems: ['market interpretation drills', 'indicator explanation', 'news-to-market-impact exercises'],
    sourceStatus: 'Bloomberg curriculum references pending review before source-backed status.',
    nextAction: 'Create BMC topic map and connect it to Economics & Markets and Tools & Platforms.'
  },
  {
    id: 'cert-bff-core',
    title: 'Bloomberg Finance Fundamentals - BFF Track',
    track: 'BFF',
    status: 'Planned',
    purpose: 'Create a finance fundamentals track focused on practical market and company analysis skills.',
    studyOutcome: 'Understand core finance concepts and connect them to valuation, banking and Bloomberg workflows.',
    topicBlocks: ['financial statements', 'company analysis', 'fixed income basics', 'equity basics', 'market mechanics'],
    connectedStudyModules: ['Finance & Valuation', 'Banking & Credit Risk', 'Tools & Platforms'],
    formulas: ['financial-ratios', 'free-cash-flow', 'current-ratio', 'return'],
    outputs: ['company snapshot', 'ratio table', 'security summary', 'finance fundamentals note'],
    terminalWorkflows: ['company lookup', 'financial statement review', 'security comparison'],
    practiceItems: ['company analysis checklist', 'ratio interpretation drills', 'Bloomberg workflow notes'],
    sourceStatus: 'Bloomberg curriculum references pending review before source-backed status.',
    nextAction: 'Create BFF review batch and connect it to Finance & Valuation.'
  },
  {
    id: 'cert-bloomberg-terminal',
    title: 'Bloomberg Terminal Workflows',
    track: 'Bloomberg Terminal',
    status: 'Planned',
    purpose: 'Separate practical terminal workflows from conceptual finance certification learning.',
    studyOutcome: 'Use Bloomberg-style workflows to research markets, companies, securities and macro context.',
    topicBlocks: ['navigation', 'market monitor', 'company analysis', 'security lookup', 'economic data', 'news workflow'],
    connectedStudyModules: ['Tools & Platforms', 'Finance & Valuation', 'Economics & Markets'],
    formulas: [],
    outputs: ['workflow checklist', 'screen interpretation', 'market brief', 'company research note'],
    terminalWorkflows: ['market overview', 'company profile', 'economic calendar', 'fixed income screen', 'equity screen'],
    practiceItems: ['workflow drills', 'terminal command notes', 'market brief exercises'],
    sourceStatus: 'Terminal workflow evidence pending; keep as professional practice layer for now.',
    nextAction: 'Add screenshots, command notes or official references if available.'
  }
]

export const professionalCertificationSummary: ProfessionalCertificationSummary = {
  total: professionalCertificationTracks.length,
  planned: professionalCertificationTracks.filter((track) => track.status === 'Planned').length,
  readyForReview: professionalCertificationTracks.filter((track) => track.status === 'Ready for curriculum review').length,
  bloombergTracks: professionalCertificationTracks.filter((track) => track.track === 'BMC' || track.track === 'BFF' || track.track === 'Bloomberg Terminal').length,
  cfaTracks: professionalCertificationTracks.filter((track) => track.track === 'CFA').length
}
