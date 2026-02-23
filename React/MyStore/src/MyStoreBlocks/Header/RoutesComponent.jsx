import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../../App'

/* 
    in this component we will have the routes of our application.
*/

function RoutesComponent() {
  return (
    <Routes>
        <Route path="/" element={<App />}></Route>
    </Routes>
  )
}

export default RoutesComponent