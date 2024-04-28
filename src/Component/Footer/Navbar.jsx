import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../Assets/logo.png"
import MobileNabar from './MobileNabar'


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

  const [nav,setNav]=useState(false);
  
  return (
    <div className=''>
      {nav ? <MobileNabar navMenu={navMenu} setNav={setNav}/>:
        <nav className="bg-black border-b-[1px] p-1">
        <div className="container mx-auto flex justify-between items-center">
            <NavLink to={"/"} className="">
              <img src={logo} alt="" className=' rounded-md h-[40px] sm:h-[50px] cursor-pointer' />
            </NavLink>
            <div className="hidden md:flex space-x-4 text-white items-center">
              {
                navMenu.map((menu,ind)=>{
                  return (
                    <NavLink 
                      className={({ isActive }) => isActive ? "bg-indigo-500 h-full px-5 py-1 rounded-full " : "text-white"}
                      to={menu.route}
                      key={ind}
                      >
                        {menu.name}
                      </NavLink>
                  )
                })
              }
            </div>
            <div className="md:hidden">
            <button 
            onClick={()=>setNav(true)}
            className="text-white focus:outline-none">
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
      }
    
    </div>
  )
}

export default Navbar