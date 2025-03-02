import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/tailwind.css'
import './css/flowbite.css'
import './css/inputmain.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
