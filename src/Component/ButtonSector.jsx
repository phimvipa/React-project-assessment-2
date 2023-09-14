import React from 'react'
import { Link } from 'react-router-dom'
import Adminpage from './Adminpage'
import Userpage from './Userpage'

const ButtonSector = () => {
  return (
    <div>
      <Link to={"/Userpage"}><button>User Home Sector</button></Link>
      <Link to={"/Adminpage"}><button>Admin Home Sector</button></Link>
    </div>
  )
}

export default ButtonSector