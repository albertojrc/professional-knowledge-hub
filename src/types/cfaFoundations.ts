export type CfaLayer = 'Program Structure' | 'Ethics' | 'Quantitative Methods' | 'Economics' | 'Financial Statement Analysis' | 'Corporate Issuers'
export type CfaStatus = 'Public-source aligned' | 'Professional complement'
export type CfaLevel = 'Foundation' | 'Applied'
export interface CfaFoundationLesson { id:string; title:string; layer:CfaLayer; level:CfaLevel; status:CfaStatus; officialAnchor:string[]; objective:string; concepts:string[]; workflow:string[]; formulas:string[]; outputs:string[]; interpretation:string[]; practice:string[]; connectedModules:string[] }
export interface CfaFoundationsSummary { totalLessons:number; publicAligned:number; formulas:number; outputs:number; practicePrompts:number }
