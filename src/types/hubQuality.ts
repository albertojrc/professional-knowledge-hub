export type HubQAArea = 'Navigation' | 'Search' | 'Study UX' | 'Evidence QA' | 'Career Layer' | 'Reference System' | 'Build Hygiene'
export type HubQAStatus = 'Ready' | 'Watch' | 'Needs Review'
export interface HubQACheck { id:string; title:string; area:HubQAArea; status:HubQAStatus; score:number; whyItMatters:string; checkedSignals:string[]; risks:string[]; polishActions:string[]; ownerLayer:string; linkedViews:string[] }
export interface HubQASummary { total:number; ready:number; watch:number; needsReview:number; avgScore:number }
