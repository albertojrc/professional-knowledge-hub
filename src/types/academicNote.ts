export type AcademicNoteStatus = 'Pending' | 'First pass' | 'Needs refs' | 'Review ready'
export interface AcademicNote { id:string; title:string; domain:string; status:AcademicNoteStatus; file:string; fileId:string; role:string; summary:string; topics:string[]; formulas:string[]; models:string[]; outputs:string[]; cases:string[]; refs:string[]; recommendation:string; updates:string[]; checks:string[]; next:string }
export interface AcademicNoteSummary { total:number; pending:number; firstPass:number; needsRefs:number; reviewReady:number }
