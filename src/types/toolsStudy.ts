export type ToolsStatus = 'Candidate' | 'Complement'
export type ToolsLevel = 'Foundation' | 'Applied' | 'Advanced'
export interface ToolsLesson { id:string; title:string; level:ToolsLevel; status:ToolsStatus; materials:string[]; objective:string; concepts:string[]; workflow:string[]; tools:string[]; outputs:string[]; interpretation:string[]; decisions:string[]; practice:string[]; connections:string[] }
export interface ToolsSummary { totalLessons:number; candidates:number; tools:number; outputs:number; practicePrompts:number }
