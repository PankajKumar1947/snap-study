import React, { useEffect } from 'react'
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import Donate from "../Component/Donate/Donate";
import Faqs from "../Component/Faqs/Faqs";
import Hero from "../Component/Hero/Hero";
import Newsletter from "../Component/Newsletter/Newsletter";
import Products from "../Component/Product/Products";
import Team from "../Component/Team/Team";
import Contributor from '../Component/Team/Contributor';
import bg from '../Assets/bg/bg3.jpg'


const Home = () => {
  useEffect(()=>{
    window.scroll(0,0);
  },[])
  return (
    <div>
        <Hero/>
        <Products/>
        <About/>
        <Donate/>
        <Faqs/>
        <Contact/>
        <div 
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        className='grid sm:grid-cols-2 bg-gray-900'>
          <Team/>
          <Contributor/>
        </div>
      
        
        <Newsletter/>
    </div>
  )
}

export default Home