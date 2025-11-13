import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExcuseApp from "./ExcuseApp"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ExcuseApp />
  </StrictMode>,
)
