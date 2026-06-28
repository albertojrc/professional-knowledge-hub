export type CourseEvidenceStatus = 'Extracted' | 'Insufficient' | 'Course file missing' | 'Pending file access'
export type CourseEvidenceDecision = 'Governance only' | 'Keep candidate' | 'Keep pending' | 'Ready to upgrade'

export interface CourseEvidenceRecord {
  id: string
  sourceName: string
  evidenceArea: string
  status: CourseEvidenceStatus
  decision: CourseEvidenceDecision
  extractedSignals: string[]
  missingSignals: string[]
  relatedObjects: string[]
  nextAction: string
}

export interface CourseEvidenceSummary {
  total: number
  extracted: number
  insufficient: number
  missingCourseFiles: number
  readyToUpgrade: number
}
