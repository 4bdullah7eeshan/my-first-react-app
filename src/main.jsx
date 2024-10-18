import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RecipeList from './react.dev/rendering-lists/challenge-02/RecipeList'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecipeList />
  </StrictMode>,
)
