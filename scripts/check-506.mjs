import{existsSync,readFileSync}from'node:fs'
const files=['src/types/abtBlueprint.ts','src/data/abtBlueprint.ts','src/pages/ABTBlueprintPage.tsx','src/styles/abtBlueprintOS.css','docs/SPRINT_5_6_ABT_BLUEPRINT.md']
const signals=[['src/app/App.tsx','ABTBlueprintPage'],['src/app/App.tsx',"activeView === 'abt-blueprint'"],['src/components/layout/Sidebar.tsx','ABT Blueprint'],['src/components/layout/Sidebar.tsx','PKOS v5.6'],['src/styles/studyModuleHubOS.css','abtBlueprintOS.css'],['src/data/abtBlueprint.ts','Entity grain'],['src/data/abtBlueprint.ts','ABT schema'],['src/pages/ABTBlueprintPage.tsx','Sprint 5.6'],['src/pages/ABTBlueprintPage.tsx','Blueprint first']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.6 check passed.')
