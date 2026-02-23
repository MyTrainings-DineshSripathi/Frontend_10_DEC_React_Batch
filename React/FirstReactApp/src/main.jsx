import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Component1 from './Component1.jsx'
import App from './App.jsx'
import {BrowserRouter, Route, Router, Routes} from 'react-router'
import About from './About.jsx'
import Header from './Header.jsx'
import DetailedProductsView from './DetailedProductsView.jsx'

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
    {/* <App></App> */}
    <BrowserRouter>
      <Header></Header>
      <Routes>
        {/* Default path : http://localhost:5173/ --> render App component*/}
        <Route path='/' element={<App />}></Route>

        {/* about path : http://localhost:5173/about --> render About component*/}
        <Route path='/about' element={<About />}></Route>

        {/* using parameter to accept the dynamic data */}
        <Route path='/product/:productId' element={<DetailedProductsView />}></Route>
      </Routes>
    </BrowserRouter>
  </>,
)
