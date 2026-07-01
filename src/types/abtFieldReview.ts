export type ABTFieldReviewDecision = 'Accept candidate' | 'Hold for evidence' | 'Block from features' | 'Needs owner review'
export type ABTFieldReviewRisk = 'Low' | 'Medium' | 'High'
export interface ABTFieldReviewItem { id:string; fieldName:string; section:string; decision:ABTFieldReviewDecision; risk:ABTFieldReviewRisk; reviewQuestion:string; evidenceNeeded:string[]; qualityChecks:string[]; allowedUse:string; blockedUse:string; linkedSchemaColumn:string; linkedStudyUpdate:string; nextAction:string }
export interface ABTFieldReviewSummary { total:number; accept:number; hold:number; block:number; ownerReview:number; highRisk:number }
