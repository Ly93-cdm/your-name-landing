import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1 className="text-3xl font-bold text-blue-500">Hello Tailwind!</h1>
  </StrictMode>,
)
