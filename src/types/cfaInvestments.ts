export type CfaInvestmentLayer = 'Equity Investments' | 'Fixed Income' | 'Derivatives' | 'Alternative Investments' | 'Portfolio Management'
export type CfaInvestmentStatus = 'Public-source aligned' | 'Professional complement'
export type CfaInvestmentLevel = 'Foundation' | 'Applied'
export interface CfaInvestmentLesson { id:string; title:string; layer:CfaInvestmentLayer; level:CfaInvestmentLevel; status:CfaInvestmentStatus; officialAnchor:string[]; objective:string; concepts:string[]; workflow:string[]; formulas:string[]; outputs:string[]; interpretation:string[]; practice:string[]; connectedModules:string[] }
export interface CfaInvestmentsSummary { totalLessons:number; publicAligned:number; formulas:number; outputs:number; practicePrompts:number }
