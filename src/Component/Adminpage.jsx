import React from 'react'
import Navbar from './Navbar'
import ButtonSector from './ButtonSector'
import App from '../App'


const Adminpage = () => {
  return (
    <div>
      <Navbar />
      <h1>Generation Thailand<br />Home - Admin Sector</h1>
      <ButtonSector />
      
      <h2>Create User Here</h2>
      <form onSubmit={handleAddfromSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name" required="required"
        onChange={handleAddfromchange}
      />
      <input
        type="text"
        placeholder="Lastname"
        name="lastname" required="required"
        onChange={handleAddfromchange}
      />
      <input
        type="text"
        placeholder="Position"
        name="position" required="required"
        onChange={handleAddfromchange}
      />
      </form>
      <button type="submit">Save</button>
      <div className='Container'>
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Position</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((employee) => (
                <tr>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.position}</td>
                <td>{}</td>
            </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Adminpage