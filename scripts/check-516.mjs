import{existsSync,readFileSync}from'node:fs'
const files=['src/pages/GlobalSearchPage.tsx','src/components/search/VisualSearchStudio.tsx','src/styles/visualSearchStudioOS.css','src/main.tsx']
const signals=[['src/pages/GlobalSearchPage.tsx','VisualSearchStudio'],['src/components/search/VisualSearchStudio.tsx','visual-search-page'],['src/components/search/VisualSearchStudio.tsx','globalSearchIndex'],['src/components/search/VisualSearchStudio.tsx','quickFilters'],['src/components/search/VisualSearchStudio.tsx','Selected Capsule'],['src/components/search/VisualSearchStudio.tsx','Open exact view'],['src/components/search/VisualSearchStudio.tsx','Route Context'],['src/components/search/VisualSearchStudio.tsx','Search signals'],['src/styles/visualSearchStudioOS.css','visual-search-hero'],['src/styles/visualSearchStudioOS.css','visual-search-stats'],['src/styles/visualSearchStudioOS.css','visual-search-quick-row'],['src/styles/visualSearchStudioOS.css','visual-search-side'],['src/main.tsx','visualSearchStudioOS.css']]
let bad=0
for(const f of files){if(!existsSync(f)){console.error('missing '+f);bad=1}}
for(const [f,s]of signals){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.16 check passed.')
