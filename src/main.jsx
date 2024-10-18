import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MonthList from './top/keys-in-react/MonthList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MonthList />
  </StrictMode>,
)
