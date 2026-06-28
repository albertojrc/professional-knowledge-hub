export type EconomicsStatus = 'Candidate' | 'Complement'
export type EconomicsLevel = 'Foundation' | 'Applied' | 'Advanced'
export interface EconomicsLesson { id:string; title:string; level:EconomicsLevel; status:EconomicsStatus; materials:string[]; objective:string; concepts:string[]; workflow:string[]; formulas:string[]; outputs:string[]; interpretation:string[]; decisions:string[]; practice:string[]; connections:string[] }
export interface EconomicsSummary { totalLessons:number; candidates:number; formulas:number; outputs:number; practicePrompts:number }
