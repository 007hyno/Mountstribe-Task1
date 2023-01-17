import React from 'react'
import NavCom from '../components/NavCom'
import Footer from '../components/Footer'

function MainLayout({children}) {
  return (
    <div className="mainLayout">
        <NavCom/>
        <div className='test' >{children}</div>
        <Footer/> 
    </div>
  )
}

export default MainLayout