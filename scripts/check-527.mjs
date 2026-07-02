import{existsSync,readFileSync}from'node:fs'
const checks=[['src/components/learning/ModuleCurriculumStudio.tsx','CurriculumSequence'],['src/components/learning/ModuleCurriculumStudio.tsx','curriculum-submodule-card'],['src/components/learning/ModuleCurriculumStudio.tsx','curriculum-topic-card'],['src/components/learning/ModuleCurriculumStudio.tsx','Module → Submodule → Topic → Deep Detail View'],['src/styles/moduleCurriculumOS.css','curriculum-sequence'],['src/styles/moduleCurriculumOS.css','curriculum-topic-grid'],['src/styles/moduleCurriculumOS.css','curriculum-submodule-card.selected'],['src/main.tsx','moduleCurriculumOS.css']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.27 module detail UX polish check passed.')
