export type AcademicUpgradeStatus = 'Ready to review' | 'Extraction needed' | 'Promotion candidate' | 'Blocked'
export type AcademicUpgradeArea = 'Banking Risk' | 'Data Science' | 'Graph Analytics' | 'Finance' | 'Management' | 'Dataset Evidence'
export interface AcademicUpgradeItem { id:string; title:string; area:AcademicUpgradeArea; status:AcademicUpgradeStatus; confidence:number; sourceFile:string; driveId:string; targetStudyModules:string[]; targetLessons:string[]; targetAssets:string[]; evidenceToExtract:string[]; currentLimitation:string; upgradeAction:string; reviewQuestions:string[]; sourceRule:string; nextStep:string }
export interface AcademicUpgradeSummary { total:number; ready:number; promotion:number; extraction:number; blocked:number; avgConfidence:number }
