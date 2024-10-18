import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Animals from './top/rendering-techniques/Animals'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animals />
  </StrictMode>,
)
