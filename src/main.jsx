import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CustomInput from './top/more-on-state/CustomInput'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomInput />
  </StrictMode>,
)
