import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FixHoldSite from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FixHoldSite />
  </React.StrictMode>,
)
