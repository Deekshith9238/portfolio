import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
  </StrictMode>,
)
