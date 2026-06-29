export type ABTSchemaColumnStatus = 'Template' | 'Pending field refs' | 'Review required'
export type ABTSchemaSection = 'Keys' | 'Dates' | 'Target' | 'Features' | 'Excluded' | 'Quality' | 'Review'
export interface ABTSchemaColumn { id:string; name:string; section:ABTSchemaSection; status:ABTSchemaColumnStatus; purpose:string; exampleValues:string[]; sourceRule:string; qualityRule:string; linkedBlueprintBlock:string; nextAction:string }
export interface ABTSchemaSummary { total:number; template:number; pendingRefs:number; reviewRequired:number }
