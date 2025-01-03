import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import  { HeaderApp }  from './components/HeaderApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderApp />
  </StrictMode>,
)
