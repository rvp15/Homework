import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
   <Link className='navtxt' to='/'><div >Home</div></Link>
    </div>
  )
}

export default Nav
