import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './react.dev/state-a-components-memory/Page'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
