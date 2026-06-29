export type PortfolioArea = 'Analytics' | 'Banking' | 'Finance' | 'Markets' | 'Strategy' | 'Certification'
export type PortfolioLevel = 'Entry Portfolio' | 'Analyst Portfolio' | 'Professional Portfolio'
export interface PortfolioItem { id:string; title:string; area:PortfolioArea; level:PortfolioLevel; capstoneId:string; projectSummary:string; skills:string[]; tools:string[]; outputs:string[]; evidence:string[]; interviewTalkingPoints:string[]; cvDescription:string; linkedinDescription:string; portfolioHeadline:string; nextUpgrade:string[] }
export interface PortfolioBuilderSummary { total:number; skills:number; outputs:number; tools:number }
