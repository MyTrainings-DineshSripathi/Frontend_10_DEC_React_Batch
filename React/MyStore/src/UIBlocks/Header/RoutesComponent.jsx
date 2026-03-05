import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../../App'
import Products from '../Products'
import Cart from '../Cart'

function RoutesComponent() {
  return (
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
  )
}

export default RoutesComponent