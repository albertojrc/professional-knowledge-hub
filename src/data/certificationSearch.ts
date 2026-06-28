import { professionalCertificationTracks } from './professionalCertifications'

export const certificationSearchEntries = professionalCertificationTracks.map((item) => ({
  id: `search-${item.id}`,
  title: item.title,
  kind: 'Certification Track' as const,
  area: 'Professional Certifications',
  category: item.track,
  summary: item.purpose,
  tags: [item.status, item.studyOutcome, ...item.topicBlocks, ...item.connectedStudyModules, ...item.formulas, ...item.outputs, ...item.terminalWorkflows, ...item.practiceItems, item.sourceStatus],
  targetView: 'professional-certifications' as const
}))
