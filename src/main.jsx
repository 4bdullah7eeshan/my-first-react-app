import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PackingList from './react.dev/conditional-rendering/PackingList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PackingList />
  </StrictMode>,
)
