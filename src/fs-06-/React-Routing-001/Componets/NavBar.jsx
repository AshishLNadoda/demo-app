import React from 'react'
import '../CSS_files/Navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../Images/logo.png'
const NavBar = () => {
  return (
    <>
    <div className='Navbar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <NavLink to={'/home'}>
            <li>Home</li>
          </NavLink>
            <NavLink to={'/about'}>
            <li>About</li>
            </NavLink>
            <NavLink to={'/project'}>
            <li>Project</li>
            </NavLink>
            <NavLink to={'/'}>
            <li>Servies</li>
            </NavLink>
            <NavLink to={'/'}>
            <li>Blog</li>
            </NavLink>
            <NavLink to={'/contact'}>
            <li>Contact</li>
            </NavLink>
        </ul>
        <button>Enquire Now</button>
    </div>
    </>
  )
}

export default NavBar