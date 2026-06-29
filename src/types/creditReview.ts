export type CreditReviewStatus = 'Candidate' | 'Needs refs' | 'Promotion review'
export interface CreditReviewSection { id:string; title:string; status:CreditReviewStatus; sourceFile:string; fileId:string; pageRefs:string[]; extractedPoint:string; evidenceLimit:string; targetLessons:string[]; targetArtifacts:string[]; promotionAction:string; qualityChecks:string[] }
export interface CreditReviewSummary { total:number; candidates:number; needsRefs:number; promotionReview:number }
