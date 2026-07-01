import { ActionWorkflowVisual } from '../components/governance/ActionWorkflowVisual'
interface Props { focusId?: string | null }
export function AlertRemediationWorkflowPage({ focusId }: Props) { return <ActionWorkflowVisual focusId={focusId} /> }
