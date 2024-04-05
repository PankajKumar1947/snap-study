import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../Assets/logo.png"


const Navbar = () => {
  const navMenu=[
    {
      name:"Home",
      route:"/"
    },
    {
      name:"Notice",
      route:"choice/news"
    },
    {
      name:"Organiser",
      route:"choice/organiser"
    },
    {
      name:"PYQ",
      route:"choice/pyq"
    },
    {
      name:"Lectures",
      route:"choice/playlist"
    }
  ]
  
  return (
    <div>
        <nav className="bg-gradient-to-b from-gray-800 to-gray-700 p-2 sm:p-4 border-b-[1px]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                  <img src={logo} alt="" className='w-[50x] h-[30px] rounded-full' />
                </div>
                <div className="hidden md:flex space-x-4 text-white items-center">
                  {
                    navMenu.map((menu)=>{
                      return (
                        <NavLink 
                          className={({ isActive }) => isActive ? "bg-indigo-500 h-full px-5 py-1 rounded-full " : "text-white"}
                          to={menu.route} >
                            {menu.name}
                          </NavLink>
                      )
                    })
                  }
                </div>
                <div className="md:hidden">
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