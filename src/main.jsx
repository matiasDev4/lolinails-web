import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import  { HeaderApp }  from './components/HeaderApp'
import  { FormApp }  from './components/FormApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderApp />
    <FormApp />
  </StrictMode>,
)
