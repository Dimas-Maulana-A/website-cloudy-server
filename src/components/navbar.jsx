import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "./../image/LogoNameWhite.png"

const Navbar = () => {
  return (
    <div className='container-navbar'>
      <div className="logo-navbar">
        <img src={Logo} alt="" />
      </div>
      <ul className="ul-navbar">
        <li className="li-navbar">
            <Link to="/">Home</Link>
        </li>
        <li className="li-navbar">
            <Link to="/about">About</Link>
        </li>
        <li className="li-navbar">
            <Link target="_blank" to="http://blog.cloudyserver.id">Blog</Link>
        </li>
        <li className="li-navbar">
            <Link target="_blank" to="http://store.cloudyserver.id">Store</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
