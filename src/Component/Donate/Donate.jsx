import React from 'react'
import books from "../../Assets/snap-study.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Donate = () => {
  return (
    <div className='relative text-white bg-gradient-to-br from-indigo-900/40 via-gray-800 to-indigo-900 flex justify-center items-center w-full p-2 md:p-6 sm:py-6'>
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 "></div>

      <div className='sm:w-[50%] p-2 md:p-4 relative'>
        <h1 className='text-2xl sm:text-4xl sm:my-4'>​Become a member to our community by contributing</h1>
        <p className='w-[95%] sm:w-[80%] my-4 text-center font-light'>​Help us to reach to a variety of students and supply then with a diverse and large library.</p>
        <br />
        <br />
        <NavLink to={"/donate"}
          className="hover:bg-white hover:text-gray-700 bg-black text-white absolute right-[10%] sm:right-[20%] bottom-0 mt-5 px-3 py-2 sm:px-6 sm:py-3 rounded-full duration-200 flex gap-1 hover:gap-3 items-center">
          <h1>Donate Now</h1>
          <MdKeyboardDoubleArrowRight />
        </NavLink>
      </div>
      <div className='hidden md:w-[30%] sm:flex justify-center items-center '>
        <img src={books} alt="snapstudy makaut study material" className='w-[90%] rounded-2xl' />
      </div>
    </div>
  )
}

export default Donate