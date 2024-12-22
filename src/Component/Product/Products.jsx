import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const productData = [
        {
            route: "news",
            title: "Latest News",
            desc: "Get all the latest news related to Makaut university."
        },
        {
            route: "playlist",
            title: "Chapterwise Video Playlist",
            desc: "Don't worry here you will get all the video lecture of each chapter in one playlist."
        },
        {
            route: "organiser",
            title: "Get the latest Organiser",
            desc: "This section is for latest organisers, 1 stop solution for all organizer needs."
        },
        {
            route: "pyq",
            title: "Yearwise Subject PYQ",
            desc: "Boost your preparation with yearwise subject PYQ. Get it now!"
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white py-12 sm:py-24 px-4 sm:px-6 lg:px-8'>
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-800 rounded-full  filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className='relative z-10 mx-auto'>
                <div className='text-center mb-12'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>Main Highlights</h1>
                    <p className='text-lg sm:text-xl font-light mb-8 text-gray-300'>Hop on and explore our main features here!</p>
                    <button className="px-6 py-3 rounded-full text-gray-900 bg-indigo-400 hover:bg-indigo-300 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Read More
                    </button>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {productData.map((elem, ind) => (
                        <NavLink key={ind} to={`/choice/${elem.route}`} className="transform transition duration-300 hover:scale-105">
                            <div className="backdrop-filter backdrop-blur-lg bg-gray-800 bg-opacity-50 overflow-hidden shadow-xl">
                                <ProductCard elem={elem} />
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products