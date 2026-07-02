import{existsSync,readFileSync}from'node:fs'
const route='source-'+'command-center'
const files=['src/data/sourceGovernanceSearch.ts','docs/SPRINT_2_23_NAV_SEARCH.md']
const checks=[['src/app/App.tsx','SourceCommandCenterPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/data/searchIndex.ts','sourceGovernanceSearchEntries'],['src/data/searchIndex.ts','Governance Page'],['src/data/searchIndex.ts','controlled-update-log']]
let fail=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);fail=1}}
for(const [f,t]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(t)){console.error(`${f} missing ${t}`);fail=1}}
if(fail)process.exit(1)
console.log('Sprint 2.23 check passed.')
