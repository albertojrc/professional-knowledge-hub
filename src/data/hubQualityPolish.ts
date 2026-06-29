import type { HubQACheck, HubQASummary } from '../types/hubQuality'

export const hubQAChecks: HubQACheck[] = [
  {
    id:'study-first-navigation-check',
    title:'Study-first navigation priority',
    area:'Navigation',
    status:'Ready',
    score:94,
    whyItMatters:'The main user journey should start with study modules, not with backstage evidence pages.',
    checkedSignals:['Study Modules group appears first','Data, finance, economics, management, tools and banking modules are visible','Evidence pages remain grouped separately'],
    risks:['Too many legacy links can distract from the main study path','Sidebar may feel long on small screens'],
    polishActions:['Keep Study Modules as the first group','Keep Source/Evidence inside backstage group','Consider collapsing legacy modules later'],
    ownerLayer:'Navigation shell',
    linkedViews:['study-modules','data-science-analytics-study','finance-valuation-study','source-command-center']
  },
  {
    id:'practice-career-layer-check',
    title:'Practice and career layer ordering',
    area:'Career Layer',
    status:'Ready',
    score:92,
    whyItMatters:'Practice, capstones, portfolio, interview prep and role readiness should feel like a professional progression.',
    checkedSignals:['Practice Engine exists','Capstone Projects exists','Portfolio Builder exists','Interview Prep exists','Role Readiness exists'],
    risks:['Career pages may grow quickly and need clearer sequencing','Some role scores are initial professional estimates'],
    polishActions:['Keep order as Practice → Capstones → Portfolio → Interview → Role Readiness','Mark role readiness as directional until real portfolio artifacts are added'],
    ownerLayer:'Practice & Application',
    linkedViews:['practice-engine','capstone-projects','portfolio-builder','interview-prep','role-readiness']
  },
  {
    id:'global-search-coverage-check',
    title:'Global Search coverage',
    area:'Search',
    status:'Ready',
    score:91,
    whyItMatters:'Search must find lessons, outputs, formulas, cases, career assets and QA pages from one command layer.',
    checkedSignals:['Study lessons indexed','Certification lessons indexed','Practice drills indexed','Capstones indexed','Portfolio and career items indexed'],
    risks:['Search index is manually maintained','New future pages must be added deliberately'],
    polishActions:['Add every new content file to searchIndex','Add QA check scripts that look for search imports','Use consistent result kinds'],
    ownerLayer:'Global Search',
    linkedViews:['global-search','study-modules','capstone-projects','role-readiness']
  },
  {
    id:'reference-consistency-check',
    title:'Reference system consistency',
    area:'Reference System',
    status:'Ready',
    score:90,
    whyItMatters:'Formula Library, Model Library, Output Atlas and Business Cases should use similar interpretation logic.',
    checkedSignals:['Formula Library has professional use','Model Library has good/bad result logic','Output Atlas has red flags and decision impact','Business cases connect data, workflow, outputs and decision'],
    risks:['Reference pages may become dense','Some concepts are professional complements until academic review'],
    polishActions:['Keep interpretation sections consistent','Add cross-links to relevant capstones','Avoid unsupported source-backed claims'],
    ownerLayer:'Reference & Cases',
    linkedViews:['formula-library','model-library','output-atlas','business-cases']
  },
  {
    id:'evidence-backstage-check',
    title:'Evidence remains backstage',
    area:'Evidence QA',
    status:'Ready',
    score:93,
    whyItMatters:'Source governance should protect quality without becoming the main learning experience.',
    checkedSignals:['Evidence pages grouped under Evidence & QA','Academic review workspace remains available','Command center and review logs remain separate from study modules'],
    risks:['Users may still confuse evidence pages with study modules','Some content still needs academic validation'],
    polishActions:['Continue labeling candidate or complement content clearly','Use academic review before upgrading source-backed status','Keep source pages out of the main study journey'],
    ownerLayer:'Evidence & QA',
    linkedViews:['source-command-center','academic-review-workspace','source-review-execution','controlled-update-log']
  },
  {
    id:'route-render-check',
    title:'Route and render connection audit',
    area:'Build Hygiene',
    status:'Watch',
    score:84,
    whyItMatters:'Every sidebar view should have a ViewId, App render branch and optional search target.',
    checkedSignals:['ViewId updated for new career pages','App render branches added','Sidebar navigation entries added','Dedicated sprint checks added'],
    risks:['Manual route updates can miss one of the three required places','No local build confirmed in this environment'],
    polishActions:['Run npm run validate locally','Use check scripts after every sprint','If build fails, inspect exact TypeScript error before changing code'],
    ownerLayer:'App routing',
    linkedViews:['route-qa','global-search','quality-review']
  },
  {
    id:'qa-command-chain-check',
    title:'QA command chain',
    area:'Build Hygiene',
    status:'Watch',
    score:83,
    whyItMatters:'Every sprint should add a focused QA command and be included in validate.',
    checkedSignals:['qa:sprint48 exists','validate includes recent sprint commands','check scripts verify key files and route signals'],
    risks:['Validate chain is long and can be slow','Some older sprint checks are intentionally not included'],
    polishActions:['Keep one check script per sprint','Avoid breaking validate with redundant checks','Run npm run qa:sprint49 before npm run validate'],
    ownerLayer:'Package scripts',
    linkedViews:['route-qa','hub-qa-polish']
  },
  {
    id:'content-claim-discipline-check',
    title:'Content claim discipline',
    area:'Study UX',
    status:'Needs Review',
    score:76,
    whyItMatters:'The Hub should never imply that academic-source-backed content is approved before review.',
    checkedSignals:['Professional complements are separated from evidence review','Backstage review pages exist','Content is organized study-first'],
    risks:['Some professional content may still need stronger labeling','Academic review should continue as real course files are extracted'],
    polishActions:['Add clear status badges on future content expansions','Promote only reviewed material to source-backed status','Keep complements useful but honest'],
    ownerLayer:'Content governance',
    linkedViews:['study-modules','academic-review-workspace','source-governance-summary']
  }
]

export const hubQASummary: HubQASummary = {
  total: hubQAChecks.length,
  ready: hubQAChecks.filter((item)=>item.status==='Ready').length,
  watch: hubQAChecks.filter((item)=>item.status==='Watch').length,
  needsReview: hubQAChecks.filter((item)=>item.status==='Needs Review').length,
  avgScore: Math.round(hubQAChecks.reduce((sum,item)=>sum+item.score,0)/hubQAChecks.length)
}
