import{existsSync,readFileSync}from'node:fs'
const route='data-'+'science-'+'analytics-'+'study'
const files=['src/types/dataScienceAnalyticsStudy.ts','src/data/dataScienceAnalyticsStudy.ts','src/pages/DataScienceAnalyticsStudyPage.tsx','src/data/dataScienceAnalyticsSearch.ts','src/styles/dataScienceAnalyticsStudyOS.css','docs/SPRINT_3_6_DATA_SCIENCE_ANALYTICS_STUDY.md']
const signals=[['src/app/App.tsx','DataScienceAnalyticsStudyPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/components/layout/Sidebar.tsx','Data Science'],['src/data/searchIndex.ts',route],['src/data/studyModuleHub.ts',route],['src/main.tsx','dataScienceAnalyticsStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.6 check passed.')
