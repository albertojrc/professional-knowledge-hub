export type ManagementStatus = 'Candidate' | 'Complement'
export type ManagementLevel = 'Foundation' | 'Applied' | 'Advanced'
export interface ManagementLesson { id:string; title:string; level:ManagementLevel; status:ManagementStatus; materials:string[]; objective:string; concepts:string[]; workflow:string[]; frameworks:string[]; outputs:string[]; interpretation:string[]; decisions:string[]; practice:string[]; connections:string[] }
export interface ManagementSummary { totalLessons:number; candidates:number; frameworks:number; outputs:number; practicePrompts:number }
