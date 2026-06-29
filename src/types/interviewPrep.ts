export type InterviewArea = 'Behavioral' | 'Data Analytics' | 'Banking Risk' | 'Finance Valuation' | 'Markets' | 'Strategy' | 'Certification'
export type InterviewFormat = 'STAR Answer' | 'Technical Question' | 'Case Question' | 'Project Defense' | 'Drill'
export type InterviewLevel = 'Foundation' | 'Analyst' | 'Professional'
export interface InterviewPrompt { id:string; title:string; area:InterviewArea; format:InterviewFormat; level:InterviewLevel; question:string; whyItMatters:string; answerFramework:string[]; sampleAnswer:string; followUps:string[]; linkedPortfolioItems:string[]; linkedCapstones:string[]; skillsTested:string[]; redFlags:string[] }
export interface InterviewPrepSummary { total:number; technical:number; projectDefense:number; star:number; caseQuestions:number }
