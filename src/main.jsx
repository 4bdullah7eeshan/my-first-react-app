import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './react.dev/state-a-components-memory/challenge-02/Form'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
