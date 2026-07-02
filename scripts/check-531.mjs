import{existsSync,readFileSync}from'node:fs'
const checks=[['src/routes/routeRegistry.ts','routeRegistry'],['src/routes/routeRegistry.ts','routeGroups'],['src/routes/routeRegistry.ts','governanceRouteItems'],['src/routes/routeRegistry.ts','getRouteNavItem'],['src/routes/routeRegistry.ts','curriculum'],['src/routes/routeRegistry.ts','reference'],['src/routes/routeRegistry.ts','source'],['src/routes/routeRegistry.ts','legacy'],['src/app/App.tsx','getRouteNavItem'],['src/app/App.tsx','useMemo<NavItem>(() => getRouteNavItem(activeView)']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
if(readFileSync('src/app/App.tsx','utf8').includes('const navCatalog: NavItem[]')){console.error('App still contains inline navCatalog');bad=1}
if(bad)process.exit(1)
console.log('Sprint 5.31 route registry check passed.')
