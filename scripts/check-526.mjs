import{existsSync,readFileSync}from'node:fs'
const checks=[['docs/UX_ARCHITECTURE_SPRINT_ROADMAP.md','Sprint 5.35'],['docs/SPRINT_5_26_UX_ARCHITECTURE_CLEANUP.md','Module → Submodule → Topic → Deep Detail View'],['src/components/learning/ModuleCurriculumStudio.tsx','ModuleHeader'],['src/components/learning/ModuleCurriculumStudio.tsx','SubmoduleNavigation'],['src/components/learning/ModuleCurriculumStudio.tsx','Ordered topics'],['src/components/layout/Sidebar.tsx','submodules, topics and detailed study views'],['scripts/check-ux-reorg.mjs','ModuleCurriculumStudio']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.26 UX architecture cleanup check passed.')
