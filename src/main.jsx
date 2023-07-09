import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './navBar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <App/>
  </React.StrictMode>,
)
