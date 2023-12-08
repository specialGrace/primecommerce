import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout(props) {
  return (
      <div className="flex flex-col min-h-screen" >
          <Navbar />

          <div >
              {props.children}
          </div>
          <Footer/>
      </div>
  )
}

export default Layout

