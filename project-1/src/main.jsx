import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Nagivation from "./components/navigation"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
