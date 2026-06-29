export type BloombergLayer = 'BMC' | 'BFF' | 'Terminal Workflow'
export type BloombergStatus = 'Professional complement' | 'Pending official review'
export type BloombergLevel = 'Foundation' | 'Applied' | 'Advanced'
export interface BloombergLesson { id:string; title:string; layer:BloombergLayer; level:BloombergLevel; status:BloombergStatus; materials:string[]; objective:string; concepts:string[]; workflow:string[]; functions:string[]; outputs:string[]; interpretation:string[]; practice:string[]; connectedModules:string[] }
export interface BloombergSummary { totalLessons:number; bmc:number; bff:number; workflows:number; outputs:number; practicePrompts:number }
