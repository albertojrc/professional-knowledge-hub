export type ABTStatus = 'Blueprint' | 'Pending refs' | 'Review ready'
export interface ABTBlueprintBlock { id:string; title:string; status:ABTStatus; block:string; purpose:string; designRules:string[]; inputs:string[]; outputs:string[]; checks:string[]; risks:string[]; linkedFieldGroups:string[]; targetLessons:string[]; nextAction:string }
export interface ABTBlueprintSummary { total:number; blueprint:number; pendingRefs:number; reviewReady:number }
