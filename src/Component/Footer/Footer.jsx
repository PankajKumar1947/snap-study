import React from 'react'
import { GoArrowDownRight } from "react-icons/go";
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='px-[5%] bg-gradient-to-b from-black to-gray-800  text-white'>
      <div className='pt-10 flex justify-between'>
        <h1 className='text-xl sm:text-3xl font-semibold '>Snap-Study</h1>
        <NavLink to={"/"}>
          <img src={logo} alt="snap-study" className=' rounded-md h-[40px] sm:h-[50px] cursor-pointer' />
        </NavLink>
      </div>

      <div className='flex justify-between mt-5 text-sm sm:text-base'>
        <div>
          <NavLink to={"/"}>Home</NavLink>
          <br />
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <div className='flex flex-col gap-2 '>
          <a href="fb">Facebook</a>
          <a href="fb">LinkedIn</a>
          <a href="fb">Twitter</a>
        </div>

        <div className='flex flex-col '>
          <p>Addresss</p>
          <p>Address Code</p>
        </div>
        <div></div>
        <div></div>

      </div>

      <br />
      <br /><br />
      <div className='text-2xl md:text-6xl flex gap-2 items-center' >
        <a href='https://snapstudy-makaut.vercel.app/' className='hover:text-gray-400'>snapstudy-makaut</a>
        <div className='text-4xl md:text-8xl'>
          <GoArrowDownRight/>
        </div>    
      </div>

      <hr />
      <p className='my-3 text-xs sm:text-lg'>​© 2024 by Snap-Study. Created by <a className='text-red-600' href="https://github.com/PankajKumar1947">Pankaj Kumar</a> .</p>
      <hr />
    </div>
  )
}

export default Footer