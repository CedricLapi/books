import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='justify-content-aroud' >
        <h1>Bookly</h1>
        <div className="d-flex justify-content-around w-30"></div>
        <Link to='/'>Home</Link>
        <Link to="#">Create a Book</Link>

    </nav>
  )
}

export default Nav;