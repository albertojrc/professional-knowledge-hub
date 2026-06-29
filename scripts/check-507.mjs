import{existsSync,readFileSync}from'node:fs'
const files=['src/types/abtSchemaTemplate.ts','src/data/abtSchemaTemplate.ts','src/pages/ABTSchemaTemplatePage.tsx','src/styles/abtSchemaTemplateOS.css','docs/SPRINT_5_7_ABT_SCHEMA_TEMPLATE.md']
const signals=[['src/app/App.tsx','ABTSchemaTemplatePage'],['src/app/App.tsx',"activeView === 'abt-schema-template'"],['src/components/layout/Sidebar.tsx','ABT Schema Template'],['src/components/layout/Sidebar.tsx','PKOS v5.7'],['src/styles/studyModuleHubOS.css','abtSchemaTemplateOS.css'],['src/data/abtSchemaTemplate.ts','abt_row_id'],['src/data/abtSchemaTemplate.ts','field_source_ref'],['src/pages/ABTSchemaTemplatePage.tsx','Sprint 5.7'],['src/pages/ABTSchemaTemplatePage.tsx','Schema Flow']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.7 check passed.')
