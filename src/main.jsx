import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Poem from './react.dev/rendering-lists/challenge-04/Poem'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Poem />
  </StrictMode>,
)
