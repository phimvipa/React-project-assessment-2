import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
// React Router : npm i react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import page
import MyProfiles from './component/MyProfiles.jsx'
import Homepage from './component/Homepage.jsx'
import Adminpage from './component/Adminpage.jsx'
import Userpage from './component/Userpage.jsx'

const router = createBrowserRouter([  
  {
    path: '/',
    element:   
    <>
      <App />
    </>
  },
  {
    path: '/Myprofiles',
    element:   
    <>
      <MyProfiles />
    </> 
    
  },
  {
    path: '/Homepage',
    element:
    <>
      <Homepage />
    </>
  },
  {
    path: '/Adminpage',
    element:
    <>
      <Adminpage />
    </>
  },
  {
    path: '/Userpage',
    element:
    <>
      <Userpage />
    </>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> 
)