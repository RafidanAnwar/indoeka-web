import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Impor CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Impor CSS kustom kita (setelah bootstrap)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)