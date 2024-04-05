import React from 'react'
import image1 from "../../Assets/aboutImage1.jpg"
import image2 from "../../Assets/aboutImage2.jpg"
import image3 from "../../Assets/aboutImage3.jpg"
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center text-white bg-gradient-to-l from-gray-600 to-gray-800 py-4 sm:pb-10'>
        <h1 className='text-4xl font-bold mt-5'>About Us</h1>
        <p className='font-thin text-xl mx-2 sm:w-[60%] text-center'>​Empowering Students Through Exam Preparation. We understand the stress and pressure students face leading up to exams. Finding relevant and organized study materials can be a time-consuming hassle. That's where SNAP-STUDY comes in!</p>
        <NavLink to={"/about"}>
            <button className="px-3 py-2 sm:px-6 sm:py-3 rounded-full text-white bg-gray-900 hover:bg-gray-400 duration-200">Learn More</button>
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