import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Person from './top/more-on-state/Person'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person />
  </StrictMode>,
)
