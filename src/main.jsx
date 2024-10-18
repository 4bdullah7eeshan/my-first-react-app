import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bio from './Bio'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bio />
  </StrictMode>,
)
