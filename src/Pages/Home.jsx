import React from 'react'
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";
import Donate from "../Component/Donate/Donate";
import Faqs from "../Component/Faqs/Faqs";
import Footer from "../Component/Footer/Footer";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Newsletter from "../Component/Newsletter/Newsletter";
import Products from "../Component/Product/Products";
import Contributor from "../Component/Team/Contributor";
import Team from "../Component/Team/Team";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Products/>
        <About/>
        <Donate/>
        <Faqs/>
        <Contact/>
        <Team/>
        <Contributor/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home