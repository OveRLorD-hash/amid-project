import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18next from 'i18next'
import "./Language/init.js"
import { THemeProvider } from './Context/ThemeContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <THemeProvider>
       <App />
    </THemeProvider>
  </StrictMode>,
)
