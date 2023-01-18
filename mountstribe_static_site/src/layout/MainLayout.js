import React from 'react'
import NavCom from '../components/NavCom'
import Footer from '../components/Footer'
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