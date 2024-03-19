import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../Assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gradient-to-b from-gray-800 to-gray-700 p-2 sm:p-4 border-b-[1px]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                  <img src={logo} alt="" className='w-[50x] h-[30px] rounded-full' />
                </div>
                <div className="hidden md:flex space-x-4 text-white">
                  <NavLink 
                  className={({ isActive }) => isActive ? "text-red-500 underline underline-offset-2" : "text-white hover:text-red-500"}
                  to={"/"} >
                    Home
                  </NavLink>
                  <NavLink 
                  className={({ isActive }) => isActive ? "text-red-500 underline underline-offset-2" : "text-white hover:text-red-500"}
                  to={"/about"} >
                    About
                  </NavLink>
                  <NavLink 
                  className={({ isActive }) => isActive ? "text-red-500 underline underline-offset-2" : "text-white hover:text-red-500"}
                  to={"/services"} >
                    Services
                  </NavLink>
                  <NavLink 
                  className={({ isActive }) => isActive ? "text-red-500 underline underline-offset-2" : "text-white hover:text-red-500"}
                  to={"/contact"} >
                    Contact
                  </NavLink>
                </div>
                <div className="md:hidden"> {/* Show on small screens */}
                <button className="text-white focus:outline-none">
                    <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                    </svg>
                </button>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar