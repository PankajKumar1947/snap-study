import React from 'react'
import branch from "../../Assets/vision.jpg"

const Branch = ({elem}) => {
  return (
    <div>
      <div className={`w-[200px] h-[230px]  oveflow-hidden relative group cursor-pointer hover:opacity-80 `}>
        <img src={branch} alt="" className='h-[100%] w-[100%] rounded-2xl' />
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>
          <button className='bg-white text-black px-3 py-2 rounded-full group-hover:bg-black group-hover:text-white duration-200'>Select</button>
        </div>
        <p className='text-center text-xl font-bold mt-1' >{elem.name}</p>
      </div>
      
      
    </div>
    
  )
}

export default Branch