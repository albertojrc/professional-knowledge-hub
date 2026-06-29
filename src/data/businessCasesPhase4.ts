import type { BusinessCase } from '../types/knowledge'

export const phase4BusinessCases: BusinessCase[] = [
  {
    id:'dcf-valuation-case',
    title:'DCF Valuation Case',
    area:'Finance / Valuation',
    businessQuestion:'Is the company fairly valued under realistic growth, margin and discount-rate assumptions?',
    dataRequired:['historical revenue','margin history','capex','working capital','tax rate','WACC assumptions','terminal growth assumption'],
    workflow:['review historical performance','build forecast drivers','calculate free cash flow','estimate discount rate','calculate terminal value','run sensitivity table','write valuation conclusion'],
    tools:['Excel','Finance & Valuation Study','Formula Library','Output Atlas'],
    outputs:['DCF summary','DCF sensitivity table','investment memo'],
    decision:'Recommend buy, hold, reject or further review based on valuation range and assumption quality.',
    governance:'Document assumptions, scenario limits and sensitivity drivers before presenting the valuation.',
    relatedModules:['Finance & Valuation Study','Professional Certifications','Formula Library','Output Atlas']
  },
  {
    id:'market-brief-case',
    title:'Market Brief Case',
    area:'Economics / Markets',
    businessQuestion:'What moved in the market today, why did it move and what should the team watch next?',
    dataRequired:['equity index moves','yield changes','FX moves','commodity moves','economic calendar','market news'],
    workflow:['scan cross-asset moves','identify main catalyst','compare data against expectations','connect movement to rates and growth view','write market brief','define what to watch next'],
    tools:['Bloomberg-style workflow','Economics & Markets Study','Tools & Platforms Study'],
    outputs:['market brief output','macroeconomic dashboard','what-to-watch list'],
    decision:'Update the market view and identify whether any portfolio, valuation or business assumption needs review.',
    governance:'Separate observed market movement from interpretation and clearly state uncertainty.',
    relatedModules:['Economics & Markets Study','Professional Certifications','Tools & Platforms Study','Practice Engine']
  },
  {
    id:'portfolio-allocation-case',
    title:'Portfolio Allocation Case',
    area:'Portfolio Management',
    businessQuestion:'How should capital be allocated across assets given return goals, risk tolerance and diversification benefits?',
    dataRequired:['expected returns','volatility estimates','correlations','risk-free rate','investment constraints','benchmark allocation'],
    workflow:['define investor objective','estimate risk and return','review diversification','compare allocation scenarios','read risk-return chart','write allocation recommendation'],
    tools:['Excel','CFA portfolio content','Formula Library','Output Atlas'],
    outputs:['portfolio risk-return chart','allocation table','portfolio recommendation memo'],
    decision:'Recommend an allocation that balances expected return, risk and constraints.',
    governance:'Avoid recommending an allocation without documenting assumptions, risk limits and investor objective.',
    relatedModules:['Professional Certifications','Finance & Valuation Study','Formula Library','Output Atlas']
  },
  {
    id:'dashboard-interpretation-case',
    title:'Dashboard Interpretation Case',
    area:'Analytics / Management',
    businessQuestion:'Which metric movement requires action, and what decision should management take?',
    dataRequired:['KPI dashboard','metric definitions','time trend','segment filters','target values','business context'],
    workflow:['identify dashboard audience','review KPI definitions','compare actual vs target','segment the issue','interpret likely driver','recommend action','document follow-up'],
    tools:['Power BI','SQL','Tools & Platforms Study','Management & Strategy Study'],
    outputs:['KPI dashboard','dashboard interpretation guide','management action memo'],
    decision:'Prioritize the metric that has decision impact and recommend an owner, action and review cadence.',
    governance:'Confirm metric definitions and filter logic before escalating dashboard conclusions.',
    relatedModules:['Tools & Platforms Study','Management & Strategy Study','Data Science & Analytics Study','Output Atlas']
  },
  {
    id:'model-review-committee-case',
    title:'Model Review Committee Case',
    area:'Data Science / Model Governance',
    businessQuestion:'Is the model reliable enough for a pilot, or does it need improvement before business use?',
    dataRequired:['model performance metrics','calibration output','stability checks','feature importance','segment analysis','business use case'],
    workflow:['confirm intended decision','review performance outputs','check calibration and stability','review feature logic','identify limitations','write committee recommendation'],
    tools:['Python','Output Atlas','Model Library','Practice Engine'],
    outputs:['model validation report','model interpretation memo','pilot recommendation'],
    decision:'Approve pilot, request improvement, monitor with conditions or reject the model for the intended use.',
    governance:'Validation must state limits, monitoring requirements and whether the model is fit for the intended decision.',
    relatedModules:['Data Science & Analytics Study','Banking & Credit Risk Study','Output Atlas','Model Library']
  },
  {
    id:'strategy-execution-case',
    title:'Strategy Execution Case',
    area:'Management / Strategy',
    businessQuestion:'How should a strategic recommendation be turned into measurable execution?',
    dataRequired:['SWOT analysis','PESTEL scan','business model canvas','KPI tree','resource constraints','timeline'],
    workflow:['diagnose internal and external context','define strategic option','map business model impact','translate into KPIs','assign owners','create execution dashboard'],
    tools:['Management & Strategy Study','Tools & Platforms Study','Decision Playbooks'],
    outputs:['strategy memo','KPI tree','execution dashboard'],
    decision:'Select the strategic option with strongest logic, measurable KPIs and realistic execution path.',
    governance:'Avoid vague strategy recommendations; every action should have owner, metric and review cadence.',
    relatedModules:['Management & Strategy Study','Tools & Platforms Study','Practice Engine','Decision Playbooks']
  },
  {
    id:'data-quality-remediation-case',
    title:'Data Quality Remediation Case',
    area:'Data Science / Analytics',
    businessQuestion:'Can the dataset be trusted for analysis, or must quality issues be fixed first?',
    dataRequired:['data dictionary','missing values report','duplicate checks','valid range checks','join reconciliation','lineage notes'],
    workflow:['profile fields','check missingness','test duplicates','validate joins','rank issues by decision impact','write remediation plan'],
    tools:['SQL','Python','Data Science & Analytics Study','Output Atlas'],
    outputs:['data quality report','issue log','remediation plan'],
    decision:'Approve the dataset for analysis, approve with caveats or pause until critical issues are fixed.',
    governance:'Document unresolved data issues and prevent unsupported conclusions from low-quality data.',
    relatedModules:['Data Science & Analytics Study','Tools & Platforms Study','Output Atlas','Knowledge Library']
  }
]
