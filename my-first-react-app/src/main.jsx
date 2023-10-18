import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TodoList from './TodoList.jsx'
import Animals from './Animals.jsx';
import PDBC from './PDBC.jsx'
import IAE from './IAE.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Animals App/>
    <PDBC />
    <IAE/>
  </React.StrictMode>,
)