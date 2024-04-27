import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { NavLink } from 'react-router-dom'
import bg from '../../Assets/bg/bg3.jpg'

const Products = () => {
    const prouductData=[
        {
            route:"news",
            title:"Latest News",
            desc:"Get all the latest news related to Makaut university ."
        },
        {
            route:"playlist",
            title:"Chapterwise Video  Playlist",
            desc:"Don't worry here you will get all the video lecture  of each chapter in one playlist."
        },
       {
            route:"organiser",
            title:"Get the latest Orgniser",
            desc:"This section is for latest organisers, 1 stop solution  for all organizer needs."
        },
        {
            route:"pyq",
            title:"Yearwise Subject PYQ",
            desc:"Boost your preparation with yearwise  subject PYQ. Get it now!"
        },
    ]

    useEffect(()=>{
        window.scroll(0,0);
    },[])
  return (
    <div 
    style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    className='text-white grid md:grid-cols-2 bg-gradient-to-r from-gray-600 to-gray-900 justify-between items-center py-4 px-2 sm:px-8 md:py-14  '>
        {/* left */}
        <div className='sm:p-4 text-center'>
            <h1 className='text-2xl md:text-4xl text-center my-1 font-bold'>Main highlights </h1>
            <p className='text-center p-2 sm:p-5 text-lg font-thin'> Hop on and explore our main features here!</p>
            <button className="hidden sm:block mx-auto px-3 py-2 sm:px-6 sm:py-3 rounded-full text-gray-800 bg-white hover:bg-gray-400 duration-200">Read More</button>
            
        </div>
        {/* right */}
        <div className='grid lg:grid-cols-2 mx-2 gap-4 mt-2 items-center justify-center flex-wrap'>
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