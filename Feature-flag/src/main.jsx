import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FeatureFlageGlobleState from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <FeatureFlageGlobleState>
     <App />
  </FeatureFlageGlobleState>
    
  
)
