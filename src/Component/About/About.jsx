import React from 'react'
import image1 from "../../Assets/aboutImage1.jpg"
import image2 from "../../Assets/aboutImage2.jpg"
import image3 from "../../Assets/aboutImage3.jpg"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center text-white bg-gray-900 pt-4'>
        <h1 className='text-4xl font-bold mt-5'>About Us</h1>
        <p className='font-thin text-xl mx-2 sm:w-[60%] text-center'>​This is the space to introduce the business and what it has to offer. Define the qualities and values that make it unique. </p>
        <NavLink to={"/about"}>
            <button className="px-3 py-2 sm:px-6 sm:py-3 rounded-full text-white bg-gray-700 hover:bg-gray-400 duration-200">Learn More</button>
        </NavLink>
        

        {/* images */}
        <div className='flex mx-3 gap-2 sm:gap-10 my-8'>
            <div className='sm:w-[220px] rounded-md overflow-hidden -mt-8'>
                <img src={image1} alt="" />
            </div>
            <div className='sm:w-[220px] rounded-md overflow-hidden'>
                <img src={image2} alt="" />
            </div>
            <div className='sm:w-[220px] rounded-md overflow-hidden -mt-8'>
                <img src={image3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About