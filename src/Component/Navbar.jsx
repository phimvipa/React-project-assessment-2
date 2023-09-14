import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
             <nav className='Navbar'>
                 <li className=''>
                     <Link to={"/Homepage"}>Home</Link>
                 </li>
                 <li>
                     <Link to={"/Myprofiles"}>Owner</Link>
                 </li>
            </nav>
     </>
    
  )
}

export default Navbar
