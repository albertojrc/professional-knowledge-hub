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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
