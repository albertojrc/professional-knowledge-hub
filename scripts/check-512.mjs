import{existsSync,readFileSync}from'node:fs'
const files=['src/types/portfolioMonitoringDashboard.ts','src/data/portfolioMonitoringDashboard.ts','src/pages/PortfolioMonitoringDashboardBlueprintPage.tsx','src/styles/portfolioMonitoringDashboardOS.css','docs/SPRINT_5_12_PORTFOLIO_MONITORING_DASHBOARD_BLUEPRINT.md']
const signals=[['src/app/App.tsx','PortfolioMonitoringDashboardBlueprintPage'],['src/app/App.tsx',"activeView === 'portfolio-monitoring-dashboard-blueprint'"],['src/components/layout/Sidebar.tsx','Portfolio Monitoring Dashboard Blueprint'],['src/components/layout/Sidebar.tsx','PKOS v5.12'],['src/styles/studyModuleHubOS.css','portfolioMonitoringDashboardOS.css'],['src/data/portfolioMonitoringDashboard.ts','Population and feature drift dashboard'],['src/data/portfolioMonitoringDashboard.ts','Alert triage and action register'],['src/pages/PortfolioMonitoringDashboardBlueprintPage.tsx','Sprint 5.12'],['src/pages/PortfolioMonitoringDashboardBlueprintPage.tsx','Portfolio Monitoring Flow'],['src/data/professionalGraph.ts','path-portfolio-monitoring-dashboard'],['src/data/searchIndex.ts','portfolio-monitoring-dashboard-blueprint']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.12 check passed.')
