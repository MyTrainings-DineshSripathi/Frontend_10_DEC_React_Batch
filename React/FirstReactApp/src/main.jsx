import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Component1 from './Component1.jsx'
import App from './App.jsx'

/* 
  <></> -- this is called jsx fragment
*/

// component -- contains html code to render in html document.
// We always calls the component as a tag -- <Component></ComponentName>
/* 
  Rules : 
    - We have to follow function name creation rules.
    - We have to make the first character of the function to uppercase.
*/

createRoot(document.getElementById('root')).render(
  <>
    {/* <h1>Good Morning</h1> */}
    {/* <p>I hope your day will be great.</p> */}
    {/* here it replaces <Sample /> with the html code. */}
    {/* <Component1></Component1> */}
    <App></App>
  </>,
)
