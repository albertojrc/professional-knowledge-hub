export type CareerRoleArea = 'Analytics' | 'Business' | 'Banking' | 'Finance' | 'Markets' | 'Strategy' | 'Certification'
export type ReadinessBand = 'Build Foundation' | 'Almost Ready' | 'Portfolio Ready' | 'Interview Ready'
export interface CareerRole { id:string; title:string; area:CareerRoleArea; readinessScore:number; readinessBand:ReadinessBand; roleSummary:string; coreSkills:string[]; proofAssets:string[]; capstones:string[]; portfolioItems:string[]; interviewPrompts:string[]; gaps:string[]; nextActions:string[]; studyModules:string[]; formulas:string[]; outputs:string[]; tools:string[]; resumeAngle:string }
export interface RoleReadinessSummary { total:number; interviewReady:number; portfolioReady:number; avgScore:number }
