import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import './styles/global.css'
import './styles/mlCharts.css'
import './styles/lightBlueTheme.css'
import './styles/knowledgeOS.css'
import './styles/searchOS.css'
import './styles/deepLinkOS.css'
import './styles/libraryFilterOS.css'
import './styles/progressOS.css'
import './styles/studyDashboardOS.css'
import './styles/studyPathsOS.css'
import './styles/pathActionsOS.css'
import './styles/learningSessionOS.css'
import './styles/materialInventoryOS.css'
import './styles/courseAreaMapOS.css'
import './styles/evidenceExpansionOS.css'
import './styles/sourceAwareOS.css'
import './styles/professionalGraphOS.css'
import './styles/sourceCoverageOS.css'
import './styles/sourcePrepOS.css'
import './styles/sourceExecutionOS.css'
import './styles/courseEvidenceOS.css'
import './styles/sourceIntakeOS.css'
import './styles/intakeCoverageOS.css'
import './styles/sourceDecisionOS.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
