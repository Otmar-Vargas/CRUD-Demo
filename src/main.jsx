import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import './share/css/allPages.css';
import AppAllModules from './AppAllModules';


import { Provider } from "react-redux";
import store from '../src/inversions/redux/store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <AppAllModules />
    </Provider>
  </StrictMode>,
)
