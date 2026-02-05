import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hooks from './Hooks.jsx'
import Event from './components/Event.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hooks />
    <Event />

    
  </StrictMode>,
)
