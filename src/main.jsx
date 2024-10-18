import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FavoriteFood from './FavoriteFood'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoriteFood />
  </StrictMode>,
)
