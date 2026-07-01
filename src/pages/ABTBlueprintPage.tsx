import { ABTGovernanceVisual } from '../components/governance/ABTGovernanceVisual'
interface Props { focusId?: string | null }
export function ABTBlueprintPage({ focusId }: Props) { return <ABTGovernanceVisual focusId={focusId} /> }
