import { PortfolioMonitoringVisual } from '../components/governance/PortfolioMonitoringVisual'
interface Props { focusId?: string | null }
export function PortfolioMonitoringDashboardBlueprintPage({ focusId }: Props) { return <PortfolioMonitoringVisual focusId={focusId} /> }
