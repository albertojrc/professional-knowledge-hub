export type BankingSafeUpdateStatus = 'Applied placeholder' | 'Pending refs' | 'Review link'
export interface BankingSafeUpdate { id:string; title:string; status:BankingSafeUpdateStatus; lessonId:string; updateType:string; displayText:string; evidenceNote:string; linkedReviewViews:string[]; nextAction:string }
export interface BankingSafeUpdateSummary { total:number; applied:number; pending:number; reviewLinks:number }
