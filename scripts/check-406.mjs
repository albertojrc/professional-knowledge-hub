import{existsSync,readFileSync}from'node:fs'
const files=['src/types/portfolioBuilder.ts','src/data/portfolioBuilder.ts','src/data/portfolioSearch.ts','src/pages/PortfolioBuilderPage.tsx','src/styles/portfolioBuilderOS.css','docs/SPRINT_4_6_PORTFOLIO_BUILDER.md']
const signals=[['src/types/knowledge.ts','portfolio-builder'],['src/app/App.tsx','PortfolioBuilderPage'],['src/app/App.tsx',"activeView === 'portfolio-builder'"],['src/components/layout/Sidebar.tsx','Portfolio Builder'],['src/components/layout/Sidebar.tsx','PKOS v4.6'],['src/data/searchIndex.ts','portfolioSearchEntries'],['src/data/searchIndex.ts','Portfolio Item'],['src/styles/studyModuleHubOS.css','portfolioBuilderOS.css'],['src/data/portfolioBuilder.ts','Finance Valuation Portfolio Project'],['src/data/portfolioBuilder.ts','CFA / Bloomberg Portfolio Project']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 4.6 check passed.')
