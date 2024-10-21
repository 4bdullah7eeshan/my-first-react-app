import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Clock from './top/how-to-deal-with-side-effects/Clock'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
  </StrictMode>,
)
