import React from 'react'
import { NavLink } from 'react-router'
import Logo from '/logo.png'
import { ShoppingCart } from 'lucide-react'

function Header() {
  return (
    <header>
        <div className="logo-container">
        <img src={Logo} alt="MyStore logo" />
        </div>
        <nav>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/products'}>products</NavLink>
            <a href="">about us</a>
            <a href="">contact</a>
            <NavLink to={'/cart'}><ShoppingCart /> </NavLink>
            <a href="">sign in</a>
        </nav>
    </header>
  )
}
 
export default Header