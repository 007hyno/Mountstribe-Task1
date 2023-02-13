import React from 'react'
import NavCom from '../components/NavCom.js'
import Footer from '../components/Footer.js'
import '../assets/css/mainlayout.css'

function MainLayout({children}) {
  return (
    <div className="mainLayout">
        <NavCom/>
        <div className='first' >{children}</div>
        <Footer/> 
    </div>
  )
}

export default MainLayout