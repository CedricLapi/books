import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='d-flex justify-content-around align-items-center' >
        <h1>Bookly</h1>
        <div className="d-flex justify-content-around w-30">
        <Link to='/'>Home</Link> |&nbsp;
        <Link to="#">Create a Book</Link>
        </div>


    </nav>
  )
}

export default Nav;