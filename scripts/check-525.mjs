import{existsSync,readFileSync}from'node:fs'
const checks=[['src/data/moduleCurriculum.ts','dataScienceCurriculum'],['src/data/moduleCurriculum.ts','bankingCurriculum'],['src/data/moduleCurriculum.ts','cfaCurriculum'],['src/components/learning/ModuleCurriculumStudio.tsx','Submodule navigation'],['src/pages/DataScienceAnalyticsStudyPage.tsx','ModuleCurriculumStudio'],['src/pages/BankingCreditRiskStudyPage.tsx','ModuleCurriculumStudio'],['src/pages/ProfessionalCertificationsPage.tsx','ModuleCurriculumStudio'],['src/pages/KnowledgeAssetDetailPage.tsx','KnowledgeAssetVisualOutput'],['src/pages/KnowledgeAssetDetailPage.tsx','return null']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.25 module curriculum check passed.')
