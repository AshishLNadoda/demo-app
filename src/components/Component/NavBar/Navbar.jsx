import React from 'react'
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar'>
      <h1>ASHISH SHOPS</h1>
      <div className="link">
        
        
        
        <Link to='/Product'>Product</Link>
        <Link to='/addToCart'>Cart</Link>
        

      </div>
    </div>
    
  )
}

export default NavBar