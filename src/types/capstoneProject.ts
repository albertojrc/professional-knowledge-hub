export type CapstoneArea = 'Banking Risk' | 'Finance Valuation' | 'Data Analytics' | 'Market Briefing' | 'Management Strategy' | 'CFA / Bloomberg'
export type CapstoneLevel = 'Intermediate' | 'Advanced' | 'Professional'
export interface CapstoneProject { id:string; title:string; area:CapstoneArea; level:CapstoneLevel; duration:string; professionalGoal:string; businessQuestion:string; requiredInputs:string[]; workflow:string[]; formulas:string[]; models:string[]; outputs:string[]; deliverables:string[]; evaluationCriteria:string[]; connectedModules:string[]; practiceLinks:string[]; portfolioUse:string }
export interface CapstoneSummary { total:number; professional:number; outputs:number; deliverables:number }
