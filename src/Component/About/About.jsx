import React from 'react'
import image1 from "../../Assets/aboutImage1.jpg"
import image2 from "../../Assets/aboutImage2.jpg"
import image3 from "../../Assets/aboutImage3.jpg"
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className='relative flex flex-col gap-3 sm:gap-5 items-center justify-center text-white bg-gradient-to-tr from-indigo-900/50 via-gray-800 to-indigo-900 py-8 sm:py-16 px-4 sm:px-6 lg:px-8'>
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
            
            <h1 className='text-3xl sm:text-5xl font-bold mt-5 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400'>About Us</h1>
            <p className='font-light sm:text-xl max-w-3xl text-center text-gray-300 mb-6'>
                Empowering Students Through Exam Preparation. We understand the stress and pressure students face leading up to exams. Finding relevant and organized study materials can be a time-consuming hassle. That's where SNAP-STUDY comes in!
            </p>
            <NavLink to="/about">
                <button className="px-6 py-3 text-sm sm:text-base rounded-full text-gray-900 bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Learn More
                </button>
            </NavLink>

            <div className='flex mx-3 gap-4 sm:gap-10 my-8'>
                <div className='sm:w-[220px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out'>
                    <img src={image1} alt="snapstudy about" className="w-full h-full object-cover" />
                </div>
                <div className='sm:w-[220px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out -mt-6 sm:mt-8'>
                    <img src={image2} alt="snapstudy about1" className="w-full h-full object-cover" />
                </div>
                <div className='sm:w-[220px] sm:h-[280px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out'>
                    <img src={image3} alt="snapstudy about2" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default About