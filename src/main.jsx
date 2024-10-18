import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './top/keys-in-react/TodoList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)
