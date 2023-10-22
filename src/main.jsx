import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Introduction/FirstCode.css'
import './Exercise - 01/ex1.css'
//import { Render } from './Introduction/FirstCode'
// import { Render } from './Exercise - 01/ex1'
// import { Render } from './Solo Exercise/solo'
import { Render } from './Exercise - 02/airbnb'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Render />
  </React.StrictMode>,
)