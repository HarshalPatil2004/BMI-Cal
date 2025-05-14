import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UI from './UI.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  {/* <UI /> */}
  </StrictMode>,
)
