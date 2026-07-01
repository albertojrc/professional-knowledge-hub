import { ControlledExperimentVisual } from '../components/governance/ControlledExperimentVisual'
interface Props { focusId?: string | null }
export function CreditScoringExperimentBlueprintPage({ focusId }: Props) { return <ControlledExperimentVisual focusId={focusId} /> }
