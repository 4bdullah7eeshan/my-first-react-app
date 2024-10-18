import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './react.dev/javascript-in-jsx-with-curly-braces/ToDoList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
)
