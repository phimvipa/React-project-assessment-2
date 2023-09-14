import React from 'react'
import Navbar from './Navbar'
import ButtonSector from './ButtonSector'

const Userpage = () => {
  return (
    <div>
      <Navbar />
      <h1>Generation Thailand<br />Home - User Sector</h1>
      <ButtonSector />

      <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hey</td>
                <td>i just met u</td>
                <td>and this so crazy</td>
              </tr>
            </tbody>
      </table>

    </div>
  )
}

export default Userpage