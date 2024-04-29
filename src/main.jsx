import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'rsuite/dist/rsuite.min.css';
import { CustomProvider } from 'rsuite';
import Login from './pages/login/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider theme="dark">
    <App />
    </CustomProvider>
  </React.StrictMode>,
)
