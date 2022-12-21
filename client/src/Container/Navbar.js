import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (   
  <nav>
  <div className="nav-wrapper">
    <Link to="/" className="brand-logo left">Shop</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/"></Link></li>
      <li><Link to="/categorie"></Link></li>
      <li><Link to="/subcategorie"></Link></li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar