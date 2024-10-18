import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MovingDot from './react.dev/state-as-a-snapshot/MovingDot'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovingDot />
  </StrictMode>,
)
