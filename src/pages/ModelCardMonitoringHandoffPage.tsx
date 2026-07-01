import { ModelHandoffVisual } from '../components/governance/ModelHandoffVisual'
interface Props { focusId?: string | null }
export function ModelCardMonitoringHandoffPage({ focusId }: Props) { return <ModelHandoffVisual focusId={focusId} /> }
