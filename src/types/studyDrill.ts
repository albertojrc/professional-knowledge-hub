export type DrillType = 'Quiz' | 'Flashcard' | 'Mini Case' | 'Interpretation Drill' | 'Decision Question' | 'CFA Practice' | 'Bloomberg Brief'
export type DrillLevel = 'Foundation' | 'Applied' | 'Advanced'
export type DrillArea = 'Data Science & Analytics' | 'Banking & Credit Risk' | 'Finance & Valuation' | 'Economics & Markets' | 'Management & Strategy' | 'Tools & Platforms' | 'Professional Certifications'
export interface StudyDrill { id:string; title:string; type:DrillType; area:DrillArea; level:DrillLevel; prompt:string; context:string; choices?:string[]; solution:string; explanation:string; connectedModules:string[]; outputs:string[]; tags:string[] }
export interface StudyDrillSummary { total:number; quizzes:number; cases:number; drills:number; decisions:number; certifications:number }
