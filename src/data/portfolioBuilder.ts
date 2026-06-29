import type { PortfolioBuilderSummary, PortfolioItem } from '../types/portfolioBuilder'

export const portfolioItems: PortfolioItem[] = [
  {
    id:'analytics-portfolio-item',
    title:'Data Analytics Portfolio Project',
    area:'Analytics',
    level:'Analyst Portfolio',
    capstoneId:'data-analytics-capstone',
    projectSummary:'End-to-end analytics project covering SQL extraction, data quality checks, dashboard interpretation and management action memo.',
    skills:['SQL joins and aggregation','data quality validation','metric definition','dashboard storytelling','business recommendation writing'],
    tools:['SQL','Power BI','Python notebook','Output Atlas','Practice Engine'],
    outputs:['SQL logic note','data validation checklist','KPI dashboard','management action memo'],
    evidence:['clear business question','documented grain and join logic','dashboard with decision narrative','specific recommendation and follow-up'],
    interviewTalkingPoints:['How I checked whether joins changed the row grain','How I translated dashboard movement into a business action','How I avoided overclaiming from weak data'],
    cvDescription:'Built an end-to-end analytics workflow using SQL, data validation and dashboard interpretation to convert operational metrics into a management action memo.',
    linkedinDescription:'Completed a data analytics capstone focused on SQL extraction, data quality validation, KPI dashboard interpretation and decision-ready business communication.',
    portfolioHeadline:'Analytics workflow from raw data to management decision.',
    nextUpgrade:['add before/after dashboard screenshots','include a one-page metric dictionary','add executive summary slide']
  },
  {
    id:'banking-portfolio-item',
    title:'Banking Risk Portfolio Project',
    area:'Banking',
    level:'Professional Portfolio',
    capstoneId:'banking-risk-capstone',
    projectSummary:'Risk analytics project connecting data readiness, probability scoring, validation outputs, score bands and decision policy.',
    skills:['risk data preparation','probability score interpretation','expected loss logic','validation output reading','policy recommendation'],
    tools:['Python','Model Library','Output Atlas','Formula Library','Banking & Credit Risk Study'],
    outputs:['ABT schema','validation summary','score band table','risk decision note'],
    evidence:['target and observation grain defined','model outputs interpreted in business terms','score bands linked to decision policy','limitations documented'],
    interviewTalkingPoints:['Why probability scores need calibration','How I used validation outputs to support a policy decision','How I balanced model performance with explainability'],
    cvDescription:'Developed a banking risk analytics capstone linking data quality, scoring models, validation outputs and score-band policy into a decision-ready risk memo.',
    linkedinDescription:'Completed a banking risk capstone focused on analytical base table design, score interpretation, validation outputs and policy-oriented recommendations.',
    portfolioHeadline:'Risk analytics workflow from scoring model to decision policy.',
    nextUpgrade:['add calibration and KS visuals','include model limitations section','add monitoring checklist']
  },
  {
    id:'finance-portfolio-item',
    title:'Finance Valuation Portfolio Project',
    area:'Finance',
    level:'Professional Portfolio',
    capstoneId:'finance-valuation-capstone',
    projectSummary:'Valuation project using financial statements, ratio analysis, free cash flow, WACC and DCF sensitivity interpretation.',
    skills:['financial statement interpretation','ratio analysis','cash flow forecasting','WACC reasoning','valuation sensitivity communication'],
    tools:['Excel','Formula Library','Finance & Valuation Study','Output Atlas','Business Case Library'],
    outputs:['financial ratio table','DCF summary','sensitivity interpretation','investment recommendation memo'],
    evidence:['assumptions documented','cash flow logic explained','valuation range interpreted','recommendation follows sensitivity analysis'],
    interviewTalkingPoints:['Why valuation should be presented as a range','How WACC and growth assumptions drive valuation','How I connected ratios to the investment recommendation'],
    cvDescription:'Built a valuation capstone using financial ratios, free cash flow forecasting, WACC and DCF sensitivity analysis to produce an investment recommendation memo.',
    linkedinDescription:'Completed a finance valuation capstone focused on financial statement analysis, DCF logic, scenario interpretation and investment communication.',
    portfolioHeadline:'Valuation workflow from financial statements to investment view.',
    nextUpgrade:['add sensitivity table screenshot','include assumptions appendix','compare DCF to market multiples']
  },
  {
    id:'market-portfolio-item',
    title:'Market Brief Portfolio Project',
    area:'Markets',
    level:'Analyst Portfolio',
    capstoneId:'market-brief-capstone',
    projectSummary:'Cross-asset market interpretation project explaining what moved, why it moved, why it matters and what to watch next.',
    skills:['macro indicator reading','cross-asset interpretation','market narrative writing','rates and FX context','watchlist design'],
    tools:['Economics & Markets Study','Bloomberg-style workflows','Output Atlas','Formula Library'],
    outputs:['macroeconomic dashboard','market brief output','watch-next list','decision impact paragraph'],
    evidence:['market moves summarized clearly','main driver identified','impact connected to rates and valuation','watchlist is actionable'],
    interviewTalkingPoints:['How I separated market movement from interpretation','How I connected central bank tone to yields and valuation','How I built a concise what-to-watch-next section'],
    cvDescription:'Produced a cross-asset market brief connecting macro indicators, yields, FX and equity moves into a concise decision-ready market note.',
    linkedinDescription:'Completed a market briefing capstone focused on economic releases, cross-asset interpretation and professional market communication.',
    portfolioHeadline:'Market brief from macro signals to decision watchlist.',
    nextUpgrade:['add one chart per asset class','include expectations vs actual table','add short audio-style briefing script']
  },
  {
    id:'strategy-portfolio-item',
    title:'Management Strategy Portfolio Project',
    area:'Strategy',
    level:'Analyst Portfolio',
    capstoneId:'management-strategy-capstone',
    projectSummary:'Strategy project translating SWOT, PESTEL and business model analysis into KPI execution plan and recommendation.',
    skills:['strategic diagnosis','framework application','KPI tree design','execution planning','management memo writing'],
    tools:['Management & Strategy Study','Tools & Platforms Study','Decision Playbooks','Business Case Library'],
    outputs:['SWOT canvas','PESTEL table','KPI tree','execution dashboard','strategy memo'],
    evidence:['frameworks connected to decision','KPIs are measurable','owners and cadence included','recommendation is realistic'],
    interviewTalkingPoints:['How I avoided using frameworks superficially','How I translated strategy into KPIs','How I designed execution follow-up'],
    cvDescription:'Created a strategy execution capstone using SWOT, PESTEL and KPI-tree design to convert strategic options into measurable execution actions.',
    linkedinDescription:'Completed a management strategy capstone focused on strategic diagnosis, KPI design and practical execution planning.',
    portfolioHeadline:'Strategy workflow from diagnosis to execution plan.',
    nextUpgrade:['add KPI dashboard mockup','include option scoring matrix','add implementation timeline']
  },
  {
    id:'certification-portfolio-item',
    title:'CFA / Bloomberg Portfolio Project',
    area:'Certification',
    level:'Professional Portfolio',
    capstoneId:'cfa-bloomberg-capstone',
    projectSummary:'Investment interpretation project combining CFA concepts, company fundamentals, fixed income context and Bloomberg-style market briefing.',
    skills:['investment view construction','fixed income interpretation','company fundamentals review','portfolio communication','market briefing'],
    tools:['Professional Certifications','Formula Library','Output Atlas','Finance & Valuation Study','Economics & Markets Study'],
    outputs:['investment view note','bond yield table','portfolio risk-return chart','market brief output'],
    evidence:['CFA concepts used correctly','fundamentals linked to investment view','market context supports recommendation','watchlist is decision-ready'],
    interviewTalkingPoints:['How I combined company fundamentals with macro context','How duration and yield affect fixed income interpretation','How I wrote a balanced investment view'],
    cvDescription:'Completed a CFA/Bloomberg-style capstone combining company fundamentals, fixed income interpretation and market briefing into an investment view note.',
    linkedinDescription:'Built a certification-oriented investment project connecting CFA concepts, market dashboards, bond analysis and Bloomberg-style communication.',
    portfolioHeadline:'Investment interpretation pack from CFA concepts to market brief.',
    nextUpgrade:['add company snapshot table','include bond comparison summary','add portfolio allocation recommendation']
  }
]

const unique = (items:string[]) => Array.from(new Set(items))
export const portfolioSummary: PortfolioBuilderSummary = {
  total: portfolioItems.length,
  skills: unique(portfolioItems.flatMap((item)=>item.skills)).length,
  outputs: unique(portfolioItems.flatMap((item)=>item.outputs)).length,
  tools: unique(portfolioItems.flatMap((item)=>item.tools)).length
}
