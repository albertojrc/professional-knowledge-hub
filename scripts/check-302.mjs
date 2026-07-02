import{existsSync as e,readFileSync as r}from'node:fs'
const route='academic-'+'file-'+'registry'
const search='search-'+route
const f=['src/types/academicSource.ts','src/data/academicSourceRegistry.ts','src/pages/AcademicSourceRegistryPage.tsx','src/styles/academicSourceOS.css','docs/SPRINT_3_2_ACADEMIC_FILE_REGISTRY.md']
const s=[['src/app/App.tsx','AcademicSourceRegistryPage'],['src/app/App.tsx',route],['src/routes/routeRegistry.ts',route],['src/data/sourceGovernanceSearch.ts',search],['src/data/searchIndex.ts',route],['src/main.tsx','academicSourceOS.css']]
let b=0;for(const x of f){if(!e(x)){console.error(x);b=1}}for(const[x,y]of s){if(!e(x)||!r(x,'utf8').includes(y)){console.error(x+' '+y);b=1}}if(b)process.exit(1);console.log('Sprint 3.2 check passed.')
