import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="main-header">
        <div className="brand">
            <span className="name">Dinesh Sripathi</span>
            <span className="role">Software Developer</span>
        </div>

        <nav className="nav">
            <a href="">about</a>
            <a href="">projects</a>
            <a href="">skills</a>
            <a href="">services</a>
            <a href="">experience</a>
            <a href="">education</a>
            <a href="">contact</a>
            <a href="" className="resume-btn">resume</a>
        </nav>
    </header>
  )
}

export default Header