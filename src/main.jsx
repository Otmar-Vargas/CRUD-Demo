import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import './share/css/allPages.css';
import AppAllModules from './AppAllModules';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAllModules />
  </StrictMode>,
)
