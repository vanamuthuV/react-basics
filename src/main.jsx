import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Introduction/FirstCode.css'
import './Exercise - 01/ex1.css'
//import { Render } from './Introduction/FirstCode'
//import { Render } from './Exercise - 01/ex1'
//import { Render } from './Solo Exercise/solo'
//import { Render } from './Exercise - 02/airbnb'
import { Render } from './Exercise - 03/meme'
//import { Render } from './Exercise - 03/Conditional Rendering 1/in'
// import { Render } from './Exercise - 03/Conditional Rendering 2/Riddle'
// import { Render } from './Exercise - 03/Conditional Rendering 3/unread'
// import { Render } from './Exercise - 03/Forms/Forms'
// import { Render } from './Exercise - 03/SignUp/SignUp'
// import { Render } from './useEffect/count'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Render />
  </React.StrictMode>,
)