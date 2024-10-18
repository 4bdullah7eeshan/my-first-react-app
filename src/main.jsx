import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './top/introduction-to-state/App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
