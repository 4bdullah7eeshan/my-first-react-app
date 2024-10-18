import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './react.dev/state-a-components-memory/challenge-01/Gallery'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
)
