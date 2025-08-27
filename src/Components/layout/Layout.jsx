import React from 'react'
import Navbar from '../navbar/Navbar' 
import Footer from '../footer/Footer'
import Home from '../home/Home'
import '../../css/Layout.css'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
  <>
  <Navbar/>
  <div className="vh-90">
    <Outlet/>
  </div>
  <Footer/>
  </> 
  )
}
