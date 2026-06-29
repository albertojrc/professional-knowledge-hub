export type LCFieldStatus = 'Candidate group' | 'Pending sheet refs' | 'Ready for review'
export interface LCFieldGroup { id:string; title:string; status:LCFieldStatus; group:string; purpose:string; fieldCandidates:string[]; evidenceNeed:string[]; dataQualityChecks:string[]; leakageRisks:string[]; featureUse:string[]; targetLessons:string[]; nextAction:string }
export interface LCFieldMapSummary { total:number; candidate:number; pendingRefs:number; ready:number }
