import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";

const ProductCard = ({elem}) => {
  return (
    <div className='h-[200px] border-[1px] rounded-lg p-5 bg-gray-700 cursor-pointer hover:bg-gray-900 duration-300 group relative'>
        <div className='text-xl font-bold  group-hover:text-red-500 group-hover:ml-2 duration-300'>
            <h1 className=''>{elem.title}</h1>
            
            
        </div>
        
        <p className='text-gray-300'>
            {
                elem.desc
            }
        </p>
        <div className='group-hover:right-4 duration-300 absolute bottom-4 right-8 text-2xl'>
            <FiArrowRightCircle/>
        </div>
    </div>
  )
}

export default ProductCard