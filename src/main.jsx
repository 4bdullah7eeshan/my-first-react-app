import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Svg from './Svg'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Svg />
  </StrictMode>,
)
