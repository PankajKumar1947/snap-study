import React from 'react'
import Navbar from '../Component/Navbar'
import Products from '../Component/Product/Products'
import Team from '../Component/Team/Team'
import Footer from '../Component/Footer/Footer'
import AboutDetails from '../Component/About/AboutDetails'

const About = () => {
  return (
    <div>
        <Navbar/>
        <AboutDetails/>
        <Products/>
        {/* Products need to be modified */}
        <Team/>
        
        <Footer/>
    </div>
  )
}

export default About