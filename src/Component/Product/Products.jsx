import React from 'react'
import ProductCard from './ProductCard'
import { NavLink } from 'react-router-dom'

const Products = () => {
    const prouductData=[
        {
            route:"news",
            title:"Latest News",
            desc:"Get all the latest news related to Makaut university ."
        },
        {
            route:"playlist",
            title:"Chapterwise Playlist",
            desc:"Get all the top most lecture of Your Subject which will help you to boost your prepartion."
        },
       {
            route:"organiser",
            title:"Chapterwise Playlist",
            desc:"Get all the top most lecture of Your Subject which will help you to boost your prepartion."
        },
        {
            route:"pyq",
            title:"Chapterwise Playlist",
            desc:"Get all the top most lecture of Your Subject which will help you to boost your prepartion."
        },
    ]
  return (
    <div className='text-white flex flex-wrap justify-between items-center py-4 md:my-8  '>
        {/* left */}
        <div className='w-full md:w-[50%] sm:p-4 text-center'>
            <h1 className='text-2xl md:text-4xl text-center my-1 font-bold'>Our Products</h1>
            <p className='text-center p-2 sm:p-5 text-lg font-thin'> ​This is the space to introduce the Product section and showcase the types of products available. </p>
            <button className="hidden sm:block mx-auto px-3 py-2 sm:px-6 sm:py-3 rounded-full text-gray-800 bg-white hover:bg-gray-400 duration-200">Read More</button>
            
        </div>
        {/* right */}
        <div className='flex gap-4 mt-2 w-full items-center justify-center md:w-[50%] flex-wrap'>
            {
                prouductData.map((elem,ind)=>{
                    return (
                        <div key={ind}>
                            <NavLink to={`/choice/${elem.route}`}>
                                <ProductCard elem={elem}/>
                            </NavLink>
                            
                        </div>
                    )
                })
            }
        </div>
        <div className='flex justify-center items-center w-full mt-4 sm:hidden'>
            <button className="px-3 py-2 sm:px-6 sm:py-3 rounded-full text-gray-800 bg-white hover:bg-gray-400 duration-200">Read More</button>
        </div>      
    </div>
  )
}

export default Products