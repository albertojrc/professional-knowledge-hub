export type CreditPromotionStatus = 'Promote after refs' | 'Hold pending refs' | 'Keep as complement' | 'Reject for now'
export type CreditPromotionTarget = 'Banking Study' | 'Output Atlas' | 'Formula Library' | 'Interview Prep' | 'Portfolio Builder' | 'Practice Engine'
export interface CreditPromotionItem { id:string; title:string; status:CreditPromotionStatus; target:CreditPromotionTarget; sourceSection:string; sourceFile:string; evidenceNeed:string[]; proposedUpdate:string; reason:string; risk:string; ownerView:string; nextAction:string; linkedLessons:string[]; linkedArtifacts:string[] }
export interface CreditPromotionSummary { total:number; promoteAfterRefs:number; hold:number; complement:number; reject:number }
