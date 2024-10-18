import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DrinkList from './react.dev/conditional-rendering/DrinkList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DrinkList />
  </StrictMode>,
)
