import{existsSync,readFileSync}from'node:fs'
const files=['src/pages/DashboardPage.tsx','src/styles/homeVisualDashboardOS.css','src/main.tsx']
const signals=[['src/pages/DashboardPage.tsx','home-visual-dashboard'],['src/pages/DashboardPage.tsx','Your professional second brain'],['src/pages/DashboardPage.tsx','moduleGateways'],['src/pages/DashboardPage.tsx','Data Science'],['src/pages/DashboardPage.tsx','Banking & Finance'],['src/pages/DashboardPage.tsx','CFA & Certifications'],['src/pages/DashboardPage.tsx','Knowledge Map'],['src/pages/DashboardPage.tsx','Backstage tools'],['src/pages/DashboardPage.tsx','CurrentPathPanel'],['src/styles/homeVisualDashboardOS.css','home-dashboard-hero'],['src/styles/homeVisualDashboardOS.css','home-module-grid'],['src/styles/homeVisualDashboardOS.css','home-output-preview'],['src/styles/homeVisualDashboardOS.css','home-backstage-grid'],['src/main.tsx','homeVisualDashboardOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.15 check passed.')
