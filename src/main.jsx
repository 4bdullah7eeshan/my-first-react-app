import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import List from './react.dev/rendering-lists/List'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
  </StrictMode>,
)
