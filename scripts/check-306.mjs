import{existsSync,readFileSync}from'node:fs'
const files=['src/types/dataScienceAnalyticsStudy.ts','src/data/dataScienceAnalyticsStudy.ts','src/pages/DataScienceAnalyticsStudyPage.tsx','src/data/dataScienceAnalyticsSearch.ts','src/styles/dataScienceAnalyticsStudyOS.css','docs/SPRINT_3_6_DATA_SCIENCE_ANALYTICS_STUDY.md']
const signals=[['src/types/knowledge.ts','data-science-analytics-study'],['src/app/App.tsx','DataScienceAnalyticsStudyPage'],['src/app/App.tsx',"activeView === 'data-science-analytics-study'"],['src/components/layout/Sidebar.tsx','Data Science & Analytics Study'],['src/components/layout/Sidebar.tsx','PKOS v3.6'],['src/data/searchIndex.ts','data-science-analytics-study'],['src/data/studyModuleHub.ts','data-science-analytics-study'],['src/main.tsx','dataScienceAnalyticsStudyOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 3.6 check passed.')
