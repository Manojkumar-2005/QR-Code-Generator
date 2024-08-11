import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './QRCode.css'
import QRCode from './QRCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QRCode/>
  </StrictMode>,
)
