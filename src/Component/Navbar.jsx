import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-2 sm:p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">Your Logo</div>
                <div className="hidden md:flex space-x-4">
                <a href="#1" className="text-white">Home</a>
                <a href="#2" className="text-white">About</a>
                <a href="#3" className="text-white">Services</a>
                <a href="#4" className="text-white">Contact</a>
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