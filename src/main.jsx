import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FeedbackForm from './react.dev/state-as-a-snapshot/FeedbackForm'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedbackForm />
  </StrictMode>,
)
