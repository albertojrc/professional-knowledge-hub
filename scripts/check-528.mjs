import{existsSync,readFileSync}from'node:fs'
const cfaIds=['cfa-ethics','cfa-quant-methods','cfa-economics','cfa-fsa','cfa-corporate-issuers','cfa-equity','cfa-fixed-income','cfa-derivatives','cfa-alternatives','cfa-portfolio-management']
const checks=[['src/data/knowledgeAssetsCfa.ts','cfaFoundationAssets'],['src/data/knowledgeAssetRegistry.ts','cfaFoundationAssets'],['src/data/moduleCurriculum.ts','CFA Level I Foundations'],['src/data/moduleCurriculum.ts','Bloomberg Market Concepts'],['src/data/moduleCurriculum.ts','Bloomberg Finance Fundamentals'],['src/data/moduleCurriculum.ts','Bloomberg Terminal Workflows']]
let bad=0
for(const [f,s]of checks){if(!existsSync(f)||!readFileSync(f,'utf8').includes(s)){console.error(f+' missing '+s);bad=1}}
for(const id of cfaIds){if(!readFileSync('src/data/knowledgeAssetsCfa.ts','utf8').includes(`id: '${id}'`)||!readFileSync('src/data/moduleCurriculum.ts','utf8').includes(id)){console.error('missing CFA id '+id);bad=1}}
if(bad)process.exit(1)
console.log('Sprint 5.28 CFA curriculum expansion check passed.')
