import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";

const ProductCard = ({elem}) => {
  return (
    <div className='h-[170px] sm:h-[200px] border-[1px] rounded-3xl p-5  cursor-pointer backdrop-blur-lg bg-white/10 hover:bg-black/10 duration-300 group relative'>
        <div className='text-xl font-bold text-yellow-200  group-hover:ml-2 duration-300'>
            <h1 className=''>{elem.title}</h1>     
        </div>
        
        <p className='text-gray-300'>
            {
                elem.desc
            }
        </p>
        <div className='group-hover:right-4 group-hover:text-indigo-400 duration-300 absolute bottom-4 right-8 text-2xl'>
            <FiArrowRightCircle/>
        </div>
    </div>
  )
}

export default ProductCard